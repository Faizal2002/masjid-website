import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can install lucide-react icons
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50 font-Cairo pl-11">
      
      {/* Masjid Name */}
      <div className=" flex flex-row  text-2xl font-bold text-green-700">
        Vallavilai Masjid 
        
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 font-Cairo  text-green-600">

        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/about" className="hover:text-green-700">About</Link>
        <a href="/prayer" className="hover:text-green-700">Prayer Timings</a>
        <a href="/events" className="hover:text-green-700">Events</a>
        <a href="#gallery" className="hover:text-green-700">Gallery</a>
        <a href="/contact" className="hover:text-green-700">Contact</a>
        
      </nav>

      {/* Mobile Menu Icon */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden focus:outline-none"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute  top-16 right-4 bg-white shadow rounded p-4 space-y-4 md:hidden  text-green-600">
          <a href="/" className="block hover:text-green-700">Home</a>
          <a href="/about" className="block hover:text-green-700">About</a>
          <a href="/prayer" className="block hover:text-green-700">Prayer Timings</a>
          <a href="/events" className="block hover:text-green-700">Events</a>
          <a href="/gallery" className="block hover:text-green-700">Gallery</a>
          <a href="/contact" className="block hover:text-green-700">Contact</a>
        </div>
      )}
    </header>
  );
}
