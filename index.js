const express = require('express');
const Student = require("./Models/studentModel");
const studentModel = require('./Models/studentModel');
// const faculty = require("./Models/facultyModel")
// const facultyModel =require('./Models/facultyModel');
const app =express();
const PORT=5000;
const cors=require('cors');

app.use(express.json());
app.use(cors());

require('./db')

// app.get("/",(req,res)=>{
// res.send("Hello !...");

// });;


//create a resource
// app.post()

app.listen(PORT,function(){
    console.log(`server is running on localhost:${ PORT}`);
});
// app.get("/students",(req,res)=>{
//     res.send("Hello from students !...");
    
//     });

//     app.get("/faculty",(req,res)=>{
//         res.send("Hello from faculty !...");
        
//         });


        app.post('/student',async(req,res)=>{
            try{
                const data=req.body;
                
                const createdStudent =new Student(data);
                await createdStudent.save();
                res.send("student created");
            }
            catch (error) {
                console.log(error);
            }
           
      });
    app.get('/student',async(req,res)=>{
        try{  
           const studentList=await Student.find();
           res.send(studentList);
        }
        catch (error) {
            console.log(error);
        }
        });
        app.put("/student/:id",async(req,res)=>{
            try{
                const studentId = req.params.id;
                await Student.updateOne({id:studentId},{$set: req.body})
                res.send("Student updated")
            }
            catch (error) {
                console.log(error);
            }
        });
        app.delete("/student/:id",async(req,res)=>{
            try{
                await Student.deleteOne({id:req.params.id})
                res.send("Student deleted")
            }
            catch (error) {
                console.log(error);
            }
        });
    

//     app.post('/faculty',async(req,res)=>{
//         try{
//             const data=req.body;
            
//             const createdFaculty =new faculty(data);
//             await createdFaculty.save();
//             res.send("faculty created");
//         }
//         catch (error) {
//             console.log(data);
//         }
       
//   });
// app.get('/faculty',async(req,res)=>{
//     try{  
//        const facultyList=await faculty.find();
//        res.send(facultyList);
//     }
//     catch (error) {
//         console.log(error);
//     }
//     });
//     app.put("/faculty/:id",async(req,res)=>{
//         try{
//             const facultyId = req.params.id;
//             await faculty.updateOne({id:facultyId},{$set: req.body})
//             res.send("faculty updated")
//         }
//         catch (error) {
//             console.log(data);
//         }
//     });
//     app.delete("/faculty/:id",async(req,res)=>{
//         try{
//             await faculty.deleteOne({id:req.params.id})
//             res.send("faculty deleted")
     
//      0   }
//         catch (error) {
//             console.log(data);
//         }
//     });



