import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import SpaIcon from '@material-ui/icons/Spa';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CallIcon from '@material-ui/icons/Call';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
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
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon>{<SpaIcon />}</ListItemIcon>
              <ListItemText>{<h4>Productos</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<LocalFloristIcon />}</ListItemIcon>
              <ListItemText>{<h4>Precio</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<EcoIcon />}</ListItemIcon>
              <ListItemText>{<h4>Por nombre</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<FilterVintageIcon />}</ListItemIcon>
              <ListItemText>{<h4>Por color</h4>}</ListItemText>
            </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon>{<StorefrontIcon />}</ListItemIcon>
              <ListItemText>{<h4>¿Cómo comprar?</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<CallIcon />}</ListItemIcon>
              <ListItemText>{<h4>Contacto</h4>}</ListItemText>
            </ListItem>
        </List>
        <Divider />
          {
             <ListItem button>  
            {
              isAuthenticated ? (
              <Profile />
          ) : (
              <LoginButton />
              )
          }
            </ListItem>
          }
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
