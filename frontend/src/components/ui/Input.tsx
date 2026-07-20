import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
    return <input className="input" {...props} />;
};

export default Input;