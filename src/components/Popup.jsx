import React, { useState } from "react";

const Popup = ({ isOpen, onClose, jobType }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ fullName, jobType, email, cv, description });
    onClose(); // Close popup after submission
  };

  if (!isOpen) return null; // Don't render anything if popup is not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#FEFBF6] p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-[#3D3C42]">
          Apply for {jobType}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#7F5283] mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#3D3C42]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#7F5283] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#3D3C42]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#7F5283] mb-2">CV</label>
            <input
              type="file"
              onChange={(e) => setCv(e.target.files[0]?.name || "")}
              className="w-full border border-[#7F5283] p-2 rounded-lg bg-[#FEFBF6] text-[#3D3C42]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#7F5283] mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#3D3C42]"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="inline-block mt-5 px-8 py-3 text-lg font-semibold text-white bg-Card_Button rounded-full hover:bg-primary transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-block mt-5 ml-5 px-8 py-3 text-lg font-semibold text-white bg-red-500 rounded-full hover:bg-primary transition duration-300"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
