
/*
const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/order.model'); // Adjust the path as needed


const router = express.Router();



router.get('/',(req,res) =>{
    res.render('menu');
});

router.get('/cart',(req,res) =>{
    res.render('cart');
});

router.get('/orders',(req,res) =>{
    res.render('orders');
});

router.get('/admin',(req,res) =>{
    Order.find((err,docs)=> {
        if(!err){
            res.render('admin',{
                order:docs
           
});

}else{

    console.log('Error in order :'+err);
}

});
});

router.get('/order/:id', (req, res) => {
     Order.findById(req.params.id,(err,doc) =>{
        if(!err){
            res.render("orders",{order:doc});

        }else{
           console.log('Error findbyId :' +err);

        }
     
        
});
});
router.get('/order/delete/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id,(err,doc) =>{
       if(!err){
           res.redirect("/admin");

       }else{
          console.log('Error in delete' +err);

       }
    
       
});
});


router.post("/cart", (req,res)=>{
    insertOrder(req,res);
});

router.post("/order", (req,res)=>{
    updateOrder(req,res);
});

//Functions 

function updateOrder(req,res){
    Order.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect("/admin");
        } else {
            console.log('Error in updateOrder: ' + err);
        }
    });
    
}

function insertOrder(req,res){
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter+=1;
    var order= new Order();
    order.total = req.body.total;
    order.order= counter;
    order.save((err,doc)=>{
        if(!err){
            console.log('order:' +order);
            res.redirect('/admin');
        }else{
        console.log('Error insertOrder :' +err);
        }
    });
}

module.exports = router; */

const express = require('express');
const Order = require('../models/order.model'); // Adjust the path as needed

const router = express.Router();

router.get('/', (req, res) => {
    res.render('menu');
});

router.get('/cart', (req, res) => {
    res.render('cart');
});

router.get('/orders', (req, res) => {
    res.render('orders');
});

router.get('/admin', async (req, res) => {
    try {
        const orders = await Order.find(); // Fetch orders from the database
        res.render('admin', { order: orders }); // Render the 'admin' view with the orders data
    } catch (error) {
        console.log('Error in order :' + error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/order/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id); // Fetch the order by ID
        res.render('orders', { order: order }); // Render the 'orders' view with the order data
    } catch (error) {
        console.log('Error findbyId :' + error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/order/delete/:id', async (req, res) => {
    try {
        await Order.findByIdAndRemove(req.params.id); // Delete the order by ID
        res.redirect("/admin"); // Redirect back to the admin page after deleting
    } catch (error) {
        console.log('Error in delete :' + error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/cart", (req, res) => {
    insertOrder(req, res);
});

router.post("/order", (req, res) => {
    updateOrder(req, res);
});

// Functions

async function updateOrder(req, res) {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true }
        );
        res.redirect("/admin");
    } catch (error) {
        console.log('Error in updateOrder: ' + error);
        res.status(500).send('Internal Server Error');
    }
}

async function insertOrder(req, res) {
    try {
        var d = new Date();
        var t = d.getTime();
        var counter = t;
        counter += 1;
        var order = new Order();
        order.total = req.body.total;
        order.order = counter;
        await order.save();
        console.log('order: ' + order);
        res.redirect('/admin');
    } catch (error) {
        console.log('Error insertOrder :' + error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = router;
