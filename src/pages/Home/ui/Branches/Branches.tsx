import { Box, Container, Link, List, ListItem, Typography } from '@mui/material'
import c from './Branches.module.css'
import DownloadIcon from '@mui/icons-material/Download'

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
            <ListItem className={c.listItem}>
              <Link
                underline="none"
                href="https://github.com/KirKol94/react-start-templates/archive/refs/heads/clear-react-ts.zip"
                className={c.link}
              >
                <DownloadIcon color="primary" />
                <Typography variant="h5" component="span" className={c.name}>
                  React TS
                </Typography>
              </Link>

              <Typography variant="h5" component="span" className={c.text}>
                Чистое React TS приложение
              </Typography>
            </ListItem>

            <ListItem className={c.listItem}>
              <Link
                underline="none"
                href="https://github.com/KirKol94/react-start-templates/archive/refs/heads/material-ui.zip"
                className={c.link}
              >
                <DownloadIcon color="primary" />
                <Typography variant="h5" component="span" className={c.name}>
                  Material UI
                </Typography>
              </Link>

              <Typography variant="h5" component="span" className={c.text}>
                React приложение с подключенной библиотекой Material UI
              </Typography>
            </ListItem>

            <ListItem className={c.listItem}>
              <Link
                underline="none"
                href="https://github.com/KirKol94/react-start-templates/archive/refs/heads/tailwindcss.zip"
                className={c.link}
              >
                <DownloadIcon color="primary" />
                <Typography variant="h5" component="span" className={c.name}>
                  Tailwindcss
                </Typography>
              </Link>

              <Typography variant="h5" component="span" className={c.text}>
                React приложение с подключенным препроцессором Tailwindсss
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  )
}
