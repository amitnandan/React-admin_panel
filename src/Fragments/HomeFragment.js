import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


import React, { Component } from 'react'

export class HomeFragment extends Component {
  constructor(props){
  super(props)

  this.state={
    value:0
  }
  
  handleChange = (event, newValue) => {
    this.setState({
      value:newValue
    })
  };
  render() {
      return (
        
        <Container maxwidth="md" fixed>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Item One"/>
              <Tab label="Item One"/>
              <Tab label="Item One"/>
              <Tab label="Item One"/>

              </Tabs>
          </AppBar>
        </Container>
    );
  }
}


export default HomeFragment;


export default function HomeFragment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
}