type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant: ButtonVariant;
};

function Button({ children, href, variant = 'primary' }: ButtonProps) {
    return (
        <>
            <a href={href} className={`button button--${variant}`}>
                {children}
            </a>
        </>
    )
}

export default Button;