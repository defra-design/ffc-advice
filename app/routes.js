//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/Version_4/Filter/filterfirst1', function(request, response) {

    var decision = request.session.data['decision']
    if (decision == "Yes"){
        response.redirect('/Version_4/Filter/option2filter')
    } else {
        response.redirect('/Version_4/Filter/filterfirst2')
    }
})


// Version 5 routes

router.post("/Version_5/Filter/filterfirst1", function (request, response) {
    var choice = request.session.data["choice"];
    if (choice == "Yes") {
      response.redirect("/Version_5/Filter/option3filter");
    } else {
      response.redirect("/Version_5/Filter/filter3");
    }
  });