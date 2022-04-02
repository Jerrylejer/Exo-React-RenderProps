import React, { Component } from 'react';
import vegeta from './vegeta.png';
import './vegeta.css';

class Vegeta extends Component {

    render() { 
        // On récupère les props de rendu provenant de App.js
        const { hits, getHits, name } = this.props;

        return (
            <div className='col'>
                <img src={vegeta} alt='Vegara' className='vegeta-pic' />
                <br />
                <button className='btn btn-success mt-5' onClick={getHits}>
                    {name} Frappe !
                </button>
                <br />
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Vegeta;
