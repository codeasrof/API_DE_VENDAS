import { Router } from "express";

const routes = Router()


routes.get("/", (request, response) => {
  return response.json({message: "Working fine."})
})

export default routes
