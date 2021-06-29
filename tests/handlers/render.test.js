import _ /**/ from "lodash"
//
import * as Fixtures from "../fixtures"
//
import * as Renderers from "../../src/handlers/renderers"
import { MarkdownToHtml } from "../../src/handlers/renderers"

const { PurchaseTableSimpleHtml, PurchaseTableSimpleMD } = Fixtures

describe("Renderers", () => {
  describe("for markdown", () => {
    describe("converting to HTML", () => {
      it("formats simple markdown", () => {
        const expected = '<h1 id="helloworld">Hello World!</h1>'
        const query = { markdownDoc: `# Hello World!` }
        const html = MarkdownToHtml(query)
        expect(html).to.eql(expected)
      })

      it("formats tables", () => {
        const markdown = PurchaseTableSimpleMD.doc
        const expected = PurchaseTableSimpleHtml.doc
        const query = { markdownDoc: markdown }
        const html = Renderers.MarkdownToHtml(query)
        expect(html).to.eql(expected)
      })
    })
  })
})
