import React from 'react'; 

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button
  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './redux/actions';

const Welcome = ({navigation}) => {

  const {name} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

    return (
      <View style={styles.container}>      
        <View style={{flex:1,alignItems:"flex-end"}}>
          <Text>{name}</Text>
        </View>
        <View style={{flex:3}}>
        <Text>Enter your name</Text>
        <TextInput         
                  style={styles.fieldsInput}          
                  placeholder="Enter your email"                                    
                  value={name}
                  onChangeText={(value) => dispatch(setName(value))}
                />
        </View>        
        <View style={{flex:1}}>
          <View style={{margin:10}}>
            <Button onPress={() => navigation.navigate('Variation')} title='Go To Variation' />
          </View>          
          <View style={{margin:10}}>
            <Button onPress={() => navigation.navigate('Thankyou')} title='Go To Thank you' />
          </View>                    
        </View>
      </View> 
    );
  };

const styles = StyleSheet.create({
    container :{    
        flex:1,
        padding:15        
    },  
    fieldsInput:{
      borderColor:"grey",
      borderWidth:1, 
      padding:6,
      paddingLeft:10, 
      borderRadius:5, 
      flexDirection:"row", 
      justifyContent:"space-between"
   },
});

export default Welcome;