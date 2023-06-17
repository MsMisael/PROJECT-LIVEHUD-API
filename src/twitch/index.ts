import axios, { AxiosResponse } from "axios";

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

export type tokenResponse = {
    access_token: string
    expires_in: number
    refresh_token: string,
    scope: string[],
    token_type: 'bearer'
}

export type userResponse = {
    id: string,
    login: string,
    display_name: string,
    type: string,
    broadcaster_type: string,
    description: string,
    profile_image_url: string,
    offline_image_url: string,
    view_count: 0,
    email: string,
    created_at: string
}

export default class TwitchApiAdapter {


    static async getUserFromToken(token: string) {
        return api.get<any, AxiosResponse<{ data: userResponse[] }, any>, any>('/users', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    static async getUserById() {

    }

    static async getToken(code: string) {
        return api.post<any, AxiosResponse<tokenResponse, any>, any>('https://id.twitch.tv/oauth2/token', {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost'
        })
    }
}