import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import images from "../../../lib/exportImages";
import { useNavigate } from "react-router-dom";

const CreateInvoice = () => {
  const [customerName, setCustomerName] = useState("Samanta Legend");
  const [email, setEmail] = useState("abc@gmail.com");
  const [date, setDate] = useState("21/08/2022");
  const [invoiceNumber, setInvoiceNumber] = useState(
    "INV/2022114/MPL/3820356839"
  );
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("8723781236");
  const [status, setStatus] = useState("Waiting");

  const [businessName, setBusinessName] = useState("Samanta Legend");
  const [sellerEmail, setSellerEmail] = useState("abc@gmail.com");
  const [address, setAddress] = useState("S");
  const [sellerCountryCode, setSellerCountryCode] = useState("+62");
  const [contactNumber, setContactNumber] = useState("8723781236");

  const [items, setItems] = useState([
    {
      product: "T-Men's UA Storm Armour Down 2.0 Jacket",
      sku: "123980123490",
      size: "M",
      color: "Cream",
      qty: 2,
      price: 140,
      total: 280,
      image: images.homePage.login.dashboard.products.images[0].image,
    },
    {
      product: "T-Men's UA Storm Armour Down 2.0 Jacket",
      sku: "310498014923",
      size: "L",
      color: "Pink",
      qty: 1,
      price: 129,
      total: 129,
      image: images.homePage.login.dashboard.products.images[1].image,
    },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const gst = subtotal * 0.18;
  const totalAmount = subtotal + gst;

  const handlePreviewInvoice = () => {
    navigate("/invoice/preview");
  };

  const handleReject = () => {
    console.log("Reject Invoice");
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Create Invoice</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Customer Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-gray-600">Customer Name</label>
            <input
              className="border border-gray-200 rounded p-2 w-full"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-gray-600">Date</label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label className="text-gray-600">Invoice</label>
            <input
              className="border border-gray-200 rounded p-2 w-full"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />

            <label className="text-gray-600">Phone Number</label>
            <div className="flex gap-2">
              <select
                className="border border-gray-200 rounded p-2"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+62">+62</option>
                <option value="+1">+1</option>
              </select>
              <input
                className="border border-gray-200 rounded p-2 flex-1"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <label className="text-gray-600">Status</label>
            <select
              className={`border border-gray-200 rounded p-2 w-full ${
                status === "Waiting"
                  ? "bg-yellow-50 text-yellow-800"
                  : status === "Approved"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Waiting">Waiting</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="text-lg font-semibold">Seller Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-gray-600">Business Name</label>
            <input
              className="border border-gray-200 rounded p-2 w-full"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />

            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
            />

            <label className="text-gray-600">Address</label>
            <textarea
              className="border border-gray-200 rounded p-2 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label className="text-gray-600">Contact Number</label>
            <div className="flex gap-2">
              <select
                className="border border-gray-200 rounded p-2"
                value={sellerCountryCode}
                onChange={(e) => setSellerCountryCode(e.target.value)}
              >
                <option value="+62">+62</option>
                <option value="+1">+1</option>
              </select>
              <input
                className="border border-gray-200 rounded p-2 flex-1"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="text-lg font-semibold">Item List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "PRODUCT",
                    "SKU",
                    "SIZE",
                    "COLOR",
                    "QTY",
                    "PRICE",
                    "TOTAL",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-8 h-8 rounded"
                      />
                      <span>{item.product}</span>
                    </td>
                    <td className="py-2 px-4">{item.sku}</td>
                    <td className="py-2 px-4">{item.size}</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-1">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor:
                              item.color === "Cream"
                                ? "#f5f5dc"
                                : item.color === "Pink"
                                ? "#ffc0cb"
                                : "",
                          }}
                        ></div>
                        <span>{item.color}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4">{item.qty}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4 flex-col items-end space-y-2">
            <div className="flex gap-16">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-gray-600">GST (18%)</p>
              <p className="font-medium">${gst.toFixed(2)}</p>
            </div>
            <div className="flex gap-16 font-bold text-lg">
              <p className="text-gray-800">Total Amount</p>
              <p className="font-semibold">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <button
            onClick={handleReject}
            className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
          >
            Reject
          </button>
          <button
            onClick={handlePreviewInvoice}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Preview Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default HOC(CreateInvoice);
