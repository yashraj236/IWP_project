import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import Person from '@material-ui/icons/Person'
import Img1 from './../assets/images/img1.jpg'
import Comments from './Comments.js'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CommentIcon from '@material-ui/icons/Comment'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import NewPost from './NewPost'

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: theme.spacing(3)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  media: {
    minHeight: 330
  }
}))
export default function Newsfeed () {
  const classes = useStyles()
  const jwt = auth.isAuthenticated()
    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Feed
        </Typography>
        <Divider/>
        <NewPost />
        <Divider/>
       
        <Card className={classes.card}>
        <CardHeader
        title="Yashraj"
            avatar={
              <Avatar>
              <Person/>
              </Avatar>
            }
          />
        <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.text}>
            Moon shot
          </Typography>
        <div className={classes.photo}>
              <img height="450" width="100%"
                className={classes.media}
                src={Img1}
                />
            </div>
        </CardContent>
        <CardActions>
          
            <IconButton  className={classes.button} aria-label="Like" color="secondary">
                <FavoriteIcon />
              </IconButton>
             <span>15</span>
              <IconButton className={classes.button} aria-label="Comment" color="secondary">
                <CommentIcon/>
              </IconButton> <span>3</span>
        </CardActions>
        <Divider/>
        <Comments/>
      </Card>
      </Card>
    )
}