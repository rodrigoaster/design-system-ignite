import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 w-full h-12 bg-grey-800  rounded focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
    children: ReactNode;
}


export function TextInputIcon({ children }: TextInputIconProps) {
    return (
    <Slot className='w-6 h-6 text-grey-400'>
        {children}
    </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon"


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none'
            {...props}
        />       
    )  
}

TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

