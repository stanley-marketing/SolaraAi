"use client";

import React, { useState, useRef, useEffect } from "react";
import { getCountries, getCountryCallingCode, type Country } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

interface Props {
  value?: Country;
  onChange: (country: Country) => void;
  iconComponent: React.ComponentType<{ country: Country; label: string }>;
}

export function PhoneCountrySelect({ value, onChange, iconComponent: Icon }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  const countries = getCountries();
  const filtered = countries.filter((c) => {
    if (!search) return true;
    const name = (en[c] || "").toLowerCase();
    const code = `+${getCountryCallingCode(c)}`;
    return name.includes(search.toLowerCase()) || code.includes(search);
  });

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg px-1 py-1 transition-colors hover:bg-gray-100"
      >
        {value && <Icon country={value} label={en[value] || value} />}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-100 p-2">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="max-h-56 overflow-y-auto">
            {filtered.map((country) => (
              <button
                key={country}
                type="button"
                onClick={() => {
                  onChange(country);
                  setOpen(false);
                  setSearch("");
                }}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-gray-50 ${
                  value === country ? "bg-gray-50 font-medium" : ""
                }`}
              >
                <Icon country={country} label={en[country] || country} />
                <span className="flex-1 truncate text-gray-900">{en[country]}</span>
                <span className="text-gray-400">+{getCountryCallingCode(country)}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="px-3 py-4 text-center text-sm text-gray-400">No countries found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
