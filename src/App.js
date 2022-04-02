import React, { Component } from 'react';
import Vegeta from './Components/Vegeta/Vegeta';
import Goku from './Components/Goku/Goku';
import AddHits from './Components/AddHits/AddHits';
import './App.css';

class App extends Component {
   
    render() {
        return (
            <div className='container text-center'>
                <h1 className='text-primary'>Qui va gagner ?</h1>
                <div className='row'>
                    {/* On passe les props au composant enfant Vegeta */}
                    <AddHits render={(hits, getHits, fighters) => (
                        // Si fighters.vegeta est true alors on affiche
                        fighters.vegeta && <Vegeta hits={hits} getHits={getHits}  name="Vegeta" 
                        />
                    )}
                    />
                    {/* On passe les props au composant enfant Goku */}
                    <AddHits render={(hits, getHits, fighters) => (
                        // Si fighters.goku est true alors on affiche
                        fighters.goku && <Goku hits={hits} getHits={getHits} name="Goku" 
                        />
                    )}
                    />
                </div>
            </div>
        );
    }
}
export default App;
