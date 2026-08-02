'use client';

import React, { useState } from 'react';
import { MOCK_RANKINGS, PlayerRank } from '@/data/mockData';
import { Trophy, Search, ArrowUpRight, ArrowDownRight, Minus, Shield, Award, Filter, Sparkles, CheckCircle } from 'lucide-react';

export const RankingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'men_single' | 'women_single' | 'youth_u19' | 'youth_u15'>('men_single');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerRank | null>(null);

  const filteredRankings = MOCK_RANKINGS.filter((player) => {
    const matchesCategory = player.category === selectedCategory;
    const matchesQuery =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.province.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="ranking" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full mb-3 border border-amber-200">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Thailand National Table Tennis Ranking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ตารางจัดอันดับนักกีฬาเทเบิลเทนนิสแห่งชาติ
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            อัปเดตคะแนนสะสมและลำดับการจัดอันดับอย่างเป็นทางการโดยสมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-200 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('men_single')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
                  selectedCategory === 'men_single'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>🏓 ชายเดี่ยวทั่วไป</span>
              </button>

              <button
                onClick={() => setSelectedCategory('women_single')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
                  selectedCategory === 'women_single'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>🏓 หญิงเดี่ยวทั่วไป</span>
              </button>

              <button
                onClick={() => setSelectedCategory('youth_u19')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
                  selectedCategory === 'youth_u19'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>🌟 เยาวชน U19</span>
              </button>

              <button
                onClick={() => setSelectedCategory('youth_u15')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
                  selectedCategory === 'youth_u15'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>🌟 เยาวชน U15</span>
              </button>
            </div>

            {/* Live Search Bar */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ค้นหาชื่อนักกีฬา หรือ สโมสร..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all text-slate-800"
              />
            </div>

          </div>
        </div>

        {/* Leaderboard Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-center w-20">อันดับ</th>
                  <th className="py-4 px-3 text-center w-24">ทิศทาง</th>
                  <th className="py-4 px-6">นักกีฬา</th>
                  <th className="py-4 px-6 hidden md:table-cell">สโมสร / สังกัด</th>
                  <th className="py-4 px-6 text-center hidden sm:table-cell">อัตราชนะ (Win Rate)</th>
                  <th className="py-4 px-6 text-right">คะแนนสะสม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRankings.length > 0 ? (
                  filteredRankings.map((player) => {
                    const isTop1 = player.rank === 1;
                    const isTop2 = player.rank === 2;
                    const isTop3 = player.rank === 3;

                    return (
                      <tr
                        key={player.id}
                        onClick={() => setSelectedPlayer(player)}
                        className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                      >
                        {/* Rank Badge */}
                        <td className="py-4 px-6 text-center">
                          {isTop1 && (
                            <span className="w-8 h-8 mx-auto rounded-full bg-amber-400 text-amber-950 font-black text-sm flex items-center justify-center shadow-xs">
                              1
                            </span>
                          )}
                          {isTop2 && (
                            <span className="w-8 h-8 mx-auto rounded-full bg-slate-300 text-slate-900 font-extrabold text-sm flex items-center justify-center shadow-xs">
                              2
                            </span>
                          )}
                          {isTop3 && (
                            <span className="w-8 h-8 mx-auto rounded-full bg-amber-700/80 text-amber-100 font-extrabold text-sm flex items-center justify-center shadow-xs">
                              3
                            </span>
                          )}
                          {!isTop1 && !isTop2 && !isTop3 && (
                            <span className="font-extrabold text-slate-700 text-sm">
                              #{player.rank}
                            </span>
                          )}
                        </td>

                        {/* Rank Movement */}
                        <td className="py-4 px-3 text-center">
                          {player.movement === 'up' && (
                            <span className="inline-flex items-center space-x-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                              <span>+{player.movementValue}</span>
                            </span>
                          )}
                          {player.movement === 'down' && (
                            <span className="inline-flex items-center space-x-0.5 text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                              <ArrowDownRight className="w-3.5 h-3.5" />
                              <span>-{player.movementValue}</span>
                            </span>
                          )}
                          {player.movement === 'same' && (
                            <span className="inline-flex items-center text-xs font-bold text-slate-400">
                              <Minus className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </td>

                        {/* Player Info */}
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <img
                              src={player.avatar}
                              alt={player.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 group-hover:border-red-500 transition-colors shrink-0"
                            />
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-red-600 transition-colors">
                                  {player.name}
                                </span>
                                {player.isNationalTeam && (
                                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-blue-100 text-blue-700 rounded-full border border-blue-200 flex items-center space-x-1">
                                    <Shield className="w-2.5 h-2.5 fill-blue-600" />
                                    <span>ทีมชาติไทย</span>
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-500 md:hidden">
                                {player.club}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Club */}
                        <td className="py-4 px-6 hidden md:table-cell text-sm text-slate-600 font-medium">
                          {player.club}
                          <span className="block text-xs text-slate-400 font-normal">
                            จ.{player.province}
                          </span>
                        </td>

                        {/* Win Rate */}
                        <td className="py-4 px-6 text-center hidden sm:table-cell">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                            {player.winRate}
                          </span>
                        </td>

                        {/* Points */}
                        <td className="py-4 px-6 text-right">
                          <div className="text-base sm:text-lg font-black text-slate-900">
                            {player.points.toLocaleString()} <span className="text-xs font-semibold text-slate-500">คะแนน</span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            ลงแข่ง {player.tournamentsPlayed} รายการ
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500 text-sm">
                      ไม่พบข้อมูลนักกีฬาตามเงื่อนไขการค้นหา
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Player Detail Drawer / Modal */}
        {selectedPlayer && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100">
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold"
              >
                ✕
              </button>

              <div className="text-center pt-2 pb-4">
                <img
                  src={selectedPlayer.avatar}
                  alt={selectedPlayer.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-red-100 shadow-md mb-3"
                />
                <h3 className="text-xl font-bold text-slate-900">{selectedPlayer.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{selectedPlayer.club}</p>

                {selectedPlayer.isNationalTeam && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mt-2 border border-blue-200">
                    <Shield className="w-3.5 h-3.5 fill-blue-600" />
                    <span>นักกีฬาทีมชาติไทยอย่างเป็นทางการ</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl my-3 text-center border border-slate-100">
                <div>
                  <div className="text-xs text-slate-500">อันดับประเทศ</div>
                  <div className="text-2xl font-black text-slate-900">#{selectedPlayer.rank}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">คะแนนสะสม (Points)</div>
                  <div className="text-2xl font-black text-red-600">{selectedPlayer.points.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">อัตราชนะ (Win Rate)</div>
                  <div className="text-base font-bold text-slate-800">{selectedPlayer.winRate}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">รายการที่ลงแข่ง</div>
                  <div className="text-base font-bold text-slate-800">{selectedPlayer.tournamentsPlayed} รายการ</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedPlayer(null)}
                className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
