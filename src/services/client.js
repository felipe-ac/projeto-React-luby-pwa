// Default Imports
import axios from 'axios'

// Component setup
const api = axios.create({
    baseURL: 'https://api.github.com/users'
})

export default api