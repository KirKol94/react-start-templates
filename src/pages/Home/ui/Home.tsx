import { Box } from '@mui/material'
import { Intro } from './Intro/Intro'
import { Branches } from './Branches/Branches'
import { Plans } from './Plans/Plans'

export const Home = () => {
  return (
    <Box>
      <Intro />
      <Branches />
      <Plans />
    </Box>
  )
}
