import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Button/Button',
    component: Button,
    args: {
       children: 'Send', 
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {

}

