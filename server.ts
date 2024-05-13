import App from "./src/app";
import dbConfig from "./src/database/dbConfig";


const startServer = async () => {
    await dbConfig()
    const port = process.env.PORT || 6000

    App.on('error' ,(error:any) => {
        console.log("Failed To Listen App ", error)
    })

    App.listen(port,() => {
        console.log(`App Is Successfully Listening At Port : ${port}`)
    })
}
startServer()