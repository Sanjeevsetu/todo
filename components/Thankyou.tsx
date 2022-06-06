import React from 'react'; 

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';

  import { useSelector, useDispatch } from 'react-redux';

const Thankyou = ({navigation}) => {

  const {name} = useSelector(state => state.userReducer);

    return (
      <View style={styles.container}>      
        <View style={{flex:1,alignItems:"flex-end"}}>
          <Text>{name}</Text>
        </View>
        <View style={{flex:1}}>
          <View style={{margin:10}}>
            <Button onPress={() => navigation.navigate('Welcome')} title='Go To Welcome' />
          </View>          
          <View style={{margin:10}}>
            <Button onPress={() => navigation.navigate('Variation')} title='Go To Variation' />
          </View>                    
        </View>
      </View> 
    );
  };

const styles = StyleSheet.create({
    container :{    
      flex:1,
      padding:15         
    }  
});

export default Thankyou;