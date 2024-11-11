import {Button} from "./tailframes/button.tsx";
import {useState} from "react";

const LetsStart = () => {
    const [fileIsLoaded, setFileIsLoaded] = useState(false);
    const [file, setFile] = useState();
    const [drag, setDrag] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]){
            setFile(e.target.files[0]);
            setFileIsLoaded(true);
            console.log(e.target.files[0])
        }
    }

    const handleDrag = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const handleLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setDrag(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]){
            setFile(e.dataTransfer.files[0])
            setFileIsLoaded(true)
            console.log(e.dataTransfer.files[0])
        }
    }

    return (
        <div className={'flex h-full'}>
            <div className={'m-auto'}>
                <h1 className={'font-bold text-4xl mb-8 mx-auto max-w-72'}>
                    Давайте начнем
                </h1>
                <form
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleLeave}
                    onDrop={handleDrop}
                >
                    <div className={`lg:px-20 sm:px-6 py-8 rounded-lg border-zinc-400 flex ${drag ? 'border-2' : 'border-2 border-dashed'}`}>
                        <div className={'max-w-md text-center'}>
                            <div className={'px-2'}>
                                <img className={'mx-auto mb-3'} src={'./src/assets/page.svg'}/>
                                <p style={{fontWeight: 500, fontSize: 20}}>
                                    {fileIsLoaded
                                        ? <div>{file.name}</div>
                                        : <div>Загрузите либо перетащите аудио или видео файл</div>
                                    }
                                </p>
                            </div>
                            <div className={'mt-3 mb-8'}>
                                <p className={'text-gray-400'}>
                                    {fileIsLoaded
                                        ? <div>Подтвердите выбор или выберите другой файл</div>
                                        : <div>Конвертируйте любой аудиофайл (mp3, mp4, wav, aac, m4a, webm) или видео в текст</div>
                                    }
                                </p>
                            </div>

                            <div>
                                {
                                    fileIsLoaded
                                        ? <div className={'px-10'}>
                                            <Button className={'mb-5 w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500'}>
                                                Начать расшифровку
                                            </Button>
                                            <label >
                                                <span className={'text-gray-400 underline cursor-pointer'}>
                                                    Выбрать другой файл
                                                </span>
                                                <input type={'file'} hidden onChange={handleChange}/>
                                            </label>
                                        </div>
                                        : <div>
                                            <label>
                                                <span
                                                    style={{fontWeight: 600}}
                                                    className={'border-2 border-zinc-400 p-1 rounded-lg cursor-pointer py-2 px-10 hover:bg-zinc-400 active:bg-zinc-500 ease-in-out duration-150'}
                                                >
                                                    Выбрать с компьютера
                                                </span>
                                                <input type={'file'} onChange={handleChange} hidden/>
                                            </label>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LetsStart;