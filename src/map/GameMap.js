import React from 'react';

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
        let trs = [];
        for(let i = 0; i<SIZE.row; i++){
            let tds = [];
            for(let j = 0; j<SIZE.col;j++){
                tds.push(<td>t</td>);
            }
            trs.push(<tr>{tds}</tr>)
        }
        this.setState({
            elements: trs
        });                                                                                                                                                                                                                                                                                                                                                                
    }
    render() {
        console.log(this.state.elements);
        return(
            <div>
                <table border="1" >
                    <tbody>{this.state.elements}</tbody>
                </table>
                
            </div>
            
        );
    }
};
export default GameMap; 