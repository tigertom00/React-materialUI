import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  testClass: {
    fontSize: '32px',
  },
  header: {
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  taskTracker: {
    flexGrow: 1,
  },
  taskPaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    background: '#C5C5C5',
  },
  trackerTitle: {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.primary.main,
  },
  taskTitleGrid: {
    margin: '5px',
    padding: '0 10px',
  },
  task: {
    background: '#f4f4f4',
    margin: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  reminder: {
    borderLeft: '5px solid green',
  },
  flexSb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
