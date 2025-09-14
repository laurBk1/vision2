import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string } | null>(null);

  const packages = [
    { name: "Pachet Basic" },
    { name: "Pachet Standard" },
    { name: "Pachet Premium" },
  ];

  const handlePackageSelect = (pkg: { name: string }) => {
    setSelectedPackage(pkg);
    setIsDropdownOpen(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contactează-ne
        </h2>

        <form className="space-y-8">
          {/* Nume */}
          <div>
            <label
              htmlFor="nume"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nume *
            </label>
            <input
              type="text"
              id="nume"
              name="nume"
              placeholder="Numele tău complet"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@exemplu.ro"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Package Selection */}
          <div className="group">
            <label
              htmlFor="pachet"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Pachet *
            </label>

            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300 text-left flex items-center justify-between cursor-pointer"
            >
              <span className={selectedPackage ? "text-gray-900" : "text-gray-500"}>
                {selectedPackage ? selectedPackage.name : "Selectează un pachet..."}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="mt-2 border border-gray-200 rounded-lg shadow-md bg-white">
                {packages.map((pkg) => (
                  <li
                    key={pkg.name}
                    onClick={() => handlePackageSelect(pkg)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {pkg.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mesaj */}
          <div>
            <label
              htmlFor="mesaj"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Mesaj
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              placeholder="Descrie-ne proiectul tău..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Buton trimite */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            Trimite mesajul
          </button>
        </form>
      </div>
    </section>
  );
}
