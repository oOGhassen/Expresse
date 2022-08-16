const express=require('express');
const app=express();
const path=require("path");
const PORT=process.env.PORT||3000;

//app.get("",(req,res)=>res.send("<h1>Hello_School!!</h1>"))
// app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"Public","index.html")))
// app.get("/about",(req,res)=>res.sendFile(path.join(__dirname,"Public","about.html")))
// app.use('Navbar' , './Public')
// app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,"public")))
app.listen(PORT,err=>err?console.log(err)
:console.log(`Server is running on port ${3000}!!`)
);