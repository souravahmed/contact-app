import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (contacts) => {
  const doc = new jsPDF();
  const tableColumn = ["Id", "Name", "Email", "Company", "Description"];
  const tableRows = [];

  contacts.forEach((contact) => {
    const ticketData = [
      contact.id,
      contact.name,
      contact.email,
      contact.company,
      contact.description,
    ];
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // contact title. and margin-top + margin-left
  doc.text("All contacts", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
