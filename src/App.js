import React, { Component } from 'react';
import { Button, Switch } from 'antd';
import GameMap from './map/GameMap';
import ActionBar from './actionBar/ActionBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <ActionBar />
                <GameMap />
            </div>
        );
    }
}
