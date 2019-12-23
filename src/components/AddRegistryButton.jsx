import React from 'react';
import { Button } from 'semantic-ui-react';

class AddRegistryButton extends React.Component {
  onClick(){
    console.log("clicked")
  }

  render(){
    return <Button circular icon='plus' style={this.props.style} onClick={this.onClick}/>
  }
}

export default AddRegistryButton;