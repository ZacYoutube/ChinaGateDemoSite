import React, { Component } from 'react'
import Toolbar from './Toolbar';
import './css_doc/Home.css';
import './css_doc/Toolbar.css';
import fish from './sushi_assets/fish.png';
import sushi from './sushi_assets/Chinese food.png';
import pep from './sushi_assets/pep2.png';
import pep2 from './sushi_assets/pep3.png';
import pep3 from './sushi_assets/pep4.png';
import mushroom from './sushi_assets/pep5.png';
import logo from './sushi_assets/logo.png';
import profile_1 from './sushi_assets/profile-1.png';
import profile_2 from './sushi_assets/profile-2.png';
import profile_3 from './sushi_assets/profile-3.png';
import profile_4 from './sushi_assets/profile-4.png';
import profile_5 from './sushi_assets/profile-5.png';
import profile_6 from './sushi_assets/profile-6.png';
import pepper from './sushi_assets/pepper.png';
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
import steam_fish from './sushi_assets/steam fish.jpg';
import kong_bao from './sushi_assets/kong bao.jpg';
import party_1 from './sushi_assets/party-tray-1.jpg';
import party_2 from './sushi_assets/party-2.png';
import party_icon from './sushi_assets/party-icon.png';
import event from './sushi_assets/event.png';
import soda from './sushi_assets/soda.png';
import lemonade from './sushi_assets/lemonade.png';
import orange_juice from './sushi_assets/orange-juice.png';
import fanta from './sushi_assets/fanta.png';
import coming_soon from './sushi_assets/coming-soon.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from 'react-star-ratings';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MapView from './MapView';
import Footer from './Footer';



export default class Home extends Component 
{
 
