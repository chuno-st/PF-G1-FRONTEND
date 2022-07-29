import {React, useState} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IndexChart from "../ChartJS";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Productos from "../Productos/Productos"
import Usuarios from "../Usuarios/Usuarios"
import Categorias from "../Categorias/Categorias"
import SubCategorias from "../SubCategorias/SubCategorias"
import CrearProducto from "../CrearProducto/CrearProducto.jsx";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function SideBar() {
    const classes = useStyles();

    const [show, setShow] = useState("DashBoard");

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Henry Diamonds
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List onClick={()=> setShow("DashBoard")} >
                    {["Dashboard"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List onClick={()=> setShow("Productos")}>
                    {["Productos"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<DiamondIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                {/* <List onClick={()=> setShow("CrearProducto")}>
                    {["CrearProducto"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<SportsKabaddiIcon/>}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
                <List onClick={()=> setShow("Usuarios")}>
                    {["Usuarios"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<PersonIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List onClick={()=> setShow("Categorias")}>
                    {["Categorias"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<CategoryIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List onClick={()=> setShow("SubCategorias")}>
                    {["Sub Categorias"].map((text) => (
                        <ListItem component={Link} to="/admin" button key={text}>
                            <ListItemIcon>{<AutoAwesomeIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {show === "DashBoard" && <IndexChart />}
                {show === "Productos" && < Productos />}
                {/* {show === "CrearProducto" && <CrearProducto/>} */}
                {show === "Usuarios" && <Usuarios />}
                {show === "Categorias" && <Categorias />}
                {show === "SubCategorias" && <SubCategorias/>}
            </main>
        </div>
    );
}
