import React, { Component } from 'react';
import './css_doc/About.css';
import background from './sushi_assets/about-background.jpg';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import few_cloud_day from './amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg';
import few_cloud_night from './amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
import cloudy from './amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import day from './amcharts_weather_icons_1.0.0/animated/day.svg';
import night from './amcharts_weather_icons_1.0.0/animated/night.svg';
import rain from './amcharts_weather_icons_1.0.0/animated/rainy-7.svg';
import food from './sushi_assets/china-gate.png';
import haze from './sushi_assets/fog.svg';
import wind from './sushi_assets/wind.svg';






export default class About extends Component {
  constructor(){
    super();
    this.isTodayAndOpen = this.isTodayAndOpen.bind(this);
    this.isDay = this.isDay.bind(this);
    this.getWeekDay = this.getWeekDay.bind(this);
    this.getDateString = this.getDateString.bind(this);
    this.parseIntegerAndAdd = this.parseIntegerAndAdd.bind(this);
    this.choose_us_cycle = this.choose_us_cycle.bind(this);
    this.state = {
      intervalId:'',
      isTodayAndOpen:'',
      data:{
        key: 'a96994f7525234b7eeb78b4c6f1860ac',
      },
      weather_response: null,
      weather_forecast: null,
      forecast: {
          day_1_temp_cel: null,
          day_1_temp_fah: null,
          day_2_temp_cel: null,
          day_2_temp_fah: null,
          day_3_temp_cel: null,
          day_3_temp_fah: null,
          day_1_day: null,
          day_2_day: null,
          day_3_day: null,
          day_1_desc: null,
          day_2_desc: null,
          day_3_desc: null,


      },
      temp_cel: null,
      temp_fah: null,
      today: null,
      isDay : false,
    }
  }
  componentDidMount(){
    console.log(window.innerWidth);
    this.choose_us_cycle();
    this.isTodayAndOpen();
    this.isDay();
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=5397603&APPID=${this.state.data.key}`)  
      .then(response => response.json()) // Convert data to json
      .then( data =>{
        this.setState({ weather_response: data});
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
        let today = this.getDateString(data.dt);
        this.setState({temp_cel : celcius + 'ºC' , temp_fah : fahrenheit + 'ºF', today : today});
        let description = data.weather[0].description;
        if( description.includes('rain') ) {
                document.getElementById('weather-img').src = rain;
        } else if( description.includes('cloud') ) {
            if(description.includes('few clouds')){
              if(this.state.isDay === true){
                document.getElementById('weather-img').src = few_cloud_day;
              } 
              else{
                document.getElementById('weather-img').src = few_cloud_night;
            }
          }
          else{
            document.getElementById('weather-img').src = cloudy;
          }
        } else if( description.includes('sunny') ) {
            if(this.state.isDay === true){
              document.getElementById('weather-img').src = day;
            }else{
              document.getElementById('weather-img').src = night;
            }
        } else if( description.includes('clear')){
          if(this.state.isDay === true){
              document.getElementById('weather-img').src = day;
            }else{
              document.getElementById('weather-img').src = night;
            }

        }
        else if(description.includes('haze')){
          document.getElementById('weather-img').src = haze;
          document.getElementById('weather-img').style.width = `${50}px`;
          document.getElementById('weather-img').style.height = `${110}px`
          document.getElementById('weather-img').style.marginRight = `${20}px`;
        }
        else if(description.includes('wind')){
          document.getElementById('weather-img').src = wind;
          document.getElementById('weather-img').style.width = `${50}px`;
          document.getElementById('weather-img').style.height = `${110}px`
          document.getElementById('weather-img').style.marginRight = `${20}px`;
        }
      } 
       
      )
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5397603&appid=${this.state.data.key}`)
      .then(response => response.json())
      .then(data => {
        let day_1_index, day_2_index, day_3_index;
        let exact_date_string = this.getDateString(data.list[0].dt);

        let day_1_str = this.parseIntegerAndAdd(exact_date_string, 1);
        let day_2_str = this.parseIntegerAndAdd(exact_date_string, 2);
        let day_3_str = this.parseIntegerAndAdd(exact_date_string, 3);
        
        data.list.forEach((item, index)=>{
            if(item.dt_txt === `${day_1_str} 12:00:00`){
              day_1_index = index;
            }
            else if(item.dt_txt === `${day_2_str} 12:00:00`){
              day_2_index = index;
            }
            else if(item.dt_txt === `${day_3_str} 12:00:00`){
              day_3_index = index;
            }
        })
        this.setState({weather_forecast : data});
        let celcius_day1 = Math.round(parseFloat(data.list[day_1_index].main.temp)-273.15);
        let fahrenheit_day1 = Math.round(((parseFloat(data.list[day_1_index].main.temp)-273.15)*1.8)+32);
        let celcius_day2 = Math.round(parseFloat(data.list[day_2_index].main.temp)-273.15);
        let fahrenheit_day2 = Math.round(((parseFloat(data.list[day_2_index].main.temp)-273.15)*1.8)+32);
        let celcius_day3 = Math.round(parseFloat(data.list[day_3_index].main.temp)-273.15);
        let fahrenheit_day3 = Math.round(((parseFloat(data.list[day_3_index].main.temp)-273.15)*1.8)+32);
        let date_1_timestamp = data.list[4].dt;
        let date_1 = new Date(date_1_timestamp * 1000);
        let day_1 = date_1.getDay();

        let date_2_timestamp = data.list[12].dt;
        let date_2 = new Date(date_2_timestamp * 1000);
        let day_2 = date_2.getDay();

        let date_3_timestamp = data.list[20].dt;
        let date_3 = new Date(date_3_timestamp * 1000);
        let day_3 = date_3.getDay();

        this.setState(prevState => {
          let forecast = Object.assign({}, prevState.forecast);  // creating copy of state variable forecast
          forecast.day_1_temp_cel = celcius_day1;                     // update the property, assign a new value                 
          forecast.day_1_temp_fah = fahrenheit_day1; 
          forecast.day_2_temp_cel = celcius_day2; 
          forecast.day_2_temp_fah = fahrenheit_day2; 
          forecast.day_3_temp_cel = celcius_day3; 
          forecast.day_3_temp_fah = fahrenheit_day3;
          forecast.day_1_day = this.getWeekDay(day_1).substring(0,3);
          forecast.day_2_day = this.getWeekDay(day_2).substring(0,3);
          forecast.day_3_day = this.getWeekDay(day_3).substring(0,3);
          forecast.day_1_desc = data.list[day_1_index].weather[0].description;
          forecast.day_2_desc = data.list[day_2_index].weather[0].description;
          forecast.day_3_desc = data.list[day_3_index].weather[0].description;
          return { forecast };                                 // return new object forecast object
        })

        let description_1 = data.list[day_1_index].weather[0].description;
        let description_2 = data.list[day_2_index].weather[0].description;
        let description_3 = data.list[day_3_index].weather[0].description;

        if( description_1.includes('rain') ) {
                document.getElementById('day-1-img').src = rain;
        } else if( description_1.includes('cloud') ) {
            if(description_1.includes('few clouds')){
                document.getElementById('day-1-img').src = few_cloud_day;
          }
          else{
            document.getElementById('day-1-img').src = cloudy;
          }
        } else if( description_1.includes('sunny') ) {
              document.getElementById('day-1-img').src = day;
        } else if( description_1.includes('clear')){
              document.getElementById('day-1-img').src = day;
        }else if(description_1.includes('haze')){
          document.getElementById('weather-img').src = haze;
          document.getElementById('weather-img').style.width = `${50}px`;
          document.getElementById('weather-img').style.height = `${50}px`
        }
        else if(description_1.includes('wind')){
          document.getElementById('weather-img').src = wind;
          document.getElementById('weather-img').style.width = `${50}px`;
          document.getElementById('weather-img').style.height = `${50}px`
        }

        if( description_2.includes('rain') ) {
          document.getElementById('day-2-img').src = rain;
          } else if( description_2.includes('cloud') ) {
              if(description_2.includes('few clouds')){
                  document.getElementById('day-2-img').src = few_cloud_day;
            }
            else{
              document.getElementById('day-2-img').src = cloudy;
            }
          } else if( description_2.includes('sunny') ) {
            document.getElementById('day-2-img').src = day;
          } else if( description_2.includes('clear')){ 
                document.getElementById('day-2-img').src = day;
          }
          else if(description_2.includes('haze')){
            document.getElementById('weather-img').src = haze;
            document.getElementById('weather-img').style.width = `${50}px`;
            document.getElementById('weather-img').style.height = `${50}px`
          }
          else if(description_2.includes('wind')){
            document.getElementById('weather-img').src = wind;
            document.getElementById('weather-img').style.width = `${50}px`;
            document.getElementById('weather-img').style.height = `${50}px`
          }

        if( description_3.includes('rain') ) {
              document.getElementById('day-3-img').src = rain;
          } else if( description_3.includes('cloud') ) {
                if(description_3.includes('few clouds')){
                    document.getElementById('day-3-img').src = few_cloud_day;
              }
              else{
                document.getElementById('day-3-img').src = cloudy;
              }
            } else if( description_3.includes('sunny') ) {
                  document.getElementById('day-3-img').src = day;
            } else if( description_3.includes('clear')){
                  document.getElementById('day-3-img').src = day;
            }else if(description_3.includes('haze')){
              document.getElementById('weather-img').src = haze;
              document.getElementById('weather-img').style.width = `${50}px`;
              document.getElementById('weather-img').style.height = `${50}px`
            }
            else if(description_3.includes('wind')){
              document.getElementById('weather-img').src = wind;
              document.getElementById('weather-img').style.width = `${50}px`;
              document.getElementById('weather-img').style.height = `${50}px`
            }
                


      })
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  choose_us_cycle(){
    let nav = document.querySelector('.why-choose-us').firstChild;
    let tab = document.getElementById('about-1');
    tab.classList.add('active');
    nav.classList.add('active');

    let intervalId = setInterval(function(){
     
      let navStack = document.querySelector('.why-choose-us .active');
      if(navStack === navStack.parentNode.lastChild){
         navStack.classList.remove('active');
          navStack.parentNode.firstChild.classList.add('active');
          
      }
      else{
        navStack.classList.remove('active');
        navStack.nextSibling.classList.add('active');
      }
    },7000)

    this.setState({intervalId : intervalId})
  }
  parseIntegerAndAdd(str, i){
    let inth = str.split('-');
    let num = parseInt(inth[2]);
    num += i;
    let newStr;
    if(num < 10){
      newStr = inth[0] + '-' + inth[1] + '-' + '0'+num;
    }else{
      newStr = inth[0] + '-' + inth[1] + '-' + num;
    }
    return newStr;
  }
  getDateString(timestamp){
    let date = new Date(timestamp * 1000);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if(month < 10){
      month = '0'+ (month+1);
    }
  
    if(day < 10){
      day = '0'+ day;
    }

    return year+'-'+month+'-'+day;
    

  }
  getWeekDay(i){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[i];
  }
  isTodayAndOpen(){
    let currentD = new Date();
    let day = currentD.getDay();
    let startHourD = new Date();
    startHourD.setHours('10','00','0'); 
    let endHourD = new Date();
    endHourD.setHours('21','00','0'); 
    if(currentD >= startHourD && currentD < endHourD){
      document.getElementById(this.getWeekDay(day)).style.backgroundColor = 'green';
      document.getElementById(this.getWeekDay(day)).style.borderRadius = `${20}px`;
    }else{
      document.getElementById(this.getWeekDay(day)).style.backgroundColor = '#CB262F';
      document.getElementById(this.getWeekDay(day)).style.borderRadius = `${20}px`;
    }

    
  }
  isForecastDay(i){

  }
  isDay(){
    let currentD = new Date();
    let startHourD = new Date();
    startHourD.setHours('06','00','0'); 
    let endHourD = new Date();
    endHourD.setHours('18','00','0'); 
    if(currentD >= startHourD && currentD < endHourD){
      this.setState({isDay: true});
    }else{
      this.setState({isDay : false});
    }
  }
  render() {
   
    return (
     <div>
       <div className = 'about-component'>
         <div className = 'about-header-container'>
           <div className = 'about-nav'>
            <div className = 'header-text'>
              <div className = "text-upper">China Gate Express</div>
              <div className = "text-lower">Restaurant</div>
            </div>
           </div>
          {/* <div className = 'about-header'>
              <div>
                <img src = {food_1} className = 'floating'/>
              </div>
              <div>
                About Us
              </div>
              <div>
              <img src = {food_1} className = 'food-1'></img>
              </div>
          </div> */}
          
         
         </div>
         {/* <div style = {{color:'red'}}>Due to the pandemic, our policy has changed. Check Amenity below.</div> */}
         <div className = 'about-content'>
           <div className = 'who-we-are'>
          <div className = 'img-stack'>
            <img src = {food} className = 'china-gate-img'></img>
          </div>
            
            <div className = 'about-us-text'>
            <h3 style = {{textAlign:'center'}}>Who <span style = {{color:'#CB262F'}}>we are?</span></h3>
                  <p>China Gate Express is located in South Gate, CA, United States and is part of the Restaurants Industry. China Gate Express has 2 total employees across all of its locations and generates $92,531 in sales (USD).
                  </p>
                  <p>
                  D&B Hoovers provides sales leads and sales intelligence data on over 120 million companies like China Gate Express around the world, including contacts, financials, and competitor information. To witness the full depth and breadth of our data and for industry leading sales intelligence tools, take D&B Hoovers for a test drive.
                  </p>
            </div>
             
           </div>
          <div className = 'why-section'>
                <h3>Why <span style = {{color:'#CB262F'}}>choose us?</span></h3>
                <div className = 'why-choose-us'>
                  <div id = 'about-1'>
                    <span>01</span>
                    <div className = 'about-title'>Delicious Food</div>
                    <div className = 'about-context'>Our food are cooked by professional chef. Fresh, healthy, and delicious. Also convenient for quick bites for busy people.</div>
                  </div>
                  <div id = 'about-2'>
                    <span>02</span>
                    <div className = 'about-title'>Cheap Pricing</div>
                    <div className = 'about-context'>Our pricing is reasonable. We give huge amount of food to your plate. You would be surprised how much you can get.</div>
                  </div>
                  <div id = 'about-3'>
                    <span>03</span>
                    <div className ='about-title'>Friendly Servers</div>
                    <div className = 'about-context'>Our staff is caring, passionate, and efficient. Always feel free to say hello to them and maybe give them some tips. :)</div>
                  </div>
                  <div id = 'about-4'>
                    <span>04</span>
                    <div className = 'about-title'>Party Size Combo</div>
                    <div className = 'about-context'>We offer party sized combo for just reasonable pricing! Varieties of combos you can choose from.</div>
                  </div>
                </div> 
            </div>
         </div>
         <div className = 'where-and-when-section'>
         <h3>More <span style = {{color:'#CB262F'}}>information!</span></h3>
          <div className = 'map-container'>
                <div className = 'map-card'>
                {/* style = {{borderBottom: `${1}px solid rgb(170, 169, 169)`}} */}
                  <div>
                    <div style = {{color:'#CB262F', fontWeight:'bold', letterSpacing:`${3}px`, fontSize:'small', paddingLeft:`${5}%`,paddingTop:`${3}%`}}>
                      HOW TO GET THERE
                    </div>
                    <div style = {{color:'white', fontWeight:'bold',fontSize:'larger', paddingLeft:`${5}%`}}>
                      Location
                    </div>
                  </div>
                  <div className = 'card-map-body'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.075939651436!2d-118.22707468476898!3d33.964887580629785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c94160f5ef71%3A0x12387e338b0d91c5!2s2607%20Santa%20Ana%20St%2C%20South%20Gate%2C%20CA%2090280!5e0!3m2!1sen!2sus!4v1611987583897!5m2!1sen!2sus" frameborder="0"allowfullscreen={''} aria-hidden="false" tabindex="0" className = 'map'></iframe> 
                  </div>
                </div>
          </div>
          <div className = 'when-section'>
          {/* <div className = "map-title">Open Hours</div> */}
          <div className = 'about-card'>
          {/* style = {{borderBottom: `${1}px solid rgb(170, 169, 169)`}} */}
          <div>
             <div style = {{color:'#CB262F', fontWeight:'bold', letterSpacing:`${3}px`, fontSize:'small', paddingLeft:`${5}%`,paddingTop:`${3}%`}}>
                TODAY
             </div>
             <div style = {{color:'white', fontWeight:'bold',fontSize:'larger', paddingLeft:`${5}%`}}>
               Opening Hours
             </div>
          </div>
            {/* <ListGroup variant="flush" >
              <ListGroup.Item id = 'Monday' className = 'about-card-list'><div className = 'day'>Monday</div><div className = 'time'> 10AM-9PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Tuesday' className = 'about-card-list'><div className = 'day'>Tuesday</div> <div className = 'time'>10AM-9PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Wednesday' className = 'about-card-list'><div className = 'day'>Wednesday</div> <div className = 'time'>10AM-9PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Thursday' className = 'about-card-list'><div className = 'day'>Thursday</div> <div className = 'time'>10AM-9PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Friday' className = 'about-card-list'><div className = 'day'>Friday</div> <div className = 'time'>10AM-9:30PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Saturday' className = 'about-card-list'><div className = 'day'>Saturday</div> <div className = 'time'>10AM-9:30PM</div></ListGroup.Item>
              <ListGroup.Item id = 'Sunday' className = 'about-card-list'><div className = 'day'>Sunday</div> <div className = 'time'>10AM-9:30PM</div></ListGroup.Item>
            </ListGroup> */}
              <ul>
                <li id = 'Monday' className = 'about-card-list'><div className = 'day'>Monday</div><div className = 'time'> 10AM-9PM</div></li>
                <li id = 'Tuesday' className = 'about-card-list'><div className = 'day'>Tuesday</div> <div className = 'time'>10AM-9PM</div></li>
                <li id = 'Wednesday' className = 'about-card-list'><div className = 'day'>Wednesday</div> <div className = 'time'>10AM-9PM</div></li>
                <li id = 'Thursday' className = 'about-card-list'><div className = 'day'>Thursday</div> <div className = 'time'>10AM-9PM</div></li>
                <li id = 'Friday' className = 'about-card-list'><div className = 'day'>Friday</div> <div className = 'time'>10AM-9:30PM</div></li>
                <li id = 'Saturday' className = 'about-card-list'><div className = 'day'>Saturday</div> <div className = 'time'>10AM-9:30PM</div></li>
                <li id = 'Sunday' className = 'about-card-list'><div className = 'day'>Sunday</div> <div className = 'time'>10AM-9:30PM</div></li>
              </ul>
          </div>
          </div>
          <div className = "amenity">
              <div className = 'amenity-card'>
              {/* style = {{borderBottom: `${1}px solid rgb(170, 169, 169)`}} */}
                <div>
                  <div style = {{color:'#CB262F', fontWeight:'bold', letterSpacing:`${3}px`, fontSize:'small' , paddingLeft:`${5}%`,paddingTop:`${3}%`}}>
                    CHECK
                  </div>
                  <div style = {{color:'white', fontWeight:'bold',fontSize:'larger' , paddingLeft:`${5}%`}}>
                    Amenities
                  </div>
                </div>
                <div className = 'amenity-div'>
                      <div style = {{fontWeight : 'bold', color:'white' }}>Service options</div>
                      <div className = 'amenity-check'>
                         <div><i class="mdi mdi-checkbox-marked-circle"></i></div>
                         <div className = 'amenity-text'>Takeout</div>
                      </div>
                  <div style = {{marginTop:`${4}%`}}>
                    <div style = {{fontWeight : 'bold', color: 'white'}}>Health & safety</div>
                    <div className = 'amenity-check'>
                          <div><i class="mdi mdi-checkbox-marked-circle"></i></div>
                          <div className = 'amenity-text'>Mask required</div>
                        </div>
                    </div>
                  <div style = {{marginTop:`${4}%`}}>
                    <div style = {{fontWeight : 'bold', color: 'white'}}>Popular for</div>
                      <div className = 'amenity-check'>
                            <div><i class="mdi mdi-checkbox-marked-circle"></i></div>
                            <div className = 'amenity-text'>Lunch</div>

                            <div><i class="mdi mdi-checkbox-marked-circle" style = {{paddingLeft:`${10}px`}}></i></div>
                            <div className = 'amenity-text'>Dinner</div>

                            <div><i class="mdi mdi-checkbox-marked-circle" style = {{paddingLeft:`${10}px`}}></i></div>
                            <div className = 'amenity-text'>Drinks</div>
                          </div>
                  </div>
                  <div style = {{marginTop:`${4}%`}}>
                      <div style = {{fontWeight : 'bold', color: 'white'}}>Accessibility</div>
                        <div className = 'amenity-check'>
                              <div><i class="mdi mdi-checkbox-marked-circle"></i></div>
                              <div className = 'amenity-text'>Wheelchair accessible</div>
                            </div>
                  </div>
                  <div style = {{marginTop:`${4}%`}}>
                    <div style = {{fontWeight : 'bold', color:'white'}}>Offerings</div>
                          <div className = 'amenity-check'>
                                <div><i class="mdi mdi-checkbox-marked-circle"></i></div>
                                <div className = 'amenity-text'>Comfort food</div>

                                <div><i class="mdi mdi-checkbox-marked-circle" style = {{paddingLeft:`${10}px`}}></i></div>
                                <div className = 'amenity-text'>Quick bite</div>
                              </div>  
                  </div>
                
                </div>
              </div>
          </div>
          <div className = 'weather-display'>
            <div className = 'weather-card'>
            {/* style = {{borderBottom: `${1}px solid rgb(170, 169, 169)`}} */}
              <div>
                <div style = {{color:'#CB262F', fontWeight:'bold', letterSpacing:`${3}px`, fontSize:'small' , paddingLeft:`${5}%`,paddingTop:`${3}%`}}>
                      PLANNING VISIST
                    </div>
                    <div style = {{color:'white', fontWeight:'bold',fontSize:'larger' , paddingLeft:`${5}%`}}>
                      Weather
                    </div>
              </div>
              <div className = 'weather-body'>
                    <div className = 'weather-flex'>
                      <div>
                        <img src = '' id = 'weather-img'></img>
                      </div>
                      <div className = 'weather-status'>
                        {this.state.weather_response ? this.state.weather_response.weather[0].description: 'Loading'}
                      </div>
                    </div>
                    <div className = 'display-flex-weather'>
                        <div>Date: </div>
                        <div className = 'display-text-weather'>{this.state.today ? this.state.today : 'Loading'}</div>
                    </div>
                    <div className = 'display-flex-weather'>
                        <div>City: </div>
                        <div className = 'display-text-weather'>{this.state.weather_response ? this.state.weather_response.name : 'Loading'}</div>
                    </div>
                    <div className = 'display-flex-weather'>
                        <div>Humidity: </div>
                        <div className = 'display-text-weather'>{this.state.weather_response ? this.state.weather_response.main.humidity: 'Loading'}</div>
                    </div>
                    <div className = 'display-flex-weather'>
                        <div>Temperature: </div>
                        <div className = 'display-text-weather' style = {{marginRight:`${5}%`}}>{this.state.temp_cel ? this.state.temp_cel: 'Loading'}</div>
                         /
                        <div className = 'display-text-weather'>{this.state.temp_fah ? this.state.temp_fah: 'Loading'}</div>
                    </div>
                    <div className = 'weather-forecast'>
                        <div className = 'day-1'>
                          <img src = '' id = 'day-1-img'></img>
                          <div className = 'upper-temp'>{this.state.forecast?this.state.forecast.day_1_temp_cel + 'ºC': 'loading'}</div>
                          <div className = 'lower-temp'>{this.state.forecast?this.state.forecast.day_1_temp_fah+'ºF':'loading'}</div>                          
                          <div style = {{marginTop:`${7}%`}}>{this.state.forecast?this.state.forecast.day_1_day:'loading'}</div>
                          <div></div>
                        </div>
                        <div className = 'day-2'>
                          <img src = '' id = 'day-2-img'></img>
                          <div className = 'upper-temp'>{this.state.forecast?this.state.forecast.day_2_temp_cel + 'ºC': 'loading'}</div>
                          <div className = 'lower-temp'>{this.state.forecast?this.state.forecast.day_2_temp_fah+'ºF':'loading'}</div>
                          <div style = {{marginTop:`${7}%`}}>{this.state.forecast?this.state.forecast.day_2_day:'loading'}</div>
                          <div></div>
                        </div>
                        <div className = 'day-3'>
                          <img src = '' id = 'day-3-img'></img>
                          <div className = 'upper-temp'>{this.state.forecast?this.state.forecast.day_3_temp_cel + 'ºC': 'loading'}</div>
                          <div className = 'lower-temp'>{this.state.forecast?this.state.forecast.day_3_temp_fah+'ºF':'loading'}</div>
                          <div style = {{marginTop:`${7}%`}}>{this.state.forecast?this.state.forecast.day_3_day:'loading'}</div>
                          <div></div>
                        </div>
                    </div>
              </div>
            </div>
         </div>
         </div>
        
       
       
          
       </div>
        
     </div>
    )
  }
}