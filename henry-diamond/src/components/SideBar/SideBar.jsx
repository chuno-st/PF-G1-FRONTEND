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
import HowToBuyModal from "../HowToBuyModal/HowToBuyModal"
import FilterProduct from "../Filter/FilterProduct"
import { UserInfo } from "../UserInfo/UserInfo"


const drawerWidth = 300;

// const StyledButton = withStyles({
//   root: {
//     background: 'linear-gradient(90deg, #ffee33 30%, #a2cf6e 90%)',
//     border: 0,
//     color: '#b26a00',
//     textShadow: '0 3px 5px 2px rgba(255, 105, 135, .8)',
//     height: 30,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
//   label: {
//     textTransform: 'capitalize',
//   },
// })(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  text: {
    color: '#827717',
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
    color: '#827717'
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
    background:'#d1c4e9',
    borderBlockColor: '#b39ddb'
  },
  drawerHeader: {
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
            <ListItem Button>
              <ListItemIcon>{<SpaIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>Productos</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<LocalFloristIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>Precio</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<EcoIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>Por nombre</h4>}</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem button>
              <ListItemIcon>{<FilterVintageIcon />}</ListItemIcon>
              <ListItemText className={classes.text}>{<h4>Por color</h4>}</ListItemText>
            </ListItem>
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
