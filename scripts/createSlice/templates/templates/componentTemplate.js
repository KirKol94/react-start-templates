import firstCharUpperCase from '../../utils/firstCharUpperCase.js'
import firstCharLowerCase from '../../utils/firstCharLowerCase.js'

export default componentName => {
  return `import type { Props } from '../model/types'
import c from './${firstCharUpperCase(componentName)}.module.css'

export const ${firstCharUpperCase(componentName)} = ({}: Props) => {
  return <div className={c.${firstCharLowerCase(componentName)}}>${componentName}</div>
}
`
}
