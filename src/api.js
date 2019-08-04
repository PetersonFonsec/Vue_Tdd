import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

const instace = axios.create({
    baseURL: 'https://api.github.com',
    adapter: httpAdapter,
})

export default {
    searchUser(username){
        return instace
            .get(`/users/${username}`)
            .then( result => result.data )
    }
}