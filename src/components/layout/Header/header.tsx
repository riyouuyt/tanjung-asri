"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../../../public/assets/tanjung-asri-logo.png"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Harga", href: "#harga" },
    { name: "Layanan", href: "#layanan" },
    { name: "Artikel", href: "#artikel" },
    { name: "Tentang Kami", href: "#tentang" },
  ];

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        {/* Logo */}
        <Image 
          src={Logo}
          alt="Tanjung Asri Logo"
          className={styles.logo}
          onClick={() => scrollToSection("#beranda")}
        />

        {/* Desktop Menu */}
        <div className={styles.navMenu}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={styles.navLink}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Bergabung Button */}
        <Link
          href="/bergabung"
          className={styles.joinButton}
        >
          Bergabung
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setIsOpen(false);
                }}
                className={styles.navLink}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}