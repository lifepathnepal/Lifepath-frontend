import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen pt-16 bg-zinc-100">
      {/* Hero */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-10 px-4">
          <div className="max-w-3xl">
            <p className="text-sm text-blue-100 mb-3">Let’s connect</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Contact Lifepath
            </h1>
            <p className="text-lg text-blue-100">
              Have a question about career paths, job training, or your next
              step? Our advisors are ready to help.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@lifepath.com"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-5 py-2.5 font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail size={18} /> Email us
              </a>
              <a
                href="tel:+9779800000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-2.5 font-semibold hover:border-white transition-colors"
              >
                <Phone size={18} /> Call support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Career Guidance",
              desc: "Talk to an advisor about the best path for you.",
              icon: <Headphones size={20} />,
              action: "Book a call",
            },
            {
              title: "WhatsApp Support",
              desc: "Get instant answers from our team.",
              icon: <MessageCircle size={20} />,
              action: "Chat now",
            },
            {
              title: "Visit Us",
              desc: "Drop by our office for a quick consult.",
              icon: <MapPin size={20} />,
              action: "Get directions",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-600 mb-3">{item.desc}</p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 cursor-pointer">
                {item.action} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Send us a message
            </h2>
            <p className="text-sm text-zinc-600 mb-6">
              Share your goals, questions, or challenges. We’ll respond within
              24 hours.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-zinc-700">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-zinc-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-zinc-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="98xxxxxxxx"
                  className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-zinc-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-zinc-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals"
                  className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <Send size={16} /> Send message
                </button>
                <span className="text-sm text-zinc-500">
                  By submitting, you agree to our
                  <Link href="/" className="text-blue-600 font-semibold ml-1">
                    privacy policy
                  </Link>
                  .
                </span>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Contact details
              </h3>
              <div className="space-y-3 text-sm text-zinc-700">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-600" />
                  <span>+977 980-000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" />
                  <span>hello@lifepath.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  <span>Sun–Fri • 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Prefer quick answers?
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                Browse our success stories, job training programs, and FAQs for
                instant guidance.
              </p>
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore success stories <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
