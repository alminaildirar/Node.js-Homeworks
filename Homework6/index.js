
const koa = require('koa');
const route = require('koa-route')
const app = new koa();
const port = 3000;

app.use(route.get('/', index));
app.use(route.get('/about', about))
app.use(route.get('/contact', contact))

function *index(){
 this.body= '<h1>Welcome to the index page.</h1>';
}

function *about(){
 this.body= '<h1>Welcome to the about page.</h1>';
}

function *contact(){
 this.body= '<h1>Welcome to the contact page.</1>';
}

app.listen(port)
