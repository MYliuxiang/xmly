import React, { Component,PureComponent } from 'react'
import { Text, StyleSheet, View ,TextInput} from 'react-native'
import { ErrorMessage, FormikHandlers, FormikHelpers,FieldInputProps } from 'formik'

interface IProps{
    form:FormikHandlers;
     field:any;
}


export default class Input extends PureComponent<IProps> {
    render() {
        const{form, field, ...rest} = this.props;
        console.log(field.name)
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                onChangeText={form.handleChange(field.name)} 
                onBlur={form.handleBlur(field.name)}
                
                {...field}
                {...rest}/>
                <View>
                    <ErrorMessage name={field.name}
                       component={Text}
                       style={styles.error}
                    >

                    </ErrorMessage>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
    },
    input:{
        height:40,
        paddingHorizontal:10,
        borderColor:'#ccc',
        borderBottomWidth:StyleSheet.hairlineWidth,
        

    },
    error:{
        position:'absolute',
        color:'red',
        marginTop:5,
        marginLeft:10,
        fontSize:12
    },
})
