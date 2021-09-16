// Page Components Imports
import Container from '../components/container'
import BackBar from '../components/backBar'
import Followers from '../components/followers'
import Menu from '../components/menu'

// Functionaties Imports
import {useContext} from 'react'
import {context} from '../contexts'
import { useHistory } from 'react-router-dom'

// Page setup
const FollowersPage = () => {
    const loadedContext = useContext(context)
    const route = 'home'

    let loadedData = JSON.parse(localStorage.getItem('@luby-app/DataFollowers')) 

    let history = useHistory()

    if (!loadedData) {
        return (
            <> 
                {localStorage.clear()}
                {history.push('/' )} 
            </>
        )
    }
    
    const handleClick = (user) => {
        loadedContext.getData(user, history, route)
    }

    return (
        <Container>
            <BackBar 
                title={`SEGUIDORES (${loadedData.length})`}
            />
            <Followers 
                DataFollowers={loadedData} 
                handleClick={handleClick}
            />
            <Menu />
        </Container>
    )
}

export default FollowersPage
