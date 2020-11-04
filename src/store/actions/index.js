// action types
export const FETCH_CARDS_START = 'FETCH_CARDS_START';

// async action creators
export const fetchCards = () => {
    return (dispatch) => {
        // do async actions here in this inner function
        dispatch( { type: FETCH_CARDS_START })
    }
}