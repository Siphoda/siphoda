const {Services, Admins, PLHAs, Records, Users} = require('../models');


class Controller{
    static getAllPLHAs(req, res){
        PLHAs.findAll()
        .then(dataPLHA => {
            res.render('allPLHA', {dataPLHA})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller