"use client"
import React from 'react';
import Button from '@/components/Button';
import FormSelect from '@/components/FormSelect';
import FormSection from '@/components/FormSection';

interface ComponentProps {
    users: any
    setUsers: any
}

const Index: React.FC<ComponentProps> = ({ users, setUsers }) => {

    const [formData, setFormData] = React.useState<any>({
        typeId: '',
        id: '',
        fullName: ''
    });     

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const onForgotSubmit = (e: any) => {
        e.preventDefault()
        setUsers([...users, formData ])
    }

    return (
        <form className="flex flex-col bg-auxiliar p-6 rounded-lg" onSubmit={onForgotSubmit}>
            <FormSelect 
                list={['CC', 'TI']} 
                id="typeId" 
                label="Tipo identificacíon" 
                onChange={handleInputChange} 
                value={formData.typeId} 
                className={{select: 'w-1/2'}} 
            />
            <FormSection  
                label="Identificación"
                type="text"
                id="id"
                placeholder="32092384"
                onChange={handleInputChange}
                value={formData.id}
            />
            <FormSection  
                label="Nombre Completo"
                type="text"
                id="fullName"
                placeholder="Nombre completo"
                onChange={handleInputChange}
                value={formData.fullName}
            />
            <Button type="submit" className="bg-secondary"onClick={() => {}}> Agregar Usuario </Button>
        </form>
    )
}

export default Index