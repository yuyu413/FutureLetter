import React from 'react';
import{
    Text,
    View,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

class Letter extends React.Component {
    state = {
        text : ''
    }
    theEnter(){

    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor : 'lemonchiffon'}}>
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
                        onSubmitEditing ={Keyboard.dismiss}
                        multiline={true}
                        numberOfLines={4}
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
        margin: 10,
        flex : 2,
        height : 50,
        flexDirection: 'column',
        // alignItems : 'center',
        // justifyContent : 'center',
        // backgroundColor : 'black'
    },
    ToWhomInput :{
        flex : 6,
        height: 50,
        marginTop:20,
        marginLeft:20,
        paddingLeft:10,
        fontSize:20,
        borderWidth: 1,
        borderColor: '#000'
        // backgroundColor:'powderblue'
    },
    FromWhomInput :{
        flex : 6,
        height: 50,
        marginTop:20,
        marginLeft:20,
        paddingLeft:10,
        fontSize:20,
        borderWidth: 1,
        borderColor: '#000'
    },
    ToWhom :{
        flex : 1,
        // width: 200,
        // height:100,
        paddingTop:30,
        fontSize :20,
        // backgroundColor : 'skyblue',
        alignItems: 'center',
        justifyContent : 'center'

    },
    FromWhom : {
        flex : 1,
        // width: 200,
        // height:100,
        paddingTop:30,
        fontSize :20,
        // backgroundColor : 'skyblue',
        alignItems: 'center',
        justifyContent : 'center'
    },
    LetterContent:{
        width: 400,
        height: 400,
        marginLeft:10,
        // paddingLeft:30,
        // borderWidth :1,
        // borderColor : ''MOCCASIN
        backgroundColor: "gainsboro",
        // alignItems : 'center',
        // justifyContent : 'center'
    },
    ButtonToSend :{
        backgroundColor:'black'
    }
})

export default Letter;