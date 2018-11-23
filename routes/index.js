var express = require('express');
var router = express.Router();

var Appointment = require('../models/appointments');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = null;
  Appointment.find({}, function(err, result){
    if(err) throw err;
    if(result){
        data = result;
    }
  });
  res.render('index', { title: 'Express'});
});

router.post('/webhooks', function(req, res){
    const data = req.body;
   
    const date = data.queryResult.parameters['date'];
    const time = data.queryResult.parameters['time'];

    const appointments = new Appointment({
      time,
      date
    });
    console.log(data);
    
    appointments.save().then(response=>{
        console.log(response);
        res.status(200).json({
          fulfillmentText:"Got it. I have your appointment scheduled on 2018-11-23 at 12:00:00. See you soon. Good-bye.",
          fulfillmentMessages: [
            {
              "text": {
                "text": [
                  "Got it. I have your appointment scheduled on 2018-11-23 at 12:00:00. See you soon. Good-bye."
                ]
              }
            }
          ],
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
