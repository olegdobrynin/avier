import {makeAutoObservable} from "mobx";

export default class ArtStore {
    constructor() {
        this._types = []
        this._arts = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setArts(arts) {
        this._arts = arts
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get arts() {
        return this._arts
    }
    get selectedType() {
        return this._selectedType
    }
}