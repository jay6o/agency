"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-[2rem]",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-bold text-xl transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            <span className="text-primary text-2xl">LOGOHERE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:md:underline text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant={"default"} size="lg" className="ml-[2rem] text-md font-semibold rounded-2xl">Get in Touch</Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={cn("lg:hidden", "text-primary", "hover:cursor-pointer")}
              aria-label="Toggle menu"
            >
              <Menu className="!w-7 !h-7"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-12 text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center">
                <Button className="mt-4 w-5/6">Get Started</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

