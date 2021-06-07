import { kScreenW } from '@/untils/LxLayout'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

interface IProps{

    name:string;
    children:Element[];
}

export default class CusCom extends Component <IProps>{
    constructor(props:IProps){
        super(props);
        console.log(props);
    }
    render() {
        const {children} = this.props
        return (
            <View style={styles.container}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:kScreenW,
        height:300,
    }

})


