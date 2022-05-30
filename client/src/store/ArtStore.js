import {makeAutoObservable} from "mobx";

export default class ArtStore {
    constructor() {
        this._types = []
        this._artists = []
        this._arts = []
        this._selectedType = {}
        this._selectedArtist = {}
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
        this._selectedType = type
    }
    setSelectedArtist(artist) {
        this._selectedArtist = artist
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
}