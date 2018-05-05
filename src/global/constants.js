import { width, height } from 'react-native-dimension'

export const scale = value => width(100) * value / 375 ;
export const scaleByVertical = value => height(100) * value / 667;