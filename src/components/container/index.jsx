// Styled-Components Imports
import { Container } from './styles';

// Page Component's setup
const MainContainer = props => (
    <Container>
        {props.children}
    </Container>
)

export default MainContainer