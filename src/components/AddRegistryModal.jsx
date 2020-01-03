import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import AddRegistryForm from './AddRegistryForm';

class AddRegistryModal extends React.Component {

  render() {
    return (
      <Modal trigger={<Button circular icon='plus' style={{margin: "10px", alignSelf: "flex-start" }}/>}>
        <Modal.Header>Add registry</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <AddRegistryForm />
            </Modal.Description>
          </Modal.Content>
        </Modal>
    )
  }
}

export default connect(null, {})(AddRegistryModal);
