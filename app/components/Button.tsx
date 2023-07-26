import React from 'react';
import clsx from "clsx";

interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;

}

export const Button: React.FC<ButtonProps> = ({
                                                  onClick,
                                                  children,
                                                  disabled

                                              }) => {
    return (
        <button
            onClick={onClick}

            disabled={disabled}
            className={clsx(`
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600
        `,
                disabled && 'opacity-50 cursor-default',
            )}
        >
            {children}
        </button>
    );
};

