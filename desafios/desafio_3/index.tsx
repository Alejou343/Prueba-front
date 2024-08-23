// Desafío 3: React

// Crea un componente de React que muestre una lista de nombres de usuarios. Los datos de los usuarios deben ser proporcionados 
// como un array de objetos dentro del propio componente. Implementa una funcionalidad para agregar nuevos usuarios a la lista.

import React from 'react'

interface UserTypes {
    typeId: 'CC' | 'TI'
    id: number
    fullName: string
    isActive: boolean
}

const users: UserTypes[] = [
    {typeId: 'CC', id: 253, fullName: 'Alex Johnson', isActive: true},
    {typeId: 'TI', id: 674, fullName: 'Emily Doe', isActive: false},
    {typeId: 'CC', id: 128, fullName: 'Chris Williams', isActive: true},
    {typeId: 'TI', id: 907, fullName: 'Jane Brown', isActive: true},
    {typeId: 'CC', id: 482, fullName: 'John Smith', isActive: false}
];


const Index = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type ID</th>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.typeId}</td>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.isActive ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Index