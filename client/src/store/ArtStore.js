import {makeAutoObservable} from "mobx";

export default class ArtStore {
    constructor() {
        this._types = []
        this._artists = []
        this._arts = []
        this._selectedType = {}
        this._selectedArtist = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setArtists(artists) {
        this._artists = artists
    }

    setArts(arts) {
        this._arts = arts
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedArtist(artist) {
        this._selectedArtist = artist
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get artists() {
        return this._artists
    }

    get arts() {
        return this._arts
    }
    get selectedType() {
        return this._selectedType
    }

    get selectedArtist() {
        return this._selectedArtist
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}