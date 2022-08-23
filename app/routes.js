const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/v1-3', require('./routes_v1-3')),
router.use('/v1-4', require('./routes_v1-4'))


// ROUTING for funding eligibility
router.post('/gf-eligibility-what-for', function (req, res) {
    const fundingApplication = req.session.data['previous-funding-application'];
    if (fundingApplication === "yes") {
        res.redirect('/gf-eligibility-what-for');
    } else {
        res.redirect('../gf-results');
    };
})

router.post('/gf-eligibility-funding-received', function (req, res) {
    const fundingApplication = req.session.data['funding-application-successful'];
    if (fundingApplication === "yes") {
        res.redirect('/gf-eligibility-funding-received');
    } else {
        res.redirect('/gf-eligibility-why-unsuccessful');
    };
})

module.exports = router