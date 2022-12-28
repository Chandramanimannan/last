const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const port = process.env.PORT || 3001;

const app = express();
var items= ["Buy Food", "Cook Food", "Eat Food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req,res)
{
    let day =date();
    res.render("list", {kindofday: day, newListItem: items});
});

app.post("/", function(req, res)
{
   var item = req.body.newItem;
   items.push(item);
   res.redirect("/");
})
app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });

