import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { 
  getGroceriesHistory,
  selectCategory,
 } from '../actions/index'

class List extends React.Component {

  componentDidMount() {
    this.props.getGroceriesHistory();
  }

  onClickHandler = (data) => {
    this.props.selectCategory(data.target.innerText)
  }

  getRegistriesPerCategory(category){
    return this.props.groceries.filter(registry => registry.category === category);
  }

  sumUpReducer(initialValue, registry){
    initialValue.qtd += parseFloat(registry.quantity)
    initialValue.price += parseFloat(registry.price)

    return initialValue;
  }

  calculateAveragePrice(defaultQtd, qtd, price){
    let calculatedQtd = qtd / defaultQtd; 

    return price / calculatedQtd;
  }

  getAveragePrice(category){
    let registries = this.getRegistriesPerCategory(category);
    let unitMeasurement = registries[0].unitMeasurement
    let initialValue = { qtd: 0, price: 0 };
    let valuesSumUp = registries.reduce(this.sumUpReducer, initialValue);
    let defaultQtd = 1;
    
    switch (unitMeasurement){
      case 'Gr':
        defaultQtd = 100;
        return `‎€ ${this.calculateAveragePrice(defaultQtd, valuesSumUp.qtd, valuesSumUp.price).toFixed(2)} per ${defaultQtd} gr`

      case 'Ml':
        defaultQtd = 100;
        return `‎€ ${this.calculateAveragePrice(defaultQtd, valuesSumUp.qtd, valuesSumUp.price).toFixed(2)} per ${defaultQtd} ml`

      default:
        return `‎€ ${ this.calculateAveragePrice(defaultQtd, valuesSumUp.qtd, valuesSumUp.price).toFixed(2)} per ${defaultQtd + unitMeasurement} `
    }
  }

  renderCategoryCards(){
    return this.props.categories.map(category => {

      return <Card 
      key={`card-${category}`} 
      onClick={this.onClickHandler} 
      header={category} 
      description={this.getAveragePrice(category)}
      />
    })
  }

  render(){
    return (
      <div>
        {this.renderCategoryCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceries,
    categories: [...new Set(state.groceries.map(item => item.category))],
    selectedCategory: state.selectCategory
  };
}

export default connect(mapStateToProps, { 
  getGroceriesHistory,
  selectCategory
 })(List);
