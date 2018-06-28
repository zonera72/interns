var express = require('express');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/project.html', function (req, res) {
   res.sendFile( __dirname + "/" + "project.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
     address:req.query.address,
    // occu:req.query.occu,
   };

   console.log(response);
   res.end(JSON.stringify(response));
   response.send("Your Entered Information is: \n");
})
app.post('/process_post',function(req,res){
response={
    occu:req.query.occu,
};
console.log(response);
res.end(JSON.stringify(response));   
res.end(JSON.stringify(response));

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})