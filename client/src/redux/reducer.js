import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState = {
    myFavorites : [],
    allCharacters : []
}

const reducer = (state = initialState, { type,payload})=>{
    switch(type){

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ?[...state.allCharacters]
                :allCharactersFiltered
            }
        
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                payload === 'A'
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;