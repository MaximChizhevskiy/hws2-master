const initState = {
    themeId: 1,
}

export type State = {
    themeId: number
}
export const themeReducer = (state: State = initState, action: ActionType): State => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID', id} ) // fix any

type ActionType = { type: string, id: number }