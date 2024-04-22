import { Download, GitHub } from '@mui/icons-material'
import { Box, Link, ListItem, Typography } from '@mui/material'
import c from './CardTemplate.module.css'

interface Props {
  title: string
  branchName: string
  description: string
}

export const CardTemplate = (props: Props) => {
  const { title, branchName, description } = props

  return (
    <ListItem className={c.listItem}>
      <Typography variant="h5" component="h3" className={c.title}>
        {title}
      </Typography>

      <Typography variant="h5" component="span" className={c.description}>
        {description}
      </Typography>

      <Box className={c.links}>
        <Link
          className={c.link}
          href={`https://github.com/KirKol94/react-start-templates/archive/refs/heads/${branchName}.zip`}
        >
          <Download />
          <Typography variant="h6" component="span" className={c.description}>
            Скачать
          </Typography>
        </Link>

        <Link
          className={c.link}
          href={`https://github.com/KirKol94/react-start-templates/tree/${branchName}`}
          target="_blank"
        >
          <GitHub />
          <Typography variant="h6" component="span" className={c.description}>
            GitHub
          </Typography>
        </Link>
      </Box>
    </ListItem>
  )
}
