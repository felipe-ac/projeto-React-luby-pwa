// 0002.1 - Default Imports */
import {
    BrowserRouter as BRouter,
    Switch,
    Route,
} from 'react-router-dom'

// 0002.2 - Pages Imports
import Login from './pages/login'
import Home from './pages/home'
import Repos from './pages/repos'
import Following from './pages/following'
import Followers from './pages/followers'

// 0002.3 - Complement: Set the Routes
const Routes = () => {
    return (
        <BRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/repos" exact component={Repos} />
                <Route path="/following" exact component={Following} />
                <Route path="/followers" exact component={Followers} />
            </Switch>
        </BRouter>
    )
}

export default Routes