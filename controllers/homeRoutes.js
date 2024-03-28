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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});


module.exports = router;
