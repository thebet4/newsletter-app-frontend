import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Text, Header, Topic } from '../../components'
import IArticle from '../../models/Article'
import { useRoute } from '@react-navigation/core'
import styles from './styles'

const ArticlePage = () => {
  const route = useRoute()
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Image
        source={{ uri: route.params.article.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.article}>
        <View style={styles.articleTopicContainer}>
          <View style={styles.articleTopicAbsoluteContainer}>
            <Topic topic={route.params.article.topic} />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text type="title">{route.params.article.title}</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <View style={styles.subtitleTextContainer}>
            <Text type="subtitle">{route.params.article.subtitle}</Text>
          </View>
        </View>
        <Text>{route.params.article.content}</Text>
      </View>
    </ScrollView>
  )
}

export default ArticlePage
