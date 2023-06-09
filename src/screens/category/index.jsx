import React from 'react'
import { Text, View, Button } from 'react-native'

import { styles } from './styles'

const Categories = ({navigation}) => {
    return (
        <View style={styles.container} >
            <Text>Categories</Text>
            <Button title='Go to List' onPress={()=>navigation.navigate("List")}/>
        </View>
    )
}

export default Categories
