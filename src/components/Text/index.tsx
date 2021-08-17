import React from 'react'
import { Text as RNText, StyleProp, TextStyle } from 'react-native'

import { textStyle } from '../../constants'

type TextProps = {
  type?: 'title' | 'subtitle' | 'mini' | 'topic'
  children: string
  style?: StyleProp<TextStyle>[]
}

export const Text = ({ type, children, style = [] }: TextProps) => {
  let TextStyle: StyleProp<TextStyle>[] = [textStyle.content]

  if (type === 'title') {
    TextStyle.push(textStyle.title)
  } else if (type === 'subtitle') {
    TextStyle.push(textStyle.subtitle)
  } else if (type === 'mini') {
    TextStyle.push(textStyle.subtitleMini)
  } else if (type === 'topic') {
    TextStyle.push(textStyle.topic)
  }

  TextStyle = [...TextStyle, ...style]

  return <RNText style={TextStyle}>{children}</RNText>
}
