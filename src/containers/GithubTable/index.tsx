"use client";
import axios from 'axios';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const Index = () => {
    const [users, setUsers] = React.useState<any>([]);
    const [warning, setWarning] = React.useState<boolean>(false);
    const [query, setQuery] = React.useState<string>('');

    const filterUsers = async () => {
        try {
            await axios.get(`https://api.github.com/search/users?q=${query}`)
                .then((response: any) => setUsers(response.data.items))
                .catch(() => setWarning(true));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container mx-auto p-6">
            <div className="mb-4 flex">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    placeholder="Search for GitHub users"
                />
                <Button type='button' className='ml-2' onClick={filterUsers}>Buscar</Button>
            </div>
            <table className="min-w-full bg-primary border border-gray-300 rounded-lg shadow-md overflow-x-auto">
                <thead>
                    <tr className="bg-gray-200 border-b">
                        <th className="py-3 px-6 text-left text-gray-800 font-semibold">Username</th>
                        <th className="py-3 px-6 text-left text-gray-800 font-semibold">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any, index: any) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-6 text-gray-700">{user.login}</td>
                            <td className="py-3 px-6 text-gray-700">
                                <Image
                                    src={user.avatar_url}
                                    width={50}
                                    height={50}
                                    alt={`Avatar of ${user.login}`}
                                    className="rounded-full"
                                />
                            </td>
                        </tr>
                    ))}
                    { warning && <p className='text-red-500'> Error al encontrar un usuario con el nombre {query} </p> }
                </tbody>
            </table>
        </div>
    );
};

export default Index;
