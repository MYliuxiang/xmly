import {Field, Formik, FormikHelpers, yupToFormErrors} from 'formik';
import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Button} from 'react-native';
import * as Yup from 'yup';
import {RootState} from '@/models/models';
import {ConnectedProps, connect} from 'react-redux';
import {ModalStackNavigationProp,RootStackNavigationProp} from '@/navigator/index';
import Input from '@/components/Input';
import {TextInput} from 'react-native-gesture-handler';

const customervalidation = Yup.object().shape({
  account: Yup.string().required('请输入账号'),
  password: Yup.string().required('请输入账号'),
});

interface Values {
  account: string;
  password: string;
}

const initialValues: Values = {
  account: '',
  password: '',
};

const mapStateToProps = ({login,loading}: RootState) => ({
    loging: login.loging,
    loading: loading.effects['login/login'],
});



const connectior = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connectior>;

interface Iprops extends ModelState {
  navigation: RootStackNavigationProp;
}

class Login extends Component {
  onSubmit = (values:Values, actions:FormikHelpers<Values>) => {

    const {dispatch, navigation} = this.props;
    dispatch({
      type:'login/login',
      payload:values,
      callback:()=>{
        actions.setSubmitting(false);
        navigation.goBack()
      }
    })


  };

  render() {
      const {loging} = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <Text style={styles.logo}>听书</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          validationSchema={customervalidation}>
          {({handleSubmit,handleChange}) => (
           
            <View> 
              <Field
                name="account"
                placeholder="请输入账号"
                component={Input}
              />

              {/* <Field
                name="password"
                placeholder="请输入密码"
                component={Input}
              /> */}
              <Button
                disabled={loging}
                onPress={handleSubmit}
                title="登录"
                color="#ff400"
              /> 
           </View>
          )}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
  },
  logo: {
    color: '#ff4000',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default connectior(Login);
