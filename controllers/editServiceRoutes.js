const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

router.get('/services/edit', withAuth, async (req, res)=>{
	try{
		 res.render('edit-service', { 
			logged_in: req.session.logged_in 
		 });
	}catch(error){
		 res.json( {error, loggedIn: req.session.log_in})
	}
 })

 module.exports = router;