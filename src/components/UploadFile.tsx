import {Button} from "./tailframes/button.tsx";
import {useState} from "react";
import $api from "../axios";
import {Spinner} from "./tailframes/spinner.tsx";

const controller = new AbortController();
const UploadFile = ({setProcessingStarted}) => {
    const [fileIsLoaded, setFileIsLoaded] = useState(false);
    const [file, setFile] = useState();
    const [drag, setDrag] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
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
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0])
            setFileIsLoaded(true)
            console.log(e.dataTransfer.files[0])
        }
    }

    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    const upload = async (fileData) => {
        let formData = new FormData();
        formData.append('file', fileData)
        setIsLoading(true);
        $api.post('/meetings', formData, {
            signal: controller.signal,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                setProgress((progressEvent.loaded / progressEvent.total) * 100)
            },
        }).then(response => {
            console.log(response.data)
            setProcessingStarted(true);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
            setError(true)
        })
    }

    return (error
            ?
            <div className={'flex h-full'}>
                <div className={'m-auto'}>

                    <div
                        className={`lg:px-32 sm:px-16 px-6 py-8 rounded-lg border-zinc-400 flex ${drag ? 'border-2' : 'border-2 border-dashed'}`}>
                        <div className={'max-w-md text-center'}>
                            <div className={'px-2'}>
                                <div className={'px-24 mb-3'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"
                                         fill="none">
                                        <path
                                            d="M63.1748 63.7476C62.1044 60.5428 60.0464 57.7596 57.2964 55.796C54.5464 53.8328 51.2456 52.7904 47.8668 52.8184C44.488 52.8464 41.2048 53.9436 38.488 55.952C35.771 57.9608 33.7596 60.778 32.7422 64M84 48C84 67.8824 67.8824 84 48 84C28.1178 84 12 67.8824 12 48C12 28.1178 28.1178 12 48 12C67.8824 12 84 28.1178 84 48ZM40 38C40 41.3136 37.3137 44 34 44C30.6863 44 28 41.3136 28 38C28 34.6863 30.6863 32 34 32C37.3137 32 40 34.6863 40 38ZM68 38C68 41.3136 65.3136 44 62 44C58.6864 44 56 41.3136 56 38C56 34.6863 58.6864 32 62 32C65.3136 32 68 34.6863 68 38Z"
                                            stroke="#9CA3AF" stroke-width="6" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                </div>

                                <p style={{fontWeight: 500, fontSize: 20}}>
                                    <div>Название файла</div>
                                </p>
                            </div>
                            <div className={'mt-3 mb-8'}>
                                <p className={'text-gray-400'}>
                                    Произошла ошибка при загрузке файла
                                </p>
                            </div>

                            <Button
                                variant={"outlined"}
                                className={'text-white hover:bg-zinc-400 hover:border-zinc-400 active:bg-zinc-500 active:duration-75'}
                                onClick={() => {
                                    upload(file)
                                    setError(false)
                                }}
                            >
                                Попробовать снова
                            </Button>

                            <div className={'text-gray-400 underline cursor-pointer mt-5'} onClick={() => setError(false)}>
                                Выбрать другой файл
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            :
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
                        <div
                            className={`lg:px-20 sm:px-6 py-8 rounded-lg border-zinc-400 flex ${drag ? 'border-2' : 'border-2 border-dashed'}`}>
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
                                    <p hidden={isLoading} className={'text-gray-400'}>
                                        {fileIsLoaded
                                            ? <div>Подтвердите выбор или выберите другой файл</div>
                                            :
                                            <div>Конвертируйте любой аудиофайл (mp3, mp4, wav, aac, m4a, webm) или видео
                                                в текст</div>
                                        }
                                    </p>
                                    <p hidden={!isLoading} className={'text-gray-400'}>
                                        После загрузки начнется обработка файла
                                    </p>
                                </div>


                                <div hidden={!isLoading} className={'text-xs'}>
                                    <Spinner size={"xlarge"} className={'border-zinc-800'}/>
                                    <div>
                                        Файл загружается
                                    </div>
                                    <div>
                                        Загружено: {Math.floor(progress)}%
                                    </div>
                                    <div
                                        className={'text-gray-400 underline mt-5 text-sm cursor-pointer'}
                                        onClick={() => {
                                            controller.abort();
                                            setIsSuccess(false);
                                            setIsLoading(false);
                                        }}
                                    >
                                        Отменить загрузку
                                    </div>
                                </div>

                                <div hidden={isLoading}>
                                    {
                                        fileIsLoaded
                                            ? <div className={'px-10'}>
                                                <Button
                                                    className={'mb-5 w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500'}
                                                    onClick={() => upload(file)}>
                                                    Начать расшифровку
                                                </Button>
                                                <label>
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
    )
        ;
};

export default UploadFile;