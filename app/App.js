import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


class App extends React.Component {
  state = {
    counter: 0
  }

  click(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  clickToShrink(){
    this.setState({
      counter: this.state.counter -1
    })
  }
  clickToReset(){
    this.setState({
      counter: 0
    })
  }
  
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.centerView}>
          <Text style={styles.text1}>Counter: {this.state.counter}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button1}
            activeOpacity={0.8}
            onPress={() => this.click()}>
            <Text style={styles.textInButton}>증가하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style ={ styles.button2}
            onPress={()=> this.clickToShrink()}>
            <Text style={styles.textInButton}>감소하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style ={ styles.button3}
            onPress={()=> this.clickToReset()}>
            <Text style={styles.textInButton}>리셋하기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  text1: {
    color: '#ff0000',
    fontSize: 24
  },
  button2:{
    flex: 1,
    backgroundColor : 'powderblue',
    alignItems: 'center',
    justifyContent : 'center',
    paddingVertical: 10,
  },
  button3:{
    flex: 1,
    backgroundColor : 'steelblue',
    alignItems: 'center',
    justifyContent : 'center',
    paddingVertical: 10,
  },
  button1: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textInButton: {
    color: '#fff',
    fontSize: 30
  }
})

export default App;
