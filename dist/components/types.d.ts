import { ReactNode } from 'react';
export declare type ThemeTypes = 'primary' | 'error' | 'success';
export interface TextFieldProps {
    name: string;
    type: string;
    value: string | number;
    className?: string;
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    noWrapper?: boolean;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
    error?: string | null;
}
export interface ToastProps {
    className?: string;
    message: string;
    type: ThemeTypes;
    handleClose?: (id: string | number) => void;
    id: string | number;
}
export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    theme?: ThemeTypes;
    onClick?: (e: React.MouseEvent) => void;
}
export interface ModalProps {
    show?: boolean;
    width?: number | string;
    onClose?: (e: React.MouseEvent) => void;
}
export interface SpinnerProps {
    color?: string;
    size?: number | string;
}
