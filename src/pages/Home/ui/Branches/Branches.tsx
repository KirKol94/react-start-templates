import { CardTemplate } from '@/widgets/CardTemplate'
import { Box, Container, List, ListItem, Typography } from '@mui/material'
import c from './Branches.module.css'

export const Branches = () => {
  return (
    <Box className={c.branches}>
      <Container className={c.container}>
        <Typography variant="h3" component="h2" className={c.title}>
          Одна ветка - один шаблон
        </Typography>

        <Typography variant="h5" component="p" marginTop={2}>
          Каждый шаблон по умолчанию имеет настройки:
        </Typography>

        <List>
          <ListItem>
            <Typography component="p">Роутинг</Typography>
          </ListItem>
          <ListItem>
            <Typography component="p">Алиас абсолютных путей через '@/'</Typography>
          </ListItem>
          <ListItem>
            <Typography component="p">Скрипт для автогенерации FSD слоёв</Typography>
          </ListItem>
          <ListItem>
            <Typography component="p">Скрипт для подсчёта строк в папке src</Typography>
          </ListItem>
        </List>

        <Typography variant="h5" component="p" marginTop={2}>
          Чтобы воспользоваться шаблоном скачай архиив и установи зависимости
        </Typography>

        <Box className={c.listBox}>
          <List className={c.list}>
            <CardTemplate title="Clear" branchName="clear-react-ts" description="Чистое react + TS" />
            <CardTemplate title="Tailwindcss" branchName="tailwindcss" description="React + TS + Tailwind" />
            <CardTemplate title="Material UI" branchName="material-ui" description="React + TS + Material-UI" />
          </List>
        </Box>
      </Container>
    </Box>
  )
}
