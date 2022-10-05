import { View, Text ,StyleSheet , Dimensions} from 'react-native'
import React from 'react'
import MapView ,  { Marker } from 'react-native-maps';

 
export default function MapScreen() {
  return (
    <View style={styles.container}>
       <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

>
        <Marker
        key={index}
        coordinate={{ latitude : latitude , longitude : longitude }}
        title="senwell solutions"
        description="dessac"
/>

    </MapView>







    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})