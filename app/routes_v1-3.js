const express = require('express')
const { get } = require('browser-sync')
const router = express.Router()
const fs = require('fs')



var folder = "v1-3/_find-adviser/filters"
var versionServiceName = "Find an adviser"
router.use(function (req, res, next) {
  // store in locals this can then be used in pages as {{folder}} etc
  res.locals.folder=folder
  res.locals.versionServiceName=versionServiceName
  next()
})


var searchColumn = 'DEF_SearchTextAll'

// Routes
router.get('/_find-adviser/search', function(req, res) {
    res.render(folder + '/filter-page', { results: filterRegister(req.query.name, req.query.skills, req.query.statuses, req.query.country, req.query.category), url: req.url  })
})

router.get('/_find-adviser/adviser-details/:adviserNumber', function(req, res) {
    res.render(folder + '/adviser-details', findAdviser(req.params.adviserNumber))
})


// Functions
function findAdviser(adviserNumber) {
    return getRegisterData('register').find(element => element.EA_FileNumber === adviserNumber)
}

function filterRegister(name, skills, statuses, country, category) {
    name = name.toLowerCase()

    let registerData = getRegisterData('register')

    if (name) {
        registerData = registerData.filter(element => element[searchColumn].includes(name))
    }

    if (skills != '_unchecked') {
        registerData = registerData.filter(element => listMatch(skills, element.skills))
    }

    if (statuses != '_unchecked') {
        registerData = registerData.filter(element => statuses.includes(element.EA_Status))
    }

    if (country) {
        registerData = registerData.filter(element => element.EA_Country === country)
    }

    if (category) {
        registerData = registerData.filter(element => element.EA_ProductCategory === category)
    }

    return registerData
}

function getRegisterData(registerName) {
    return require('./views/' + folder + '/data/registers/register.json')
}

function listMatch(listA, listB) {
    listB = listB.split(',').map(element => element.trim()) // Turn string into array
    result = listA.filter(element => listB.includes(element))
    return result.length > 0
}

module.exports = router
