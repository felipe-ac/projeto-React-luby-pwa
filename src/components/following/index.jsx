// Styled-Components Imports
import {
    SubContainer,
    Pic,
    Go
} from './styles'

// Page Component's setup
const Following = props => {
    return (
        
        (props.DataFollowing).map(element => 
            <SubContainer 
                key={element.id}
                onClick={() => props.handleClick(element.login)}>
                <Pic src={element.avatar_url} />
                <div># {element.login}</div>
                <Go />
            </SubContainer>
        )
    )
}

export default Following