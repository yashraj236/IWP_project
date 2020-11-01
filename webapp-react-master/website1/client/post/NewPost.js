import React, {useState, useEffect} from 'react'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import Person from '@material-ui/icons/Person'
import {makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#efefef',
    padding: `${theme.spacing(3)}px 0px 1px`
  },
  card: {
    maxWidth:600,
    margin: 'auto',
    marginBottom: theme.spacing(3),
    backgroundColor: 'rgba(65, 150, 136, 0.09)',
    boxShadow: 'none'
  },
  cardContent: {
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0
  },
  cardHeader: {
    paddingTop: 8,
    paddingBottom: 8
  },
  photoButton: {
    height: 30,
    marginBottom: 5
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '90%'
  },
  submit: {
    margin: theme.spacing(2)
  },
  filename:{
    verticalAlign: 'super'
  }
}))

export default function NewPost (props){
  const classes = useStyles()
  const [values, setValues] = useState({
    text: '',
    photo: '',
    error: '',
    user: {}
  })
  const jwt = auth.isAuthenticated()
  useEffect(() => {
    setValues({...values, user: auth.isAuthenticated().user})
  }, [])
    return (<div className={classes.root}>
      <Card className={classes.card}>
      <CardHeader
            avatar={
              <Avatar>
              <Person/>
              </Avatar>
            }
            title="User"
            className={classes.cardHeader}
          />
      <CardContent className={classes.cardContent}>
        <TextField
            placeholder="Share your thoughts ..."
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
        />
        <input accept="image/*"  className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="secondary" className={classes.photoButton} component="span">
            <PhotoCamera />
          </IconButton>
        </label> <span className={classes.filename}></span>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" className={classes.submit}>POST</Button>
      </CardActions>
    </Card>
  </div>)
}
