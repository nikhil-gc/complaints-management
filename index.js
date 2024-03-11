// const express = require("express");
// const bodyParser = require("body-parser");
// app = express();
// const server = require('http').Server(app)
// const io = require('socket.io')(server)
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');


// // var cors = require('cors');
// // app.use(cors('*'));
// // var nm = require('nodemailer');

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nikhil",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("use complaints", function (err, result) {
//     if (err) throw err;
//     console.log("complaints Database accessed ");
//   });
// });



// complaints = [0, 0, 0, 0]
// linechart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   piechart = [0, 0, 0, 0, 0]

// // console.log(complaints)

// app.get("/", function (req, res) {
//   var q1 = false, q2 = false, q3 = false;
//   var query = "select status,count(*) as count from TwoWheelerComplaints group by status order by status;"
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     complaints[1] = result[0].count
//     complaints[2] = result[1].count
//     complaints[0] = complaints[1] + complaints[2]
//     complaints[3] = complaints[1] / complaints[0] * 100;
//     // console.log(complaints)
//     q1 = true;
//   });
//   const traverseArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       linechart[arr[i].month - 1] = arr[i].count_of_dates
//     }
//     q2 = true;
//     // console.log(linechart)
//   };
//   var query = ' SELECT YEAR(complaintDate) AS year, MONTH(complaintDate) AS month, COUNT(*) AS count_of_dates FROM TwoWheelerComplaints GROUP BY YEAR(complaintDate), MONTH(complaintDate) ORDER BY month'
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     traverseArray(result)
//     // console.log(linechart)
//   });
//   const traverseArrayPiechart = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       piechart[i] = arr[i].count
//     }
//     // console.log(piechart)
//   };
//   var query = 'select category,count(*) as count from TwoWheelerComplaints group by category order by category'
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     traverseArrayPiechart(result)
//     // console.log(result)
//     // console.log(piechart)
//     q3 = true;
//     if (q1 == true && q2 == true && q3 == true)
//       res.render("index", { complaints: complaints, linechart: linechart, piechart: piechart });
//   });

// });

// app.get('/complaint', function (req, res) {
//   var query = 'select * from twoWheelerComplaints where status like "pending";'
//   con.query(query, function (err, result, fields) {
//     if (err) throw err
//     // console.log(result)
//     var query1 = 'select * from twoWheelerComplaints where status like "completed";'
//     con.query(query1, function (err, result1, fields) {
//       if (err) throw err
//       // console.log(result1)
//       res.render('complaint', { pending: result , completed: result1})
//     })
//   })
// })

// app.get('/login', function (req, res) {
//   res.render('login', { msg: "" })
// })


// var agreementNumber, loginmail;
// var details;
// app.post('/login', function (req, res) {
//   agreementNumber = req.body.agreementNumber;
//   var email = req.body.email;
//   loginmail = email;
//   var query = ' select * from Customers where agreementNumber=? and email like ?;'
//   con.query(query, [agreementNumber, email], function (err, result, fields) {
//     if (err) throw err
//     var size = Object.keys(result).length;
//     // console.log(result)
//     details = result;
//     if (size == 0)
//       res.render('login', { msg: "invalid agreement number" })
//     else
//       res.render('form', { msg: "" })
//   })
// })


// app.get('/form', function (req, res) {
//   res.render('form', { msg: "" });
// });


// app.post('/form', function (req, res) {
//   // details = req.body;
//   var agreementNumber = req.body.Agreement;
//   var name = req.body.fullname;
//   var email = req.body.email;
//   var phone = req.body.phone;
//   var issue = req.body.issue;
//   var dep = req.body.Department;
//   var cat = req.body.Category;
//   console.log(req.body)
//   var query = 'select * from Customers where agreementNumber= ' + mysql.escape(agreementNumber);
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     var size = Object.keys(result).length;
//     if (size == 0)
//       res.render('form', { msg: "invalid agreement number" })
//     else
//       res.render('thankyou')
//   });
//   query = 'insert into TwoWheelerComplaints(agreementNumber,category,status,complaintDate) values(?,?,"pending",?);'
//   con.query(query, [agreementNumber, cat, new Date()], function (err, result, fields) {
//     if (err) throw err
//     console.log("complaint inserted successfully")
//   })

// });


// app.get("/profile", function (req, res) {
//   query = 'select * from twoWheelerComplaints where email like ' + mysql.escape(loginmail)
//   var arr;
//   con.query(query, function (err, result, fields) {
//     if (err) throw err
//     arr = result;
//     // console.log(arr)
//     res.render('profile-page', { det: details[0], arr: arr })
//   })

// })

// app.listen(3000, function () {
//   console.log("server is running on port 3000");
// });




