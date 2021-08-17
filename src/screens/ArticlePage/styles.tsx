import { StyleSheet } from 'react-native'
import { colors } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff'
  },

  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center'
  },

  article: {
    width: '90%',
    alignSelf: 'center'
  },

  articleTopicContainer: {
    width: '100%',
    height: 25,
    marginVertical: 18
  },

  articleTopicAbsoluteContainer: {
    position: 'absolute'
  },

  titleContainer: {
    marginBottom: 16
  },

  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    marginBottom: 48
  },

  subtitleTextContainer: {
    backgroundColor: '#fff',
    marginLeft: 3
  }
})

export default styles
