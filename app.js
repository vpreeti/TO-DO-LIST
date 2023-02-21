import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
const __dirname = path.resolve();
const app = express();
//import date from 'path.join(__dirname,"/date.js")'
import date from './date.js'
// console.log(date());
//const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
//const __dirname = path.resolve();
var items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.get("/", function (req, res) {  
   let day=date.getDate();
   console.log(date.getDay());
    //var currentDay = today.getDay();
    /////////////////
    //var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //var d = new Date(dateString);
    ////var dayName = days[currentDay];
    ////////////////
    //var day = "";
    // if(currentDay==6||currentDay==0)
    // {
    //     day="weekend"

    //    // res.sendFile(__dirname+"/weekend.html");
    // }

    // else
    // {
    //     day="weekday";
    //    // res.sendFile(__dirname+"/weekday.html");
    // }
    // res.render("list",{kindOfDay:day});


    res.render("list", { listTitle: day,newListItems: items });
  
})
app.post("/",function(req,res){
    console.log(req.body)
    var item=req.body.newItem
if(req.body.list==="workList"){
    workItems.push(item);
    res.redirect("/work");  
}
else{
    items.push(item);
    res.redirect("/");   
}

})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"workList",newListItems:workItems})
})

app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3001, function () {
    console.log("Server running on port 3000");
})