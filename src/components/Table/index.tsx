// Desafío 3: React

// Crea un componente de React que muestre una lista de nombres de usuarios. Los datos de los usuarios deben ser proporcionados 
// como un array de objetos dentro del propio componente. Implementa una funcionalidad para agregar nuevos usuarios a la lista.

"use client"
import React from 'react';
import Form from '@/containers/Form'

const Index = () => {
    const [users, setUsers] = React.useState<any>([
        { typeId: 'CC', id: 253, fullName: 'Alex Johnson', isActive: true },
        { typeId: 'TI', id: 674, fullName: 'Emily Doe', isActive: false },
        { typeId: 'CC', id: 128, fullName: 'Chris Williams', isActive: true },
        { typeId: 'TI', id: 907, fullName: 'Jane Brown', isActive: true },
        { typeId: 'CC', id: 482, fullName: 'John Smith', isActive: false }
    ]);

    return (
        <>
            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 text-left text-gray-600">Type ID</th>
                            <th className="py-2 px-4 text-left text-gray-600">ID</th>
                            <th className="py-2 px-4 text-left text-gray-600">Full Name</th>
                            <th className="py-2 px-4 text-left text-gray-600">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any, index: any) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="py-2 px-4 text-gray-700">{user.typeId}</td>
                                <td className="py-2 px-4 text-gray-700">{user.id}</td>
                                <td className="py-2 px-4 text-gray-700">{user.fullName}</td>
                                <td className="py-2 px-4 text-gray-700">{user.isActive ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Form setUsers={setUsers} users={users} />
        </>
    );
};

export default Index;
