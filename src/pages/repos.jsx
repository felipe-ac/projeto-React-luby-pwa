// Page Components Imports
import Container from '../components/container'
import BackBar from '../components/backBar'
import Repo from '../components/repo'
import Menu from '../components/menu'

// Functionalities Imports
import { useHistory } from 'react-router-dom'

// Page setup
const ReposPage = () => {

    let loadedData = JSON.parse(localStorage.getItem('@luby-app/DataRepos')) 

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
            <BackBar 
                title={`REPOSITÓRIOS (${loadedData.length})`}
            />
            <Repo DataRepos={loadedData} />
            <Menu />
        </Container>
    )
}

export default ReposPage