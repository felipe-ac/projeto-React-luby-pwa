import {
    createContext,
    useState,
} from "react";

// Functionaties Imports
    // Axios (http request that loads data into the Context)
    import axios from '../services/client'
    // useHistory (changes the Route)
    //import { useHistory } from 'react-router-dom'


// 0001.1 - Creates the Context
export const context = createContext()

// 0001.2 - Complement: Provides the variables to be used in the Context
export const ContextProvider = props => {  
    const [DataUser, setDataUser] = useState({})
    const [DataRepos, setDataRepos] = useState({})
    const [DataFollowing, setDataFollowing] = useState({})
    const [DataFollowers, setDataFollowers] = useState({})

    const getData = async (searchValue, history, route) => {
        if (!searchValue) {
            document.getElementById('login-error').textContent = 'Digite um Usuário'
            document.getElementById('login-error').style.visibility = 'visible'
            //console.log('Por favor, digite um usuário')
        } else {
            try {
                const responseDataUser = await axios.get(`/${searchValue}`)
                const DataUserStr = JSON.stringify(responseDataUser.data)
                localStorage.setItem('@luby-app/DataUser', DataUserStr)

                const responseDataRepos = await axios.get(`/${searchValue}/repos`)
                const DataReposStr = JSON.stringify(responseDataRepos.data)
                localStorage.setItem('@luby-app/DataRepos', DataReposStr)
                
                const responseDataFollowing = await axios.get(`/${searchValue}/following`)
                const DataFollowingStr = JSON.stringify(responseDataFollowing.data)
                localStorage.setItem('@luby-app/DataFollowing', DataFollowingStr)

                const responseDataFollowers = await axios.get(`/${searchValue}/followers`)
                const DataFollowersStr = JSON.stringify(responseDataFollowers.data)
                localStorage.setItem('@luby-app/DataFollowers', DataFollowersStr)

                history.push(route)
            } catch(err) {
                document.getElementById('login-error').textContent = 'Usuário não encontrado'
                document.getElementById('login-error').style.visibility = 'visible'
            }
        }
    }
   
    return (
        <context.Provider value={{
            getData,
            DataUser,
            setDataUser,
            DataRepos,
            setDataRepos,
            DataFollowing,
            setDataFollowing,
            DataFollowers,
            setDataFollowers
        }}>
            {props.children /* Specifies when to load the Component's children */}
        </context.Provider>
    )

}