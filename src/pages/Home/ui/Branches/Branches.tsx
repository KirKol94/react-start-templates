import { CardTemplate } from '@/widgets/CardTemplate'
import { Box, Container, List, Typography } from '@mui/material'
import c from './Branches.module.css'

export const Branches = () => {
  return (
    <Box className={c.branches}>
      <Container className={c.container}>
        <Typography variant="h3" component="h2" className={c.title}>
          Одна ветка - один шаблон
        </Typography>

        <Typography variant="h5" component="p" marginTop={2}>
          В каждом шаблоне по умолчанию настроены алиасы путей и базовый роутинг
        </Typography>

        <Typography variant="h5" component="p" marginTop={2}>
          Чтобы воспользоваться шаблоном перейди по ссылке и скачай .zip архив
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
