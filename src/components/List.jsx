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

  renderCards(){
    return this.props.categories.map(item => <Card key={`card-${item}`} onClick={this.onClickHandler} header={item}/>)
  }

  render(){
    return (
      <div>
        {this.renderCards()}
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
