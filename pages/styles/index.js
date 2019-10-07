export function indexStyles() {
    return theme => ({
      root: {
        flexGrow: 1,
        marginLeft: '25px',
        marginRight: '25px',
        padding: '20px',
        display: 'flex'
      },
      paper: {
        marginBottom: '10px',
        backgroundColor: '#f06292'
      },
      img: {
        height: '50px',
        marginTop: '20px',
        borderRadius: '50%',
        paddingRight: '10px'
      },
      button: {
        margin: theme.spacing(1),
        textTransform: 'none'
      },
      p: {
        backgroundColor: '#40c4ff',
        padding: '5px',
        borderRadius: '5px'
      }
    });
}