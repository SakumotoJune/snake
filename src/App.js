import React, { Component } from 'react';
import { Button, Switch } from 'antd';
import GameMap from './map/GameMap';
export default class App extends Component {
    render() {
        return (
            <div>
                <Button>Welcome</Button>
                <GameMap />
            </div>
        );
    }
}
