
const express = require('express')


const championApi = require('../models/champion.js')
const runeApi = require('../models/rune.js')

const championRouter = express.Router()


championRouter.get('/', (req, res) => {
  championApi.getAllChampions()
    .then((champions) => {
      res.json(champions)
    })
})

championRouter.get('/:championId', (req, res) => {
  championApi.getChampion(req.params.championId)
    .then((champion) => {
      res.json(champion)
    })
})

championRouter.get('/:championId', async (req, res) => {
  const champion = await championApi.getChampionByRuneId(req.params.championId)
  const rune = await runeApi.getRuneByChampionId(champion.runeId)

    .then(() => {
      res.json({ rune })
    })
})

championRouter.post('/new', (req, res) => {
  championApi.addNewChampion(req.body)
    .then((champion) => {
      res.json({ champion })
    })
})

championRouter.put('/edit/:championId', (req, res) => {
  championApi.updateChampion(req.params.championId, req.body)
    .then((champion) => {
      res.json({ champion })
    })
})

championRouter.delete('/:championId', (req, res) => {
  championApi.deleteChampion(req.params.championId)
    .then(() => {
      res.json({})
    })
})



module.exports = {
  championRouter
}
