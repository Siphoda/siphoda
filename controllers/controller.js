const {Services, Admins, PLHAs, Records, Users} = require('../models');
let bcrypt = require('bcryptjs');

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

    static formAddPLHA(req, res){
        let {errors} = req.query
        res.render('formaddPLHA', {errors})
    }

    static saveNewPLHA(req, res){
        // console.log(req.body);
        let newPLHA = {
            citizenId: req.body.citizenId,
            name: req.body.name,
            dateOfEntry: req.body.dateOfEntry,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            education: req.body.education,
            marriageStatus: req.body.marriageStatus,
            income: req.body.income,
            phone: req.body.phone,
            address: req.body.address,
            reference: req.body.reference,
            emergencyContact: req.body.emergencyContact,
            detectedDate: req.body.detectedDate,
            risk: req.body.risk,
            arvAccess: req.body.arvAccess,
            arvMed: req.body.arvMed,
        }

        PLHAs.create(newPLHA)
        .then(data => {
            res.redirect('/plhas')
        })
        .catch(err => {
            if(err.name == 'SequelizeValidationError'){
                const errors = err.errors.map(e => e.message)
                res.redirect(`/plhas/add?errors=${errors}`)
            } else {
                res.send(err)
            }
        })
    }

    static registForm(req, res){
        let {errors} = req.query
        res.render('registform', {errors})
    }

    static saveRegist(req, res){
        let newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        Users.create(newUser)
        .then(data => {
            res.redirect('/plhas')
        })
        .catch(err => {
            if(err.name == 'SequelizeValidationError'){
                const errors = err.errors.map(e => e.message)
                res.redirect(`/registrasi?errors=${errors}`)
            } else {
                res.send(err)
            }
        })
    }

    static loginForm(req, res){
        let {error} = req.query
        res.render('loginform', {error})
    }

    static loginProceeds(req, res){
        let {email, password} = req.body
        Users.findOne({where: {email}})
        .then(user => {
            if(user){
                let validPass = bcrypt.compareSync(password, user.password)
                if(validPass){
                    req.session.userId = user.id
                    return res.redirect('/plhas')
                } else {
                    const error = 'Invalid password'
                    return res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = 'Email does not found!'
                return res.redirect(`/login?error=${error}`)
            }
        })
        .catch( err => {
            res.send(err)
        })
    }

    static formRecord(req, res){
        let patient
        let services
        PLHAs.findAll()
        .then(dataPLHA => {
            patient = dataPLHA
            return Services.findAll()
        })
        .then(service => {
            services = service
            return Admins.findAll()
        })
        .then(admins => {
            res.render('formaddrecord', {patient, services, admins})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static saveNewRecord(req, res){
        console.log(req.body);
        let newRecord = {
            AdminId: req.body.adminId,
            PLHAId: req.body.PLHAId,
            ServiceId: req.body.serviceId,
            serviceDate: req.body.serviceDate,
            note: req.body.note,
        }

        Records.create(newRecord)
        .then(data => {
            res.redirect('/records')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showRecord(req, res){
        Records.findAll({
            include: [
                {
                    model: Admins
                },
                {
                    model: Services
                },
                {
                    model: PLHAs
                }
            ]
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller