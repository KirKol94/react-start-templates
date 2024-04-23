import { Box, Container, Typography } from '@mui/material'
import c from './Plans.module.css'

export const Plans = () => {
  return (
    <Box className={c.plans}>
      <Container>
        <Typography variant="h3" component="h2" align="center">
          Планы
        </Typography>

        <Typography variant="h5" component="p" align="center" marginTop={2}>
          Добавить ещё один раздел в котором помимо всего того, что настроено в шаблонах выше ещё будут добавлены разные
          стейт-менеджеры
        </Typography>

        <Typography variant="h5" component="p" align="center" marginTop={2}>
          Добавить правила / конфиги линтеров для каждого шаблона
        </Typography>

        <Typography variant="h5" component="p" align="center" marginTop={2}>
          Добавить stylelint
        </Typography>
      </Container>
    </Box>
  )
}