  constructor(){
    super();
    this.windowScroll = this.windowScroll.bind(this);
    // this.navListener = this.navListener.bind(this);
    this.listenForWindowSize = this.listenForWindowSize.bind(this);
    this.setSize = this.setSize.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.cycle = this.cycle.bind(this);
    this.state = {
     intervalId:'',
     products : [
        {
          img: profile_1,
          title: "Zac You's Review",
          text: "I've had this food b4 nd it is always so good, this time I didn't just order Shrimp Fried Rice, I ordered some Won Ton Soup, it was the best too.",
          rating: 4,
        },
        {
          img: profile_2,
          title: "Mike He's Review",
          text: 'Their fried combination fried rice is delicious and tasty but barely has any meat ... basically almost $9 for rice and about 8 shrimps plus bits of chicken beef and pork.',
          rating: 2.5,
        },
        {
          img: profile_3,
          title: "Sherley Feng's Review",
          text: 'Fresh and affordable. Made to order. Mongolian beef is my favorite. But the combo fried rice is awesome too.',
          rating: 4.5
        },
        {
          img: profile_4,
          title: "Lucas Zeng's Review",
          text: "I have been going to China Gate for years. I always get the combination fried rice. Thg hospital time for some reason, it had a lot of green onions in it and they were cut huge.",
          rating: 1
        },
        {
          img: profile_5,
          title: "Kai Fu's Review",
          text: "Just tried this place for the first time..hands down the best egg foo young I've had thus far.Great service!Will be back to try other items.",
          rating: 5
        },
        {
          img: profile_6,
          title: "Henry You's Review",
          text: 'The food is decent but the location is sketchy and always drug addicts and homeless folks near by begging for money.',
          rating: 3.5
        },
    ],
    settings :{
      className: "center",
      dots: true,
      dotsClass:'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      variableHeight: true,
      cssEase: 'linear',
      arrows: true,
      centerMode: true, // enable center mode
      centerPadding: '0' // set center padding,
      ,
      autoplay:true,
      
      },
    breakfast_dishes:{
       dishes:[
        {url:orangeChicken, name: "Orange Chicken", price:'$7.99', description: "Sweet and tender orange chicken that will never disappoint you."},
        {url:broccoliBeef, name: "Broccoli Beef", price: '$8.99', description: "Tender and juicy beef served along with broccoli and rice."},
        {url:barbequePork, name: "Barbeque Pork", price: '$7.99', description: "Marinated pork with sweet barbeque sauce along with green onion."},
        {url:coconutShrimp, name: "Coconut Shrimp", price:'$9.99', description: "Fresh shrimp with mayo and sweet sauce along with green onion"},
        {url:chowMein, name: "Beef Chow Mein", price: "$6.99", description: "Noodle fried with tender beef and fresh vegetables along with soy sauce."}
       ] 
      },
      lunch_dishes:{
        dishes:[
          {url: combo_1, price: '$10.99', name: 'Combo 1', description: 'A crispy stone-baked base is the foundation for velvety tomato sauce and.' },
          {url: combo_2, price: '$7.99', name: 'Combo 2', description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shanke.'},
          {url: combo_3, price: '$8.99', name: 'Combo 3', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.  etc.'},
          {url: combo_4, price: '$7.99', name: 'Combo 4', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy. Talk.'},
          {url: combo_5, price: '$6.99', name: 'Combo 5', description: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.'},
          {url: combo_6, price: '$8.99', name: 'Combo 6', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, etc.'},

        ],
      },
      dinner_dishes:{
        dishes:[
          {url: steam_fish, price: '$8.99', name: 'Steam Fish', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},
          {url: kong_bao, price: '$7.99', name: 'Kong Bao Chicken', description: 'Soft textures - smooth, silky, unctuous, coating, tender, oily, roasty, etc.',cnt:0},
        ]
     },
      drink_list:[
         {url: soda, price: '$1.99', name: 'Pepsi'},
         {url: lemonade, price:'$1.99', name: 'Lemonade'},
         {url: orange_juice, price: '$2.99', name: 'Orange Juice'},
         {url: fanta, price:'$1.99', name: "Fanta"},
      ],

      tab:[
        {url:breakfast, name:"Breakfast"},
        {url:lunch, name:"Lunch"},
        {url:dinner, name:"Dinner"},
        {url:drinks, name:"Drinks"},
      ],
      party_size:[
        {url:party_1, title:'Birthday Party Size Tray', price:'$95.99',description:'With party trays of broccoli beef, orange chicken, spring rolls and butter fried shrimp. Tasty and juicy!! Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'},
        {url:party_2, title:'Birthday Celebration Event', price: '$5.99', description:'Our staffs are more than happy to start the vibe for the birthday celebration mood. We will start singing birthday songs, providing cakes, and free side dishes to the person who is celebrating.'},
      ],
      slider_width: null
        
      
  

  }
  }
  
  componentDidMount(){
      window.addEventListener("resize", this.listenForWindowSize);
    // this.navListener();
    if(window.innerWidth < 500){
      this.setState({slider_width: 90});
    }else{
      this.setState({slider_width: 47});
    }
      this.windowScroll(); 
      this.setSize();
      this.cycle();
      window.addEventListener("resize", this.setSize);
      document.getElementById("defaultOpen").click();
  }

  listenForWindowSize(){
    if(window.innerWidth < 500){
      this.setState({slider_width: 90});
    }else{
      this.setState({slider_width: 47});
    }
  }

  componentWillUnmount(){
    // this.navListener();
    this.windowScroll();
    window.removeEventListener("resize", this.setSize)
    document.getElementById("defaultOpen").click();
    clearInterval(this.state.intervalId)

  }
 
  setSize(){
      let circle = document.getElementById('main').children[1].children[0].children[0];
      let food = document.getElementById('main').children[1].children[0].children[1];
      let china = document.getElementById('main').children[2];
      let gate = document.getElementById('main').children[3];
      let fish = document.getElementById('main').children[0].children[0];
        // circle.style.width = window.innerWidth/4;
        // circle.style.height = window.innerWidth/4;
        console.log(window.innerWidth);

       

  }
  windowScroll(){
     
    //   let main = document.getElementById('main');
    //   let about = document.getElementById('about');
    //   let project = document.getElementById('project');
     
    //   window.onscroll = function(){
    //     let distanceToTop = document.documentElement.scrollTop;
    //     main.style.opacity = 1 - distanceToTop/1000;
    //     if(window.getComputedStyle(main).getPropertyValue("opacity") < 0.2){
    //       about.style.opacity = 1 - (distanceToTop/(window.innerWidth<1200?2150:1200) - 0.7)
          
    //     }
    //     // if(window.getComputedStyle(about).getPropertyValue("opacity")< 0.3){
         
    //     //   project.style.opacity = 1 - (distanceToTop/(window.innerWidth<=1200?2800:2000) - 0.9 )
    //     // }
    //     // console.log(window.getComputedStyle(about).getPropertyValue("opacity"))
      
      
    // }
   

  }
  openMenu(e, foodType) {
  
    let elem =  document.querySelectorAll('.content-container .active');
    [].forEach.call(elem, function(el){
      el.classList.remove('active');
    })

  
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(foodType).style.display = "block";
    document.getElementById(foodType).classList.add('active');
    e.currentTarget.className += " active";
  }



  cycle(){
    let nav = document.querySelector('.tab').firstChild;
    let tab = document.getElementById('Breakfast');
    tab.classList.add('active');
    nav.classList.add('active');
    
    let intervalId = setInterval(function(){
     
      let navStack = document.querySelector('.tab .active');
      let content = document.querySelectorAll('.content-container .active');
      // console.log(content);

      if(navStack === navStack.parentNode.lastChild){
         navStack.classList.remove('active');
          navStack.parentNode.firstChild.classList.add('active');
          content[0].classList.remove('active');
          content[0].parentNode.firstChild.classList.add('active');
          document.getElementById(content[0].id).style.display = "none";
          document.getElementById(content[0].parentNode.firstChild.id).style.display = "block";
      }
      else{
        navStack.classList.remove('active');
        navStack.nextSibling.classList.add('active');
        content[0].classList.remove('active');
        content[0].nextSibling.classList.add('active');
        document.getElementById(content[0].id).style.display = "none";
        document.getElementById(content[0].nextSibling.id).style.display = "block";
      }
    },6000)

    this.setState({intervalId: intervalId});
  }
    
    
  // }
  render() {
   
    const breakfast_images = this.state.breakfast_dishes.dishes.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "food-img"/>
                  <div className = "food-name-price">
                  <div>{each.name}</div>
                  <div style = {{color:'red'}}>{each.price}</div>
                  <div className = "description-box">{each.description}</div>
                  </div>
                
                </div>
                
             </li>
   });
    const lunch_images = this.state.lunch_dishes.dishes.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "food-img"/>
                  <div className = "food-name-price">
                  <div>{each.name}</div>
                  <div style = {{color:'red'}}>{each.price}</div>
                  <div className = "description-box">{each.description}</div>
                </div>
                
                </div>
                
            </li>
  });
  const dinner_images = this.state.dinner_dishes.dishes.map((each, index)=>{
    return <li>
              <div className = "food-name-price-pic">
                <img src = {each.url} className = "food-img"/>
                <div className = "food-name-price">
                <div>{each.name}</div>
                <div style = {{color:'red'}}>{each.price}</div>
                <div className = "description-box">{each.description}</div>
              </div>
              
              </div>
              
          </li>
});
    const drink_list = this.state.drink_list.map((each, index)=>{
      return <li>
                <div className = "food-name-price-pic">
                  <img src = {each.url} className = "drink-img"/>
                  <div className = "food-name-price">
                  <div>{each.name}</div>
                  <div style = {{color:'red'}}>{each.price}</div>
                  </div>
                
                </div>
                
            </li>
  });
    return (

          <div id = 'home-div' className = 'home'>
          
          <div id = 'main' className = 'first-section'>
        
                    <div className = "container-fish">
                        <img src = {fish} className = "fish_pic"/> 
                    </div>
                    
                    <div className = "container-sushi">
                        <div className = "container-inner">
                            {/* <div id = "circle" className = "back-red-circle"></div> */}
                            <img src = {sushi} className = "sushi_pic"/>
                        </div>
                        
                    </div>
                    <div className = "brand-name">
                        Chi<span className = "on-top">na</span>
                    </div>
                    <div className = "brand-name-1">
                        Gate
                    </div>
                    <div>
                      <img src = {pep} className = 'pep'/>
                    </div>
                    <div>
                      <img src = {pep2} className = 'pep2'/>
                    </div>
                    <div>
                      <img src = {pep3} className = 'pep3'/>
                    </div>
                    <div>
                      <img src = {mushroom} className = 'pep4'/>
                    </div>
                  
                    <div className = "second-fish">
                        <img src = {fish} className = "fish_pic_1"/> 
                    </div>
            
          
          <div class="arrow bounce"> 
            <a className = 'fa fa-angle-down fa-3x' href = '#second'/>
         </div>

        </div>

          <div id = 'second' className = 'second-section'>
          
          <Slider {...this.state.settings} className = "slider">
          {
            this.state.products.map((x,i)=>{
              return (
                  
                    <div key="{i}"  style = {{width:`${this.state.slider_width}vw`}} className = "img-card">
                    <img className = "img" src = {x.img}></img>
                    <div className = "card-body">
                      <div className = "card-title">{x.title}</div>
                      <div className = "card-text">{x.text}</div>
                      <div className = "rating">
                      <StarRatings
                            rating={x.rating}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            name='rating'
                            starDimension={20}
                          />
                    </div>
                    </div>
                   
                    
                 </div>

            )})
          }
          </Slider>

          </div>

          <div id = 'third' className = 'third-section'>

            <div className = "hot-dish-container">
              <img src = {pepper} className = 'pepper-img'></img>
               <div className = "title"><span style = {{color: "red"}}>Hot</span> Dishes</div>
            </div>
            <div className = "container-line">
            </div>
            
            <div className = 'dishes-container'>
             
                  <div className = "slide-container">
                  <div className = "popular-title-container">
                  <div className = "select-meal">SELECT YOUR MEAL</div>
                  <div className = "popular-dish">
                        <div>Popular<span style = {{color:'red'}}> Foods</span></div>
                    </div>
                  </div>
                  <div className= "tab-container">
                  <div class="tab">
                        <button class="tablinks" onClick={(e)=>this.openMenu(e, 'Breakfast')} id="defaultOpen"><img src = {breakfast} className = "tab-icons"/>Breakfast</button>
                        <button class="tablinks" onClick={(e)=>this.openMenu(e, 'Lunch')}><img src = {lunch} className = "tab-icons"/>Lunch</button>
                        <button class="tablinks" onClick={(e)=>this.openMenu(e, 'Dinner')}><img src = {dinner} className = "tab-icons"/>Dinner</button>
                        <button class="tablinks" onClick={(e)=>this.openMenu(e, 'Drinks')}><img src = {drinks} className = "tab-icons"/>Drinks</button>
                      </div>
                  <div class = "content-container">

                    <div id="Breakfast" class="tabcontent">
                          <h2>Breakfast</h2>
                          <ul>
                          {breakfast_images}
                          </ul>
                        </div>

                      <div id="Lunch" class="tabcontent">
                        <h2>Lunch</h2>
                        <ul>
                          {lunch_images}
                        </ul>
                      </div>

                      <div id="Dinner" class="tabcontent" >
                        <h2>Dinner</h2>
                        <ul>
                          {dinner_images}
                        </ul>
                      </div>

                      <div id="Drinks" class="tabcontent">
                        <h2>Drinks</h2>
                        <ul>
                         {drink_list}
                        </ul>
                      </div>
                  </div>
                      
                    
                    
                  </div>  
                     
                  <div>
                  

                        {/* <Slide easing="ease">
                      {
                        this.state.breakfast_dishes.dishes.map((each, index) => 
                        <div className="each-slide">
                          <div style={{'backgroundImage': `url(${each.url})`,opacity:0.8}}>
                            <span className = "popular-name">{each.name}</span>
                          </div>
                      </div>)
                      }
                        </Slide> */}
                    </div>
                  </div>
                 
                    {/* <div className = "special-dish-container">
                    <div className = "special-dish">
                      <div className = 'word-box'><span style = {{color:'red'}}>Special</span> Dishes</div>
                      <div className = "star"><img src="https://img.icons8.com/fluent/30/000000/star.png"/></div>
                    </div>
                    <div className = "special-image">
                    {
                      this.state.lunch_dishes.dishes.map((each, index)=>
                          <div className = "special-image-three">
                              <img src = {each.src} className = "special-img"></img>
                              <div className = "special-price">{each.name}: <span className = "long-line"></span>${each.price}</div>
                              <p className = "food-description">
                                {each.description}
                              </p>
                          </div>
                      
                      )}
                    </div>
                  </div> */}
           
                      
                 
             
              
              </div>
            {/* <div className = "view-menu-btn-container"><button className = "view-menu-btn">View Full Menu</button></div> */}
        </div>
          <div id = 'fourth' className = 'fourth-section'>
            <div className = "party-size-title">
                <img src = {party_icon} className = 'party-icon-img'/>
                <div className = "party-title">Enjoy <span style = {{color: "red"}}>Special Offers</span></div>
    
              
            </div>
            {/* <div className = "container-line"/> */}
            <div className = "text-under-party-title-container"> <div className = "text-under-party-title">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div></div>       
            <Slider {...this.state.settings} style = {{marginTop:`${5}%`}}>
            {
              this.state.party_size.map((x,i)=>{
                return (
                      
                      <div key="{i}" style = {{width:`${100}vw`}} className = "img-card-1">
                        <img className = "img-1" src = {x.url}></img>
                        <div className = "card-body-1">
                          <div className = "card-title-1">{x.title}</div>
                          <div className = 'pricing-event'>{x.price}</div>
                          <div className = "card-text-1">{x.description}</div>

                        <div className = "check-section-container" >
                            <div className = "check-section">
                              <i class="mdi mdi-check"  style={{color:'white',fontSize:'large'}}></i>
                              <span> Enough amount of food </span>
                              </div>
                              <div className = "check-section">
                              <i class="mdi mdi-check"  style={{color:'white',fontSize:'large'}}></i>
                              <span> Reasonable pricing for the combos </span>
                              </div>
                              <div className = "check-section">
                              <i class="mdi mdi-check"  style={{color:'white',fontSize:'large'}}></i>
                              <span> Excessive happiness and joy with your friends and family </span>
                              </div>

                        </div>
                          
                        </div>
                    
                      
                  </div>

              )})
            }
            </Slider>
          </div>
          <div className = 'download-button'>
            {/* <Button href = {pdf_file} download = 'Resume Zac You.pdf' style = {{backgroundColor: '#088A68', border:'none'}}>Download My Resume</Button> */}
          </div>
          <div id = 'footer'>
            
          </div>
      </div>
  
  
       
  
     
    )
  }
}