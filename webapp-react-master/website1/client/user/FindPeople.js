import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction' 
import ListItemText from '@material-ui/core/ListItemText' 
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Person from '@material-ui/icons/Person'
import ViewIcon from '@material-ui/icons/Visibility'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: 0
  }),
  title: {
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
  follow: {
    right: theme.spacing(2)
  },
  viewButton: {
    verticalAlign: 'middle'
  }
}))

export default function FindPeople() {
  const classes = useStyles()
  const [values, setValues] = useState({
    users: [],
    open: false,
  })
    
    return (<div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          follow suggestions
        </Typography>
        <List>
            <span key={1}>
                <ListItem>
                  <ListItemAvatar className={classes.avatar}>
                      <Avatar >
                      <Person/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText>Simran</ListItemText>
                  <ListItemSecondaryAction className={classes.follow}>
                      <IconButton variant="contained" color="secondary" className={classes.viewButton}>
                        <ViewIcon/>
                      </IconButton>
                    <Button aria-label="Follow" variant="contained" color="primary" >
                      Follow
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </span>
              <span key={1}>
                <ListItem>
                  <ListItemAvatar className={classes.avatar}>
                      <Avatar >
                      <Person/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText>User1</ListItemText>
                  <ListItemSecondaryAction className={classes.follow}>
                      <IconButton variant="contained" color="secondary" className={classes.viewButton}>
                        <ViewIcon/>
                      </IconButton>
                    <Button aria-label="Follow" variant="contained" color="primary" >
                      Follow
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </span> 
        </List>
      </Paper>
    </div>)
}