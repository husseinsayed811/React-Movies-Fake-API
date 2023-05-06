
const InitialState = {

    favourtmovise: [],


}

export default function movReducer(state = InitialState, action) {

    switch (action.type) {


        case 'SET_ADDFAVOURITEMOV':

            return { ...state, favourtmovise: [...state.favourtmovise, action.payload] }
        case 'SET_REMOVEMOVISE':

            return { ...state, favourtmovise: [...action.payload] }
        default:
            return state
    }

}

