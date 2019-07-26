import React from 'react';

import './GameMap.css';
const SIZE = {
    row: 20,
    col: 25
}

class GameMap extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            elements: [],
        }
    }
    componentDidMount() {
        this.draw();
    }
    draw = () => {
        let cells = [];
        const amount = SIZE.row*SIZE.col;
        console.log(amount);
        for(let i = 0; i< amount; i++){
            cells.push(<div key={i} className="map-cell"></div>);
        }
        this.setState({
            elements: cells
        });                                                                                                                                                                                                                                                                                                                                                                
    }
    render() {
        // console.log(this.state.elements);
        return(
            <div>
                <div className="main-map" >
                    {this.state.elements}
                </div>           
            </div>
        );
    }
};
export default GameMap; 