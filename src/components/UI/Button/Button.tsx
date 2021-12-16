import React from 'react';
import cx from 'classnames';
import classes from './Button.module.scss';

interface IButton {
    children?: React.ReactNode | string | undefined,
    className?: string | undefined,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean,
    props?: any
}

const Button = ({children, className = 'default', onClick, disabled, ...props}: IButton) => {

    return (
        <button
            {...props}
            type="button"
            onClick={!disabled ? onClick : () => {
            }}
            className={cx(classes[className], classes.btn)}
        >
            {children || 'button'}
        </button>
    );
};

export default Button;
