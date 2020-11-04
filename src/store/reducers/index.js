import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS } from "../actions"

const initialState = {
    isLoading: false,
    // deck_id: "new",
    cardsData: [],
    error: ""
};


export const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDS_START:
            return {
                ...state,
                isLoading: true,
                // deck_id: res.deck_id,
                error: ""
            }
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cardsData: action.payload
            }
        default:
            return state;
    }
}