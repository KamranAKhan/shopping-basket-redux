import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CartBadge from '../../widgets/CartBadge';

// IconsCartBadge
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InfoIcon from '@material-ui/icons/Info';
import StarsIcon from '@material-ui/icons/Stars';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';

import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBreadcrumbs from '../../widgets/Breadcrumbs';

import HomeContent from '../HomeContent/HomeContent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#b32727'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: '#ffffff'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b32727',
    color: '#ffffff !important'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 64,
    width: '100%'
  },
  headerTitle: {
    color: '#ffffff',
    width: '100%',
    fontSize:16
  },
  navIcon: {
    minWidth: 35,
    color: '#ffffff'
  },
  navCancelIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    minWidth: 35,
    color: '#ffffff'
  },
  logo: {
    height: 40
  },
  paddingTopBottom0: {
    paddingTop: 0,
    paddingBottom: 0
  },
  paddingBottom0: {
    paddingBottom: 0
  },
  cartIcon: {
    float: 'right',
  },
  logoIcon:{
    cursor: 'pointer'
  }

}));

function Navbar(props:any) {  
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);



  let navigate = useNavigate();
  let location = useLocation();  

  let pathname = location.pathname;
  //const [pathname, setPathName] = useState(location.pathname);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ChangeRoute = (route:string) => {
    navigate(route);
    setTimeout(function () {
      setMobileOpen(false);
    }, 300)
  }

  const Logout = () => {
    alert('logout function')
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <List className={classes.paddingBottom0}>
          <ListItem className={classes.paddingTopBottom0}>
            <ListItemIcon className={classes.navCancelIcon} onClick={handleDrawerToggle}> <ClearIcon /> </ListItemIcon>
            <ListItemText className={classes.logoIcon} onClick={() => ChangeRoute('/')}><img src={process.env.PUBLIC_URL + '/logo.png'} alt="booty logo" className={classes.logo} /></ListItemText>
          </ListItem>
        </List>
      </div>

      <Divider />
      <List>
        <ListItem button onClick={() => ChangeRoute('/')}>
          <ListItemIcon className={classes.navIcon}> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button onClick={() => ChangeRoute('/products')}>
          <ListItemIcon className={classes.navIcon}> <StorefrontIcon /> </ListItemIcon>
          <ListItemText primary={'Products'} />
        </ListItem>
        <ListItem button onClick={() => ChangeRoute('/about')}>
          <ListItemIcon className={classes.navIcon}> <InfoIcon /> </ListItemIcon>
          <ListItemText primary={'About Us'} />
        </ListItem>
        <ListItem button onClick={() => ChangeRoute('/contact')}>
          <ListItemIcon className={classes.navIcon}> <ContactMailIcon /> </ListItemIcon>
          <ListItemText primary={'Contact Us'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
          <ListItemIcon className={classes.navIcon}> <LoyaltyIcon /> </ListItemIcon>
          <ListItemText primary={'Membership'} />
        </ListItem>
        <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
          <ListItemIcon className={classes.navIcon}> <SubscriptionsIcon /> </ListItemIcon>
          <ListItemText primary={'Subscribe'} />
        </ListItem>
        <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
          <ListItemIcon className={classes.navIcon}> <StarsIcon /> </ListItemIcon>
          <ListItemText primary={'Favourites'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => Logout()}>
          <ListItemIcon className={classes.navIcon}> <ExitToAppIcon /> </ListItemIcon>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.headerTitle}>
            Welcome, Kamran Ahmed Khan
          </Typography>
          <div style={{ float: 'right' }}>
            <CartBadge />
          </div>          
        </Toolbar>

      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {
          pathname === '/'
          ? <HomeContent/>
          : <div>
              <AppBreadcrumbs />
              <Outlet />
            </div>
        }        
      </main>
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
