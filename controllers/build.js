
const express = require('express')


const buildApi = require('../models/build.js')
const championApi = require('../models/champion.js')

const buildRouter = express.Router()


buildRouter.get('/', (req, res) => {
    buildApi.getAllBuilds()
        .then((builds) => {
            res.json(builds)
        })
})



buildRouter.post('/new', (req, res) => {
    buildApi.addNewBuild(req.body)
        .then((build) => {
            res.json({ build })
        })
})

// buildRouter.get('/:championId', (req, res) => {
//     buildApi.getBuildsByChampionId(req.params.championId)
//         .then((build) => {
//             res.json(build)
//         })
// })

buildRouter.get('/:buildId', (req, res) => {
    buildApi.getBuild(req.params.buildId)
        .then((build) => {
            res.json(build)
        })
})
buildRouter.put('/:buildId', (req, res) => {
    buildApi.updateBuild(req.params.buildId, req.body)
        .then(() => {
            res.json({})
        })
})

buildRouter.delete('/:buildId', (req, res) => {
    buildApi.deleteBuild(req.params.buildId)
        .then(() => {
            res.json({})
        })
})


module.exports = {
    buildRouter
}
