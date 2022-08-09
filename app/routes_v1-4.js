const express = require('express')
const { get } = require('browser-sync')
const router = express.Router()
const fs = require('fs')



var folder = "v1-4/_find-adviser/filters"
var versionServiceName = "Find an adviser"
router.use(function (req, res, next) {
  // store in locals this can then be used in pages as {{folder}} etc
  res.locals.folder=folder
  res.locals.versionServiceName=versionServiceName
  next()
})

// Routes
router.get('/_find-adviser/search', function(req, res) {
    res.render(folder + '/filter-page', { results: filterRegister(req.query.name, req.query.skills, req.query.sectors, req.query.counties, req.query.qualifications, req.query.experiences), url: req.url  })
})

router.get('/_find-adviser/adviser-details/:adviserNumber', function(req, res) {
    res.render(folder + '/adviser-details', findAdviser(req.params.adviserNumber))
})


// Functions
function findAdviser(adviserNumber) {
    return getRegisterData('register').find(element => element.adviserID === adviserNumber)
}

function filterRegister(name, skills, sectors, counties, qualifications, experiences) {
    name = name.toLowerCase()

    let registerData = getRegisterData('register')

    if (name) {
        registerData = registerData.filter(element => element.searchText.toLowerCase().includes(name))
    }

    if (skills != '_unchecked') {
        registerData = registerData.filter(element => listMatch(skills, element.skills))
    }

    if (sectors != '_unchecked') {
        registerData = registerData.filter(element => listMatch(sectors, element.sectors))
    }

    if (counties != '_unchecked') {
        registerData = registerData.filter(element => listMatch(counties, element.counties))
    }

    if (qualifications != '_unchecked') {
        registerData = registerData.filter(element => listMatch(qualifications, element.qualifications))
    }

    if (experiences != '_unchecked') {
        registerData = registerData.filter(element => matchExperiences(experiences, element.experience))
    }

    return registerData
}

function getRegisterData(registerName) {
    return require('./views/' + folder + '/data/registers/advisers.json')
}

function listMatch(listA, listB) {
    listB = listB.split(',').map(element => element.trim()) // Turn string into array
    result = listA.filter(element => listB.includes(element))
    return result.length > 0
}

function matchExperiences(listA, experience) {
    experience = parseInt(experience)
    return listA.some(element => matchExperience(element, experience))
}

function matchExperience(experience, value) {
    return experience === '<5' && value <= 5
     || experience === '5-10' && value >= 5 && value <= 10
     || experience === '10-20' && value >= 10 && value <= 20
     || experience === '>20' && value >= 20
}

module.exports = router
