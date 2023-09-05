import "reflect-metadata"
import "@shared/typeorm"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import cors from "cors"
import routes from "./routes"
import AppError from "@shared/errors/AppError"
import { errors } from "celebrate"
import upload from "@config/upload"

const app = express()
app.use(cors({origin:true}))
app.use(express.json())
app.get("/files", express.static(upload.directory))
app.use(routes)
app.use(errors())

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })

})

app.listen(3434, () => console.log("Server started"))
