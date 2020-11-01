import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import chatCtrl from '../controllers/chat.controller'
const router = express.Router()
router.route('/api/users')
 .get(userCtrl.list)
 .post(userCtrl.create)
router.route('/api/users/:userId')
 .get(authCtrl.requireSignin, userCtrl.read)
 .put(authCtrl.requireSignin, authCtrl.hasAuthorization,
 userCtrl.update)
 .delete(authCtrl.requireSignin, authCtrl.hasAuthorization,
 userCtrl.remove)
router.route('/api/users/photo/:userId')
 .get(userCtrl.photo, userCtrl.defaultPhoto)
router.route('/api/users/defaultphoto')
 .get(userCtrl.defaultPhoto)

router.route('/api/users/findpeople/:userId')
   .get(authCtrl.requireSignin, userCtrl.findPeople)
router.route('/api/chat/:chtid').get(chatCtrl.list)
router.route('/api/user/follow')
    .put(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)
router.route('/api/user/unfollow')
    .put(authCtrl.requireSignin, userCtrl.removeFollowing, userCtrl.removeFollower)
router.param('userId', userCtrl.userByID)
export default router