// Styled-Components Imports
import {
    Container,
    Pic,
    Go
} from './styles'

// Page Component's setup
const Followers = props => {
    return (
        (props.DataFollowers).map(element => 
            <Container 
                key={element.id}
                onClick={() => props.handleClick(element.login)}>
                <Pic src={element.avatar_url} />
                <div># {element.login}</div>
                <Go />
            </Container>
        )
    )
}

export default Followers