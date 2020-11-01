import User from '../models/user.model';
import Post from '../models/post.model';
import extend from 'lodash/extend';
import errorHandler from '../helpers/dberror';
import formidable from 'formidable';
import fs from 'fs';
import profileImage from './../../client/assets/images/profile-pic.png'
import { join } from 'path';
//const kmeans = require('node-kmeans');
//const kmeans = require('dimas-kmeans')

const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id).populate('following', '_id name')
    .populate('followers', '_id name')
    .exec()
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.password_b = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded"
      })
    }
    let user = req.profile
    user = extend(user, fields)
    user.updated = Date.now()
    if(files.photo){
      user.photo.data = fs.readFileSync(files.photo.path)
      user.photo.contentType = files.photo.type
    }
    try {
      await user.save()
      user.password_b = undefined
      res.json(user)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const remove = async (req, res) => {
  try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.password_b = undefined
    res.json(deletedUser)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const photo = (req, res, next) => {
  if(req.profile.photo.data){
    res.set("Content-Type", req.profile.photo.contentType)
    return res.send(req.profile.photo.data)
  }
  next()
}

const defaultPhoto = (req, res) => {
  return res.sendFile(process.cwd()+profileImage)
}

const addFollowing = async (req, res, next) => {
  try{
    await User.findByIdAndUpdate(req.body.userId, {$push: {following: req.body.followId}}) 
    next()
  }catch(err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const addFollower = async (req, res) => {
  try{
    let result = await User.findByIdAndUpdate(req.body.followId, {$push: {followers: req.body.userId}}, {new: true})
                            .populate('following', '_id name')
                            .populate('followers', '_id name')
                            .exec()
      result.password_b = undefined
      res.json(result)
    }catch(err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }  
}

const removeFollowing = async (req, res, next) => {
  try{
    await User.findByIdAndUpdate(req.body.userId, {$pull: {following: req.body.unfollowId}}) 
    next()
  }catch(err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const removeFollower = async (req, res) => {
  try{
    let result = await User.findByIdAndUpdate(req.body.unfollowId, {$pull: {followers: req.body.userId}}, {new: true})
                            .populate('following', '_id name')
                            .populate('followers', '_id name')
                            .exec() 
    result.password_b = undefined
    res.json(result)
  }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
  }
}

const findPeople = async (req, res) => {
  let following = req.profile.following
  following.push(req.profile._id)
  try {
    let users = await User.find({ _id: { $nin : following } }).select('name')
  {/*let users11=users;
    users.push({_id:req.profile._id,name:req.profile.name})
    let posts= await Post.find().select('likes') //get all posts with likes
    let matrix=[]
    console.log(users[1]._id)
    var i,j
    for(i=0;i<users.length;i++){           //make a 2-d matrix of all user X post like
      let row={id:users[i]._id,name:users[i].name}
      for(j=0;j<posts.length;j++){
        row[posts[j]._id]=0
        console.log(users[i]._id)
      if(posts[j].likes.includes(users[i]._id)){
        row[posts[j]._id]=1
      }
      }
      matrix.push(row)
    }
    console.log(Object.values(matrix[2])[1])
    let vectors = new Array();
for(let k = 0 ; k < matrix.length ; k++) {
  let vec=[]
  let count=posts.length+1
  for(j=2;j<count;j++){
  vec.push(Object.values(matrix[k])[j]);
  }
  vectors[k]=vec
} 
console.log(vectors)

let users1=[];
kmeans.clusterize(vectors, {k: 2}, (err1,res1) => {
  if (err1) console.log(err1);
  else {
    console.log(res1)
  }
  }
);
let temp=await fun123();
for(i=0;i<temp.length;i++)
{
if(temp[i].clusterInd.includes(users.length-1)){
  console.log("here")
for(j in temp[i].clusterInd){
  if(j!=(users.length-1)){
  users1.push({_id:matrix[j].id,name:matrix[j].name}) //create user list of users in same cluster 
}
}
}
}
console.log(users1)*/}
res.json(users)
  }catch(err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  photo,
  defaultPhoto,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
  findPeople
}