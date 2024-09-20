import React, { useState } from "react";
import emailjs from "emailjs-com";

const Popup = ({ isOpen, onClose, jobType }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cv) {
      alert("Please upload your CV.");
      return;
    }

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("job_type", jobType);
    formData.append("email", email);
    formData.append("cv", cv);
    formData.append("description", description);

    const templateParams = {
      full_name: fullName,
      job_type: jobType,
      email: email,
      description: description,
      message: "Here is my CV for the position.",
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID_FOR_JOBS,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Application submitted successfully!");
          onClose();
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send application. Please try again later.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-[#1a1a2e] p-6 rounded-lg shadow-lg w-full max-w-md text-white backdrop-blur-md border border-gray-600">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          ✕
        </button>

        {/* Job Type Header */}
        <h2 className="text-2xl font-bold mb-4 text-[#FEFBF6]">{jobType}</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-[#A6D1E6] mb-2">Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#282846] text-[#FEFBF6] border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#A6D1E6]"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[#A6D1E6] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#282846] text-[#FEFBF6] border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#A6D1E6]"
              required
            />
          </div>

          {/* CV Upload */}
          <div className="mb-4">
            <label className="block text-[#A6D1E6] mb-2">CV</label>
            <input
              type="file"
              onChange={(e) => setCv(e.target.files[0])}
              className="w-full bg-[#282846] text-[#FEFBF6] border border-[#7F5283] p-2 rounded-lg focus:ring-2 focus:ring-[#A6D1E6]"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-[#A6D1E6] mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#282846] text-[#FEFBF6] border border-[#7F5283] p-3 rounded-lg focus:ring-2 focus:ring-[#A6D1E6]"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#7F5283] hover:bg-[#A6D1E6] text-[#FEFBF6] py-2 px-8 rounded-full transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
