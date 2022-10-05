import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Button({text ,color }) {
    return (

<TouchableOpacity>
        <View style={{ width:300, height: 30, backgroundColor:color ,justifyContent:'center',alignSelf:'center' }}>
            <Text style={{ color: '#ffff', alignContent:'center', 
            alignSelf:'center'
         }}>{text}</Text>

        </View>
        
         </TouchableOpacity>


    )
}