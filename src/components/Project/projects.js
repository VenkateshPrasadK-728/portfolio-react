import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (

        <Grid col={12} col className="projects-grid">
          {/* Project 1 */}
          <Card shadow={50} style={{ minWidth: '450', margin: 'auto', marginBottom: '30px' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>HUE - The AI Works</CardTitle>
            <CardText style={{ fontSize: '13px', fontStyle: 'oblique 10deg' }}>
              <b>"HUE" </b>, the next-generation ERP system is a collection of products, from Human Resources, Accounting and Supply Chain Management to E-Commerce.
            It is the next-generation ERP system that thoroughly pursues response and convenience.
            Through "HUE", it is possible for everyone working at a company to focus on more creative and valuable work.<br /><br />
              <b style={{ fontSize: '15px' }}>TechStack : JAVA, SPRING, JS, XML, MYSQL, Selenium.</b>
            </CardText>
            <CardActions border>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://www.ivtlinfoview.com/', '_blank'); }} colored >Source Site</Button>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://www.worksap.com/aiworks/', '_blank'); }} colored>Client Site</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginBottom: '30px' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }} >COMPANY- Version36</CardTitle>
            <CardText style={{ fontSize: '13px', fontStyle: 'oblique 10deg' }}>
              <b>'COMPANY'</b>- a product incorporating itself from desktop application to web application. Designed in delphi and meets the client requirement with incredible functionality.
            The Version based developement allows it to serve the client independently.
            The aim of the project is to improve operational efficiency by adopting latest technologies and maximizing the power of end users.<br /> <br />
              <b style={{ fontSize: '15px' }}>TechStack : React JS, Visual Studio, Delphi.</b>
            </CardText>
            <CardActions border>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://www.ivtlinfoview.com/', '_blank'); }} colored>Source Site</Button>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://www.worksap.com/aiworks/', '_blank'); }} colored>Client Site</Button>
            </CardActions>
          </Card>
        </Grid>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <Grid col={12} col className="projects-grid-react">
          {/* Project 1 */}
          <Card shadow={50} style={{ minWidth: '450', margin: 'auto', marginBottom: '30px' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>University Event Registration Portal</CardTitle>
            <CardText style={{ fontSize: '13px', fontStyle: 'oblique 10deg' }}>
              Trying out to build a Application for below content using <b style={{ fontSize: '14px'}}>React JS.</b>.<br />
     1. Apllication should let users to  Add, List, Update and Delete list of all events happening in an university.<br />
     2.There should be option of "Register" for each event. When clicked, student should be able to fill out their details (like Reg No, Ph No, etc), which will be saved by the system.<br />
     3.There should be a link "Attendees", when clicked should retrieve all students registered to that specific event and displayed.<br />
            </CardText>
            <CardActions border>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://github.com/VenkateshPrasadK-728/universityevent-react', '_blank'); }} colored >GitHub</Button>
              <Button onClick={(e) => { e.preventDefault(); window.open('https://venkateshprasadk-728.github.io/universityevent-react/', '_blank'); }} colored>Live Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      )
    }
  }



  render() {
    return (
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <Tab>Professional</Tab>
          <Tab>Personal</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
