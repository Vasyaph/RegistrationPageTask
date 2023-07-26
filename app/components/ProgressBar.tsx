'use client';

import clsx from 'clsx'
import React from 'react';

interface InputProps {
    label: number;
}

export const ProgressBar: React.FC<InputProps> = ({
                                                      label
                                                  }) => {
    return (
        <div className="
        mt-1
        block
        w-full
        rounded-md
        border-0
        text-gray-900
        ring-1
        ring-inset
        ring-gray-300
        text-xs
        text-center
        overflow-hidden
        relative
        h-2

        ">
            <div className="absolute w-1/3 border-gray-300 border-r-2 h-full"></div>
            <div className="absolute w-2/3 border-gray-300 border-r-2 h-full"></div>
            <div className={clsx(`
            transition-all duration-500 ease-in
            h-full
            bg-amber-300
            `
                ,label===-1 && 'w-full bg-red-900'
                ,label===0 && 'w-0 bg-gray-200'
                ,label===1 && 'w-1/3 bg-red-400'
                ,label===2 && 'w-2/3 bg-yellow-400'
                ,label===3 && 'w-full bg-green-400'
            )}>
            </div>



        </div>
    );
};