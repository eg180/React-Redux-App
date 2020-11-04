import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCards } from "../store/actions";

const CardsList = (props) => {
    useEffect(() => {
        props.fetchCards();
    }, []);



    return (
        <div>
            <h2>Here are your cards</h2>
            {props.isLoading ? <p>Dealing your cards...</p> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            {props.cards.map(card =>(
                <div>
                <h4>{card.code}</h4>
                </div>
            ))}
        </div>
    );
}


// we need the following state properties:
// isLoading, deck_id, cardData, error

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        deck_id: state.deck_id,
        cards: state.cardsData,
        error: state.error,

    }
}
 // the connect function is in charge of calling whatever you pass in to it. Here, mapStateToProps is called with the entire redux store.
export default connect(mapStateToProps, { fetchCards })(CardsList);