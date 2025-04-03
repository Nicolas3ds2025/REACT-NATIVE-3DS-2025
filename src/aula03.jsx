import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';

class Aula03 extends  Component{
    render(){
          return(

            <View style={ styles.container}>
                <Text>
                    hello word!
                </Text>
            </View>
          );
         
    }
}

export default Aula03;

 const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'greenyellow',
        alignItems: 'center',
        justifyContent: 'center',
        color : 'white',



    }

 })