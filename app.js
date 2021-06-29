import Express from "express"
import Path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import bodyParser from "body-parser"

import Homepage from "./src/handlers/homepage.js"
import * as Renderers from "./src/handlers/renderers.js"
import * as Templaters from "./src/handlers/templaters.js"
import * as Echo from "./src/handlers/echo.js"

const Config = {
  port: 5200,
  version: process.version,
}

const app = Express()
const Router = Express.Router()

app.use(logger("dev"))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(Express.static(Path.join(".", "public")))

app.get("/", Homepage)

function addHandler(route, handler, { method = "post" } = {}) {
  app[method](route, async (req, res, next) => {
    const result = handler(req.body, { req, res, next })
    res.send(result)
  })
}

addHandler("/render/markdown/tohtml", Renderers.MarkdownToHtml)
addHandler("/template/markdown/table", Templaters.MarkdownTable)
addHandler("/echo", Echo.echo)
addHandler("/echo", Echo.echo, { method: "get" })

export const listener = app.listen(Config.port, function () {
  console.log("Listening carefully on port " + listener.address().port)
})

export default listener
