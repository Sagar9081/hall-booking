const express = require("express");
const app = express();
const hallbooking = require("./routes/hallbooking");
const bookedroom = require("./routes/bookedroom");
const customer = require("./routes/customer");
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome To The HALL Booking API Server on ${new Date()}`);
});
app.use((req, res, next) => {
  if (req.method !== "DELETE") {
    next();
  } else {
    res.send({ message: "You are not allowed to access DELETE method" });
  }
});

app.use("/hallbooking", hallbooking);
app.use("/bookedroom", bookedroom);
app.use("/customer-entry", customer);
app.listen(3003, () => console.log("server listening at port 3003"));
