const mongoose = require('./connection.js')

const RuneSchema = new mongoose.Schema({
    runeName: String,
    runeDescription: String,
    championId: String

})

const RuneCollection = mongoose.model('Runes', RuneSchema)

const getAllRunes = () => {
    return RuneCollection.find()
}

const getRune = (runeId) => {
    return RuneCollection.findById(runeId)
}

const addNewRune = (newRune) => {
    return RuneCollection.create(newRune)
}

const updateRune = (runeId, newRune) => {
    return RuneCollection.findByIdAndUpdate(runeId, newRune)
}

const deleteRune = (runeId) => {
    return RuneCollection.deleteOne({ _id: runeId })
}

const getRuneByChampionId = (championId) => {
    return RuneCollection.findById(championId)
}



module.exports = {
    getAllRunes,
    getRune,
    addNewRune,
    updateRune,
    deleteRune,
    getRuneByChampionId
}