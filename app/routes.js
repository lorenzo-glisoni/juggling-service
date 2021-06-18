const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'juggling-balls'
    var jugglingBalls = req.session.data['how-many-balls']

    // Check whether the variable matches a condition
    if (jugglingBalls == "3 or more"){
      // Send user to next page
      res.redirect('/juggling-tricks')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }

  })




  // Run this code when a form is submitted to 'additional-skills-answers'
router.post('/additional-skills-answers-2', function (req, res) {

  // Make a variable and give it the value from 'additional-skills-copy'
  var additionalSkills = req.session.data['skills']

  // Check whether the variable matches a condition
  if (additionalSkills == "Chainsaw"){
    // Send user to next page
    res.redirect('/danger')
  } else {
    // Send user to ineligible page
    res.redirect('/check-your-answers')
  }

})








  // Run this code when a form is submitted to 'danger-permit'
  router.post('/danger-yesno', function (req, res) {

    // Make a variable and give it the value from 'danger'
    var additionalSkills = req.session.data['danger-permit']

    // Check whether the variable matches a condition
    if (additionalSkills == "yes"){
      // Send user to next page
      res.redirect('/check-your-answers')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible-permit')
    }

  })





















module.exports = router
