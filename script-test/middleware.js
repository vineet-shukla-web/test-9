
module.exports = reuestM = (req, resp, next) => {
  console.log("Age validation", req.query.age)
  if (req.query.age <= 10 || req.query.age == undefined) {
    resp.send("please provide your age");
  } else {
    //resp.send("your age age");
    next();
  }
}
