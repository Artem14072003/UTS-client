import {Link} from "react-router-dom";
import {Dispatch, ReactNode, SetStateAction, useCallback} from "react";
import {IPoppappVar} from "../../assets/type/type.ts";

interface IButton {
    children: ReactNode;
    setIsVisble?: Dispatch<SetStateAction<IPoppappVar>> | null;
    type?: 'reset' | 'submit' | 'button';
    className?: string;
    isPrimary?: boolean;
    onClick?: () => void | null | Dispatch<SetStateAction<boolean>>;
    name?: "popappStatement" | "popappNumber" | "popappSpareParts";
    target?: string;
    link?: string;
    message?: string;
    disabled?: boolean
}

const Button = ({
                    children,
                    target,
                    type,
                    setIsVisble,
                    disabled = false,
                    onClick,
                    name,
                    className = "",
                    message = "",
                    isPrimary = false,
                    link
                }: IButton) => {
    const toggleVisble = useCallback(() => setIsVisble && name ? setIsVisble(prev =>
        ({...prev, [name]: !prev[name], "message": message})) : null, [message])

    return (
        <>
            {
                link ? (
                    <Link target={target} className={`${isPrimary ? 'btn-primary' : 'btn'} ${className}`}
                          to={link}>{children}</Link>
                ) : (
                    <button
                        className={`btn ${className}`}
                        onClick={onClick ? onClick : () => toggleVisble()}
                        type={type ? type : "submit"}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                )
            }
        </>
    )

};

export default Button;