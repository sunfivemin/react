const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(8080, function () {
    console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "shop1/build")));

app.get("*", function (요청, 응답) {
    응답.sendFile(path.join(__dirname, "shop1/build/index.html"));
});
// app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/react", express.static(path.join(__dirname, "react-project/build")));

// app.get("/", function (요청, 응답) {
//     응답.sendFile(path.join(__dirname, "public/main.html"));
// });
// app.get("/react", function (요청, 응답) {
//     응답.sendFile(path.join(__dirname, "react-project/build/index.html"));
// });
