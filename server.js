var express=require("express"),
	app=express(),
	mongojs=require("mongojs"),
	 db = mongojs("employeedetail", ["employeedetail"]),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/employeedetail", function (request, response) {
    db.employeedetail.find(function (err, data) {
        console.log(data);
        response.json(data);
    });
}); 

app.post("/employeedetail", function (req, res) {
    // console.log(req.body);
    db.employeedetail.insert(req.body, function (err, data) {
        res.json(data);
    })
});
app.get('/employeedetail/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    //findOne(..)- code to find one specific employee details from the database
    db.employeedetail.findOne({
        _id: mongojs.ObjectId(id)
    }, function (err, docs) {
        res.json(docs);
    });
});
app.put("/employeedetail/:id", function (req, res) {
    var id = req.params.id;
    // console.log(req.body.name);
    db.employeedetail.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                designation: req.body.designation,
                position: req.body.position,
                no: req.body.numbers,
                competency: req.body.competency,
                location: req.body.location
            }
        },
        new: true
    }, function (err, data) {
        res.json(data);
    });
});





app.listen(3000,function() {
	console.log("Server running on port 3000");
})