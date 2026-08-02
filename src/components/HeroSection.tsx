'use client';

import React from 'react';
import { Trophy, Calendar, Users, ArrowRight, ShieldCheck, Flame, Zap, Award } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onRankingClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick, onRankingClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      
      {/* Background Micro Patterns */}
      <div className="absolute inset-0 sports-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-bold text-red-700 tracking-wide uppercase">
              เปิดรับสมัครเเล้ววันนี้
            </span>
            <span className="text-xs text-slate-600 font-medium hidden sm:inline">
              • การแข่งขันเทเบิลเทนนิสชิงแชมป์ประเทศไทย 2569
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            ศูนย์กลางข้อมูลและการแข่งขัน{' '}
            <span className="relative inline-block">
              <span className="text-gradient-crimson">เทเบิลเทนนิสไทย</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
            {' '}ระดับประเทศ
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            ระบบลงทะเบียนแข่งขันออนไลน์ ตารางคะแนนจัดอันดับนักกีฬา (National Ranking) 
            และข่าวสารอย่างเป็นทางการจาก <strong className="text-slate-800">สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย (TTAT)</strong>
          </p>

          {/* CTA Button Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white gradient-crimson rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/35 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <Flame className="w-5 h-5 text-amber-300 animate-bounce" />
              <span>สมัครเข้าร่วมการแข่งขัน</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRankingClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>ตรวจสอบอันดับ Ranking</span>
            </button>
          </div>
        </div>

        {/* Quick Key Metrics Counter */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-2xl text-center border border-slate-200/80 hover:border-red-200 transition-all hover:shadow-md">
            <div className="w-10 h-10 mx-auto mb-3 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1,480+</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">นักกีฬาในระบบสมาคมฯ</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-slate-200/80 hover:border-blue-200 transition-all hover:shadow-md">
            <div className="w-10 h-10 mx-auto mb-3 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">45+</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">รายการแข่งขันต่อปี</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-slate-200/80 hover:border-amber-200 transition-all hover:shadow-md">
            <div className="w-10 h-10 mx-auto mb-3 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">12</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">ประเภทการแข่งขัน</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-slate-200/80 hover:border-emerald-200 transition-all hover:shadow-md">
            <div className="w-10 h-10 mx-auto mb-3 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">120+</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">สโมสรสมาชิกในสังกัด</div>
          </div>

        </div>

      </div>
    </section>
  );
};
