import Link from 'next/link'
import A from './A';

const MainContainer = ({children}) => {

    return(
        <>
        <head>
        <meta keywords="Nik_svoboda"></meta>
        </head>
        <div className="navbar">
                <A href="/" text="Главная" classname="link"/>
               
                <A href="/users" text="Пользователи"/>
          </div>
        <div>
        {children}
        </div>    
        <style jsx>
                {`
                  .navbar{
                    background: orange;
                    padding: 15px;
                }
              
                `}
        </style>
        </>
    )

}

export default MainContainer;