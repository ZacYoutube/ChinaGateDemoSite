import React, { Component } from 'react';
import {connect} from 'react-redux';
import './css_doc/Cart.css';
import {DELETE_DISH, INCREMENT, DECREMENT} from './constants/action-types';
import empty_cart from './sushi_assets/empty-cart-removebg-preview (1).png';
const bullet = document.getElementsByClassName('bullet');
const button_1 = document.getElementById('button-1');
let current_step = 1;
let value = [];
for(let i = 0; i < 11; i++){
  value.push('');
}

 class Cart extends Component {
  constructor(){
    super();
    this.isCheckoutTrue = this.isCheckoutTrue.bind(this);
    this.checkProperties = this.checkProperties.bind(this);
    this.orderSuccess = this.orderSuccess.bind(this);
    this.listenForWindowSize = this.listenForWindowSize.bind(this);
    this.state = {
        carts:[],
        isCheckoutTrue: false,
        orderSuccess: false,
        go_back_btn_txt: 'Go back to your cart',
        continue_btn_txt: 'Continue to checkout',
        billing_infor:{
          full_name: '',
          email: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          name_on_card: '',
          credit_card_number: '',
          exp_month: '',
          exp_year: '',
          cvv: '',

        }
    };
    
  }
  componentDidMount = () => { 
    this.setState({carts: this.props.carts});
    if(window.innerWidth < 700){
      this.setState({go_back_btn_txt: 'Go back', continue_btn_txt: 'Checkout'})
    }else{
      this.setState({go_back_btn_txt: 'Go back to your cart', continue_btn_txt: 'Continue to checkout'})
    }
    window.addEventListener("resize", this.listenForWindowSize);
    current_step = 1;
    if(this.props.carts.length > 0){
      bullet[0].style.backgroundColor = '#CB262F';
      bullet[0].style.border = `${1}px solid #CB262F`;
    }else{
      bullet[0].style.backgroundColor = 'grey';
      bullet[0].style.border = `${1}px solid grey`;
    }
    
  }

  listenForWindowSize(){
    if(window.innerWidth < 700){
      this.setState({go_back_btn_txt: 'Go back', continue_btn_txt: 'Checkout'})
    }else{
      this.setState({go_back_btn_txt: 'Go back to your cart', continue_btn_txt: 'Continue to checkout'})
    }
  }
  update(e,i){
      e.preventDefault();
      value[i] = e.target.value;
      
      if(value.length > 11){
          value = [];
      }
      let billing_infor = {...this.state.billing_infor}
      billing_infor.full_name = value[0];
      billing_infor.email = value[1];
      billing_infor.address = value[2];
      billing_infor.city = value[3];
      billing_infor.state = value[4];
      billing_infor.zip = value[5];
      billing_infor.name_on_card = value[6];
      billing_infor.credit_card_number = value[7];
      billing_infor.exp_month = value[8];
      billing_infor.exp_year = value[9];
      billing_infor.cvv = value[10];
      this.setState({billing_infor})


      
      
  }
  checkProperties(obj) {
     return  Object.values(obj).every(o => o !== '');
}
  isCheckoutTrue(e){
    e.preventDefault();
    this.setState({isCheckoutTrue : !this.state.isCheckoutTrue});
    if(this.state.isCheckoutTrue === false){
      document.getElementById('cart-container').style.transform = `translateX(${-1200}px)`;
      document.getElementById('cart-container').style.transition = `${1}s ease-in`;
      document.getElementById('check-out').style.transform = `translateX(${0}px)`;
      document.getElementById('check-out').style.transition = `${1}s ease-in`;
      const current_bullet = bullet[current_step - 1];
      current_bullet.classList.add('completed');
      current_step+=1;
      setTimeout(function(){
        if (document.getElementById('cart-container'))
          document.getElementById('cart-container').style.display = 'none';
        if(document.getElementById('check-out'))
          document.getElementById('check-out').style.display = 'block';
      },1000)
      bullet[1].style.backgroundColor = '#CB262F';
      bullet[1].style.border = `${1}px solid #CB262F`;
    }else{
      document.getElementById('check-out').style.transform = `translateX(${1200}px)`;
      document.getElementById('check-out').style.transition = `${1}s ease-in`;
      document.getElementById('cart-container').style.transform = `translateX(${0}px)`;
      document.getElementById('cart-container').style.transition = `${1}s ease-in`;
      current_step-=1;
      const current_bullet = bullet[current_step - 1];
      current_bullet.classList.remove('completed');
      setTimeout(function(){
        if(document.getElementById('check-out'))
          document.getElementById('check-out').style.display = 'none';
        if (document.getElementById('cart-container'))
          document.getElementById('cart-container').style.display = 'block';
      },1000)
      bullet[1].style.backgroundColor = 'grey';
      bullet[1].style.border = `${1}px solid grey`;
    }


  }

  orderSuccess(e){
    e.preventDefault();
    this.setState({orderSuccess : !this.state.orderSuccess});
    if(this.state.orderSuccess === false){
      document.getElementById('check-out').style.transform = `translateX(${-1200}px)`;
      document.getElementById('check-out').style.transition = `${1}s ease-in`;
      document.getElementById('order-success').style.transform = `translateX(${0}px)`;
      document.getElementById('order-success').style.transition = `${1}s ease-in`;
      const current_bullet = bullet[current_step - 1];
      current_bullet.classList.add('completed');
      current_step+=1;
      setTimeout(function(){
        if (document.getElementById('check-out'))
          document.getElementById('check-out').style.display = 'none';
        if(document.getElementById('order-success'))
          document.getElementById('order-success').style.display = 'block';
      },1000)
      bullet[2].style.backgroundColor = '#CB262F';
      bullet[2].style.border = `${1}px solid #CB262F`;
    }else{
      document.getElementById('order-success').style.transform = `translateX(${1200}px)`;
      document.getElementById('order-success').style.transition = `${1}s ease-in`;
      document.getElementById('check-out').style.transform = `translateX(${0}px)`;
      document.getElementById('check-out').style.transition = `${1}s ease-in`;
      current_step-=1;
      const current_bullet = bullet[current_step - 1];
      current_bullet.classList.remove('completed');
      
      setTimeout(function(){
        if (document.getElementById('order-success'))
          document.getElementById('order-success').style.display = 'none';
        if(document.getElementById('check-out'))
          document.getElementById('check-out').style.display = 'block';
      },1000)
      
      bullet[2].style.backgroundColor = 'grey';
      bullet[2].style.border = `${1}px solid grey`;
    }
  }

  render() {

    let total = 0;
    let cart_item;
    let how_many;
    let ordered; 
    if(this.props.carts){
  
      how_many = this.props.carts.length;

      ordered = this.props.carts.map((item, index)=>{
        let price = item.price.replace('$','');
        let price_number = parseFloat(price) * item.cnt;
        total+=price_number;
        return  <div className = 'each-dish-div'>
          <img src = {item.url} className = 'ordered-img'></img>
          <div className = 'operation-on-count'>
              <i class="mdi mdi-minus" style = {{marginRight:`${10}px`}} onClick = {()=>{this.props.decrementDish(item)}}></i>
              <div>{item.cnt}</div>
              <i class="mdi mdi-plus" style = {{marginLeft:`${10}px`}} onClick = {()=>{this.props.incrementDish(item)}}></i>
          </div>
          <div>{item.name}</div>
          <div className = 'price-display'>${price_number.toFixed(2)}</div>
          <div className = 'delete-btn' onClick = {()=>{
            this.props.deleteDish(item);
          }}>Delete</div>
      </div>
     
     })


     cart_item = this.props.carts.map(item=>{
      return <div>
      <p><a href="#" style = {{color: 'rgb(221, 218, 218)'}}>{item.name}</a> <span className="price">{item.price}</span></p>
      </div>
    })

    
    }
   
    return (
      <div className = 'cart-component'>
          <div className = 'cart-entire'>
          <div className = 'cart-header'>
              Your Cart
          </div>
          <div className = 'progress-bar-container'>
              <div className = 'step'>
                 <p className = 'step-text'>View Cart</p>
                 <div className = 'bullet'>1</div>
              </div>
              <div className = 'step'>
                 <p className = 'step-text'>Billing Information</p>
                 <div className = 'bullet'>2</div>
              </div>
              <div className = 'step'>
                 <p className = 'step-text'>Order Success</p>
                 <div className = 'bullet'>3</div>
              </div>
          </div>
          <div id = 'cart-container'>
          {
            this.props.carts && this.props.carts.length === 0 ?
            <div className = 'empty-cart'>
                <img src = {empty_cart}></img>
                <div className = 'empty-txt'>
                  <div className = 'empty-txt-title'>oops!</div>
                  <div className = 'empty-txt-desc'>Your Cart Is Empty...</div>
                  <p className = 'empty-txt-p'>You have no items in your shopping cart. Maybe the dish was moved or deleted. Go to the menu and order something.</p>
                </div>
               
            </div>
            :
            <div className = 'cart-body'>
            <div className = 'cart-orders'>
              {ordered}
            </div>
            {this.props.carts.length > 0?
            <div className = 'total-prices'>
            <div>Total: </div>
            <div><span>${total.toFixed(2)}</span></div>
            <div>
            <button className = 'check-out-btn' onClick = {(e)=>this.isCheckoutTrue(e)}>Pay</button>
            </div>
          </div> 
          :
          ''
          }
            
            
          
          </div> 
          }

          </div>
         
           
            <div id = 'check-out'>
              
                <div className="row">
                  <div className="col-75">
                    <div className="container">
                      <form>
                         <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label for="fname" style = {{marginTop:`${5}%`}}><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Zac M. You" onChange = {(e) => this.update(e,0)}/>
                                <label for="email"><i className="fa fa-envelope" ></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="zyou@example.com" style = {{marginTop:`${0}px`}} onChange = {(e) => this.update(e,1)}/>
                                <label for="adr"><i className="fa fa-address-card-o" ></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange = {(e) => this.update(e,2)}/>
                                <label for="city"><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York" onChange = {(e) => this.update(e,3)}/>

                         <div className="row">
                           <div className="col-50">
                              <label for="state">State</label>
                              <input type="text" id="state" name="state" placeholder="NY" onChange = {(e) => this.update(e,4)}/>
                        </div>
                        <div className="col-50">
                              <label for="zip">Zip</label>
                              <input type="text" id="zip" name="zip" placeholder="10001" onChange = {(e) => this.update(e,5)}/>
                        </div>
                    </div>
                </div>

                        <div className="col-50">
                          <h3>Payment</h3>
                          <label for="fname" style = {{marginTop:`${5}%`}}>Accepted Cards</label>
                          <div className="icon-container">
                            <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                            <i class="fa fa-cc-amex" style={{color:"blue", marginLeft:`${2}%`}}></i>
                            <i class="fa fa-cc-mastercard" style={{color:"red", marginLeft:`${2}%`}}></i>
                            <i class="fa fa-cc-discover" style={{color:"orange",marginLeft:`${2}%`}}></i>
                          </div>
                          <label for="cname">Name on Card</label>
                          <input type="text" id="cname" name="cardname" placeholder="John More Doe" onChange = {(e) => this.update(e,6)}/>
                          <label for="ccnum">Credit card number</label>
                          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange = {(e) => this.update(e,7)}/>
                          <label for="expmonth">Exp Month</label>
                          <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange = {(e) => this.update(e,8)}/>

                        <div className="row">
                          <div className="col-50">
                            <label for="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018" onChange = {(e) => this.update(e,9)}/>
                          </div>
                          <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" onChange = {(e) => this.update(e,10)}/>
                          </div>
                        </div>
                      </div>

        </div>
                <label>
                  <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                </label>
                <div className = 'submit-btn-container'>
                  <button id = 'button-2' className="btn-1" style = {{backgroundColor:'#CB262F'}} onClick = {(e)=>this.isCheckoutTrue(e)}>{this.state.go_back_btn_txt}</button>
                  <button id = 'button-1' disabled = {!this.checkProperties(this.state.billing_infor)} className="btn" onClick = {(e)=>this.orderSuccess(e)}>{this.state.continue_btn_txt}</button>
                </div>
                  
                
                </form>
              </div>
            </div>

            <div className="col-25" style = {{padding: `${16}px`}}>
              <div className="container">
                <h4>Cart
                  <span className="price">
                    <i className="fa fa-shopping-cart" style = {{color: 'rgb(221, 218, 218)'}}></i>
                    <b style = {{paddingLeft:`${10}px`, color:'rgb(221, 218, 218)'}}>{how_many}</b>
                  </span>
                </h4>
               
                {cart_item}
                
                <p>Total <span className="price"><b style = {{color: 'red'}}>${total.toFixed(2)}</b></span></p>
              </div>
            </div>
          </div>
            
            
            
            </div>    
            
            <div id = 'order-success'>
              <button onClick = {(e)=>{this.orderSuccess(e)}} className = 'order-go-back-btn'>Back</button>
              <div className = 'confirmation-message'>
                Order success for <span style = {{color: '#CB262F'}}>{this.state.billing_infor.full_name}</span>. Your dishes will be delivered to <span style = {{color : '#CB262F'}}>{this.state.billing_infor.address + ' ' + this.state.billing_infor.city + ', ' + this.state.billing_infor.state + ' ' + this.state.billing_infor.zip}</span>  shortly.
              </div>
            </div>
         
         
     

          </div>
          
          </div>   
               
    )
  }
}
const mapStateToProps = (state) => {
    return {
      carts: state.carts
    };
  }
const mapDispatchToProps = dispatch =>{
  return {
    deleteDish: (item) =>{
      dispatch({type:DELETE_DISH,  payload: item})
    },
    incrementDish : (item)=>{
      dispatch({type: INCREMENT, payload: item})
    },
    decrementDish : (item)=>{
      dispatch({type: DECREMENT, payload: item})
    }
  }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);