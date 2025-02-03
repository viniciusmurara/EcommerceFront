interface InputProps {
    text: string,
    type: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col w-full max-w-md">
            <label className="my-2 text-lg font-medium text-[#101f37]">{props.text}</label>
            <input
                type={props.type}
                className={`bg-gray-50 border border-gray-300 text-[#101f37] text-sm w-full p-2.5 transition-all duration-200 placeholder-gray-400 hover:shadow-md ${props.className}`}
                placeholder={`Insira ${props.text.toLowerCase()}`}
                onChange={props.onChange}
                name={props.name}
            />
        </div>
    );
}
