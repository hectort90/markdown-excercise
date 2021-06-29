# Tookstock Programming Kata

Please ask for help liberally, especially if you don't understand the task!

If you find yourself:

* doing something complicated,
* fighting with the programming environment,
* adding an outside library, or
* unclear on what you're supposed to do,

stop -- we've probably misconfigured or miscommunicated something. Move to a different exercise, and we can decide to jump on Zoom, or most likely those other exercises will be enough.

If you prefer to download the code and work locally, that's cool with us -- upload your code to github and send us the link.

You can ignore everything but the files in `src/` and `tests/`. Although this repo can be run as a live API, 

> **you only need to make the unit tests pass: you don't need to add any other features**

This repo is located at https://github.com/mrflip/tookstock-templater-hellodev/

## Task:

This repo holds a lightweight API to do two things:

- Given a named document template -- eg 'PurchaseOrder' -- and a data record, return a markdown-formatted document based on that data.
- Given a markdown document, render it as HTML.

You will see three files with unit tests in the `tests/` directory. Right now, one test fails and the others pass -- but only because the corresponding file in src/ is returning a **hard-coded correct answer.**

In each of these files, remove the call to the fake method and make the tests pass with code you wrote or copied from someone else.

### Task 1: Render a table given a template and data (templating/TemplateHelpers)

Given a field configuration (see `src/templating/Templates.js`) such as

```
  { fields: {
    productCode: { len: 16 },
    productName: { len: 28 },
    unitPrice: { len: 12 },
    quantity: { len: 8 },
    totalPrice: { len: 14 },
  } }
```

and matching data (see `tests/fixtures/PurchaseData.js`)

```
[
  { productName: "Apples", unitPrice: "1.25", quantity: 7, totalPrice: "8.75", productCode: "A45738" },
  { productName: "Really Expensive Thing", unitPrice: "123,456.78", quantity: 10, totalPrice: "1,234,567.80" productCode: "A9683/BK/W" },
]
```

Make the formatTable function in TemplateHelpers return a markdown-formatted table:

```
|   Product Code   |         Product Name         |  Unit Price  | Quantity |  Total Price   |
| ---------------- | ---------------------------- | ------------ | -------- | -------------- |
| A45738           | Apples                       | 1.25         | 7        | 8.75           |
| A9683/BK/W       | Really Expensive Thing       | 123,456.78   | 10       | 1,234,567.80   |
| LONG-TITLE       | This Title is just way too long but we're ready for it anyway | 1.00         | 4        | 4.00           |
| YIKES            | SUUUPER Expensive Thing      | 1,234,567.89 | 10       | 12,345,678.90  |
```

You **only** need to make the tests pass -- the only parameter in tableSpec to pay attention to is the length.

### Task 2: connect those helpers to an API handler (handlers/templaters.js)

The MarkdownTable function in `handlers/templaters.js` should be given an object with two fields:

- templateName, the name of one of the templates in templating/Templates.js
- tableData, an array of records whose fields match those the template expects.

It should directly return the formatted markdown text.

### Task 3: a Handler to render markdown into HTML

The MarkdownToHtml function in `handlers/renderers.js` should be given an object with one field:

- markdownDoc, a blob of markdown text

It should directly return that text formatted as HTML. 

**We've added the [Showdown](https://github.com/showdownjs/showdown) library**, so you don't need to select one or add it. Consult the [showdow docs](https://github.com/showdownjs/showdown) for how to turn text into HTML

### Task 4: Critique

If you were doing code review of the code as you received it, what one or two things would you suggest changing? You don't need to correct it or go into any detail, just highlight the biggest concern you have.

## Running the code

The code should run the unit test suite on startup. If you have issues with it getting bored and not re-running:

- hit the small `+` button to the right of "yarn start"; this will give you a new interactive terminal.
- run `yarn watch` to start the test suite, or
- it will run interactively, but if you want to make sure it's going, hit 'a' in that window.

If that doesn't do the trick, in the little server stack on the far left (above the github cat), hit restart server (ctrl-c on the yarn command) or restart sandbox (kills and relaunches the whole container).

## Asking for help

On the far left, the lowest-down option showing two people has sharing options. (Ignore the share button in the top right)

You can see there a live session link; send us that. You'll use that tab also to bless us as 'editors' if we need to make changes.

## Resources:

- [Showdown](https://github.com/showdownjs/showdown) Markdown npm library
- [Showdown demo](http://demo.showdownjs.com/)
- [lodash docs](https://lodash.com/docs/4.17.15)

## Running as server

I've switched the package.json so that it runs the unit tests in watchAll mode at startup. If you'd like to see this run live, open a new terminal window in the lower right and run `yarn web`. That's not at all necessary for this exercise though.

### Finding your sandbox uniqer

The sandbox URL you are looking at will have a short uniq'ing string --

    https://codesandbox.io/s/tookstock-templating-XXXXXXX

The server will then be live at the url

    https://XXXXXXX.sse.codesandbox.io/echo
