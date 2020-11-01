import User from '../models/user.model';
import extend from 'lodash/extend';
import errorHandler from '../helpers/dberror';

const create =  async (req, res) => {
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
const list =  async (req, res) => {
    try {
    let users = await User.find().select('name email updated created')
    res.json(users)
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
    }
   }
   
const userByID =  async (req, res, next, id) => {
    try {
    let user = await User.findById(id).populate('following', '_id name').populate('followers', '_id name')
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
    //req.profile.salt = undefined
    return res.json(req.profile)
   }
   
const update =   async (req, res) => {
    try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    await user.save()
    user.password_b = undefined
    //user.salt = undefined
    res.json(user)
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
    }
}
const remove =  async (req, res) => {
    try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.password_b = undefined
    //deletedUser.salt = undefined
    res.json(deletedUser)
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
    }
   }
   const addFollowing = async (req, res, next) => {  
       try{    
           await User.findByIdAndUpdate(req.body.userId,
            {$push: {following: req.body.followId}}) 
            next()  
        }catch(err){    
            return res.status(400).json({error: errorHandler.getErrorMessage(err)})  
        }
    }
    const addFollower = async (req, res) => {  
        try{    
            let result = await User.findByIdAndUpdate(req.body.followId,
                {$push: {followers: req.body.userId}},                            
                {new: true}).populate('following', '_id name').populate('followers', '_id name').exec()      
                result.password_b = undefined      
                res.json(result)    
            }catch(err) 
            {      
                return res.status(400).json({error: errorHandler.getErrorMessage(err)})    
            }
        }
export default { create, userByID, read, list, remove, update,addFollower,addFollowing}