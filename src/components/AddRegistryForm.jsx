import React from 'react';
import { connect } from 'react-redux';
import { Button, Radio, Select } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { addGroceriesRegistry } from '../actions';


class AddRegistryForm extends React.Component {

  renderDatalist(id) {
    return (<datalist id={id}>{this.props[id].map(item => <option value={item} key={item}/>)}</datalist>)
  }

  prepareOptions(list) {
    return list.map(item => { return <option key={item} value={item}>{item}</option> })
  }

  handleSubmit = formValues => this.props.addGroceriesRegistry(formValues) 

  renderInput = ({input, label, list, meta}) => {
    const fieldClasses = `field ${meta.touched && meta.error ? 'error' : ''}`

    return (
      <div className={fieldClasses}>
        <label>{label}</label>
        <input {...input} placeholder={label} list={list} />
        {this.renderDatalist(list)}
      </div>
    )
  }

  renderNumericInput = ({ input, label, meta }) => {
    const fieldClasses = `field ${meta.touched && meta.error ? 'error' : ''}`

    return (
      <div className={fieldClasses}>
        <label>{label}</label>
        <input {...input} type="number" placeholder={label} step={0.01} />
      </div>
    )
  }

  renderSelectField = ({ input, label, options, meta }) => {
    const fieldClasses = `field ${meta.touched && meta.error ? 'error' : ''}`

    return (
      <div className={fieldClasses}>
        <label>{label}</label>
        <select {...input}>
          {this.prepareOptions(options)}
        </select>
      </div>
    )
  }

  renderDateInput = ({ input, meta }) => {
    const fieldClasses = `field ${meta.touched && meta.error ? 'error' : ''}`

    return (
      <div className={fieldClasses}>
        <label>Date</label>
        <input {...input} type='date' placeholder='Date' />
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field name="category" list="categories" label="Title" component={this.renderInput} />
        <Field name="product" list="products" label="Product" component={this.renderInput} />
        <Field name="quantity" label="Quantity" component={this.renderNumericInput} />
        <Field name="unit" label="Unit of Measurement" options={this.props.units} component={this.renderSelectField} />
        <Field name="price" label="Price" component={this.renderNumericInput} />
        <Field name="market" label="Market" options={this.props.markets} component={this.renderSelectField} />
        <Field name="date" component={this.renderDateInput} />
        <Field name="sale" label="On Sale" options={["true", "false"]} component={this.renderSelectField} />
        <button>Submit</button>
      </form>
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

const connectedComponent = connect(mapStateToProps, { addGroceriesRegistry })(AddRegistryForm)

export default reduxForm({
  form: 'addRegistryForm',
})(connectedComponent);