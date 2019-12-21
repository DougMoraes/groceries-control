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

  getRegistriesPerProduct(product) {
    return this.props.groceries.filter(registry => registry.product === product);
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

  getAveragePrice(registries){
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

  getListUniqueProducts(list){
    return [...new Set(list.map(item => item.product))]
  }

  renderCard(category, list){
    return <Card 
    key={`card-${category}`} 
    onClick={this.onClickHandler} 
    header={category} 
    description={this.getAveragePrice(list)}
    />
  }

  render(){
    return (
      <div style={{
        display: "flex",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px"
        }}>
          {this.props.categories.map(category => this.renderCard(category, this.getRegistriesPerCategory(category)))}
        </div>
        {
          this.props.selectedCategory ? 
            <div style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px"
            }}>
              {
                this.getListUniqueProducts(this.getRegistriesPerCategory(this.props.selectedCategory)).map(
                  product => this.renderCard(product, this.getRegistriesPerProduct(product))
                )
              }
            </div>
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceries,
    categories: [...new Set(state.groceries.map(item => item.category))],
    selectedCategory: state.selectedCategory
  };
}

export default connect(mapStateToProps, { 
  getGroceriesHistory,
  selectCategory
 })(List);
