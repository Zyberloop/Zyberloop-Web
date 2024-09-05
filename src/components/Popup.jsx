import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Popup = ({ isOpen, onClose, jobType }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null); // Set CV as a file object
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
          onClose(); // Close the popup after submission
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send application. Please try again later.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
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
              onChange={(e) => setCv(e.target.files[0])} // Capture the file
              className="w-full border border-[#7F5283] p-2 rounded-lg bg-[#FEFBF6] text-[#3D3C42]"
              required
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
