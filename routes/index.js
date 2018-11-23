var express = require('express');
var router = express.Router();

var Appointment = require('../models/appointments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webhooks', function(req, res){
    const data = req.body;
    const date = data.queryResult.parameters.date;
    const time = data.queryResult.parameters.time;

    const appointments = new Appointment({
      time: time,
      date: time
    });

    appointments.save().then(response=>{
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
});



module.exports = router;
