const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const {SongId, UserId} = req.query

      const bookmark = await Bookmark.findOne({
         where:{
           SongId: SongId,
           UserId: UserId
         }
       })
      res.send(bookmark)
    } catch(err){
      console.log(err)
      res.status(400).send({
        error: 'An Error has occured trying to fetch the bookmark.'
        })
    }
  },
  async post (req, res) {
    try{
      const {SongId, UserId} = req.body
      console.log('song', SongId)
      const bookmark = await Bookmark.findOne({
         where:{
           SongId: SongId,
           UserId: UserId
         }
       })
       if (bookmark){
        return res.status(400).send({
             error: 'You have already added this nookmark.'
             })
       }
    const newBookmark = await Bookmark.create(req.body)
      res.send(newBookmark)
    } catch(err){
      res.status(400).send({
        error: 'An Error has occured trying to create the bookmark.'
        })
    }
  },
  async delete (req, res) {
    try{
      const {bookmarkId} = req.params
      console.log('*****Bookmark ID*******', bookmarkId)
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch(err){
      console.log(err)
      res.status(400).send({
        error: 'An Error has occured trying to delete the bookmark.'
        })
    }
   }

}
