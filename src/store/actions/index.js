import axios from 'axios';

// action types
export const FETCH_CARDS_START = 'FETCH_CARDS_START';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';

// async action creators
export const fetchCards = () => {
    return (dispatch) => {
        // do async actions here in this inner function
        dispatch( { type: FETCH_CARDS_START })

        // fetch data
        axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
        .then((res) => {
            console.log('res.data.cards below')
            console.log(res.data.cards);
            dispatch( { type: FETCH_CARDS_SUCCESS, payload: res.data.cards})
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}