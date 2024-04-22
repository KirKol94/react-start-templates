# Чистый стартовый проект на React + TypeScript с использованием Vite

### Содержание

- [Описание](#описание)
- [Установка](#установка)
- [Структура проекта](#структура-проекта)
- [Запуск проекта](#запуск-проекта)
- [Сборка проекта](#сборка-проекта)
- [Предпросмотр](#предпросмотр)
- [Линтинг кода](#линтинг-кода)

## Описание

Чистый проекст в котором настроен базовый роутинг и алис абсолютных путей на папку `src`, например:

- `import { Button } from '@/shared/ui/Button'`

Подразумевается, что в проекте будет использована архитектура FSD.

В шаблоне настроен скрипт автогенерации FSD слоёв Чтобы запустить необходимо ввести следующий скрипт

- `yarn new pages About`

после чего в папке `pages` появится следующая структура файлов и папок

```
pages
├── About
│ ├── index.ts
│ ├── model
│ │ └── types
│ │ └── index.ts
│ └── ui
│ ├── About.module.css
│ └── About.tsx
```

помимо `pages` можно создать и остальные fsd слайсы

- `yarn new widgets Header`
- `yarn new features Auth`
- `yarn new entities User`
- `yarn new shared/ui Button`

> [!NOTE]
> Чтобы скрипт отработал успешно предварительно уже должна существовать папка слоя

## Установка

Предварительно установите [node.js](https://nodejs.org/en/) и [yarn](https://yarnpkg.com/getting-started/install).

После этого в папке с проектом выполните следующую команду, чтобы установить зависимости

- `yarn`

## Структура проекта

- **src** - исходный код проекта.
- **scripts** - папка для скриптов

## Запуск проекта

Для запуска проекта выполните команду:

- `yarn dev` и перейдите по ссылке [http://localhost:5173](http://localhost:5173)

## Сборка проекта

Для сборки проекта выполните команду:

- `yarn build` Файлы появятся в папке `dist`

## Предпросмотр

Для запуска сервера предпросмотра выполните команду:

- `yarn preview`

## Линтинг кода

Для запуска линтинга выполните команду:

- `yarn lint`
