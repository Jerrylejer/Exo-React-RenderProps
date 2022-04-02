import React, { Component } from 'react';
import goku from './Goku.png';
import './goku.css';

class Goku extends Component {

    render() {
        // On récupère les props de rendu provenant de App.js
        const { hits, getHits, name } = this.props;

        return (
            <div className='col'>
                <img src={goku} alt='Goku' className='goku-pic' />
                <br />
                <button className='btn btn-success mt-5' onClick={getHits}>
                    {name} Frappe !
                </button>
                <br />
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className='col'>coups</th>
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
export default Goku;
