import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import auth from './../auth/auth-helper'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import {read, update} from './api-user.js'
import {Redirect} from 'react-router-dom'
import Person from '@material-ui/icons/Person'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root:{
    alignItems: 'center',
    backgroundColor:'silver'
  },
  card: {
    maxWidth: 800,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    alignItems: 'center',
    backgroundColor:'#a0d2eb'
  },
  avatar:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
 
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function EditProfile({ match }) {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    about: '',
    photo: '',
    id: '',
    open: false,
    error: '',
    redirectToProfile: false
  })
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, id: data._id, name: data.name, email: data.email, about: data.about})
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.userId])

  const clickSubmit = () => {
    let userData = new FormData()
    values.name && userData.append('name', values.name)
    values.email && userData.append('email', values.email)
    values.passoword && userData.append('passoword', values.passoword)
    values.about && userData.append('about', values.about)
    values.photo && userData.append('photo', values.photo)
    update({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, userData).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, 'redirectToProfile': true})
      }
    })
  }
  const handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    setValues({...values, [name]: value })
  }
  const photoUrl = values.id
                 ? `/api/users/photo/${values.id}?${new Date().getTime()}`
                 : '/api/users/defaultphoto'
    if (values.redirectToProfile) {
      return (<Redirect to={'/user/' + values.id}/>)
    }
    return (
      <Card className={classes.card}>
      <CardContent >
        <Typography variant="h6" className={classes.title}>
          Edit Profile
        </Typography>
        <Box display="flex"
        alignItems="center"
        p={1}
        m={1} justifyContent ='center' p={1}>
       <Avatar src={photoUrl} className={classes.large} style={{ height: '70px', width: '70px' }} /></Box><br/>
        <label htmlFor="icon-button-file">
            Profile pic:
          </label>  
        <input accept="image/*" onChange={handleChange('photo')} className={classes.input} id="icon-button-file" type="file" />
          
          <br/><span className={classes.filename}>{values.photo ? values.photo.name : ''}</span><br/>
        <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
        <TextField
          id="multiline-flexible"
          label="About"
          multiline
          rows="2"
          value={values.about}
          onChange={handleChange('about')}
          className={classes.textField}
          margin="normal"
        /><br/>
        <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
        <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
        <br/> {
          values.error && (<Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
            {values.error}
          </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
      </CardActions>
    </Card>
    )
}