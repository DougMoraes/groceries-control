import React from 'react';
import {connect} from 'react-redux';
import { Card } from 'semantic-ui-react'
import {getGroceriesHistory} from '../actions/index'


class List extends React.Component {
  componentDidMount() {
    this.props.getGroceriesHistory();
  }

  renderCards(){
    return this.props.categories.map(item => <Card key={`card-${item}`} header={item}/>)
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
    categories: [...new Set(state.groceries.map(item => item.category))]
  };
}

export default connect(mapStateToProps, { getGroceriesHistory })(List);
