const mongoose = require('./connection.js')

const ItemSchema = new mongoose.Schema({
    itemName: String,
    itemDescription: String,
    isMelee: Boolean,
    damageType: String,
    itemAd: Number,
    itemAp: Number,
    unique: Boolean,

})

const ItemCollection = mongoose.model('Items', ItemSchema)

const getAllItems = () => {
    return ItemCollection.find()
}

const getItem = (itemId) => {
    return ItemCollection.findById(itemId)
}

const addNewItem = (newItem) => {
    return ItemCollection.create(newItem)
}

const updateItem = (itemId, newItem) => {
    return ItemCollection.findByIdAndUpdate(itemId, newItem)
}

const deleteItem = (itemId) => {
    return ItemCollection.deleteOne({ _id: itemId })
}


module.exports = {
    getAllItems,
    getItem,
    addNewItem,
    updateItem,
    deleteItem
}
