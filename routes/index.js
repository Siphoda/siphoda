const Controller = require('../controllers/controller');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world')
})

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

router.get('/plhas/:plhasId/records', (req, res) => { //untuk menampilkan riwayat pelayanan 1 pasien
    res.send('Hello World!')
})

router.get('/plhas/:plhasId/edit', (req, res) => { //untuk menampilkan form edit plha
    res.send('Hello World!')
})

router.post('/plhas/:plhasId/edit', (req, res) => { //untuk menyimpan hasil perubahan data plha
    res.send('Hello World!')
})


router.get('/logout', (req, res) => { //untuk logout
    res.send('Hello World!')
})

router.post('/logout', (req, res) => { //untuk logout
    res.send('Hello World!')
})

module.exports = router