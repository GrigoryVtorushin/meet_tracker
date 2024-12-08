import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import {TimeIcon} from "../assets/time-icon.tsx";
import {CalendarIcon} from "../assets/calendar-icon.tsx"
import {UsersIcon} from "../assets/users-icon.tsx";
import Lottie from "lottie-react";
import timeAnimatedIcon from '../assets/time-animated-icon.json'
import {useState} from "react";
import {Button} from "./tailframes/button.tsx";
import {Link} from "react-router-dom";

const FileProcessing = ({className}) => {

    return (
        <div className={'w-full h-full flex'}>
            <div className={'m-auto max-w-md text-center'}>
                <div className={'flex justify-center mb-3 h-24 '} >
                    <Lottie className={'w-24'} animationData={timeAnimatedIcon}></Lottie>
                </div>

                <h2 className={'text-white text-xl mb-3'}>Идет обработка файла...</h2>
                <div className={'text-gray-400 mb-3'}>
                    Мы пришлем на Вашу почту письмо, как файл обработается.
                </div>
            </div>
        </div>
    );
};

export default FileProcessing;