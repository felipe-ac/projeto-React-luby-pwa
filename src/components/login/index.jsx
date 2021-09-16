// Styled-Components Imports
import { 
    Container,
    Logo,
    Input,
    Button,
    Error
} from './styles';

// Functionaties Imports
import { useContext, useState } from 'react';
import { context } from '../../contexts'
import { useHistory } from 'react-router-dom'

// Page Component's setup
const Login = () => {
    const loadedContext = useContext(context)
    const history = useHistory()
    const route = 'home'
    //const ref = useRef()

    const [Search, setSearch] = useState()

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <Container>
            <Logo src="/img/git-logo2.png"/>
            <Input placeholder="Usuário" onChange={(event) => handleInput(event)}/>
            <Error id="login-error" />
            <Button onClick={() => loadedContext.getData(Search, history, route)}>
                <span>ENTRAR</span>
                <span></span>
            </Button>
        </Container>
    )
    }

export default Login