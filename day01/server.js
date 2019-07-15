const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

    
const employeeRoutes=require('./server/employee.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

//step 2+3: 
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'dist/my-app05')));
    app.use('/employee',employeeRoutes);    
    const port = process.env.PORT || 4000;
    
    app.get('/',(req,resp)=>{
      resp.sendFile(__dirname+"/dist/my-app05/index.html");
    });  
    
    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });