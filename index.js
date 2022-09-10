const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyparser = require('body-parser');
const app = express();

app.use(cors());
const { response } = require('express');
app.use(bodyparser.json());

var mysqlconnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Sparity@123',
    database : 'org_employees',
});

mysqlconnection.connect((err)=>{
    if(!err)
        console.log("DB Connected..");
    else
    console.log("DB failed" + JSON.stringify(err, undefined, 2));
})

app.get('/employee', (req, res) => {
    mysqlconnection.query('select * from employee_details;', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    });

});

app.post('/insert', (req, res) => {
    var emp = req.body;
    var sql = 'insert into employee_details(name,organisation,designation,age,city,pincode) values(?,?,?,?,?,?);';
    mysqlconnection.query(sql, [emp.name, emp.organisation, emp.designation, emp.age, emp.city, emp.pincode], (err, rows, fields) => {
        if (err) {
            res.send('Failed');
        }
        else {
            console.log('success');
            res.send('success');
        }
    });
});

app.put('/update/:id',(req,res) =>{
    const data = [req.body.name, req.body.organisation, req.body.designation, req.body.age, req.body.city, req.body.pincode, req.params.id];

    mysqlconnection.query("UPDATE employee_details SET name=?, organisation=?, designation=?, age=?, city=?, pincode=? where id=?", data, (err,rows,fields)=>{
        if(err){
            res.send('Error');
        }else{
            res.send('Successfully Updated data..');
        }
    })

});

app.delete('/employee/:id', (req, res) => {
    mysqlconnection.query('DELETE FROM employee_details WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            // console.log(row)
            {res.send('Delete Successfully');}
        else
            {console.log(err)}
    });
});

app.get('/employee/:id', (req, res) => {
    mysqlconnection.query('SELECT * FROM employee_details WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            // console.log(row)
           { res.send(rows);}
        else
            {console.log(err)}
    });
});
app.listen(4000, () => {
    console.log('server is running at port no: 4000')
})