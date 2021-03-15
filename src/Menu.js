import React, { Component } from 'react';
import { connect } from "react-redux";
import './css_doc/Menu.css';
import chowMein from './sushi_assets/Chow-mein.jpg';
import orangeChicken from './sushi_assets/orange-chicken.jpg';
import coconutShrimp from './sushi_assets/coconut-shrimp.jpg';
import broccoliBeef from './sushi_assets/broccoli-beef.jpg';
import barbequePork from './sushi_assets/barbeque-pork.jpeg';
import crawfish from './sushi_assets/crawfish.jpeg';
import bun from './sushi_assets/bun.jpeg';
import wonton_soup from './sushi_assets/wonton-soup.jpeg';
import breakfast from './sushi_assets/breakfast.png';
import lunch from './sushi_assets/lunch.png';
import dinner from './sushi_assets/dinner.png';
import drinks from './sushi_assets/drinks.png';
import combo_1 from './sushi_assets/combo-1.jpg';
import combo_2 from './sushi_assets/combo-2.jpg';
import combo_3 from './sushi_assets/combo-3.jpg';
import combo_4 from './sushi_assets/combo-4.jpg';
import combo_5 from './sushi_assets/combo-5.jpg';
import combo_6 from './sushi_assets/combo-6.jpg';
import soda from './sushi_assets/soda.png';
import lemonade from './sushi_assets/lemonade.png';
import orange_juice from './sushi_assets/orange-juice.png';
import stir from './sushi_assets/stir fried.jpg';
import steam_fish from './sushi_assets/steam fish.jpg';
import meat_ball from './sushi_assets/meat ball.jpg';
import kong_bao from './sushi_assets/kong bao.jpg';
import spring_roll from './sushi_assets/spring roll.jpg';
import egg_sushi from './sushi_assets/egg sushi.jpg';
import buns from './sushi_assets/buns.jpeg';
import fanta from './sushi_assets/fanta.png';
import {ADD_CART} from './constants/action-types';
import store from './store/index';


