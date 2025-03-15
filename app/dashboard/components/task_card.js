"use client"

import CircularProgressBar from "./process_bar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/dashboard/task/${task._id}`);
    };

    const getProgressBarColor = (status) => {
        switch (status) {
            case 'on-going':
                return '#5594f1';
            case 'completed':
                return '#52c1c5'; 
            case 'urgent':
                return '#f26e56'; 
            default:
                return '#ffc446'; 
        }
    };

    const progressBarColor = getProgressBarColor(task.status);

    return (
        <div onClick={handleClick} className="cursor-pointer bg-[#ffffff] hover:bg-[#e9e9eac7] sm:max-h-[30%] w-full max-w-full sm:w-[30%] p-5 border-2 flex flex-row justify-between border-black rounded-2xl shadow-[2px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex flex-col">
                <span className="font-bold text-xl">{task.title}</span>
                <span className="font-light mt-3">{task.description}</span>
                <div className="font-medium flex flex-row">
                    <Image src="/done.png" 
                    alt="tick" 
                    width={20} 
                    height={20}
                    style={{ objectFit: "contain" }}/>
                    <span className="ml-1">12 tasks</span>
                </div>
            </div>
            <CircularProgressBar percentage={75} color={progressBarColor} sqSize={60} strokeWidth={5} />
        </div>
    );
}