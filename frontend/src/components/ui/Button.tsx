import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
}

const Button = ({
    children,
    variant = "primary",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`button button--${variant}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;