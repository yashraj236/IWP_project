import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import auth from './../auth/auth-helper'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5),
      backgroundColor:'#a0d2eb'
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    }
  }))

export default function Users() {
    const classes = useStyles()
    const [values, setValues] = useState({
      name: '',
    })
    const jwt = auth.isAuthenticated()
    const [users, setUsers] = useState([]) 
    useEffect(() => {   
        const abortController = new AbortController()
        const signal = abortController.signal
        console.log(JSON.stringify(jwt))
        list(signal).then((data) => {
        if (data && data.error) {
        console.log(data.error)
        } else {
        setUsers(data)}})
        return function cleanup(){
        abortController.abort()
        } }, []) 
   
        const handleChange = name => event => {
          setValues({ ...values, [name]: event.target.value })
          
        }
        function addids(c1, c2) {
          var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
          return hexStr;
        }
        let id=sessionStorage.getItem('jwt');
        //search
        let filtereduser=users.filter(
          (user) =>{
            let temp=user.name.toLowerCase()
            let temp2=values.name.toLowerCase()
            return !temp.indexOf(temp2)
          }
        );
    return (
        //paper similar to div/body each react element needs a container
        <Paper className={classes.root} elevation={4}> 
          <Typography variant="h6" className={classes.title}>
            All Users
          </Typography>
          <TextField id="search_u" label="Search user" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          
          <List dense>
          {filtereduser.map((item, i) => {
            return <Link to={"/user/" + item._id} key={i}>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar src={`/api/users/photo/${item._id}?${new Date().getTime()}`} />
                        </ListItemAvatar>
                        <ListItemText primary={item.name}/>
                        <ListItemSecondaryAction>
                        <IconButton>
                        <Link to={"/chat/"+ addids(item._id,jwt.user._id)}>
                        <ListItemText>Chat</ListItemText><ArrowForward/>
                            </Link>
                        </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                   </Link>
                 })
               }             
          </List>
        </Paper>
      )
}