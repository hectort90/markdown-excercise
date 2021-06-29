import _ /**/ from "lodash"

import * as TemplateHelpers from "../templating/TemplateHelpers.js"
import * as Templates from "../templating/Templates.js"

// Given a templateName (as found in templating/Templates) and table data,
// returns a markdown-formatted table
//
export function MarkdownTable(data) {
  const { templateSpecs, tableData } = data
  return TemplateHelpers.formatTable(templateSpecs.fields, tableData)
}

// you can remove everything below later, or leave them if it's helpful for testing.

const dummyData = `|   Product Code   |         Product Name         |  Unit Price  | Quantity |  Total Price   |
| ---------------- | ---------------------------- | ------------ | -------- | -------------- |
| A45738           | Apples                       | 1.25         | 7        | 8.75           |
| A9683/BK/W       | Really Expensive Thing       | 123,456.78   | 10       | 1,234,567.80   |
| LONG-TITLE       | This Title is just way too long but we're ready for it anyway | 1.00         | 4        | 4.00           |
| YIKES            | SUUUPER Expensive Thing      | 1,234,567.89 | 10       | 12,345,678.90  |`