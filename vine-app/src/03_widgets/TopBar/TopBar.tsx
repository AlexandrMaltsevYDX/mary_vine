import React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';



interface TopBarProps {
    children: React.ReactNode
}

const TopBar: React.FC<TopBarProps> = ({children}) =>  {
  return (
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
      >
        <Toolbar>
            {children}
        </Toolbar>
      </AppBar>
  );
}

export default TopBar