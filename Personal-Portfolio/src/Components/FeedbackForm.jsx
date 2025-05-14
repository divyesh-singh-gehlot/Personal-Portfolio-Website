import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: '', email: '', feedback: '' });
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_fe4djiw',
        'template_48quqbv',
        form,
        '7Ktw-1cwE6fd5sC_k'
      )
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', feedback: '' });
      })
      .catch(() => {
        setStatus('❌ Failed to send message. Try again.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
  <form
    onSubmit={sendEmail}
    autoComplete='off'
    className="backdrop-blur-md bg-white/10 border border-cyan-400 text-white shadow-lg shadow-cyan-500/40 rounded-2xl p-8 w-full max-w-md space-y-4 transition-all duration-300"
  >
    <h2 className="text-3xl font-bold text-center text-cyan-400">Feedback Form</h2>

    <input
      type="text"
      name="name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      placeholder="Your Name"
      className="w-full p-3 bg-white/10 border border-cyan-300 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      required
    />

    <input
      type="email"
      name="email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      placeholder="Your Email"
      className="w-full p-3 bg-white/10 border border-cyan-300 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      required
    />

    <textarea
      name="feedback"
      value={form.feedback}
      onChange={(e) => setForm({ ...form, feedback: e.target.value })}
      placeholder="Your Feedback"
      className="w-full p-3 bg-white/10 border border-cyan-300 rounded-lg text-white placeholder-cyan-200 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
      required
    />

    <button
      type="submit"
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md shadow-cyan-500/50"
    >
      Submit
    </button>

    {status && <p className="text-center text-sm text-cyan-200 mt-2">{status}</p>}
  </form>
</div>

  );
};

export default FeedbackForm;
