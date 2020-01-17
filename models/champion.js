const mongoose = require('./connection.js')

const ChampionSchema = new mongoose.Schema({
  name: String,
  description: String,
  isMelee: Boolean,
  damageType: String,
  ad: Number,
  ap: Number,

})

const ChampionCollection = mongoose.model('Champions', ChampionSchema)

const getAllChampions = () => {
  return ChampionCollection.find()
}

const getChampion = (championId) => {
  return ChampionCollection.findById(championId)
}

const addNewChampion = (newChampion) => {
  return ChampionCollection.create(newChampion)
}

const updateChampion = (championId, newChampion) => {
  return ChampionCollection.findByIdAndUpdate(championId, newChampion)
}

const deleteChampion = (championId) => {
  return ChampionCollection.deleteOne({ _id: championId })
}




module.exports = {
  getAllChampions,
  getChampion,
  addNewChampion,
  updateChampion,
  deleteChampion
}
