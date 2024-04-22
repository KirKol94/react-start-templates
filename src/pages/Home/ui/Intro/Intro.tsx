import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, Container, Typography } from '@mui/material'
import c from './Intro.module.css'

export const Intro = () => {
  return (
    <Box className={c.intro}>
      <Container className={c.container}>
        <Typography variant="h3" component="h1">
          React Start Templates
        </Typography>

        <Typography variant="h5" component="p">
          Начни работу с React с нужным стартовым шаблоном и не трать время на настройку проекта
        </Typography>

        <Box className={c.buttons}>
          <Button
            variant="contained"
            size="large"
            target="_blank"
            LinkComponent="a"
            href="https://github.com/KirKol94/react-start-templates"
          >
            <GitHubIcon />
            GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
