import { useState } from "react";
import { Button } from "../../components/ui/Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name : "",
    phoneNumber : "",
    email : "",
    city : "",
    projectDetails : "",
    companyName : "",
    website : "",
    selectBudget : "",
    selectservices : "",
    hearAboutUs : "",
    otherInterest : "",
  });
    

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: boolean } = {};
    const requiredFields = ["name", "email", "city", "designation", "budget", "heardAboutUs"];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setModalMessage("Please fill all required fields!");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5012/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalMessage("Message sent successfully!");
        setIsSuccess(true);
        setFormData({
    name : "",
    phoneNumber : "",
    email : "",
    city : "",
    projectDetails : "",
    companyName : "",
    website : "",
    selectBudget : "",
    selectservices : "",
    hearAboutUs : "",
    otherInterest : "",})
      } else {
        setModalMessage("Failed to send message. Please try again!");
        setIsSuccess(false);
      }
    } catch (error) {
      setModalMessage("Network error. Please check your connection.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-10 pt-28 bg-gradient-primary">
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
          <div className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
            <h2 className="mb-4 text-xl font-bold text-white">{modalMessage}</h2>
            <button onClick={() => setModalMessage(null)} className="px-6 py-2 text-black bg-white rounded-md hover:bg-gray-200">
              OK
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl p-8 shadow-lg rounded-2xl"
        style={{
          background: 'linear-gradient(224deg, #220371, #365946)'
        }}>
        <h1 className="mb-4 text-3xl font-bold text-center text-white font-orbitron">Contact <span className="text-yellow">US</span></h1>
        <p className="mb-6 text-2xl text-center text-gray-200">Let's Boost Your Digital Presence</p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <input name="name" type="text" placeholder="Name *" className={`w-full p-3 bg-gray-100 border rounded-md ${errors.name ? "border-red-500" : ""}`} onChange={handleChange} value={formData.name} />
              {errors.name && <p className="text-red-500">This field is required</p>}
            </div>
            <input name="phoneNumber" type="phone" placeholder="Contact *" className="w-full p-3 bg-gray-100 border rounded-md sm:w-1/2" onChange={handleChange} value={formData.phoneNumber} />
            {errors.phoneNumber && <p className="text-red-500">This field is required</p>}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <input name="email" type="email" placeholder="Email *" className={`w-full p-3 bg-gray-100 border rounded-md  ${errors.email ? "border-red-500" : ""}`} onChange={handleChange} value={formData.email} />
              {errors.email && <p className="text-red-500">This field is required</p>}
            </div>
            <input name="city" type="text" placeholder="City *" className={`w-full p-3 bg-gray-100 border rounded-md sm:w-1/2 ${errors.city ? "border-red-500" : ""}`} onChange={handleChange} value={formData.city} />
            {errors.city && <p className="text-red-500">This field is required</p>}

          </div>

          <div>

            <textarea name="projectDetails" placeholder="Project Details *" className={`w-full h-20 p-3 bg-gray-100 border rounded-md ${errors.designation ? "border-red-500" : ""}`} onChange={handleChange} value={formData.projectDetails}></textarea>
            {errors.designation && <p className="text-red-500">This field is required</p>}
          </div>

          <input name="companyName" type="text" placeholder="Company Name" className="w-full p-3 bg-gray-100 border rounded-md" onChange={handleChange} value={formData.companyName} />
          <input name="website" value={formData.website} onChange={handleChange} type="text" placeholder="Website" className="w-full p-3 bg-gray-100 border rounded-md" />

          <div>
            <select name="selectservice" className={`w-full p-3 bg-gray-100 border rounded-md ${errors.selectservice ? "border-red-500" : ""}`} onChange={handleChange} value={formData.selectservices}>
              <option value="">Select Service</option>
              <option value="web_dev">Web Development</option>
              <option value="app_dev">App Development</option>
              <option value="ecommerce_solution">Ecommerce Solution</option>
              <option value="custom_software">Custom Software</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="social_marketing">Social Media Marketing</option>
              <option value="video_marketing">Video Marketing & Branding</option>
              <option value="email_auto">Email Automation</option>
              <option value="other">Other</option>
            </select>
            {errors.selectservice && <p className="text-red-500">This field is required</p>}
          </div>
          {formData.selectservices === "other" && (
            <div>
              <input name="otherInterest" type="text" placeholder="Please specify" className={`w-full p-3 bg-gray-100 border rounded-md ${errors.otherInterest ? "border-red-500" : ""}`} onChange={handleChange} value={formData.otherInterest} />
              {errors.otherInterest && <p className="text-red-500">This field is required</p>}
            </div>
          )}

          <div>
            <select name="budget" className={`w-full p-3 bg-gray-100 border rounded-md ${errors.budget ? "border-red-500" : ""}`} onChange={handleChange} value={formData.selectBudget}>
              <option value="">Select Budget</option>
              <option value="<$1000">Less than $1000</option>
              <option value="$1000-$5000">$1000 - $5000</option>
              <option value="$5000-$10000">$5000 - $10000</option>
              <option value=">$10000">More than $10000</option>
            </select>
            {errors.budget && <p className="text-red-500">This field is required</p>}
          </div>

          <div>
            <select name="heardAboutUs" className={`w-full p-3 bg-gray-100 border rounded-md ${errors.hearAboutUs ? "border-red-500" : ""}`} onChange={handleChange} value={formData.hearAboutUs}>
              <option value="">How did you hear about us?</option>
              <option value="social_media">Social Media</option>
              <option value="google_search">Google Search</option>
              <option value="friend_referral">Friend Referral</option>
              <option value="other">Other</option>
            </select>
            {errors.hearAboutUs && <p className="text-red-500">This field is required</p>}
          </div>

          <div className="flex justify-center">
            <Button type="submit" variant="primary" size="md" className="px-3 py-2 mt-4 font-bold group">
              Let's Talk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;