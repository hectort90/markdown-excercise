import _ /**/ from "lodash"
//
import * as Fixtures from "../fixtures"
//
import * as Templaters from "../../src/handlers/templaters"
import * as Templates from "../../src/templating/Templates"
import { expect } from "chai"

const { PurchaseTableSimpleMD } = Fixtures

describe("Templaters", () => {
  describe("for Markdown", () => {
    describe("tables", () => {
      it("handles a simple format simply", () => {
        const tableData = Fixtures.PurchaseDataSimple
        const tableSpec = Templates.PurchaseTableSimple

        const query = {
          templateName: tableSpec,
          tableData,
        }
        const body = Templaters.MarkdownTable(query)
        expect(body).to.eql(PurchaseTableSimpleMD.doc)
      })
    })
  })
})
