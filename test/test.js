const Nightmare = require('nightmare')
const assert = require('assert')

describe('Running through App', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({show: true})
  })
  //Testing page loads wihtout error
  describe('Visiting main Page', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })


//Testing each Modal Works
describe('Clicking through Project Modals', () => {
  it('each one should open without error, and I shoudl be able to click both right and left arrows at least 7 times to run through each project without an error', done => {
    // your actual testing urls will likely be `http://localhost:port/path`
    nightmare.goto('http://localhost:3000')
    .click('.uTileDevelopersProgram')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
    .click('.TheCentennialCharge')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
    .click('.BamazonApp')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
    .click('.FlashCardFun')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
    .click('.StarWarsBattle')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
    .click('.RockPaperScissors-Multiplayer')
    .wait(2000)
    .click('#closeBar')
    .wait(1000)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })
})

//Testing if arrows on modals work
describe('Clicking through Project Modals with arrows', () => {
  it('should cycle through each project with both arrows without error', done => {
    // your actual testing urls will likely be `http://localhost:port/path`
    nightmare.goto('http://localhost:3000')
    .click('.uTileDevelopersProgram')
    .wait(2000)
    .click('.rightArrow')
    .wait(1000)
    .click('.rightArrow')
    .wait(1000)
    .click('.rightArrow')
    .wait(1000)
    .click('.rightArrow')
    .wait(1000)
    .click('.rightArrow')
    .wait(1000)
    .click('.rightArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
    .click('.leftArrow')
    .wait(1000)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })
})
describe('Testing contact modal', () => {
  it('should load without error', done => {
    // your actual testing urls will likely be `http://localhost:port/path`
    nightmare.goto('http://localhost:3000')
      .click('.emailModal')
      .wait(1000)
      .insert('#emailLine', '')
      .type('#emailLine', 'recruiter@gmail.com')
      .insert('#subjectLine', '')
      .type('#subjectLine', 'Hi from this cool person')
      .insert('#emailBody', '')
      .type('#emailBody', 'a nice friendly body')
      .click('.btn-success')
      .wait(2000)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })
})
})
