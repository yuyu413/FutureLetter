import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Letter from './Letter';

class ShowLetter extends Component{
    state = {
        To : '',
        From : ''
    }
    
    LetterInfo(){
       
    }

    render(){
        return(
            <Text> To. { this.To } </Text>
        );
    }


}