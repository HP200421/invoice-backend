import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateInvoicePDF = async (invoiceData) => {
  try {
    const templatePath = path.join(
      __dirname,
      "templates",
      "invoice-template.ejs"
    );

    const htmlContent = await ejs.renderFile(templatePath, {
      data: invoiceData,
    });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: "load" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};

export const calculateInvoice = (data) => {
  const {
    company,
    items = [],
    invoiceType,
    discountAmount = 0,
    totalAmount: providedTotalAmount = 0,
    taxAmount: providedTaxAmount = 0,
  } = data;

  const { cgst = 0, sgst = 0, igst = 0 } = company || {};

  const calculatedTotalAmount = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  let calculatedTaxAmount = 0;
  let netAmount = 0;

  const numberToWords = (num) => {
    if (isNaN(num) || num <= 0) return "";

    const single = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const double = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const formatTenth = (digit, prev) => {
      return 0 == digit ? "" : " " + (1 == digit ? double[prev] : tens[digit]);
    };

    const formatOther = (digit, next, denom) => {
      return (
        (0 != digit && 1 != next ? " " + single[digit] : "") +
        (0 != next || digit > 0 ? " " + denom : "")
      );
    };

    let res = "";
    let index = 0;
    let digit = 0;
    let next = 0;
    let words = [];

    num = Math.floor(num);

    if (((num += ""), num.length <= 10)) {
      for (index = num.length - 1; index >= 0; index--) {
        digit = num[index] - 0;
        next = index > 0 ? num[index - 1] - 0 : 0;
        switch (num.length - index - 1) {
          case 0:
            words.push(formatOther(digit, next, ""));
            break;
          case 1:
            words.push(formatTenth(digit, num[index + 1]));
            break;
          case 2:
            words.push(
              0 != digit
                ? " " +
                    single[digit] +
                    " Hundred" +
                    (0 != num[index + 1] && 0 != num[index + 2] ? " and" : "")
                : ""
            );
            break;
          case 3:
            words.push(formatOther(digit, next, "Thousand"));
            break;
          case 4:
            words.push(formatTenth(digit, num[index + 1]));
            break;
          case 5:
            words.push(formatOther(digit, next, "Lakh"));
            break;
          case 6:
            words.push(formatTenth(digit, num[index + 1]));
            break;
          case 7:
            words.push(formatOther(digit, next, "Crore"));
            break;
          case 8:
            words.push(formatTenth(digit, num[index + 1]));
            break;
          case 9:
            words.push(
              0 != digit
                ? " " +
                    single[digit] +
                    " Hundred" +
                    (0 != num[index + 1] || 0 != num[index + 2]
                      ? " and"
                      : " Crore")
                : ""
            );
        }
      }
      res = words.reverse().join("");
    } else res = "";

    return res.trim();
  };

  if (invoiceType === "Non-GST") {
    calculatedTaxAmount = 0;
    netAmount = calculatedTotalAmount - discountAmount;
  } else if (invoiceType === "GST") {
    const taxRate = cgst + sgst;
    calculatedTaxAmount = (calculatedTotalAmount * taxRate) / 100;
    const calculatedCgst = calculatedTaxAmount / 2;
    const calculatedSgst = calculatedTaxAmount / 2;
    netAmount = calculatedTotalAmount + calculatedTaxAmount;

    if (
      Math.abs(calculatedTotalAmount - providedTotalAmount) > 0.01 ||
      Math.abs(calculatedTaxAmount - providedTaxAmount) > 0.01
    ) {
      throw new Error("Mismatch in total or tax amount for GST invoice.");
    }

    return {
      totalAmount: calculatedTotalAmount,
      taxAmount: calculatedTaxAmount,
      cgst: calculatedCgst,
      sgst: calculatedSgst,
      discountAmount,
      netAmount: Math.round(netAmount),
      netAmountInWords: numberToWords(Math.round(netAmount)),
    };
  } else if (invoiceType === "IGST") {
    calculatedTaxAmount = (calculatedTotalAmount * igst) / 100;
    netAmount = calculatedTotalAmount + calculatedTaxAmount;

    if (
      Math.abs(calculatedTotalAmount - providedTotalAmount) > 0.01 ||
      Math.abs(calculatedTaxAmount - providedTaxAmount) > 0.01
    ) {
      throw new Error("Mismatch in total or tax amount for IGST invoice.");
    }

    return {
      totalAmount: calculatedTotalAmount,
      taxAmount: calculatedTaxAmount,
      igst: calculatedTaxAmount,
      discountAmount,
      netAmount: Math.round(netAmount),
      netAmountInWords: numberToWords(Math.round(netAmount)),
    };
  }

  return {
    totalAmount: calculatedTotalAmount,
    taxAmount: calculatedTaxAmount,
    discountAmount,
    netAmount: Math.round(netAmount),
    netAmountInWords: numberToWords(Math.round(netAmount)),
  };
};
