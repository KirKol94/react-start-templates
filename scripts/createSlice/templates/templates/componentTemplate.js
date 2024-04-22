import firstCharUpperCase from '../../utils/firstCharUpperCase.js'
import firstCharLowerCase from '../../utils/firstCharLowerCase.js'

export default componentName => {
  return `import type { Props } from '../model/types'
import { Box, Typography } from '@mui/material'
import c from './${firstCharUpperCase(componentName)}.module.css'

export const ${firstCharUpperCase(componentName)} = ({}: Props) => {
  return (
    <Box className={c.${firstCharLowerCase(componentName)}}>
      <Typography variant="h1">
        ${componentName}
      </Typography>
    </Box>
  )
}`
}
