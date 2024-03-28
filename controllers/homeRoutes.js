const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            skills: [
                { name: 'HTML', color: '#FFA500' },
                { name: 'CSS', color: '#FFFF00' },
                { name: 'JavaScript', color: '#FF0000' },
                { name: 'Backend', color: '#008000' },
                { name: 'Microservices', color: '#0000FF' },
                { name: 'Operating Systems', color: '#4B0082' },
                { name: 'Databases', color: '#EE82EE' }
            ]
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
