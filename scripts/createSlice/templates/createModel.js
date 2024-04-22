import { mkdir, writeFile } from 'fs/promises'
import resolveRoot from '../utils/resolveRoot.js'
import typesTemplate from './templates/typesTemplate.js'

export default async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await mkdir(resolveModelPath())
      await mkdir(resolveModelPath('types'))
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName} | `, e.message)
    }
  }

  const createReduxSlice = async () => {
    try {
      await writeFile(resolveModelPath('types', `index.ts`), typesTemplate(sliceName))
    } catch (e) {
      console.log('Не удалось создать файл типов для слайса | ', e.message)
    }
  }

  await createModelStructure()
  await createReduxSlice()
}
