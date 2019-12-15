import React from 'react';
import {connect} from 'react-redux';
import {getGroceriesHistory} from '../actions/index'

class List extends React.Component {
  componentDidMount() {
    this.props.getGroceriesHistory();
  }

  render(){
    return (
      <div>
        {this.props.categories}
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
