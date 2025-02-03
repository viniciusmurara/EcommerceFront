interface ButtonProps {
    text: string,
    onClick?: (e: any) => void,
    className?: string
}

export default function Button(props: ButtonProps) {

    return (
        <button 
            onClick={props.onClick} 
            className={`border-[3px] border-[#101f37] hover:bg-[#101f37] text-lg hover:text-white p-2 ${props.className}`}
        >
            {props.text}
        </button>
    )
}