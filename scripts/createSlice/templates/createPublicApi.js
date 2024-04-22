import { writeFile } from 'fs/promises'
import firstCharUpperCase from '../utils/firstCharUpperCase.js'
import resolveRoot from '../utils/resolveRoot.js'
import publicApiTemplate from './templates/publicApiTemplate.js'

export default async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)

  try {
    await writeFile(resolveRoot('src', layer, sliceName, 'index.ts'), publicApiTemplate(componentName))
  } catch (e) {
    console.log('Не удалось создать public api | ', e.message)
  }
}
