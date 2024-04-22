import firstCharUpperCase from '../../utils/firstCharUpperCase.js'

export default componentName => {
  return `import type { Props } from '../model/types'

export const ${firstCharUpperCase(componentName)} = ({}: Props) => {
  return <div className="">${componentName}</div>
}
`
}
