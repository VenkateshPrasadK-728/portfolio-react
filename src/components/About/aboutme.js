import React from 'react';
import FlipCard from 'react-flip-cards';
import 'react-flip-cards/build/index.css';
import IntroForm from './IntroForm';
import ProfileInfo from './ProfileInfo';


// React component for the card (main component)
class About extends React.Component { 
  render() {
    return (
    <div className='flipcardContainer'>
      <div className='col-3'>
        <FlipCard fontSubTitle={<ProfileInfo />} backText={<IntroForm />}>
          </FlipCard>
        </div>
      </div>
    )
  }
}
export default About;
