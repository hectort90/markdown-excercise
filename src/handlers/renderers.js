import Showdown from "showdown"
// showdown docs: https://www.npmjs.com/package/showdown\

// given an object with one field:
//
// - markdownDoc, a blob of markdown text
//
// Directly return that text formatted as HTML.
//
export function MarkdownToHtml(data) {
  const { markdownDoc } = data
  let converter = new Showdown.Converter({tables: true});
  let htmlTable = converter.makeHtml(markdownDoc);
  return htmlTable.replace(/\n/g,'\r\n')
}