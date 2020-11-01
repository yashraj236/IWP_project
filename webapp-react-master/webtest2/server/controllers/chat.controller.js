import errorHandler from '../helpers/dberror';
import message from '../models/message.model';

const list = async (req, res) => {
    try {
      let msg = await message.find({'chatroom':req.params.chtid}).select('chatroom userId name message _id')
      res.json(msg)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  export default {list}