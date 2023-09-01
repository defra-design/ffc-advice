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