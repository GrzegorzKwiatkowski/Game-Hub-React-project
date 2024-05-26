import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
}


const theme = extendTheme({ config,
  colors: {
    gray: {
      50: '#f1f1f8',
      100: '#d6d6db',
      200: '#bbbbc2',
      300: '#a0a0a87',
      400: '#84848f',
      500: '#6b6b77',
      600: '#53535c',
      700: '#3b3b42',
      800: '#242429',
      900: '#0c0c13'
    }
  }
 })

export default theme