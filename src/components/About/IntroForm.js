import React, { Component } from 'react';
import Profile_Image from './Profile_Image.jpeg';

class IntroForm extends Component {
    render() {
        return (
            <div className='front-side' style={{ width: '100%', height: "100%",display:"flex",fontStyle:'italic' }}>
                <div className='col-xs-6' style={{ width: '50%', height: "300px", float: "left" }}>
                    <img src={Profile_Image} style={{ width: '300px', height: "350px" }} />
                </div>

                <div className='col-xs-6' style={{ width: '50%', marginLeft:'20px',height:'100%'}}>
                    <h1 style={{fontSize:"32px",fontWeight: '700',color:'limegreen'}}>Hello ! <br />I'm Venkatesh</h1>

                    <p style={{fontSize:"24px",fontWeight: '700'}}>I enjoy taking complex problems and turning them into simple and beautiful designs.
                         I also love the logic and structure of coding and strive to write elegant and efficient code.</p>
                    <p style={{fontSize:"26px", fontWeight: '600',fontStyle:"oblique 80deg", color:'black'}}><br />"A Caffeine lover who loves to turn the coffee into code"</p>
                </div>
            </div>
        );
    }
}

export default IntroForm;