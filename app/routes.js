//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

const sessionData = require('./data/session-data-defaults');
const { filters } = require('./data/filters');
const { results } = require('./data/results');

// Add your routes here

router.post('/Alpha/Version_4/Filter/filterfirst1', function (request, response) {
  var decision = request.session.data['decision'];
  if (decision == 'Yes') {
    response.redirect('/Alpha/Version_4/Filter/filterfirst1');
  } else {
    response.redirect('/Alpha/Version_4/Filter/filterfirst2');
  }
});

// Version 5 routes

router.post('/Alpha/Version_5/Filter/filterfirst1', function (request, response) {
  var choice = request.session.data['choice'];
  if (choice == 'Yes') {
    response.redirect('/Alpha/Version_5/Filter/option3filter');
  } else {
    response.redirect('/Alpha/Version_5/Filter/filter3');
  }
});

//Beta routes

//SP ++
router.post('/Beta/SP-plus/Filter/filterfirst1', function (request, response) {
  var choice = request.session.data['choice'];
  if (choice == 'Yes') {
    response.redirect('/Beta/SP-plus/Filter/option3filter');
  } else {
    response.redirect('/Beta/SP-plus/Filter/filter3');
  }
});

router.get('/Beta/SP-MVP/home/data', function (req, res) {
  res.render('Beta/SP-MVP/home', {
    filters,
    results
  });
});
