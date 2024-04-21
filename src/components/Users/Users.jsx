import { useMemo, useState } from 'react';
import './Users.scss'



const Users = () => {
    const [users, setUsers] = useState([
        {
            name: 'Andrew',
            age: 22
        },
        {
            name: 'John',
            age: 14
        },
        {
            name: 'User',
            age: 89,
        }
    ])
    const userList = useMemo(() => users.map((user, index) => (
        <li key={index}>
            {user.name}, {user.age}
        </li>
    )), [users]);

    return (
        <div className='Users'>
            <div className="container">
                <div className="Users-block">
                    <ul>
                        {userList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Users;