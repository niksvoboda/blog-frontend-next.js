import {useState} from "react"


const Users = () =>{
    const [users, setUsers] = useState([
        {id:1 , name: 'petya'},
        {id:2 , name:'vasya'}
    ])
    return(
        <div>
            <h1>
                Список пользователей
                <ul>
                    {users.map(user =>
                    <li>
                        {user.name}
                    </li>)}
                </ul>
            </h1>
        </div>
    )
}

export default Users;