const Initial_state = {

    movies: []
}

export default function MoviesReducer(state = Initial_state, action) {

    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, movies: action.payload }
        default:
            return state

    }


}