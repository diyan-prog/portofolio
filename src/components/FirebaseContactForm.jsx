import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const FirebaseContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simpan ke Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        read: false,
        status: "new",
      });

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message setelah 3 detik
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/50 p-8 lg:p-12 rounded-2xl shadow-2xl"
    >
      <div className="flex flex-col gap-8">
        {/* Name Field */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-white text-lg">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name..."
            className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-white text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-white text-lg">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="45"
            rows="6"
            placeholder="Tell me about your project or just say hello..."
            className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400 resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 p-4 px-8 rounded-full w-full cursor-pointer border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default FirebaseContactForm;
