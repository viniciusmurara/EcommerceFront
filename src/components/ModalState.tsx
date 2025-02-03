'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Input from './Input';

interface ModalStateProps {
    children?: React.ReactNode,
    title: string,
    textButton: string,
    classNameButton?: string
}

export default function ModalState(props: ModalStateProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '',
        price: 0.0,
        image: null,
    })

    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files?.[0] : value,
        }));
    }

    async function handleSubmit() {
        // Converte a imagem para Base64 (pra colocar no JSON)
        let base64Image = '';
        if (formData.image) {
            const fileReader = new FileReader();
            base64Image = await new Promise<string>((resolve, reject) => {
                fileReader.onload = () => resolve(fileReader.result as string);
                fileReader.onerror = reject;
                formData.image ? fileReader.readAsDataURL(formData.image) : false;
            });
        }
        
        const payload = {
            name: formData.name,
            type: formData.type,
            description: formData.description,
            price: formData.price,
            image: base64Image,
        };
    
        try {
            const resp = await fetch('http://localhost:8081/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log("Payload enviado:", payload);
    
            if (!resp.ok) {
                throw new Error('Erro ao enviar o produto');
            }

            toggleModal();
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
        }
    }

    return (
        <>
            <Button text={props.textButton} className={props.classNameButton} onClick={toggleModal} />
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                title={props.title}
                className="w-4/5 md:w-3/5 lg:w-2/5 h-[650px] bg-white shadow-lg p-6"
            >
                <div className="flex flex-col items-center">
                    <Input text="Nome" type="text" name="name" onChange={handleInputChange} />
                    <Input text="Tipo" type="text" name="type" onChange={handleInputChange} />
                    <Input text="Descrição" type="text" name="description" onChange={handleInputChange} />
                    <Input text="Preço" type="text" name="price" onChange={handleInputChange} />
                    <Input text="Imagem" type="file" name="image" onChange={handleInputChange} />
                    <Button text="Enviar" className="w-32 mt-8" onClick={handleSubmit}/>
                </div>
            </Modal>
        </>
    );
}