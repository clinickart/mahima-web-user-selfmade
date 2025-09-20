import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    gender: "",
    weight: "",
    status: false,
    images: [],
    price: "",
    discountType: "",
    discountValue: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, images: [...form.images, ...files] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", form);
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-6">Add Product</h2>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-6 border-b border-gray-200">
          Product Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Product name
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Do not exceed 20 characters when entering the product name.
              </p>
            </div>
            <div className="lg:w-1/2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter product name"
                maxLength={20}
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring focus:ring-pink-200"
              />
            </div>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Set a description on product to detail your product and better
                visibility
              </p>
            </div>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows={3}
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring focus:ring-pink-200 lg:w-1/2"
            />
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Please select your product category from the list provided
              </p>
            </div>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 lg:w-1/2"
            >
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Set the gender for this product
              </p>
            </div>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 lg:w-1/2"
            >
              <option value="">Select Gender</option>
              <option value="Unisex">Unisex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Set the weight for this product
              </p>
            </div>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="000"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 lg:w-1/2"
            />
          </div>
          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="lg:w-1/2">
                <label className="text-sm font-medium text-gray-700">
                  Status
                </label>
                <p className="text-xs text-gray-500 pb-4 pt-2 ">
                  Set the status for this product
                </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="status"
                  checked={form.status}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="text-sm font-medium text-gray-700">
                Photo Product
              </label>
              <p className="text-xs text-gray-500">
                Recommended minimum 1080x1080px, max size 5MB.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Product
                </label>
                <div className="flex flex-wrap gap-4">
                  {/* Preview existing images */}
                  {form.images.length > 0 &&
                    Array.from(form.images).map((file, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 border rounded-lg overflow-hidden relative"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedImages = [...form.images];
                            updatedImages.splice(index, 1);
                            setForm({ ...form, images: updatedImages });
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
                        >
                          ✕
                        </button>
                      </div>
                    ))}

                  {/* Add Image Card */}
                  <label
                    htmlFor="images"
                    className="flex flex-col justify-center items-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-pink-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a1 1 0 001 1h3m10-2v1a1 1 0 01-1 1h-3m-4 0a1 1 0 001-1v-1m-4 0a1 1 0 00-1 1v1m10-2a1 1 0 01-1 1v1"
                      />
                    </svg>
                    <span className="mt-1 px-2 py-1 text-xs bg-pink-500 text-white rounded">
                      Add Image
                    </span>
                    <span className="mt-1 text-xs text-gray-500 text-center">
                      Or Drop Image To Upload
                    </span>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      accept="image/*"
                      multiple
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended minimum 1080x1080px, max size 5MB.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Set the price for this product
              </p>
            </div>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="₹ 000"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 lg:w-1/2"
            />
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Discount Type
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Set your discount type. <br /> You can choose the type of
                discount with a percent or cash discount.
              </p>
            </div>
            <select
              name="discountType"
              value={form.discountType}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 lg:w-1/2"
            >
              <option value="">Select type</option>
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>

          <div className="mb-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between pb-3">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Set Discount
              </label>
              <p className="text-xs text-gray-500 pb-4 pt-2 ">
                Please fill in how many discounts you will give for this
                products.
              </p>
            </div>
            <input
              type="number"
              name="discountValue"
              value={form.discountValue}
              onChange={handleChange}
              placeholder="Enter nominal discount"
              className="mt-1 w-full border border-gray-200 lg:w-1/2  rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HOC(AddProduct);
