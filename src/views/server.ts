import express from "express";
import { route as peopleRoutes} from './peoples'

const app = express()
const port = 3333
app.use(express.json())
app.use(peopleRoutes)

app.listen(port, () => {
  console.log(`Sever runing at http://localhost:${port}`)
})