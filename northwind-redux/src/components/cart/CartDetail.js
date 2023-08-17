import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from "react-redux";
import { Table,Button } from 'reactstrap';
import alertify from "alertifyjs"

class CartDetail extends Component {
    removeFromCart=cartItem=>{
        this.props.actions.removeFromCart(cartItem.product)
        alertify.error(cartItem.product.productName+" removed from Cart!");
      }
  render() {
    return (
      <div>
          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem =>(
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={()=>this.removeFromCart(cartItem)}>
                    remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  
  function mapStateProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  export default connect(mapStateProps,mapDispatchToProps)(CartDetail);