import React, { Component } from 'react';

class AddHits extends Component {

    state = {
        hits: 0,
        fighters: {
            vegeta: true,
            goku: true
        }
    };

    getHits = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1,
            };
        });
    };

    render () {
        return (
            <>
                {/* On passe les méthodes en props pour les récupérer dans App.js */}
                { this.props.render(this.state.hits, this.getHits, this.state.fighters) }
            </>
        )
    }
}
export default React.memo(AddHits)