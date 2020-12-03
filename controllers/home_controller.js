const {post} = require('../models/post')

module.exports.home= async (req,res)=>{
                 req.session.count = 0
                console.log(req.user)
                // let data = await 
                let result = await post.find({}).exec()
                
                return res.render('home.hbs',{result,   title: 'CoMEET | Home'})
}