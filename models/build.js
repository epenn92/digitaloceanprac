const mongoose = require('./connection.js')

const ResultSchema = new mongoose.Schema({
    name: String,
    ad: Number,
    ap: Number,
    championId: String,

})

const ResultCollection = mongoose.model('Results', ResultSchema)

const getAllResults = () => {
    return ResultCollection.find()
}

const getResult = (resultId) => {
    return ResultCollection.findById(resultId)
}

const addNewResult = (newResult) => {
    return ResultCollection.create(newResult)
}

const updateResult = (resultId, newResult) => {
    return ResultCollection.findByIdAndUpdate(resultId, newResult)
}

const deleteResult = (resultId) => {
    return ResultCollection.deleteOne({ _id: resultId })
}

const getResultsByChampionId = (championId) => {
    return ResultCollection.find({ _id: championId })
}

module.exports = {
    getAllResults,
    getResult,
    addNewResult,
    updateResult,
    deleteResult,
    getResultsByChampionId
}
