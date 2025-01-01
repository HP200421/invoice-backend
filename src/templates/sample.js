import ejs from "ejs";
import fs from "fs";

const template = fs.readFileSync("invoice-template.ejs", "utf-8");
const html = ejs.render(template, {
  invoiceNumber: "2024-92",
  issueDate: "17 - October - 2024",
  dueDate: "17 - October - 2024",
  billTo: "Dr. Nitish Acharya",
  items: [
    {
      description: "Website Design & Development",
      quantity: 1,
      uom: "",
      price: 8000.0,
      tax: 0,
      discount: 0,
      amount: 8000.0,
    },
  ],
  subtotal: 8000.0,
  totalTaxableValue: 8000.0,
  total: 8000.0,
  totalInWords: "Eight Thousand only",
});

console.log(html); // This will output the rendered HTML
