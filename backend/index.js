const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { connectDB } = require('./config/db');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/userRoutes")
const courseRoutes = require('./routes/courseRouter');
const enrollRoute = require("./routes/EnrollRoutes")
const assignment = require('./routes/assignmentRoutes.js')
connectDB();
  
app.use("/auth" , userRoute)
app.use('/api', courseRoutes);
app.use("/enroll",enrollRoute);
app.use("/homework" , assignment)

const quizRoutes = require("./routes/quizRouter");
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT , ()=>{
    console.log(`Server is listening at port ${PORT}`);
})