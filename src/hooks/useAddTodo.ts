import { useEffect, useState } from 'react'
import LOCAL_STORAGE_CONST from '../constants/localStorageConstants'
import { saveToLocalStorage, getFromLocalStorage } from '../utilities/saveToLocalStorage'
import ListingTodoModel from '../models/todoModel'

export default function useAddTodo() {

    const [list, setList] = useState<ListingTodoModel[]>([])
    const key = LOCAL_STORAGE_CONST.TODO_LIST

    useEffect(() => {
        const listJson = getFromLocalStorage(key)
        if (listJson) {
            let parsed = JSON.parse(listJson)
            let jsonListFromStorage: Array<ListingTodoModel> = parsed
            setList(jsonListFromStorage)
        }
    },[])

    const setText = (text: string) => {
        const listJson = getFromLocalStorage(key)
        if (!listJson) {
            let model = new ListingTodoModel(text)
            let modelList = [model]
            let list = JSON.stringify(modelList)
            saveToLocalStorage(list, key)
            setList(modelList)
        } else {
            let jsonListFromStorage: Array<ListingTodoModel> = JSON.parse(listJson)
            let model = new ListingTodoModel(text)
            jsonListFromStorage.push(model)
            let stringifiedList = JSON.stringify(jsonListFromStorage)
            saveToLocalStorage(stringifiedList, key)
            setList(jsonListFromStorage)
        }
    }

    const setStrikeUnStrike = (model: ListingTodoModel) => {
        const listJson = getFromLocalStorage(key)
        if (listJson) {
            let jsonListFromStorage: Array<ListingTodoModel> = JSON.parse(listJson)
            let filteredElement = jsonListFromStorage.filter((e) => {
                return e.id === model.id
            })
            let element = filteredElement[0]
            element.isStriked = !element.isStriked
            const convertToJson = JSON.stringify(jsonListFromStorage)
            saveToLocalStorage(convertToJson, key)
            setList(jsonListFromStorage)
        }
    }

    return { setStrikeUnStrike, setText, list }
}