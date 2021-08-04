const express = require("express");
const morgan = require("morgan"); //http log
const bodyParser = require("body-parser"); //parser request middleware
const cookieParser = require("cookie-parser");
const cors = require("cors"); //get, put, post
const mongoose = require("mongoose");
require("dotenv").config();

//bring routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");

// app
const app = express();

//db
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"));

// middlewares
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(cookieParser());

//
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  // if ('OPTIONS' == req.method) {
  //      res.sendStatus(200);
  // } else {
  // }
  next();
});

// cors
if (process.env.NODE_ENV == "development") {
  app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );
}
//routes middleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", tagRoutes);

// // routes
// app.get("/api", (req, res) => {
//   res.json({ time: Date().toString() });
// });

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//@@@@@@@@@@@@@@@@@@@
// const express = require("express");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// //bring routes
// const blogRoutes = require("./routes/blog");
// const authRoutes = require("./routes/auth");

// // app
// const app = express();

// //db
// mongoose.set("useCreateIndex", true);
// mongoose
//   .connect(process.env.DATABASE_CLOUD, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("DB connected"));

// // middlewares
// app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use(cookieParser());
// // cors
// if (process.env.NODE_ENV == "development") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }
// //routes middleware
// app.use("/api", blogRoutes);
// app.use("/api", authRoutes);

// // // routes
// // app.get("/api", (req, res) => {
// //   res.json({ time: Date().toString() });
// // });

// // port
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
