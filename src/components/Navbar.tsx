'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, UserCheck, Search, Menu, X, Shield, Award } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-full gradient-crimson flex items-center justify-center text-white shadow-md shadow-red-500/20 ring-2 ring-red-100">
              <span className="font-extrabold text-xl tracking-tighter">TTAT</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                  สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold bg-red-50 text-red-600 rounded-full border border-red-200">
                  OFFICIAL
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block font-medium">
                Table Tennis Association of Thailand
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('tournaments')}
              className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              <Calendar className="w-4 h-4 text-red-500" />
              <span>รายการแข่งขัน</span>
            </button>

            <button 
              onClick={() => scrollToSection('ranking')}
              className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>จัดอันดับนักกีฬา (Ranking)</span>
            </button>

            <button 
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span>บริการสมาคมฯ</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => scrollToSection('tournaments')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              ระบบสโมสร
            </button>
            <button 
              onClick={() => scrollToSection('tournaments')}
              className="px-4 py-2 text-xs font-semibold text-white gradient-crimson hover:opacity-95 rounded-lg shadow-sm shadow-red-500/20 transition-all flex items-center space-x-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>สมัครลงแข่ง</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-red-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <button 
            onClick={() => scrollToSection('tournaments')}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-red-600 flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-red-500" />
            <span>รายการแข่งขันที่เปิดรับสมัคร</span>
          </button>

          <button 
            onClick={() => scrollToSection('ranking')}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-red-600 flex items-center space-x-2"
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>ค้นหาอันดับคะแนน (Ranking)</span>
          </button>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection('tournaments')}
              className="w-full py-2.5 text-center text-xs font-semibold text-white gradient-crimson rounded-lg shadow-sm"
            >
              สมัครลงแข่งขันทันที
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
