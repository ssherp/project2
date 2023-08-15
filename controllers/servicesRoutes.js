const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

router.get('/services', withAuth, async (req, res)=>{
	try{
		 res.render('add-service', { 
			logged_in: req.session.logged_in 
		 });
	}catch(error){
		 res.json( {error, loggedIn: req.session.log_in})
	}
 })

 module.exports = router;