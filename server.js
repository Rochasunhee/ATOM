var http = require('http')

var server = http.createServer();

var express = require('express')
var app = express()

server.on('request',doRequest);

//server.listen(3003);

console.log('Starting Server!')

function doRequest(req,res){

res.writeHead(200,{'Cotent-Type':'text/plain; meta charset=utf-8'})
res.write('can not print korean');
res.end();
}

app.use(express.static('data'));



app.get('/',function(req,res){
  res.send('<h1> This is the main <br> homepage <h1>')
});

app.get('/topic',function(req,res){
  res.send('Topic page')
});

app.get('/dynamic',function(req,res){
  var sp='';//빈문자열
  for (var i=0;i<10;i++){ System.out.print(i + ", ");
    //sp=sp+`<h1><h1><br>`
  }

res.send(sp);



})


app.listen(3003,function(){
  console.log('Server running 3003 port');
})
