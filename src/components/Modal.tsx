interface ModalProps {
    isOpen?: boolean,
    onClose?: () => void,
    children?: React.ReactNode,
    title: string,
    className?: string,
}

export default function Modal(props: ModalProps) {
    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40" onClick={props.onClose} />

            {/* Modal Content */}
            <div className={`relative z-10 overflow-y-auto bg-white p-6 shadow-lg ${props.className}`}>
                <div className="mb-4 py-4 border-b border-gray-200 text-center">
                    <h2 className="text-2xl font-semibold text-[#101f37]">{props.title}</h2>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
