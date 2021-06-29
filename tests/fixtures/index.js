import _ /**/ from "lodash"
import FS from "fs"
//
export * from "./PurchaseData"

export function loadPurchaseTableMD(filename) {
  const doc = FS.readFileSync(`./tests/fixtures/${filename}.md.txt`).toString()
  const [header, headerSep, row1, row2, row3, row4, footerSep, footer] = doc.split(/\n/g)
  return { doc, header, headerSep, row1, row2, row3, row4, footerSep, footer }
}

export function loadPurchaseTableHtml(filename) {
  const doc = FS.readFileSync(`./tests/fixtures/${filename}.html.txt`).toString()
  return { doc }
}

export const PurchaseTableSimpleHtml = loadPurchaseTableHtml("PurchaseTableSimple")
export const PurchaseTableSimpleMD = loadPurchaseTableMD("PurchaseTableSimple")
