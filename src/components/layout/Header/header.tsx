"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../../../public/assets/tanjung-asri-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (assuming it has an id of "beranda")
      const heroSection = document.querySelector("#beranda");
      const heroHeight = heroSection?.getBoundingClientRect().height || 0;
      
      // Check if we've scrolled past the hero section
      if (window.scrollY > heroHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
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
              className={`${styles.navLink} ${isScrolled ? styles.navLinkScrolled : ""}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Bergabung Button */}
        <Link
          href="/bergabung"
          className={`${styles.joinButton} ${isScrolled ? styles.joinButtonScrolled : ""}`}
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
          <div className={`${styles.mobileMenu} ${isScrolled ? styles.mobileMenuScrolled : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setIsOpen(false);
                }}
                className={`${styles.navLink} ${isScrolled ? styles.navLinkScrolled : ""}`}
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