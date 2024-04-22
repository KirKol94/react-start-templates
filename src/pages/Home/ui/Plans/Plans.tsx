import { Box, Container, Typography } from '@mui/material'
import c from './Plans.module.css'

export const Plans = () => {
  return (
    <Box className={c.container}>
      <Container>
        <Typography variant="h3" component="h2" align="center">
          Планы
        </Typography>

        <Typography variant="h5" component="p" align="center" marginTop={2}>
          В планах в каждый стартовый шаблон добавить скрипт для автогенерации FSD слоёв
        </Typography>
      </Container>
    </Box>
  )
}
