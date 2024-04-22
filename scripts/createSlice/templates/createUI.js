import { mkdir, writeFile } from 'fs/promises'
import firstCharUpperCase from '../utils/firstCharUpperCase.js'
import resolveRoot from '../utils/resolveRoot.js'
import componentTemplate from './templates/componentTemplate.js'
import styleTemplate from './templates/styleTemplate.js'

export default async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await mkdir(resolveUIPath())
    } catch (e) {
      console.log('Не удалось создать UI директорию | ', e.message)
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)

      await writeFile(resolveUIPath(`${componentName}.tsx`), componentTemplate(componentName))
      await writeFile(resolveUIPath(`${componentName}.module.css`), styleTemplate(componentName))
    } catch (e) {
      console.log('Не удалось создать компонент | ', e.message)
    }
  }

  await createUIDir()
  await createComponent()
}
