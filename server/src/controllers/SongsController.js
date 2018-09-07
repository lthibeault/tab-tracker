const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch(err){
      res.status(400).send({
        error: 'An Error has occured trying to fetch the songs.'
        })
    }
  },
  async post (req, res) {
    console.log('Trying to add the Song')
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch(err){
      res.status(400).send({
        error: 'An Error has occured trying to create the song.'
        })
    }
  },
  async show (req, res) {
    try{
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch(err){
      res.status(400).send({
        error: 'An Error has occured trying to fetch the songs.'
        })
    }
  },
  async put (req, res) {
    try {
      const songs = await Song.update(req.body,{
      where: {
        id:req.params.songId
      }
    })
      res.send(req.body)
    } catch (err) {
      res.status(400).send({
        error: 'An Error has occured trying to Update the songs.'
        })
    }
  }
}
