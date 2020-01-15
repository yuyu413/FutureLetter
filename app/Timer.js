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
        <Text>Remaining Hour :{this.state.hours}</Text>
        <Text>Remaining Min :{this.state.minutes}</Text>
        <Text>Remaining Sec :{this.state.seconds}</Text>
        <Button title="Start timer" onPress={() => this.countdownTimer()} />
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   } 
});

  export default Timer;