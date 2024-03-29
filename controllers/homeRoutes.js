const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Skill,User} = require('../models')
router.get('/', async (req, res) => {
    try {
        const skillData = await Skill.findAll({include:[User]})
        const skills = skillData.map((post)=> post.get({plain: true}))
        res.render('homepage', {
   skills
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// router.get("/:skillname", async(req,res)=>{
//     console.log(req.params.skillname)
// })
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
