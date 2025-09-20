import React from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";

const InvoicePreview = () => {
  const sellerInfo = {
    companyName: "Invoice Inc.",
    address: "123 Main Street, Anytown, CA 91234",
    contact: "contact@invoiceer.com",
  };

  const buyerInfo = {
    clientName: "Acme Corp.",
    address: "456 Business Ave, Anytown, CA 91234",
    contact: "accounts@acmecorp.com",
  };

  const items = [
    { name: "Consulting Services", quantity: 10, rate: 100, amount: 1000 },
    { name: "Software Development", quantity: 5, rate: 200, amount: 1000 },
    { name: "Project Management", quantity: 20, rate: 50, amount: 1000 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const gst = 300;
  const total = subtotal + gst;
  const totalAmount = total;

  const invoiceDetails = {
    dateTime: "July 26, 2024, 10:00 AM",
    invoiceNumber: "INV-2024-001",
    note: "Thank you for your business!",
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      <h1 className="text-lg font-semibold">Invoice Preview</h1>

      {/* Seller Info */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Seller Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Company Name</p>
            <p>{sellerInfo.companyName}</p>
          </div>
          <div>
            <p className="text-gray-500">Address</p>
            <p>{sellerInfo.address}</p>
          </div>
          <div>
            <p className="text-gray-500">Contact</p>
            <p>{sellerInfo.contact}</p>
          </div>
        </div>
      </div>

      {/* Buyer Info */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Buyer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Client Name</p>
            <p>{buyerInfo.clientName}</p>
          </div>
          <div>
            <p className="text-gray-500">Address</p>
            <p>{buyerInfo.address}</p>
          </div>
          <div>
            <p className="text-gray-500">Contact</p>
            <p>{buyerInfo.contact}</p>
          </div>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Invoice Items</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Item Name</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Rate</th>
                <th className="px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">₹{item.rate}</td>
                  <td className="px-4 py-2">₹{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end pt-4 text-sm">
          <div className="space-y-1">
            <div className="flex justify-between gap-10">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between gap-10">
              <span className="text-gray-600">Tax (GST)</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between gap-10 font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Invoice Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Date & Time</p>
            <p>{invoiceDetails.dateTime}</p>
          </div>
          <div>
            <p className="text-gray-500">Invoice Number</p>
            <p>{invoiceDetails.invoiceNumber}</p>
          </div>
        </div>
        <p className="pt-4">{invoiceDetails.note}</p>
      </div>

      {/* Total Amount & Buttons */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-bold">
          Total Amount ${totalAmount.toFixed(2)}
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-lg hover:bg-yellow-50">
            Share
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default HOC(InvoicePreview);
