// 0001 - Context Provider
import {ContextProvider} from './contexts'
// 0002 - React Router DOM
import Routes from './Routes'

const App = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
)

export default App