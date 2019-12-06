import logger from "morgan";
import express from "express";
import bodyParser from "body-parser";

const port = 4001;
const app = express();

app.use(bodyParser.json({limit : "5m"}));
app.use(logger('dev'));
// c:\DEVEL\stage\var\scripts\start-mongodb.bat
// http://localhost:4001/numbers
app.get("/numbers", (req,res) => {
    res.status(200).send([4,8,15,16,23,42]);
});

app.listen(port);
console.log(`Server is running at ${port}`);
