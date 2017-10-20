// var koa = require('koa');
// var app = new koa();
//
// app.use(function* (next){
//   console.log("1");
//   yield next;
//     console.log("2");
// });
//
// app.use(function* (next) {
//
//     console.log("3");
//     yield next;
//     console.log("4");
// });
//
// app.use(function* (){
//     console.log("5");
//     this.body = "Hello Generators";
//     console.log("6")
//
// });
//
// app.listen(3000);

//
//----
// var koa = require('koa');
// var router = require('koa-router');
// var app = new koa();
//
// var _ = router(); //Instantiate the router
//
// _.get('/hello', getMessage); // Define routes
//
// function *getMessage() {
//     this.body = "Hello world!";
// };
//
// app.use(_.routes()); //Use the routes defined using the router
// app.listen(3000);
//------------------
//NOT WORK
// var koa = require('koa');
// var router = require('koa-router');
// var app = new koa();
//
// var _ = router();
//
// _.get('/hello', getMessage);
// _.post('hello', postMessage);
//
// function *getMessage() {
//     this.body = "You just called the post method at '/hello'\n";
// };
//
// function * postMessage() {
//     this.body = "You just called the post method at '/hello'!\n";
// }
// app.use(_.routes());
// app.listen(3000);

//**************
//NOT WORK
// var koa = require('koa');
// var router = require('koa-router');
// var app = new koa();
//
// var _ = router();
//
// _.get('/:id', sendID);
//
// function *sendID(){
//     this.body = 'The id you specified is ' + this.params.id;
// }
//
// app.use(_.routes());
// app.listen(3000);
//*************************
//NOT WORK
// var koa = require('koa');
// var router = require('koa-router');
// var app = new koa();
//
// var _ = router();
//
// _.get('/things/:name/:id', sendIdAndName);
//
// function *sendIdAndName(){
//     this.body = 'id: ' + this.params.id + ' and name: ' + this.params.name;
// };
//
// app.use(_.routes());
//
// app.listen(3000);
//*********
//Not WORK

// var koa = require('koa');
// var router = require('koa-router');
// var app = new koa();
//
// var _ = router();
//
// _.get('/things/:id([0-9]{5})', sendID);
//
// function *sendID(){
//     this.body = 'id: ' + this.params.id;
// }
//
// app.use(_.routes());
// app.listen(3000);

var koa = require('koa');
var router = require('koa-router');
var app = new koa();

var _ = router();

_.get('/hello', getMessage);

function *getMessage(){
    console.log(this.request);
    this.body = 'Your request has been logged.';
}

app.use(_.routes());

app.listen(3000);