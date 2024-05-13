import App from "./src/app";
import dotenv from "dotenv"

dotenv.config({
    path:"/.env"
})

const startServer = () => {
    const port = process.env.PORT || 600

    App.on('error' ,(error:any) => {
        console.log("Failed To Listen App ", error)
    })

    App.listen(port,() => {
        console.log(`App Is Successfully Listening At Port :${port}`)
    })
}
startServer()