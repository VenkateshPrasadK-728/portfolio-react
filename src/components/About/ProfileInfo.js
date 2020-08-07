import React, { Component } from 'react';
import source from './source.jpg';

class ProfileInfo extends Component {
    render() {
        return (
            <div class="container" style={{ marginTop: '-235px'}}>
               <img src={source} alt="Notebook" style={{ width: '814px', height: '506px', opacity: '0.40' }} />
                <h2 style={{ marginTop: '-300px', position: 'relative' }}>Hover me!</h2>
            </div>
        );
    }
}

export default ProfileInfo;