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
        {this.props.groceries ? this.props.groceries.map(item => item.category) : []}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    groceries: state.groceries,
  };
}

export default connect(mapStateToProps, { getGroceriesHistory })(List);
