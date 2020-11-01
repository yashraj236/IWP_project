import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {unfollow, follow} from './api-user.js'

export default function FollowProfileButton (props) {
  const followClick = () => {
    props.following=true
  }
  const unfollowClick = () => {
    props.following = false
  }
    return (<div>
      { props.following
        ? (<Button variant="contained" color="secondary" onClick={unfollowClick}>Unfollow</Button>)
        : (<Button variant="contained" color="primary" onClick={followClick}>Follow</Button>)
      }
    </div>)
}
FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
}