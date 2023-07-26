'use client';
import React from 'react';

import {useCallback, useState} from "react";
import {Input} from "@/app/components/Input";
import {Button} from "@/app/components/Button";

export const AuthForm = () => {
    const [isCorrectLogin, setCorrectLogin] = useState(false);
    const [isCorrectPassword, setCorrectPassword] = useState(false);


    return (
        <div className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
        >
            <div className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
            ">

                <form
                    className="space-y-6"
                    //onSubmit={true}
                >
                    <Input
                        id={"name"}
                        label={"Enter your login"}
                        setCorrect={setCorrectLogin}
                    />
                    <Input
                        type="PassWord"
                        id={"password"}
                        label={"Password"}
                        setCorrect={setCorrectPassword}

                    />
                    <Button disabled={!(isCorrectLogin&&isCorrectPassword)}>
                        Registration
                    </Button>
                </form>


            </div>

        </div>
    );
};



