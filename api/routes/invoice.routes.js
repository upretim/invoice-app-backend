const express = require('express');
const InvoiceController = require('../controllers/invoice.controller');
const router = express.Router();

router.get('/', InvoiceController.getInvoices);
module.exports =  router;


