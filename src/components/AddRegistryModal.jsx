import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

class AddRegistryModal extends React.Component {

  render() {
    return (
      <Modal trigger={<Button circular icon='plus' style={{margin: "10px", alignSelf: "flex-start" }}/>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
          </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default AddRegistryModal;