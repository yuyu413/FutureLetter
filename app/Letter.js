import React from 'react';
import{
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

class Letter extends React.Component {
    render(){
        return(
            <View style={{flex: 1, marginTop: 50}}>
                <View style={styles.LetterInfo}>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Text style={styles.ToWhom}>To. </Text>
                        <TextInput
                            style = {styles.ToWhomInput}
                            placeholder='누구에게'>
                        </TextInput>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Text style={styles.FromWhom}>From. </Text>
                        <TextInput
                            style = {styles.FromWhomInput}
                            placeholder='누구가'>
                        </TextInput>
                    </View>
                </View>
                <View style = {{flex:6}}>
                    <TextInput
                        style = {styles.LetterContent}
                        placeholder = '편지를 작성해주세요~~'>
                        
                    </TextInput>
                </View>
                <View style = {{flex:1}}>
                <Button
                style={styles.ButtonToSend}
                title="Press me"
                onPress={() =>
                    this.props.navigation.navigate('Timer')
                  }
                />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    LetterInfo:{
        flex : 3,
        height : 50,
        flexDirection: 'column',
        // alignItems : 'center',
        // justifyContent : 'center',
        // backgroundColor : 'black'
    },
    ToWhomInput :{
        flex : 6,
        backgroundColor:'powderblue'
    },
    FromWhomInput :{
        flex :6,
        backgroundColor : 'steelblue'
    },
    ToWhom :{
        flex : 1,
        width: 200,
        height:100,
        fontSize :20,
        backgroundColor : 'skyblue'
        // alignItems: 'center',
        // justifyContent : 'center'

    },
    FromWhom : {
        flex : 1,
        width : 200,
        backgroundColor : 'blue',
        fontSize:20,
        // alignItems: 'center',
        // justifyContent : 'center'
    },
    LetterContent:{
        width: 500,
        height: 500,
        backgroundColor: "gray",
        alignItems : 'center',
        justifyContent : 'center'
    },
    ButtonToSend :{
        backgroundColor:'black'
    }
})

export default Letter;