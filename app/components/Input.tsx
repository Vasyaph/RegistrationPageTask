'use client';


import React, {ChangeEvent, useState} from "react";
import {ProgressBar} from "@/app/components/ProgressBar";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    setCorrect: React.Dispatch<React.SetStateAction<boolean>>
}

export const Input: React.FC<InputProps> = ({
                                                label,
                                                id,
                                                type,
                                                setCorrect
                                            }) => {
    const [message, setMessage] = useState(0);

    const checkNull = (event: ChangeEvent<HTMLInputElement>) => {
        let str = event.target.value;
        setCorrect(str.length > 0)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let pass = (event.target.value);


        let passed = 0;
        var regex = new Array();
        //regex.push("[A-Z]");
        regex.push("[a-zA-Z]");
        regex.push("[0-9]");
        regex.push("[$@$!%*#?&]");


        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(pass)) {
                passed++;
            }
        }
        setCorrect(true)

        switch (passed) {
            case 0:
                setMessage(0)
                setCorrect(false)
                return
            case 1:
                setMessage(1)

                break
            case 2:
                setMessage(2)
                break
            case 3:
                setMessage(3)
                break
        }
        if (pass.length < 8) {
            setMessage(-1)
            setCorrect(false)
        }


    };

    return (
        <div>
            <label htmlFor={id}
                   className="
             block
             text-sm
             font-medium
             leading-6
             text-gray-900
             ">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    className={`
                    px-2
                    form-input
                    block 
                    w-full 
                    rounded-md 
                    border-0 
                    py-1.5 
                    text-gray-900 
                    shadow-sm 
                    ring-1 
                    ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-400 
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-sky-600 
                    sm:text-sm 
                    sm:leading-6
                    `}
                    onChange={type?.toLowerCase() === "password" ? handleChange : checkNull}
                />
                {

                }
                {type?.toLowerCase() === "password" && (
                    <ProgressBar label={message}/>
                )}
            </div>

        </div>
    );
};

