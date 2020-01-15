import React, { Component } from "react";
import { View,Text,Button,StyleSheet } from "react-native";
timer = () => {};
class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        days: 1,
        hours :2,
        minutes: 1,
        seconds: 0,
    };
  }

  componentDidMount() {
    this.countdownTimer();
  }

  countdownTimer() {
    countDownDate = new Date("Jan 24, 2020 18:45:00").getTime();

    clearInterval(timer);
    
    timer = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if(distance < 0){
        clearInterval(timer);
        return false;
      }
      if(hours < 10){ hours = '0'+hours;}
      if(minutes < 10){ minutes = '0'+minutes;}
      if(seconds < 10){ seconds = '0'+seconds;}

      this.setState({
        days: days,
        hours:hours,
        minutes: minutes,
        seconds:seconds
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.RemainingTime}>Remaining Time</Text>
        <Text style = {styles.days}>{this.state.days}days </Text>
        <Text style = {styles.time}> {this.state.hours} : {this.state.minutes} : {this.state.seconds}</Text>
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   } ,
   RemainingTime:{
     alignItems:'center',
   },
   days:{
     marginTop:30,
     fontSize:20,
     alignItems: 'center',
   },
   time:{
     marginTop:50,
     fontSize: 50,
     alignItems: 'center',
     color: 'dodgerblue',
     marginBottom: 250
   }
});

  export default Timer;