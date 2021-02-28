import React, { Component } from 'react';
import Card from './Card';
import cardContents from './CardProperties';
import './CardList.css';

var row1 = [];
var row2 = [];
export default class CardList extends Component {
    constructor(props) {
        super(props);

        for(let i=0;i<4;i++) {
            row1[i] = <Card  {...cardContents[i]}></Card>;
            row2[4+i] = <Card {...cardContents[4+i]}></Card>;
        }
    }

    render () {
        return (
            <div className="flexbox-continer">
                <div className="heading">Click on Cards to select them</div>
                <span className="row">{row1}</span>
                <span className="row">{row2}</span>
            </div>
        );
    }
}