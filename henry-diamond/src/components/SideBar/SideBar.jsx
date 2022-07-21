import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import EcoIcon from '@material-ui/icons/Eco';

import SpaIcon from '@material-ui/icons/Spa';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CallIcon from '@material-ui/icons/Call';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import HowToBuyModal from "../HowToBuyModal/HowToBuyModal"
import { UserInfo } from "../UserInfo/UserInfo"
import FilterMaterial from "../Filter/FilterMaterial"


const drawerWidth = 300;



const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'primary',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'primary'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    paddinTop: 30,
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#e0e0e0',
    borderBlockColor: 'secondary'
  },
  drawerHeader: {
    paddingTop: 80,
    color: '#ff6d00',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const { loginWithRedirect,  user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        
        
        
        <List>
           <FilterMaterial />
        </List>
        <Divider />
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon>{<StorefrontIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>¿Cómo comprar?</h4>}</ListItemText>
              <HowToBuyModal />
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<CallIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>Contacto</h4>}</ListItemText>
            </ListItem>
        </List>
        <Divider />
        
          {
             <ListItem button>  
            {
              isAuthenticated ? (
              <div>
                    <Profile />
                    <UserInfo />
              </div>
          ) : (
            
              <LoginButton />
           
              )
          }
            </ListItem>
          }
          <Divider />
         

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
      </main>
    </div>
  );
}
