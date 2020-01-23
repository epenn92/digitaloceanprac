const mongoose = require('./connection.js')

const BuildSchema = new mongoose.Schema({
    buildName: String,
    buildAd: Number,
    buildAp: Number,
    championId: String

})

const BuildCollection = mongoose.model('Builds', BuildSchema)

const getAllBuilds = () => {
    return BuildCollection.find()
}

const getBuild = (buildId) => {
    return BuildCollection.findById(buildId)
}

const addNewBuild = (newBuild) => {
    return BuildCollection.create(newBuild)
}

const updateBuild = (buildId, newBuild) => {
    return BuildCollection.findByIdAndUpdate(buildId, newBuild)
}

const deleteBuild = (buildId) => {
    return BuildCollection.deleteOne({ _id: buildId })
}

const getBuildsByChampionId = (championId) => {
    return BuildCollection.find({ _id: championId })
}

module.exports = {
    getAllBuilds,
    getBuild,
    addNewBuild,
    updateBuild,
    deleteBuild,
    getBuildsByChampionId
}
