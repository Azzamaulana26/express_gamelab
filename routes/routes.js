import express from "express";
const router = express.Router();

router.get('/kelas/:id', (req, res) => {
    res.send(`Ini adalah halaman untuk kelas ${req.params.id}`);
});

router.get('/kelas/:jurusan/:id/:pilihan?', (req, res) => {
    const { jurusan, id, pilihan } = req.params;
    const optionalText = pilihan ? ` ${pilihan}` : '';
    res.send(`Ini adalah halaman untuk kelas ${jurusan}${optionalText} tingkat ${id}`);
});

router.post('/', (req, res) => {
    res.send('Ini adalah POST');
});

router.put('/', (req, res) => {
    res.send('Ini adalah PUT');
});

router.delete('/', (req, res) => {
    res.send('Ini adalah DELETE');
});

export default router;