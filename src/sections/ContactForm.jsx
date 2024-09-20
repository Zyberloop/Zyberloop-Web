import emailjs from "emailjs-com";
import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "Web design", // Default selection
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prevData) => ({ ...prevData, interest }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an EmailJS template parameters object
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Your Name or Business",
      subject: formData.subject,
      message: formData.message,
      interested_in: formData.interest,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form data or show success message
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            interest: "Web design",
          });
        },
        (error) => {
          console.log("Error sending email:", error.text);
          // Show error message
        }
      );
  };

  return (
    <div>
      <div className="mt-6 max-w-max mx-auto rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-LexendDecaLigh">
          <div>
            <h1 className="text-4xl font-bold gradient-text2 font-LexendDecaBold">
              Contact Us
            </h1>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach
              out, we'd love to hear about your project and provide help.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <Mail className="text-white" />
                <a
                  href="mailto:info@zyberloop.net"
                  className="text-white text-sm ml-4"
                >
                  info@zyberloop.net
                </a>
              </li>
              <li className="flex items-center">
                <PhoneCall className="text-white" />
                <a href="tel:+158996888" className="text-white text-sm ml-4">
                  +94 70 200 1313
                </a>
              </li>
              {/* <li className="flex items-center">
                <MapPin className="text-white" />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm ml-4"
                >
                  No. 246/1/1, High Level Road, Nugegoda.
                </a>
              </li> */}
            </ul>

            <ul className="flex mt-12 space-x-4">
              <li className="gradient-btn hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.facebook.com/zyberloop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="text-white " />
                </a>
              </li>
              <li className="gradient-btn hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-white" />
                </a>
              </li>
              <li className="gradient-btn  hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.instagram.com/zyberloop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-white" />
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-card_color via-black to-card_color p-6 rounded-lg font-LexendDecaLigh">
            <p className="text-sm font-semibold text-white">
              I'm interested in...
            </p>

            <div className="space-y-4 max-lg:mt-4">
              <button
                type="button"
                onClick={() => handleInterestChange("Web design")}
                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 mr-4 ${formData.interest === "Web design"
                  ? "gradient-btn text-white border-none"
                  : "bg-transparent text-white border-none "
                  }`}
              >
                Web / Mobile Development
              </button>
              <button
                type="button"
                onClick={() => handleInterestChange("ERP Solutions")}
                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 mr-4 ${formData.interest === "ERP Solutions"
                  ? "gradient-btn text-white border-none "
                  : "bg-transparent text-white border-none"
                  }`}
              >
                ERP Solutions
              </button>
              <button
                type="button"
                onClick={() => handleInterestChange("Social Media Management")}
                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 ${formData.interest === "Social Media Management"
                  ? "gradient-btn text-white border-none"
                  : "bg-transparent text-white border-none "
                  }`}
              >
                Social Media Management
              </button>
              <button
                type="button"
                onClick={() => handleInterestChange("Logo Design")}
                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 ${formData.interest === "Logo Design"
                  ? "gradient-btn text-white border-none"
                  : "bg-transparent text-white border-none "
                  }`}
              >
                Logo /  Brand Designing
              </button>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-none"
                required
              />
              <button
                type="submit"
                className="text-white btn-5 bg-card_color hover:bg-Card_Button tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full mt-6"
              >
                <Send className="mr-2 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
