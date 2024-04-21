import { Box, Container, Link, List, ListItem, Typography } from '@mui/material'
import c from './Branches.module.css'
import { $api } from '@/shared/api'
import { useEffect, useState } from 'react'
import { GitHub } from '@mui/icons-material'

type IBranch = {
  name: string
  commit: {
    sha: string
    url: string
  }
  protected: boolean
}

export const Branches = () => {
  const [branches, setBranches] = useState<IBranch[]>([])

  const getBranches = async () => {
    const { data } = await $api.get<IBranch[]>('https://api.github.com/repos/KirKol94/react-start-templates/branches')
    setBranches(data.filter(b => b.name !== 'master'))
  }

  useEffect(() => {
    getBranches()
  }, [])

  return (
    <Box className={c.branches}>
      <Container className={c.container}>
        <Typography variant="h3" component="h2" className={c.title}>
          One branch = One starter template
        </Typography>

        <Typography variant="h4" component="p" className={c.subtitle}>
          You can use one branch for all your projects
        </Typography>

        <Typography variant="h5" component="p">
          Each starter template has routing set up using "react-router-dom". Absolute paths are aliased using '@/' and
          it is assumed that the project will expand using the features-sliced design methodology.
        </Typography>

        <Typography variant="h5" component="p" marginTop={2}>
          To use a desired template, simply navigate to its page and download the .zip archive. Then, in the folder, run
          the `yarn` command to install dependencies and `yarn dev` to start a quick development server, without wasting
          time on project setup.
        </Typography>

        <Box className={c.listBox}>
          <List className={c.list}>
            {branches.map(branch => (
              <ListItem key={branch.name} className={c.listItem}>
                <Link
                  underline="none"
                  href={`https://github.com/KirKol94/react-start-templates/tree/${branch.name}`}
                  target="_blank"
                  className={c.link}
                >
                  <GitHub />
                  <Typography variant="h6" component="h3" className={c.name}>
                    {branch.name}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  )
}
