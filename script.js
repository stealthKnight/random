let express = require("express");
let app = express();
let port = 4444;
let path = require("path");
let hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //middleware generic
app.set("view engine", "hbs");

app.use("/", require("./routes/user")); //agar path specipy kardege to path specific hojaega
app.use("/admin", require("./routes/admin")); //agar path specipy kardege to path specific hojaega

app.listen(port, () => {
  console.log("server at:http://localhost:" + port);
});
