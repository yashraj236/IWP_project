import React, {useState} from 'react'
import auth from './../auth/auth-helper'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Person from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
  cardHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  smallAvatar: {
    width: 25,
    height: 25
  },
  commentField: {
    width: '96%'
  },
  commentText: {
    backgroundColor: 'white',
    padding: theme.spacing(1),
    margin: `2px ${theme.spacing(2)}px 2px 2px`
  },
  commentDate: {
    display: 'block',
    color: 'gray',
    fontSize: '0.8em'
 },
 commentDelete: {
   fontSize: '1.6em',
   verticalAlign: 'middle',
   cursor: 'pointer'
 }
}))

export default function Comments () {
  const classes = useStyles()
  const jwt = auth.isAuthenticated()
  
    const commentBody = item => {
      return (
        <p className={classes.commentText}>
          User 1<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum, nulla quis mollis ullamcorper, urna mauris congue justo, eget tincidunt diam turpis at lorem. Curabitur facilisis viverra risus quis lacinia
          <span className={classes.commentDate}>
           5/5/2020 
          </span>
        </p>
      )
    }

    return (<div>
        <CardHeader
              avatar={
                <Avatar className={classes.smallAvatar} >
                <Person/>
                </Avatar>
              }
              title={ <TextField
                multiline
                placeholder="Write something ..."
                className={classes.commentField}
                margin="normal"
                />}
              className={classes.cardHeader}
        />
        <CardHeader
                      avatar={
                        <Avatar className={classes.smallAvatar}><Person/></Avatar>
                      }
                      title={commentBody()}
                      className={classes.cardHeader}
                      key={1}/>
              
    </div>)
}