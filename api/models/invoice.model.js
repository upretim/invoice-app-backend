const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InvoiceSchema = new Schema({
    invoiceNumber: {type: Number, required: true},
    client: {type: String, required: true, max: 100},
    billDate: {type: Date, required: true},
    dueDate: {type: Date, required: true},
    items: {type: Array[item], required: true},

});

let item = {
    id: String,
    desc: String,
    taxRate: Number,
    amount: Number,
    Qty: String,
    totalValue: Number
}
module.exports = mongoose.model('Invoice', InvoiceSchema);