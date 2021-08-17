import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const textStyle = StyleSheet.create({
  title: {
    fontSize: 26,
    lineHeight: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: colors.textDark,
    textAlign: 'left'
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'left',
    color: colors.textLight
  },

  subtitleMini: {
    fontSize: 12,
    lineHeight: 27,
    textAlign: 'left',
    color: colors.textLight
  },

  content: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.textDark,
    textAlign: 'left'
  },

  topic: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.primary,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderBottomRightRadius: 16,
    letterSpacing: 0.5
  }
})
