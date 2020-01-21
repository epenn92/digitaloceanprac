
const express = require('express')


const resultApi = require('../models/result.js')
const championApi = require('../models/champion.js')

const resultRouter = express.Router()


resultRouter.get('/', (req, res) => {
    resultApi.getAllResults()
        .then((results) => {
            res.json(results)
        })
})



resultRouter.post('/', (req, res) => {
    resultApi.addNewResult(req.body)
        .then((result) => {
            res.json({ result })
        })
})

resultRouter.get('/:championId', (req, res) => {
    resultApi.getResultsByChampionId(req.params.championId)
        .then((result) => {
            res.json(result)
        })
})
resultRouter.get('/:resultId', (req, res) => {
    resultApi.getResult(req.params.resultId)
        .then((result) => {
            res.json(result)
        })
})
resultRouter.put('/:resultId', (req, res) => {
    resultApi.updateResult(req.params.resultId, req.body)
        .then(() => {
            res.json({})
        })
})

resultRouter.delete('/:resultId', (req, res) => {
    resultApi.deleteResult(req.params.resultId)
        .then(() => {
            res.json({})
        })
})


module.exports = {
    resultRouter
}
