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
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import { useSelector, useDispatch } from 'react-redux';
  import SwipeButton from 'rn-swipe-button';


const Variation = ({navigation}) => {

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
            <Button onPress={() => navigation.navigate('Thankyou')} title='Go To Thank you' />
          </View>                    
        </View>
        <View style={{flex:1}}>

          <View style={{margin:5}}>
            <TouchableOpacity style={styles.button1}><Text style={{color:"#6eb1f7"}}>Press me</Text></TouchableOpacity>
          </View>

          <View style={{margin:5}}>
            <TouchableOpacity style={styles.button2}><Text style={{color:"#6eb1f7"}}>Press me</Text></TouchableOpacity>
          </View>

          <View style={{margin:5}}>
            <TouchableOpacity style={styles.button3}><Text style={{color:"#ffffff"}}>Press me</Text></TouchableOpacity>
          </View>

          <View style={{margin:5}}>
          <SwipeButton
          disabled={false}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={70}
          height={45}
          //height of the button (Optional)
          width={330}
          //width of the button (Optional)
          title="Swipe to Submit"
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          //After the completion of swipe (Optional)
          railFillBackgroundColor="#e688a1" //(Optional)
          railFillBorderColor="#e688ff" //(Optional)
          thumbIconBackgroundColor="#ed9a73" //(Optional)
          thumbIconBorderColor="#ed9aff" //(Optional)
          railBackgroundColor="#bbeaa6" //(Optional)
          railBorderColor="#bbeaff" //(Optional)
        />
            
          </View>          
        </View>
      </View> 
    );
  };

const styles = StyleSheet.create({
    button1:{
      alignItems: 'center',      
      padding: 10,      
    },
    button2:{
      alignItems: 'center',      
      padding: 10,   
      borderRadius:5,
      backgroundColor:"#34434a"   
    },
    button3:{
      borderRadius:5,
      alignItems: 'center',      
      padding: 10,      
      backgroundColor:"#6eb1f7"
    },
    button4:{   
      alignItems:"center",         
      height:45,            
      flexDirection:"row",
      borderRadius:5,      
      padding: 10,      
      backgroundColor:"#1b1924",
      borderWidth:1.5,        
      borderColor:"#6eb1f7"      
    },
    container :{    
      flex:1,
      padding:15            
    }  
});

export default Variation;