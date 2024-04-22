import { Container, Typography } from '@mui/material'
import c from './NotFound.module.css'

export const NotFound = () => {
  return (
    <Container className={c.notFound}>
      <Typography variant="h1">404</Typography>
      <Typography variant="body1" component="p">
        Page not found
      </Typography>
    </Container>
  )
}