// io.on('connection', socket => {
//   socket.on('new-user', () => {
//     console.log("user connected")
//     socket.emit('user-connected')
//   })
//   socket.on('send-message', (message) => {
//     console.log(message);
//     socket.emit("recieve-message",{message:message})
//   })
// })





const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const bodyParser = require("body-parser");
var cors = require('cors');
app.use(cors('*'));
// var nm = require('nodemailer');
const nodemailer = require('nodemailer');
var mysql = require('mysql');
const multer = require('multer');
const fs = require('fs');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nikhil",
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
        user: 'grandhinikhilchakravarthy@gmail.com',
    pass: 'snlfzzfhggvpailr'
  }
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage });
// function sendEmail(data) {

//   var options = {
//     from: 'grandhinikhilchakravarthy@gmail.com',
//     to: `twowheelercomplaints@gmail.com`,
//     subject: "New Complaint",
//     html: `<div">
//     <h1>New Complaint</h1>
//     <h3>Customer Name : ${data.fullname}</h3>
//     <h3>Email : ${data.email}</h3>
//     <h3>Agreement Number : ${data.Agreement}</h3>
//     <h3>Phone Number : ${data.phone}</h3>
//     <h3>Issue : ${data.issue}</h3>
//     <h3>Department : ${data.Department}</h3>
//     <h3>Complaint Category : ${data.Category}</h3>
//     </div>`

//   };
//   transporter.sendMail(
//     options, function (error, info) {
//       if (error) {
//         console.log(error);
//         // res.status(500).send("couldn't send")
//       }
//       else {
//         console.log("email sent successfully");
//       }

//     }
//   )
// }

con.connect(function (err) {
  if (err) throw err;
  console.log("database Connected!");
  con.query("use complaints", function (err, result) {
    if (err) throw err;
    console.log("complaints Database accessed ");
  });
});



complaints = [0, 0, 0, 0]
linechart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  piechart = [0, 0, 0, 0, 0]
var department = "twoWheelerComplaints"
var logindepartment = "Two Wheeler";
// console.log(complaints)

function calculate(req, res, dep) {
  var q1 = false, q2 = false, q3 = false;
  var query;
  console.log(dep)
  
  if(dep=='Two Wheeler')
    department = 'twoWheelerComplaints'
  else if(dep=='Three Wheeler')
    department = 'threeWheelerComplaints'
  else if(dep=='Tractor')
    department = 'tractorComplaints'
  else
    department = 'usedcarsComplaints'
  console.log(department)
  var query = 'select status,count(*) as count from ?? group by status order by status;'

  // var query1 = 'select * from ' + mysql.escape(temp)
  con.query(query,[department], function (err, result, fields) {
    if (err) throw err;
    complaints[1] = result[0].count
    complaints[2] = result[1].count
    complaints[0] = complaints[1] + complaints[2]
    complaints[3] = Math.round(complaints[1] / complaints[0] * 100);
    console.log(complaints)
    q1 = true;
  });
  const traverseArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      linechart[arr[i].month - 1] = arr[i].count_of_dates
    }
    q2 = true;
    // console.log(linechart)
  };
  var query = ' SELECT YEAR(complaintDate) AS year, MONTH(complaintDate) AS month, COUNT(*) AS count_of_dates FROM ?? GROUP BY YEAR(complaintDate), MONTH(complaintDate) ORDER BY month'
  con.query(query,[department], function (err, result, fields) {
    if (err) throw err;
    traverseArray(result)
    // console.log(linechart)
  });
  const traverseArrayPiechart = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      piechart[i] = arr[i].count
    }
    // console.log(piechart)
  };
  var query = 'select category,count(*) as count from ?? group by category order by category'
  con.query(query,[department], function (err, result, fields) {
    if (err) throw err;
    traverseArrayPiechart(result)
    // console.log(result)
    // console.log(piechart)
    q3 = true;
    if (q1 == true && q2 == true && q3 == true)
      res.render("index", { complaints: complaints, linechart: linechart, piechart: piechart, department:logindepartment });
  });
  console.log("pie chart is " + piechart)
}

app.get("/", function (req, res) {
  calculate(req, res, "Two Wheeler")
  // res.send("<h1>Invalid access please login as admin</h1>")
});

app.get('/complaint', function (req, res) {
  var query = 'select * from ?? where status like "pending";'
  con.query(query,[department], function (err, result, fields) {
    if (err) throw err
    // console.log(result)
    var query1 = 'select * from ?? where status like "completed";'
    con.query(query1,[department], function (err, result1, fields) {
      if (err) throw err
      // console.log(result1)
      res.render('complaint', { pending: result, completed: result1, department:logindepartment })
    })
  })
})

