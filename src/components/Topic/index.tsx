import React from 'react'
import { View } from 'react-native'
import { Text } from '../Text'

interface ITopicProps {
  topic: string
}

export const Topic: React.FC<ITopicProps> = ({ topic }) => {
  return (
    <View>
      <Text type="topic">{topic}</Text>
    </View>
  )
}
