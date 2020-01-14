import React, { Component } from "react";
import { View,Text,Button,StyleSheet } from "react-native";
timer = () => {};
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingMin: 1,
      remainingSec: 0,
      remainingTime: 10,
    };
  }

  countdownTimer() {
    this.setState({
        remainingHour: 1,
        remainingMin: 1,
        remainingSec: 10,
        remainingTime: 10,
    });
    clearInterval(timer);
    timerForHour = setInterval(() => {
        
        this.setState(prevState => {
          return {
            remainingTime: prevState.remainingTime - 1,
            // remainingMin: prevState.remainingMin - 1
          };
        });
      }, 1000);
    timerForMin = setInterval(() => {
      if (!this.state.remainingHour && !this.state.remainingMin && !this.state.remainingSec) {
        clearInterval(timer);
        return false;
      }
      this.setState(prevState => {
        //   if(this.remainingHour != 0){
        //     remainingMin:59
        //   }
        return {remainingMin: prevState.remainingMin - 1};
      });
    }, 60000);

    timerForSec = setInterval(() => {
      // if(!this.state.remainingTime){
      //   clearInterval(timer);
      //   return false;
      // }
      this.setState(prevState => {
        return {
          remainingTime: prevState.remainingTime - 1,
          // remainingMin: prevState.remainingMin - 1
        };
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Remaining time :{this.state.remainingHour}</Text>
        <Text>Remaining time :{this.state.remainingMin}</Text>
        <Text>Remaining time :{this.state.remainingSec}</Text>
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