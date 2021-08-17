import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Topic } from '../Topic'
import { Text } from '../Text'
import styles from './styles'
import IArticle from '../../models/Article'

export const Article: React.FC<IArticle> = ({
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
      <View style={styles.imageContainer}>
        <View style={styles.leftColumn} />
        <Image
          source={{
            uri: image
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.articleInfosContainer}>
        <View style={styles.topicContainer}>
          <View style={styles.topicAbsoluteContainer}>
            <Topic topic={topic} />
          </View>
        </View>

        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
