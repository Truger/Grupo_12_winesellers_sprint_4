const express = require('express');
const app = express();
const port= process.env.PORT;
const path = require("path");
/*const publicPatch = path.resolve(__dirname, "./public");*/
const userRouter = require('./routes/userRouter');
app.use(express.static("Public"));
app.set('view engine', 'ejs');

app.use("/user", userRouter);

app.get("/", (req, res) => { 
    res.render('home') 
});

app.get("/cart", (req, res) => {
    res.render('cart')
});

app.get("/productDetails", (req, res) => {
     res.render('productDetails') 
});

app.use((req, res, next) =>{
    res.status(404).render('page_404');
});   

app.listen(port|| 3000, () => {
    console.log('Listening on port'+port);
});