app.get('/login', function (req, res) {
  res.render('login', { msg: "" })
})


var agreementNumber, loginmail;
var details;
app.post('/login', function (req, res) {
  agreementNumber = req.body.agreementNumber;
  var email = req.body.email;
  loginmail = email;
  var query = ' select * from Customers where agreementNumber=? and email like ?;'
  con.query(query, [agreementNumber, email], function (err, result, fields) {
    if (err) throw err
    var size = Object.keys(result).length;
    // console.log(result)
    details = result;
    if (size == 0)
      res.render('login', { msg: "invalid agreement number" })
    else
      res.render('form', { msg: "" })
  })
})


app.post('/adminLogin', function (req, res) {
  var adminId = req.body.adminId;
  var department = req.body.department;
  var password = req.body.password;
  logindepartment = department;
  // console.log("department is",logindepartment)
  var query = ' select * from Admin where adminId = ? and department like ? and password = ?;'
  con.query(query, [adminId, department, password], function (err, result, fields) {
    if (err) throw err
    var size = Object.keys(result).length;
    // console.log(result)
    details = result;
    if (size == 0)
      res.render('login', { msg: "invalid AdminId or Password" })
    else
      calculate(req, res, department)
  })
})

app.get('/form', function (req, res) {
  res.render('form', { msg: "" });
});

const upload = multer({ dest: 'public/uploads/' });
app.post('/upload', upload.single('image'), (req, res) => {
  const { name, email, phone, Agreement, Department, Category, issue} = req.body;
  const { path } = req.file;
  console.log(req.file.path)
  console.log(name, email, phone, Agreement, Department, Category, issue)
  
  const mailOptions = {
        from: 'grandhinikhilchakravarthy@gmail.com', // Sender email
    to: 'twowheelercomplaints@gmail.com', // Recipient email
    subject: 'New Complaint',
    html: `<div>
    <h3>Customer Name : ${name}</h3>
    <h3>Email : ${email}</h3>
    <h3>Phone : ${phone}</h3>
    <h3>Agreement Number : ${Agreement}</h3>
    <h3>Department : ${Department}</h3>
    <h3>Category : ${Category}</h3>
    <h3>Issue : ${issue}</h3>
    </div>`,
    attachments: [
      {
        filename: 'image.jpg',
        path: path
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.json({ success: false });
    } else {
      console.log('Email sent:', info.response);
      // Remove the uploaded image after sending the email
      // fs.unlinkSync(path);
      res.json({ success: true });
      // res.render('thankyou')
    }
  });
  var complaintDep;
  if(Department=='Two Wheeler')
    complaintDep = 'twoWheelerComplaints'
  else if(Department=='Three Wheeler')
    complaintDep = 'threeWheelerComplaints'
  else if(Department=='Tractor')
    complaintDep = 'tractorComplaints'
  else
    complaintDep = 'usedcarsComplaints'
  var d = new Date()
  console.log(req.body)
  // Find the index of the last occurrence of backslash
const lastIndex = path.lastIndexOf('\\');

// Extract the filename using substring
const fileName = path.substring(lastIndex + 1);
console.log(fileName)
  var query = 'insert into ??(agreementNumber,category,status,complaintDate,email,image_path,issue) values(?,?,?,?,?,?,?);'
  con.query(query, [complaintDep,Agreement,Category,"pending",d,email,fileName,issue], function (err, result, fields) {
    if (err) throw err
    console.log("complaint submitted successfully ")
  })
});

app.post('/form', function (req, res) {
  // details = req.body;
  
  var agreementNumber = req.body.Agreement;
  var name = req.body.fullname;
  var email = req.body.email;
  var phone = req.body.phone;
  var issue = req.body.issue;
  var dep = req.body.Department;
  var cat = req.body.Category;
  console.log(req.body)
  var query = 'select * from Customers where agreementNumber= ' + mysql.escape(agreementNumber);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    var size = Object.keys(result).length;
    if (size == 0) {
      res.render('form', { msg: "invalid agreement number" })
    }
    else {
      res.render('thankyou')
      // query = 'insert into TwoWheelerComplaints(agreementNumber,category,status,complaintDate) values(?,?,"pending",?);'
      // con.query(query, [agreementNumber, cat, new Date()], function (err, result, fields) {
      //   if (err) throw err
      //   console.log("complaint inserted successfully")
      // })
      // sendEmail(req.body)
      // const { path } = req.file;
      // const { path } = req.file;
      // var options = {
      //   from: 'grandhinikhilchakravarthy@gmail.com',
      //   to: `twowheelercomplaints@gmail.com`,
      //   subject: "New Complaint",
      //   html: `<div">
      //   <h1>New Complaint</h1>
      //   <h3>Customer Name : ${data.fullname}</h3>
      //   <h3>Email : ${data.email}</h3>
      //   <h3>Agreement Number : ${data.Agreement}</h3>
      //   <h3>Phone Number : ${data.phone}</h3>
      //   <h3>Issue : ${data.issue}</h3>
      //   <h3>Department : ${data.Department}</h3>
      //   <h3>Complaint Category : ${data.Category}</h3>
      //   </div>`,
      //   attachments: [
      //     {
      //       filename: 'image.jpg',
      //       path: path
      //     }
      //   ]
      // };
      // transporter.sendMail(
      //   options, function (error, info) {
      //     if (error) {
      //       console.error('Error:', error);
      //       res.json({ success: false });
      //     } else {
      //       console.log('Email sent:', info.response);
      //     //   Remove the uploaded image after sending the email
      //       fs.unlinkSync(path);
      //       res.json({ success: true });
      //     }
    
      //   }
      // )
    }
  });


});


