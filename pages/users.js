import {useState, useEffect} from "react"
import Link from 'next/link'
import MainContainer from "../components/MainContainer"

const Users = ({users}) =>{
    return(
        <MainContainer>
            <div>
            <h1>
                Список пользователей
                <ul>
                    {users.map(user =>
                    <li>
                        <Link  legacyBehavior href={`/users/${user.id}`}>
                        <a>
                        {user.name}
                        </a>
                        </Link>
                       
                    </li>)}
                </ul>
            </h1>
        </div>
        </MainContainer>
     
    )
}

export async function getStaticProps(context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
      props: {users}, // will be passed to the page component as props
    }
  }


export default Users;