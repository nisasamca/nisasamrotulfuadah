    "use client";

    import { sendMail } from "../actions/sendmail";
import Footer from "./footer";

    export default function Contact() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-100  px-4" id="contact">
        <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">

            {/* Card kiri */}
            <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600">
                For any questions, project discussions, or professional opportunities,
                feel free to reach out using the contact form below..
            </p>
            </div>

            {/* Form kanan */}
            <form action={sendMail} className="space-y-4">
            <input
                name="name"
                placeholder="Nama"
                required
                className="w-full border border-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 p-3 rounded-lg"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 p-3 rounded-lg"
            />
            <textarea
                name="message"
                placeholder="Pesan"
                rows={4}
                required
                className="w-full border border-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 p-3 rounded-lg"
            />
            <button
                type="submit"
                className="w-full bg-purple-400 hover:bg-purple-100 text-white hover:text-purple-600 py-3 rounded-lg"
            >
                Kirim Pesan
            </button>
            </form>

        </div>
        </section>
    );
    }

