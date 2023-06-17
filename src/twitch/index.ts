import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
        'client-id': process.env.TWITCH_CLIENT_ID
    }
})

api.interceptors.request.use((a) => {
    // console.log(a)
    return a
})
export default class TwitchApiAdapter {


    static async getUserFromToken(token: string) {
        return api.get('/users', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    static async getUserById() {

    }

    static async getToken(code: string) {
        return api.post('https://id.twitch.tv/oauth2/token', {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost'
        })
    }
}