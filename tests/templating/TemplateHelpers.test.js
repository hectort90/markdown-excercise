import * as Fixtures from "../fixtures"
//
import * as TemplateHelpers from "../../src/templating/TemplateHelpers"
import * as Templates from "../../src/templating/Templates"

const { PurchaseTableSimpleMD } = Fixtures

const { formatTable } = TemplateHelpers

describe("TemplateHelpers toolkit", () => {
  describe("formatting Markdown", () => {
    describe("table", () => {
      const tbl = formatTable(Templates.PurchaseTableSimple, Fixtures.PurchaseDataSimple)

      const [header, headerSep, row1, row2, row3, row4] = tbl.split(/\n/g)

      it("renders a purchase order", () => {
        const output = formatTable(Templates.PurchaseTableSimple, Fixtures.PurchaseDataSimple)
        const expected = PurchaseTableSimpleMD.doc
        expect(output).to.eql(expected)
      })

      it("header", () => {
        expect(header).to.eql(PurchaseTableSimpleMD.header)
      })
      it("headerSep", () => {
        expect(headerSep).to.eql(PurchaseTableSimpleMD.headerSep)
      })
      it("row1", () => {
        expect(row1).to.eql(PurchaseTableSimpleMD.row1)
      })
      it("row2", () => {
        expect(row2).to.eql(PurchaseTableSimpleMD.row2)
      })
      it("long fields do not realign other fields and still have a space before pipe", () => {
        expect(row3).to.eql(PurchaseTableSimpleMD.row3)
      })
      it("row4", () => {
        expect(row4).to.eql(PurchaseTableSimpleMD.row4)
      })
    })
  })
})
