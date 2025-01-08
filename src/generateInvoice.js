import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateInvoicePDF = async (invoiceData) => {
  // console.log(invoiceData);
  try {
    // Path to the EJS template
    const templatePath = path.join(
      __dirname,
      "templates",
      "invoice-template.ejs"
    );

    // Render EJS template with data
    const htmlContent = await ejs.renderFile(templatePath, {
      data: invoiceData,
    });

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content of the page
    await page.setContent(htmlContent, { waitUntil: "load" });

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true, // Ensure styles render
    });

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};
