
const express = require('express')


const runeApi = require('../models/rune.js')
const championApi = require('../models/champion.js')

const runeRouter = express.Router()


runeRouter.get('/', (req, res) => {
    runeApi.getAllRunes()
        .then((runes) => {
            res.json(runes)
        })
})

runeRouter.post('/new', (req, res) => {
    runeApi.addNewRune(req.body)
        .then((rune) => {
            res.json(rune)

        })
})
runeRouter.get('/:runeId', (req, res) => {
    runeApi.getRune(req.params.runeId)
        .then((rune) => {
            res.json(rune)
        })
})

runeRouter.get('/:runeId', async (req, res) => {
    const rune = await runeApi.getRune(req.params.runeId)
    const champion = await championApi.getChampionByRuneId(rune.championId)

        .then(() => {
            res.json({ champion })
        })
})


runeRouter.put('/edit/:runeId', (req, res) => {
    runeApi.updateRune(req.params.runeId, req.body)
        .then(() => {
            res.json({})
        })
})

runeRouter.delete('/:runeId', (req, res) => {
    runeApi.deleteRune(req.params.runeId)
        .then(() => {
            res.json({})
        })
})



module.exports = {
    runeRouter
}
