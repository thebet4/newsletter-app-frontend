import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import { Header, MainArticle, Article, Text } from '../../components'
import IArticle from '../../models/Article'
import axios from 'axios'
import styles from './styles'

const HomePage = () => {
  const [page, setPage] = useState(0)
  const [articles, setArticles] = useState([])
  const [mainArticle, setMainArticle] = useState<IArticle>({})
  useEffect(() => {
    getArticlesFromApi()
  }, [])

  const getArticlesFromApi = async (page?: number) => {
    if (!page) {
      page = 0
    }

    axios
      .get<IArticle[]>(
        'https://newsletter-app-backend.herokuapp.com/articles?page=' + page
      )
      .then(response => {
        let mainArticle: IArticle

        response.data.forEach((article: IArticle, index) => {
          if (article.highlight) {
            mainArticle = article
            response.data.splice(index, 1)
          }
        })

        setMainArticle(mainArticle)
        setArticles(response.data)
        console.log(mainArticle)
        console.log(response.data)
      })
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} />
      <Header home />
      <View style={styles.mainArticlesContainer}>
        <MainArticle
          _id={mainArticle._id}
          image={mainArticle.image}
          title={mainArticle.title}
          content={mainArticle.content}
          highlight={true}
          subtitle={mainArticle.subtitle}
          topic={mainArticle.topic}
        />
      </View>

      <View style={styles.listContainer}>
        <Text type="mini">Todas as notícias</Text>
        {articles.map((article: IArticle) => (
          <Article
            _id={article._id}
            image={article.image}
            title={article.title}
            highlight={article.highlight}
            subtitle={article.subtitle}
            topic={article.topic}
            content={article.content}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default HomePage
