const Controller = require('../controllers/controller');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/plhas')
})

router.get('/plhas', Controller.getAllPLHAs)//untuk menampilkan semua data plhas

router.get('/records', (req, res) => { //untuk menampilkan semua data records
    res.send('Hello World!')
})

router.get('/plhas/add', (req, res) => { //untuk menampilkan form create plhas
    res.send('Hello World!')
})

router.post('/plhas/add', (req, res) => { //untuk menyimpan create new plhas
    res.send('Hello World!')
})

router.get('/records/add', (req, res) => { //untuk menampilkan form create records
    res.send('Hello World!')
})

router.post('/records/add', (req, res) => { //untuk menyimpan create new records
    res.send('Hello World!')
})

router.get('/plhas/:plhasId/records', (req, res) => { //untuk menampilkan riwayat pelayanan 1 pasien
    res.send('Hello World!')
})

router.get('/plhas/:plhasId/edit', (req, res) => { //untuk menampilkan form edit plha
    res.send('Hello World!')
})

router.post('/plhas/:plhasId/edit', (req, res) => { //untuk menyimpan hasil perubahan data plha
    res.send('Hello World!')
})

router.post('/login', (req, res) => { //untuk login
    res.send('Hello World!')
})

router.post('/logout', (req, res) => { //untuk logout
    res.send('Hello World!')
})

module.exports = router