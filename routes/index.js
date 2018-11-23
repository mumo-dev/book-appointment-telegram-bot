var express = require('express');
var router = express.Router();

var Appointment = require('../models/appointments');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = null;
  // Appointment.find({}, function(err, result){
  //   if(err) throw err;
  //   if(result){
  //       data = result;
  //   }
  // });
  res.render('index', { title: 'Express'});
});

router.post('/webhooks', function(req, res){
    const data = req.body;
    
    console.log(data);
    res.json(data);
    /*
    const date = data.queryResult.parameters.date;
    const time = data.queryResult.parameters.time;

    console.log("This url has been called");

    const appointments = new Appointment({
      time: time,
      date: time
    });

    appointments.save().then(response=>{
        console.log(response);
        res.status(200).json({
          fulfillmentText:" Appointment made",
          source:""
        })
    })
    .catch(err=>{
      res.status(500).json({
        error: err
      })
    })
    */
});



module.exports = router;
