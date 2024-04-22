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
          В планах добавить ещё один раздел в котором помимо всего того, тчо настроено в шаблонах выше ещё будут
          добавлены разные стейт-менеджеры
        </Typography>
      </Container>
    </Box>
  )
}
