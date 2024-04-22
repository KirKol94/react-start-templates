import { readdir, stat, readFile } from 'fs/promises' // Импорт асинхронных функций для работы с файловой системой Node.js
import { join, dirname } from 'path' // Импорт функций для работы с путями файлов и папок
import ignore from 'ignore' // Импорт модуля для обработки правил игнорирования, например, из файла .gitignore

// Функция для подсчета строк в файлах в указанной папке
async function countLinesInFiles(folderPath, ignoredFolders = []) {
  let totalLines = 0 // Инициализация переменной для хранения общего количества строк
  const ig = ignore() // Создание объекта для работы с правилами игнорирования

  // Определение пути к файлу .gitignore относительно текущей директории
  const gitignorePath = join(dirname(new URL(import.meta.url).pathname), '../../.gitignore')

  try {
    // Чтение содержимого файла .gitignore
    const gitignoreContent = await readFile(gitignorePath, 'utf8')
    ig.add(gitignoreContent) // Добавление правил из файла .gitignore в объект игнорирования
  } catch (error) {
    console.log(error.message) // Вывод сообщения об ошибке, если файл .gitignore не найден
  }

  // Добавление папок, указанных для игнорирования, в объект игнорирования
  ignoredFolders.forEach(folder => {
    ig.add(folder)
  })

  // Функция для обработки файла
  async function processFile(filePath) {
    if (!ig.ignores(filePath)) {
      // Проверка, нужно ли игнорировать данный файл
      try {
        const fileContent = await readFile(filePath, 'utf8') // Чтение содержимого файла
        const lines = fileContent.split('\n').length // Подсчет строк в файле
        console.log(`File ${filePath} has ${lines} lines.`) // Вывод информации о количестве строк в файле
        totalLines += lines // Увеличение общего количества строк
      } catch (error) {
        console.log(`Error reading file ${filePath}: ${error.message}`)
      }
    }
  }

  // Рекурсивная функция для обработки папок и файлов в них
  async function processFolder(folder) {
    try {
      const files = await readdir(folder) // Получение списка файлов и папок в текущей директории

      for (const file of files) {
        const filePath = join(folder, file) // Формирование пути к текущему файлу или папке

        if (!ig.ignores(filePath)) {
          // Проверка, нужно ли игнорировать данный файл или папку
          const fileStat = await stat(filePath) // Получение информации о файле

          if (fileStat.isFile()) {
            // Проверка, является ли текущий элемент файлом
            await processFile(filePath) // Обработка файла
          } else {
            await processFolder(filePath) // Рекурсивный вызов для обработки вложенной папки
          }
        }
      }
    } catch (error) {
      console.log(`Error reading directory ${folder}: ${error.message}`)
    }
  }

  // Начало обработки папки, указанной в аргументе folderPath
  await processFolder(folderPath)

  return totalLines // Возвращаем общее количество строк во всех файлах
}

// Получение пути к папке и списка игнорируемых папок из аргументов командной строки
const folderPath = process.argv[2]
const ignoredFolders = process.argv.slice(3)

// Вызов асинхронной функции подсчета строк в файлах и вывод результата
countLinesInFiles(folderPath, ignoredFolders)
  .then(totalLines => console.log("\x1b[44m\x1b[37mTotal lines in all files:", totalLines, "\x1b[0m"))
  .catch(error => console.log(`Error: ${error.message}`))
