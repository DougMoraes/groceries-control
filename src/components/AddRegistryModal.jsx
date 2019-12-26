import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Modal, Radio, Select } from 'semantic-ui-react';

class AddRegistryModal extends React.Component {

  renderDatalist(id){
    return (<datalist id={id}>{this.props[id].map(item => <option value={item}/>)}</datalist>)
  }

  prepareOptions(list){
    return list.map(item => {return {key: item, value: item, text: item}})
  }

  render() {
    return (
      <Modal trigger={<Button circular icon='plus' style={{margin: "10px", alignSelf: "flex-start" }}/>}>
        <Modal.Header>Add registry</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Category</label>
                    <input placeholder='Category' list="categories" />
                    {this.renderDatalist('categories')}
                  </Form.Field>
                  <Form.Field>
                    <label>Product</label>
                    <input placeholder='Product' list="products" />
                    {this.renderDatalist('products')}
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Category</label>
                    <input placeholder='Category' list="categories" />
                    {this.renderDatalist('categories')}
                  </Form.Field>
                  <Form.Field>
                    <label>Product</label>
                    <input placeholder='Product' list="products" />
                    {this.renderDatalist('products')}
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Quantity</label>
                    <input type="number" placeholder='Quantity' step={0.01} />
                  </Form.Field>
                  <Form.Field>
                    <label>Unit of Measurement</label>
                    <Select placeholder='Unit of Measurement' options={this.prepareOptions(this.props.units)} />
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <input type="number" placeholder='Price' step={0.01} />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Market</label>
                    <Select placeholder='Markets' options={this.prepareOptions(this.props.markets)} />
                  </Form.Field>
                  <Form.Field>
                    <label>Date</label>
                    <input type='date' placeholder='Date' />
                  </Form.Field>
                  <Form.Field>
                    <label>On Sale</label>
                    <Radio toggle />
                  </Form.Field>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: [...new Set(state.groceries.map(item => item.product))],
    categories: [...new Set(state.groceries.map(item => item.category))],
    markets: [...new Set(state.groceries.map(item => item.market))],
    units: [...new Set(state.groceries.map(item => item.unitMeasurement))],
    selectedCategory: state.selectedCategory
  };
}

export default connect(mapStateToProps, {})(AddRegistryModal);
