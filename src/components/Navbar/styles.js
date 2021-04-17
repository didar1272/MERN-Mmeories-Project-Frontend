import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    height: '60px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    image: {
      height: '25px',
      marginLeft: '5px',
      marginTop: '4px'
    },
    appBar: {
      margin: '10px 0px',
      padding: '10px 5px',
    },
    heading: {
      fontSize: '25px',
      marginLeft: '10px'
    },
    userName: {
      display: 'none',
      
    },
    profile: {
      width: '130px',
    },
    brandContainer: {

    },
    purple: {
      marginTop: '5px',
      marginLeft: '25px',
      height: '30px',
      width: '30px',
      
    },
    logout: {
      marginLeft: '5px',
      marginTop: '4px',
      fontSize: '10px',
      height: '30px',
      width: '30px',
    }

  }
}));