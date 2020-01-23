
const express = require('express')


const itemApi = require('../models/item.js')

const itemRouter = express.Router()


itemRouter.get('/', (req, res) => {
    itemApi.getAllItems()
        .then((items) => {
            res.json(items)
        })
})

itemRouter.get('/:itemId', (req, res) => {
    itemApi.getItem(req.params.itemId)
        .then((item) => {
            res.json(item)
        })
})

itemRouter.post('/new', (req, res) => {
    itemApi.addNewItem(req.body)
        .then((item) => {
            res.json({ item })
        })
})

itemRouter.put('/edit/:itemId', (req, res) => {
    itemApi.updateItem(req.params.itemId, req.body)
        .then(() => {
            res.json({})
        })
})

itemRouter.delete('/:itemId', (req, res) => {
    itemApi.deleteItem(req.params.itemId)
        .then(() => {
            res.json({})
        })
})



module.exports = {
    itemRouter
}