app.get("/profile", function (req, res) {
  query = 'select * from twoWheelerComplaints where email like ' + mysql.escape(loginmail)
  console.log(query)
  var arr;
  con.query(query, function (err, result, fields) {
    if (err) throw err
    arr = result;
    // console.log(arr)
    res.render('profile-page', { det: details[0], arr: arr })
  })

})

weeklyCount = [0, 0, 0, 0, 0]
function traverseWeek(arr) {
  for (var i = 0; i < arr.length; i++) {
    var ind = arr[i].week_of_last_month
    weeklyCount[ind - 1]++
  }
}
app.get('/analytics', function (req, res) {
  var query = "SELECT complaintDate,WEEK(complaintDate) - WEEK(DATE_FORMAT(complaintDate, '%Y-%m-01')) + 1 AS week_of_last_month FROM twoWheelerComplaints WHERE YEAR(complaintDate) = YEAR(CURRENT_DATE() - INTERVAL 1 MONTH) AND MONTH(complaintDate) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH);"
  con.query(query, function (err, result, fields) {
    if (err) throw err
    arr = result;
    // console.log(arr)
    traverseWeek(arr)
    console.log(weeklyCount)
    res.render('analytics', { weeklyCount: weeklyCount,department:logindepartment })
  })
  // res.render('analytics')
})



server.listen(3000, function (req, res) {
  console.log("server running on port 3000");
})

io.on('connection', socket => {
  socket.on('new-user', () => {
    console.log("user connected")
    socket.emit('user-connected')
  })
  socket.on('complaint-resolved',(complaintId)=>{
    // console.log(complaintId)
    var query = ' update ?? set status="completed" where complaintId=?;'
    con.query(query,[department,complaintId], function (err, result, fields) {
      if (err) throw err
      console.log("complaint resolved")
    })
  })

  socket.on('send-message', (message) => {
    console.log(message);
    socket.broadcast.emit("recieve-message", { message: message })
  })
  socket.on('send-chat-message', (message) => {
    console.log(message.userMessage)
    console.log(message.chartType)
    // var question = "what months has least number of complaints"
    var question = message.userMessage;
    var x, y, xvalue, yvalue;
    if (message.chartType == "monthly") {
      x = "Months"
      y = "Number of Complaints"
      yvalue = linechart
      xvalue = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    } else if (message.chartType == "weekly") {
      x = "Weeks"
      y = "Number of Complaints"
      yvalue = weeklyCount
      xvalue = ["week1", "week2", "week3", "week4", "week5"]
    } else {
      x = "Categories"
      y = "Number of Complaints"
      xvalue = ['General Isssue', 'Intrest Rate', 'Loan Issue', 'Payment Issue', 'Personal Details Updation']
      yvalue = piechart
      // console.log(x,y,xvalue,yvalue)
    }
    const { spawn, exec } = require("child_process");
    process.env.PYTHONUNBUFFERED = '1';
    const childPython = spawn('python', ['app.py', question, x, xvalue, y, yvalue]);

    let pythonOutput = "";
    childPython.stdout.on('data', (data) => {
      pythonOutput += data.toString();

    });

    childPython.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    childPython.on('close', (code) => {
      console.log("generated")
      console.log(`${code}`);
      console.log('Python Output:', pythonOutput);
      // console.log("kastapadli")
      // console.log(pythonOutput)
      socket.emit("recieve-chat-message", { message: pythonOutput })
      console.log(typeof (pythonOutput))
    })


  })

})

app.get('/temp', function (req, res) {
  res.render('temp', { linechart: linechart, piechart: piechart })
})



