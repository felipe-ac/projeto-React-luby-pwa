// Page Components Imports
import Container from '../components/container'
import TopBar from '../components/topBar'
import UserPicture from '../components/userPicture'
import UserDetails from '../components/userDetails'
import UserNumbers from '../components/userNumbers'
import UserBio from '../components/userBio'
import Menu from '../components/menu'

// Functionalities Imports
import { useHistory } from 'react-router'

// Page setup
const HomePage = () => {
    let loadedData = JSON.parse(localStorage.getItem('@luby-app/DataUser')) 
    //console.log('loaded Data: '+loadedData)

    let history = useHistory()

    if (!loadedData) {
        return (
            <> 
                {localStorage.clear()}
                {history.push('/' )} 
            </>
        )
    }

    return (
        <Container>
            <TopBar 
                user={loadedData.login}
            />
            <UserPicture 
                src={loadedData.avatar_url}
                alt={loadedData.name}
            />
            <UserDetails 
                name={loadedData.name}
                email={loadedData.email}
                location={loadedData.location}
            />
            <UserNumbers 
                followers={loadedData.followers}
                following={loadedData.following}
                repos={loadedData.public_repos}
            />
            <UserBio 
                bio={loadedData.bio}
            />
            <Menu />
        </Container>
    ) 

}

export default HomePage