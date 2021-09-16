// Styled-Components Imports
import {
    Container,
    MenuList,
    MenuItem,
    MenuItemIcon
} from './styles'

// Functionaties Imports
import { useHistory } from 'react-router-dom'

// Page Component's setup
const Menu = () => {
    
    const history = useHistory()

    return (
        <Container>
            <MenuList>
                <MenuItem onClick={() => history.push('home')}>
                    <MenuItemIcon src="/img/icons/home.png"/>
                    <div>Home</div>
                </MenuItem>
                <MenuItem onClick={() => history.push('repos')}>
                    <MenuItemIcon src="/img/icons/repos.png"/>
                    <div>Repos</div>
                </MenuItem>
                <MenuItem onClick={() => history.push('followers')}>
                    <MenuItemIcon src="/img/icons/followers.png"/>
                    <div>Seguidores</div>
                </MenuItem>
                <MenuItem onClick={() => history.push('following')}>
                    <MenuItemIcon src="/img/icons/following.png"/>
                    <div>Seguindo</div>
                </MenuItem>
            </MenuList>
        </Container>
    )
}

export default Menu