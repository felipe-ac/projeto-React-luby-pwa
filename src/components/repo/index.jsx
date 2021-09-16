// Styled-Components Imports
import {
    Container,
    More,
    FavCounter,
    Lock,
    Title,
    Desc
} from './styles'

// Page Component's setup
const Repo = props => {
    return (
        (props.DataRepos).map(element => 
            <Container key={element.id}>
                <Title>{element.name}</Title>
                <Desc>{element.description}</Desc>
                <More>
                    <FavCounter>
                        <div></div>
                        <span>{element.stargazers_count}</span>
                    </FavCounter>
                    <Lock>
                        <div></div>
                        <div></div>
                    </Lock>
                </More>
            </Container>
        )
    )
}

export default Repo