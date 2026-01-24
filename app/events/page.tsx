"use client";

import { Calendar, MapPin, Clock, Users, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      title: "Tech Career Fair 2026",
      date: "Feb 15, 2026",
      time: "10:00 AM - 5:00 PM",
      location: "Kathmandu Convention Center",
      attendees: "500+",
      type: "Career Fair",
      description:
        "Meet top tech companies in Nepal and explore career opportunities",
      image: "/heroImages/woman3.png",
    },
    {
      id: 2,
      title: "UI/UX Design Workshop",
      date: "Feb 20, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Design Studio, Lalitpur",
      attendees: "50",
      type: "Workshop",
      description: "Hands-on workshop covering user research and prototyping",
      image: "/heroImages/woman3.png",
    },
    {
      id: 3,
      title: "Digital Marketing Webinar",
      date: "Feb 25, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      attendees: "200+",
      type: "Webinar",
      description:
        "Learn the latest digital marketing strategies from industry experts",
      image: "/heroImages/woman3.png",
    },
    {
      id: 4,
      title: "Startup Networking Night",
      date: "Mar 5, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Tech Hub Nepal, Kathmandu",
      attendees: "100+",
      type: "Networking",
      description:
        "Connect with founders, investors, and tech professionals in Nepal",
      image: "/heroImages/woman3.png",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      date: "Mar 10, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Learning Center, Pokhara",
      attendees: "30",
      type: "Bootcamp",
      description:
        "Intensive full-day bootcamp on modern web development technologies",
      image: "/heroImages/woman3.png",
    },
    {
      id: 6,
      title: "Women in Tech Conference",
      date: "Mar 18, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "Hotel Annapurna, Kathmandu",
      attendees: "300+",
      type: "Conference",
      description:
        "Empowering women in technology with inspiring talks and panels",
      image: "/heroImages/woman3.png",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
              Upcoming <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              Network, learn, and grow with our community events and workshops
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 bg-zinc-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 right-2 px-2 py-1 bg-white text-xs font-bold text-blue-600 rounded">
                  {event.type}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs text-zinc-600 mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 text-xs text-zinc-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-600" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar size={48} className="mx-auto text-zinc-300 mb-4" />
            <p className="text-zinc-600">
              No events found matching your search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
