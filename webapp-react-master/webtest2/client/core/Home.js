
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Img1 from './../assets/images/img.jpg'
import {Link, withRouter} from 'react-router-dom'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import 'history';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    backgroundColor:'#a0d2eb'
    },
    title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
    },
    media: {
    minHeight: 400
    }
   }))
   document.body.style.backgroundColor = "#8458B3";
   export default function Home(){
    const classes = useStyles()
    return (
    <div  className={classes.root}>
    {!auth.isAuthenticated() &&
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
    Home Page
    </Typography>
    <CardMedia className={classes.media}
    image={Img1} title="Hello"/>
    <CardContent>
    <Typography variant="body2" component="p">
    Welcome.
    </Typography>
    </CardContent>
    </Card>
    }
    {auth.isAuthenticated() &&
      <Grid container spacing={8}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
   }
   