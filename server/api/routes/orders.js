const express = require('express');
const router = express();
const cors =require('cors');

const checkAuth= require('../midleware/checkAuth');

const OrdersController = require('../controls/orders');

router.use(cors());

router.get('/', checkAuth, OrdersController.orders_get_all);

router.post('/',checkAuth, OrdersController.orders_create_order);

router.get('/:orderId',checkAuth, OrdersController.orders_get_order);

router.delete('/:orderId',checkAuth, OrdersController.orders_delete_order);


module.exports = router;