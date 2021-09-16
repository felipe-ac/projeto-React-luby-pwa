// Page Components Imports
import Container from '../components/container'
import BackBar from '../components/backBar'
import Following from '../components/following'
import Menu from '../components/menu'

// Functionaties Imports
import {useContext} from 'react';
import {context} from '../contexts'
import {useHistory} from 'react-router-dom'

// Page setup
const FollowingPage = () => {

    const loadedContext = useContext(context)
    const route = 'home'
    
    let loadedData = JSON.parse(localStorage.getItem('@luby-app/DataFollowing')) 

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
                title={`SEGUINDO (${loadedData.length})`}
            />
            <Following 
                DataFollowing={loadedData} 
                handleClick={handleClick}
            />
            <Menu />
        </Container>
    )
}

export default FollowingPage
