import { StyleSheet } from 'react-native'
import { colors } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: colors.separetor,
    borderBottomWidth: 1
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  leftColumn: {
    width: 3,
    backgroundColor: colors.primary,
    height: 96
  },

  image: {
    width: 96,
    height: 96
  },
  topicContainer: {
    width: '100%',
    height: 25
  },
  topicAbsoluteContainer: {
    position: 'absolute'
  },

  readIconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },

  readIcon: {
    transform: [{ rotate: '180deg' }],
    width: 24,
    height: 24
  },

  articleInfosContainer: {
    marginLeft: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
