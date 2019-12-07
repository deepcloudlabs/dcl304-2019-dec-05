import logger from "morgan";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from './swagger-crm-api';

const port = 4001;
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/**
 * Swagger Configuration
 */
// http://localhost:4001/api-docs
app.use("/api-docs", swaggerUi.serve,
    swaggerUi.setup(swaggerDocument));

mongoose.connect("mongodb://localhost:27017/crm", {
    "useNewUrlParser": true,
    "socketTimeoutMS": 0,
    "keepAlive": true,
    useUnifiedTopology: true
});
const customerSchema = new mongoose.Schema({
    // "_id" : mongoose.Schema.Types.ObjectId,
    "fullname": {
        type: String,
        required: true,
        minlength: 5
    },
    "identityNo": {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11
    }
});
const Customer = mongoose.model('customers', customerSchema);
// CRM Rest API
app.post("/customers", (req, res) => {
    let cust = req.body;
    let customer = new Customer(cust);
    customer.save((err, newcust) => {
        if (err)
            res.status(404).send({"status": err})
        else
            res.status(200).send({"status": "OK", data: newcust})
    })
});
app.get("/customers/:identity", (req, res) => {
    let identity = req.params.identity;
    let customer = Customer.findOne(
        {"identityNo": identity},
        {"_id": false},
        (err, emp) => {
            if (err)
                res.status(404).send({status: err});
            else
                res.status(200).send(emp);
        }
    );
});
// c:\DEVEL\stage\var\scripts\start-mongodb.bat
// http://localhost:4001/numbers
app.get("/numbers", (req, res) => {
    res.status(200).send([4, 8, 15, 16, 23, 42]);
});

app.listen(port);
console.log(`Server is running at ${port}`);
