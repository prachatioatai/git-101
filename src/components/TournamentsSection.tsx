'use client';

import React, { useState } from 'react';
import { Tournament, MOCK_TOURNAMENTS } from '@/data/mockData';
import { Calendar, MapPin, Trophy, Users, Clock, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TournamentsSectionProps {
  onSelectTournament: (tournament: Tournament) => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = ({ onSelectTournament }) => {
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'UPCOMING'>('ALL');

  const filteredTournaments = MOCK_TOURNAMENTS.filter((t) => {
    if (filter === 'OPEN') return t.status === 'OPEN';
    if (filter === 'UPCOMING') return t.status === 'UPCOMING';
    return true;
  });

  return (
    <section id="tournaments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full mb-3 border border-red-100">
              <Calendar className="w-3.5 h-3.5" />
              <span>Tournaments & Schedule</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              รายการแข่งขันเทเบิลเทนนิสที่เปิดรับสมัคร
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              เลือกรายการแข่งขันและลงทะเบียนร่วมแข่งขันออนไลน์เพื่อสะสมคะแนน National Ranking
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filter === 'ALL'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              รายการทั้งหมด ({MOCK_TOURNAMENTS.length})
            </button>
            <button
              onClick={() => setFilter('OPEN')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 ${
                filter === 'OPEN'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>เปิดรับสมัครอยู่</span>
            </button>
            <button
              onClick={() => setFilter('UPCOMING')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filter === 'UPCOMING'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              กำลังจะเปิดเร็วๆ นี้
            </button>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTournaments.map((item) => {
            const isFull = item.currentParticipants >= item.maxParticipants;
            const progressPercent = Math.min(
              100,
              Math.round((item.currentParticipants / item.maxParticipants) * 100)
            );

            return (
              <div
                key={item.id}
                className="bg-slate-50/70 rounded-3xl border border-slate-200/80 hover:border-red-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Card Banner */}
                  <div className={`p-6 bg-gradient-to-r ${item.bannerBg} text-white relative`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-extrabold uppercase rounded-full bg-white/20 backdrop-blur-md border border-white/30 tracking-wider">
                        {item.organizer}
                      </span>
                      {item.status === 'OPEN' ? (
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          <span>เปิดรับสมัคร</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 text-slate-200 backdrop-blur-md">
                          <Clock className="w-3 h-3" />
                          <span>เร็วๆ นี้</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 space-y-4">
                    
                    {/* Location & Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                        <span className="font-semibold text-slate-800">{item.dateRange}</span>
                      </div>
                    </div>

                    {/* Deadline Highlight */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs">
                      <div className="flex items-center space-x-2 text-amber-800 font-medium">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span>ปิดรับสมัคร: <strong className="font-bold">{item.deadline}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-700 font-bold">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <span>ชิงเงินรางวัล {item.prizePool}</span>
                      </div>
                    </div>

                    {/* Categories Tags */}
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-2">ประเภทการแข่งขัน:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs font-medium bg-white text-slate-700 border border-slate-200 rounded-lg shadow-2xs"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="pt-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                        <span className="flex items-center space-x-1">
                          <Users className="w-3.5 h-3.5 text-slate-500" />
                          <span>จำนวนผู้สมัครแล้ว</span>
                        </span>
                        <span className="text-slate-900 font-bold">
                          {item.currentParticipants} / {item.maxParticipants} คน
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            progressPercent > 80 ? 'bg-red-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-6 pt-2">
                  {item.status === 'OPEN' ? (
                    <button
                      onClick={() => onSelectTournament(item)}
                      className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white gradient-crimson shadow-md shadow-red-500/20 hover:opacity-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>สมัครลงแข่งขัน (ระบุชื่อนักกีฬา)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-400 bg-slate-200 cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Clock className="w-4 h-4" />
                      <span>ยังไม่เปิดรับสมัคร (เปิดเร็วๆ นี้)</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
