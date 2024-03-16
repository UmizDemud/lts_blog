import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
  <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <a href="https://www.deepb.org/en/home" className="font--explora link-slf bg-white">Umut Deniz</a>
        </Typography>
      </Toolbar>
    </React.Fragment>
) 

export default Header;