class Menu extends Component {
  constructor(){
    super();
    this.openMenu = this.openMenu.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggleOpen: false,
      carts:[],
      breakfast_dishes:{
        dishes:[
         {url:orangeChicken, name: "Orange Chicken", price:'$7.99', description: "Sweet and tender orange chicken that will never disappoint you.", cnt:0},
         {url:broccoliBeef, name: "Broccoli Beef", price: '$8.99', description: "Tender and juicy beef served along with broccoli and rice.", cnt:0},
         {url:barbequePork, name: "Barbeque Pork", price: '$7.99', description: "Marinated pork with sweet barbeque sauce along with green onion.",cnt:0},
         {url:coconutShrimp, name: "Coconut Shrimp", price:'$9.99', description: "Fresh shrimp with mayo and sweet sauce along with green onion",cnt:0},
         {url:chowMein, name: "Beef Chow Mein", price: "$6.99", description: "Noodle fried with tender beef and vegetables along with soy sauce.",cnt:0},
         {url:stir, name: "Stir Fried Everything", price: "$7.99", description: "Shrimp fried with tender beef and vegetables along with soy sauce.",cnt:0},
         {url: spring_roll, price: '$4.99', name: 'Spring Roll', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily.',cnt:0},
         {url: egg_sushi, price: '$5.99', name: 'Spring Roll', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily.',cnt:0},

        ] 
       },
       lunch_dishes:{
         dishes:[
           {url: combo_1, price: '$10.99', name: 'Combo 1', description: 'A crispy stone-baked base is the foundation for velvety tomato sauce and.',cnt:0 },
           {url: combo_2, price: '$7.99', name: 'Combo 2', description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shanke.',cnt:0},
           {url: combo_3, price: '$8.99', name: 'Combo 3', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.  etc.',cnt:0},
           {url: combo_4, price: '$7.99', name: 'Combo 4', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy. Talk.',cnt:0},
           {url: combo_5, price: '$6.99', name: 'Combo 5', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.',cnt:0},
           {url: combo_6, price: '$8.99', name: 'Combo 6', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},

         ],
       },
       dinner_dishes:{
          dishes:[
            {url: steam_fish, price: '$8.99', name: 'Steam Fish', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},
            {url: kong_bao, price: '$7.99', name: 'Kong Bao Chicken', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},
            {url: meat_ball, price: '$8.99', name: 'Meat Ball', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},
            {url: buns, price: '$7.99', name: 'Buns', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},

          ]
       },
       drink_list:[
          {url: soda, price: '$1.99', name: 'Pepsi',cnt:0},
          {url: lemonade, price:'$1.99', name: 'Lemonade',cnt:0},
          {url: orange_juice, price: '$2.99', name: 'Orange Juice',cnt:0},
          {url: fanta, price:'$1.99', name: "Fanta",cnt:0},
       ],
      
    }
  }
  componentDidMount(){
    document.getElementById("defaultOpen").click();
    console.log(window.innerWidth);
  }
  toggle(){
    // this.setState({toggleOpen : !this.state.toggleOpen});
    // if(this.state.toggleOpen === false){
    //   document.getElementById('cart-div-two').style.display = `block`;

    // }
    // else{
    //   document.getElementById('cart-div-two').style.display = `none`;
    // }
  }
  // addToCard(e, item){
  //   this.setState(prevState => ({
  //     cart_arr: [...prevState.cart_arr, item]
  //   }))
  // }
  openMenu(e, foodType) {
    let elem =  document.querySelectorAll('.menu-content-container .active');
    [].forEach.call(elem, function(el){
      el.classList.remove('active');
    });
   
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("menu-tabcontent");
    
    
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
   
   
    tablinks = document.getElementsByClassName("menu-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
        document.getElementById(foodType).style.display = "block";
        document.getElementById(foodType).classList.add('active');
      
   
    e.currentTarget.className += " active";
  }
 
  render() {
    console.log(this.props.carts);
    const breakfast_images = this.state.breakfast_dishes.dishes.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "menu-food-img"/>
                  <div className = "menu-food-name-price">
                  <div style = {{display:'flex', alignItems:'center',justifyContent: 'space-between'}}>
                    <div>
                      <div>{each.name}</div>
                      <div style = {{color:'red'}}>{each.price}</div>
                    </div>
                    <div className = 'order-btn-div'>
                      <button className = 'order-btn' onClick={()=>this.props.addToCard(each)}>Add to Cart</button>
                    </div>
                    
                  </div>
                  <div className = "description-box">{each.description}</div>
                  </div>
                
                </div>
                
             </li>
   });
    const lunch_images = this.state.lunch_dishes.dishes.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "menu-food-img"/>
                  <div className = "menu-food-name-price">
                  <div style = {{display:'flex', alignItems:'center',justifyContent: 'space-between'}}>
                    <div>
                      <div>{each.name}</div>
                      <div style = {{color:'red'}}>{each.price}</div>
                    </div>
                    <div className = 'order-btn-div'>
                      <button className = 'order-btn'  onClick={()=>this.props.addToCard(each)}>Add to Cart</button>
                    </div>
                    
                  </div>
                  
                  <div className = "description-box">{each.description}</div>
                </div>
                
                </div>
                
            </li>
  });
  const dinner_images = this.state.dinner_dishes.dishes.map((each, index)=>{
    return <li>
              <div className = "food-name-price-pic">
                <img src = {each.url} className = "menu-food-img"/>
                <div className = "menu-food-name-price">
                <div style = {{display:'flex', alignItems:'center',justifyContent: 'space-between'}}>
                  <div>
                    <div>{each.name}</div>
                    <div style = {{color:'red'}}>{each.price}</div>
                  </div>
                  <div className = 'order-btn-div'>
                    <button className = 'order-btn'  onClick={()=>this.props.addToCard(each)}>Add to Cart</button>
                  </div>
                  
                </div>
                
                <div className = "description-box">{each.description}</div>
              </div>
              
              </div>
              
          </li>
});
    const drink_list = this.state.drink_list.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "menu-drink-img"/>
                  <div className = "menu-food-name-price">
                  <div style = {{display:'flex', alignItems:'center',justifyContent: 'space-between'}}>
                    <div>
                      <div>{each.name}</div>
                      <div style = {{color:'red'}}>{each.price}</div>
                    </div>
                    <div className = 'order-btn-div'>
                      <button className = 'order-btn'  onClick={()=>this.props.addToCard(each)}>Add to Cart</button>
                    </div>
                    
                  </div>
                  </div>
                
                </div>
                
            </li>
  });
    return (
      <div className = 'menu-component'>
         <div className = 'menu-header'>
            <div>MENU</div>
         </div>
         <div id="snackbar">Added dish succesfully to your cart.</div>
         <div className = 'menu-body'>
           <div className = 'menu-img'>
             <div className = 'menu-tab-navs'>
                <button class="menu-tablinks" onClick={(e)=>this.openMenu(e, 'Breakfast')}  id="defaultOpen">Breakfast</button>
                <button class="menu-tablinks" onClick={(e)=>this.openMenu(e, 'Lunch')}>Lunch</button>
                <button class="menu-tablinks" onClick={(e)=>this.openMenu(e, 'Dinner')}>Dinner</button>
                <button class="menu-tablinks" onClick={(e)=>this.openMenu(e, 'Drink')}>Drinks</button>
             </div>
                
                
                <div className = 'body_1'>

                    <div class = "menu-content-container">
                          <div id="Breakfast" class="menu-tabcontent">
                            {breakfast_images}
                          </div>

                          <div id="Lunch" class="menu-tabcontent">
                            {lunch_images}
                          </div>

                          <div id="Dinner" class="menu-tabcontent">
                            {dinner_images}
                          </div>

                          <div id="Drink" class="menu-tabcontent">
                            {drink_list}
                          </div>
                    </div>


                    {/* <div class = 'cart-div'>
                      <div className = 'view-item' onClick = {this.toggle}>
                        {this.state.toggleOpen === true? <i class="mdi mdi-close"></i>: <i class="mdi mdi-chevron-double-left"></i>}
                      </div>
                      <div id = 'cart-div-two' className = 'cart-div-two'>
                          <div className = 'infor-title-1'>
                             <i class="mdi mdi-information-outline"></i>
                              <div>
                              Your Order
                              </div>
                              </div>
                            <div className = 'cart-icon-1'>
                              <i class="mdi mdi-cart"></i>
                            </div>
                            <div className = 'order-detail-1'>
                              {this.props.carts.length>0?'You ordered ' + this.cntMenu(this.props.carts)+ ' items' : 'Cart is empty. Add items'}
                            </div>
                            <div>
                              <button className = 'go-to-cart-btn-1' href = '/Cart'>Go to Cart</button>
                            </div>
                      </div>
                        <div className = 'cart-div-one'>
                            <div className = 'infor-title'>
                            <i class="mdi mdi-information-outline"></i>
                              <div>
                              Your Order
                              </div>
                              </div>
                            <div className = 'cart-icon'>
                              <i class="mdi mdi-cart"></i>
                            </div>
                            <div className = 'order-detail'>
                              {this.props.carts.length>0?'You ordered ' + this.cntMenu(this.props.carts) + ' items' : 'Cart is empty. Add items'}
                            </div>
                            <div>
                              <button className = 'go-to-cart-btn' href = '/Cart'>Go to Cart</button>
                            </div>
                        </div>
                        </div>
                        
                          */}
                        
                        
                       
                   
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
    addToCard: (item) =>{
      let x = document.getElementById('snackbar');
      x.className = "show";
      setTimeout(function(){
        x.className = x.className.replace('show', '')
      },2000);
      dispatch({type:ADD_CART,  payload: item})
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)