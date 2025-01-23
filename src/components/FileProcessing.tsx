
import Lottie from "lottie-react";
import timeAnimatedIcon from '../assets/time-animated-icon.json'

const FileProcessing = () => {

    return (
        <div className={'w-full h-full flex'}>
            <div className={'m-auto max-w-md text-center'}>
                <div className={'flex justify-center mb-3 h-24 '} >
                    <Lottie className={'w-24'} animationData={timeAnimatedIcon}></Lottie>
                </div>

                <h2 className={'text-white text-xl mb-3'}>Идет обработка файла...</h2>
                <div className={'text-gray-400 mb-3'}>

                </div>
            </div>
        </div>
    );
};

export default FileProcessing;