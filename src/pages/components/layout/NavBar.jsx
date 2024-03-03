import { AppBar, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="default">
    <Toolbar>
      {/* Replace with your actual logo and navigation */}
      <Typography variant="h6" color="inherit">
        Mind Pulse
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar