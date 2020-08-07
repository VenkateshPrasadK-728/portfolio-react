import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from './Avatar.jpeg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Venkatesh Prasad K</h2>
            <img
              src={Avatar}
              alt="avatar"
              style={{height: '250px',width:'200px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
               Wohoo ! You have just landed here to know about me :) <br/>“I’ve just learned a new way of introducing myself and 
               I’m experimenting with it. Can I try it out on you?” <br /> Ping me ON!  </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 8667745226
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  (+91) 7092139778
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  venkateshprasad728@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    venkateshprasad728
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
