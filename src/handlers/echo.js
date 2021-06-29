import _ /**/ from "lodash"
//
import { restring } from "../utils/stringify.js"

export function echo(data, { req, res, next }) {
  const skipFields = ["res", "_readableState", "socket", "_eventsCount", "_events", "client"]

  const requestSafely = restring(_.omit(req, skipFields))

  res.header("x-open-sesame", "ENTER")
  res.send({
    message: "ECHOED",
    headers: req.headers,
    body: req.body,
    ...requestSafely,
    req_keys: _.keys(req),
    env: process.env,
  })
}
