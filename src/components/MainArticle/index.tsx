import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Topic } from '../Topic'
import { Text } from '../Text'
import styles from './styles'
import IArticle from '../../models/Article'

export const MainArticle: React.FC<IArticle> = ({
  title,
  image,
  topic,
  content,
  highlight,
  subtitle
}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Acticle', {
          article: { title, image, topic, content, highlight, subtitle }
        })
      }
    >
      <Image
        source={{
          uri: image
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.topicContainer}>
        <View style={styles.topicAbsoluteContainer}>
          <Topic topic="destaque" />
        </View>
      </View>

      <Text type="title">{title}</Text>

      <View style={styles.readIconContainer}>
        <Text type="mini">LEIA AGORA</Text>
        <Image
          source={require('../../../assets/backIcon.png')}
          style={styles.readIcon}
        />
      </View>
    </TouchableOpacity>
  )
}
