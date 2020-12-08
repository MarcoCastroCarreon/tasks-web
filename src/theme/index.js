import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lightGreen from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/lightBlue';

const Theme = createMuiTheme({
    palette: {
      primary: lightGreen,
      secondary: blue
    }
});

export default Theme; 