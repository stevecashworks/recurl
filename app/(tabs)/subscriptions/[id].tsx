import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscrptionDetail = () => {
 const {id }= useLocalSearchParams<{id:string}>()
    return (
    <View>
      <Text>SubscrptionDetail for {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubscrptionDetail