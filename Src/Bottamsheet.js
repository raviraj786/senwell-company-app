import { View, Text ,StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const {height:SCREEN_HEIGHT} = Dimensions.get('window');


export default function Bottamsheet() {

const translateY = useSharedValue(0);

const gesture = Gesture.Pan().onUpdate((event)=>{
  

    translateY.value = event.translationX;
});

const rBottomSheetStyle= useAnimatedStyle (()=> {
    return {
        transform:[{ translateY: translateY.value}],
    };
})





  return  (
   <GestureDetector gesture={gesture}>
  <Animated.View style={styles.Bottamsheetcontainer}>
      
 <View style={styles.line}>


 </View>

    </Animated.View>
    </GestureDetector>
  )
}

const styles =StyleSheet.create({
Bottamsheetcontainer:{
    height:SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:'#1111',
     position:'absolute',
     top:SCREEN_HEIGHT /1.5,
     borderRadius:'20'
},
line:{
    width:75,
    height:4,
    backgroundColor:'gary',
    alignSelf:'center',
    marginVertical:'15',
    borderRadius:2,
}

})