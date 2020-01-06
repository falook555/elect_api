

const passport = require('passport')
const passportService = require('./service/passport')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })
const users = require('./controllers/Users')
const EletIndex = require('./controllers/elect/index')



// const MailSend = require('./controllers/MailSend/Index')




module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("<h1 style='text-align:center;margin-top:150px; '>Elect Api</h1>")
    })
    app.post('/signin', requireSignin, users.signin)

    app.get('/get-indexeletri',EletIndex.findeletri)
    app.get('/get-main/:id/:emonth/:eyear',EletIndex.showmonth)
    app.get('/get-detail/:emonth/:eyear/:badgenumber',EletIndex.showDetail)
    app.get('/get-profile/:badgenumber',EletIndex.profile)

    app.get('/get-select/:id/:emonth/:eyear',EletIndex.selectmonth)
}
