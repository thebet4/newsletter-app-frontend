import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 300
  },
  topicContainer: {
    width: '100%',
    height: 25,
    marginVertical: 12
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
  }
})

export default styles
