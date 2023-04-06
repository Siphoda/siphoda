const Controller = require('../controllers/controller');

const router = require('express').Router();

router.get('/', Controller.homepage)

router.get('/registrasi', Controller.registForm)

router.post('/registrasi', Controller.saveRegist)

router.get('/login', Controller.loginForm)

router.post('/login', Controller.loginProceeds)

router.use((req, res, next) => {
    if(!req.session.userId){
        const error = 'you must login first!'
        res.redirect(`/login?error=${error}`)
    } else {
        console.log('Time:', Date.now())
        next()
    }
})

router.get('/plhas', Controller.getAllPLHAs)//untuk menampilkan semua data plhas

router.get('/records', Controller.showRecord)//untuk menampilkan semua data records

router.get('/plhas/add', Controller.formAddPLHA)//untuk menampilkan form create plhas

router.post('/plhas/add', Controller.saveNewPLHA)//untuk menyimpan create new plhas

router.get('/records/add', Controller.formRecord)//untuk menampilkan form create records

router.post('/records/add', Controller.saveNewRecord)//untuk menyimpan create new records

router.get('/records/:recordId/delete', Controller.deleteRecord)

router.get('/plhas/:plhasId/records', (req, res) => { //untuk menampilkan riwayat pelayanan 1 pasien
    res.send('Hello World!')
})

router.get('/plhas/:plhasId/edit', Controller.formEditDataPatient)//untuk menampilkan form edit plha

router.post('/plhas/:plhasId/edit', Controller.saveEditPLHA)//untuk menyimpan hasil perubahan data plha


router.get('/logout', Controller.logout)//untuk logout



module.exports = router