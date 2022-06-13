import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userInfo = []
        this._artists = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setUserInfo(userInfo) {
        this._userInfo = userInfo
    }

    setArtists(artists) {
        this._artists = artists
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get userInfo() {
        return this._userInfo
    }

    get artists() {
        return this._artists
    }
}