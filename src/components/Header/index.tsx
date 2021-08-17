import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Text } from '../Text'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'

interface IHeaderProps {
  home?: boolean
}

export const Header: React.FC<IHeaderProps> = ({ home }) => {
  const navigation = useNavigation()
  if (home) {
    return (
      <View style={styles.homeHeaderContainer}>
        <View>
          <Image
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
          />
          <View style={styles.logoBottonLine} />
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.articleHeaderContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconImage}
            source={require('../../../assets/backIcon.png')}
            resizeMode="contain"
          />
          <Text type="mini"> Voltar </Text>
        </TouchableOpacity>

        <View>
          <Image
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
          />
          <View style={styles.logoBottonLine} />
        </View>
      </View>
    )
  }
}
