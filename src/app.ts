import  Express  from "express";

const App = Express()

App.get("/",(req,res,next) => {
    res.status(200).json({
        message:"Hello From Homepage"
    })
})

export default App