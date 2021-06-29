export const PurchaseDataSimple = [
  {
    productName: "Apples",
    unitPrice: "1.25",
    quantity: 7,
    totalPrice: "8.75",
    productCode: "A45738",
  },
  {
    productName: "Really Expensive Thing",
    unitPrice: "123,456.78",
    quantity: 10,
    totalPrice: "1,234,567.80",
    productCode: "A9683/BK/W",
  },
  {
    productName: "This Title is just way too long but we're ready for it anyway",
    unitPrice: "1.00",
    quantity: 4,
    totalPrice: "4.00",
    productCode: "LONG-TITLE",
    isShipSeparately: true,
  },
  {
    unitPrice: "1,234,567.89",
    quantity: 10,
    totalPrice: "12,345,678.90",
    productCode: "YIKES",
    productName: "SUUUPER Expensive Thing",
    note: "Call if out of stock",
  },
]

export const PurchaseData = [
  {
    title: "Apples",
    unitPrice: { str: "1.25" },
    quantity: 7,
    totalPrice: { str: "8.75" },
    productCode: "A45738",
  },
  {
    title: "Really Expensive Thing",
    unitPrice: { str: "123,456.78" },
    quantity: 10,
    totalPrice: { str: "1,234,567.80" },
    productCode: "A9683/BK/W",
  },
  {
    title: "This Title is just way too long but we're ready for it anyway",
    unitPrice: { str: "1.00" },
    quantity: 4,
    totalPrice: { str: "4.00" },
    productCode: "LONG-TITLE",
    isShipSeparately: true,
  },
  {
    unitPrice: { str: "1,234,567.89" },
    quantity: 10,
    totalPrice: { str: "12,345,678.90" },
    productCode: "YIKES",
    title: "SUUUPER Expensive Thing",
    note: "Call if out of stock",
  },
]
