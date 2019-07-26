import React from 'react';
import { Button } from 'antd';

class ActionBar extends React.Component{
    render() {
        return(
            <div>
                <Button>start</Button>
                <Button>stop</Button>
                <Button>pause</Button>
                <Button>restart</Button>
            </div>
        );
    }
}