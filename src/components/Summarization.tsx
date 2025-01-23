import {Input} from "./tailframes/input.tsx";
import {Button} from "./tailframes/button.tsx";
import {useState} from "react";
import {CloseIcon} from "../assets/close-icon.tsx";
import {useMeetings} from "../hooks/useMeetings.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
    createMeetingGeneralSummarization,
    createMeetingSpeakerSummarization
} from "../store/meetings/meetingsActionCreator.ts";

const Summarization = ({className, setShowSummarization, hidden}) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const dispatch = useAppDispatch();

    const [sentencesCount, setSentencesCount] = useState(0);

    const { currentMeeting } = useMeetings();

    return (
        <div hidden={hidden} className={className}>
            <div className={'flex '}>
                <CloseIcon className={'lg:hidden w-8 h-8 mr-4 transition duration-150 hover:stroke-zinc-400 cursor-pointer'} onClick={() => setShowSummarization(false)}/>
                <h1 className={'text-xl font-semibold sm:text-2xl mb-6'}>Сводка</h1>
            </div>

            <div className={'flex text-center cursor-pointer'}>
                <div
                    className={`w-1/2 p-2 transition duration-300 ${selectedTab === 1 ? 'border-b-2' : 'text-gray-500'}`}
                    onClick={() => setSelectedTab(1)}
                >
                    Общая
                </div>
                <div className={`w-1/2 p-2 transition duration-300 ${selectedTab === 2 ? 'border-b-2' : 'text-gray-500'}`} onClick={() => setSelectedTab(2)}>По спикерам</div>
            </div>
            {selectedTab === 1
                ?
                currentMeeting.general_summarization
                    ? <div className={'flex flex-col justify-between h-5/6 mt-6 overflow-y-auto'}>
                        {currentMeeting.general_summarization.result.text}
                    </div>
                    : <div className={'flex flex-col justify-between h-5/6'}>
                    <div>
                        <div className={'text-gray-500 text-sm mt-10 mb-4'}>
                            Введите количество предложений для создания краткой сводки расшифровки собрания.
                            Если ничего не укажете, то будет сформирована подробная сводка.
                        </div>
                        <Input
                            className={'text-black'}
                            placeholder={'Введите количество предложений.'}
                            type={"number"}
                            onChange={event => setSentencesCount(Number(event.target.value))}
                        />
                    </div>


                    <Button
                        className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 '}
                        onClick={() => dispatch(createMeetingGeneralSummarization(currentMeeting.id, sentencesCount))}
                    >
                        Создать сводку
                    </Button>


                </div>

                : currentMeeting.speaker_summarization.status === "DONE"
                    ?
                    <div className={'flex flex-col justify-between h-5/6'}>

                    </div>

                    :
                    <div className={'flex flex-col justify-between h-5/6'}>
                    <div className={'text-gray-500 text-sm mt-10'}>
                        Создание краткого резюме расшифровки с разбивкой по спикерам
                    </div>
                    <Button
                        className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 '}
                        onClick={() => dispatch(createMeetingSpeakerSummarization(currentMeeting.id))}
                    >
                        Создать суммаризацию
                    </Button>
                </div>
            }

        </div>
    );
};

export default Summarization;