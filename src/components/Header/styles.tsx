import { StyleSheet, StatusBar } from 'react-native'
import { colors } from '../../constants'

const styles = StyleSheet.create({
  homeHeaderContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoBottonLine: {
    height: 1,
    width: 138,
    marginTop: 6,
    backgroundColor: colors.primary
  },

  articleHeaderContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 32
  },

  iconContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconImage: {
    width: 16,
    height: 16
  }
})

export default styles
