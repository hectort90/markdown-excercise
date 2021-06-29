export async function Homepage(req, res, next) {
  res.render("index", { title: "Tookstock Example" })
}

export default Homepage
