import {makeAutoObservable} from "mobx";

export default class LotStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Графика'},
            {id: 2, name: 'Живопись'},
            {id: 5, name: 'Скульптура'}
        ]
        this._lots = [
            {id: 1, name: 'Утро в сосновом лесу', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg/1280px-Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg', typeId: '2'},
            {id: 2, name: 'Мона Лиза', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', typeId: '2'},
            {id: 3, name: 'Девочка с персиками', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Valentin_Serov_-_%D0%94%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0_%D1%81_%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92.%D0%A1.%D0%9C%D0%B0%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%BE%D0%B9_-_Google_Art_Project.jpg/800px-Valentin_Serov_-_%D0%94%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0_%D1%81_%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92.%D0%A1.%D0%9C%D0%B0%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%BE%D0%B9_-_Google_Art_Project.jpg', typeId: '2'},
            {id: 4, name: 'Весна. Большая вода', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/LevitanSpringFlood.jpg', typeId: '2'},
            {id: 5, name: 'Звёздная ночь', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', typeId: '2'},
            {id: 6, name: 'Апофеоз войны', img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Apotheosis.jpg', typeId: '2'},
            {id: 7, name: 'Сикстинская мадонна', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29FXD.jpg/800px-RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29FXD.jpg', typeId: '2'},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setLots(lots) {
        this._lots = lots
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get lots() {
        return this._lots
    }
    get selectedType() {
        return this._selectedType
    }
}