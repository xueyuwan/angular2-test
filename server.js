var express = require('express');
var app = express();
app.use(express.static(__dirname+'/'));
app.set('port',process.env.PORT||5000);
app.listen(app.get('port'),function(){
    console.log('app server listening on',app.get('port'));
})