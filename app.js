const express = require('express');
const app = express();
const cors = require('cors');
const port= process.env.PORT;
const path = require("path");
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const productRouter = require('./routes/productRouter');
const methodOverride = require('method-override');

const userAPIRouter = require('./routes/api/userAPIRouter');
const productAPIRouter = require('./routes/api/productAPIRouter');
const categorytAPIRouter = require('./routes/api/categoryAPIRouter')

app.use(cors());
app.use(express.static("Public"));
const userLoggertMiddleware = require('./middlewares/userLoggertMiddleware');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(session({
    secret:'secreto',
    resave: false,
    saveUninitialized:false
    }));
app.use(cookieParser());
app.use(userLoggertMiddleware);
app.use("/user", userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);


app.use('/api/products', productAPIRouter);
app.use('/api/users', userAPIRouter);
app.use('/api/categories',categorytAPIRouter);

app.get("/", (req, res) => { 
    res.render('home') 
});

app.get("/productDetails", (req, res) => {
     res.render('productDetails') 
});

app.use((req, res, next) =>{
    res.status(404).render('page_404');
    //return res.status(404).json('page no founds');
});   

app.listen(port|| 3002, () => {
    console.log('Listening on port');
});