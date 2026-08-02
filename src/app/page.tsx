'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TournamentsSection } from '@/components/TournamentsSection';
import { RankingSection } from '@/components/RankingSection';
import { TournamentModal } from '@/components/TournamentModal';
import { Footer } from '@/components/Footer';
import { Tournament, MOCK_TOURNAMENTS } from '@/data/mockData';

export default function Home() {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  const handleOpenRegisterDefault = () => {
    // Open default active tournament
    setSelectedTournament(MOCK_TOURNAMENTS[0]);
  };

  const handleScrollToRanking = () => {
    const rankingEl = document.getElementById('ranking');
    if (rankingEl) {
      rankingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        onRegisterClick={handleOpenRegisterDefault}
        onRankingClick={handleScrollToRanking}
      />

      {/* Tournaments & Schedules */}
      <TournamentsSection
        onSelectTournament={(tournament) => setSelectedTournament(tournament)}
      />

      {/* National Ranking Leaderboard */}
      <RankingSection />

      {/* Footer */}
      <Footer />

      {/* Tournament Modal */}
      {selectedTournament && (
        <TournamentModal
          tournament={selectedTournament}
          onClose={() => setSelectedTournament(null)}
        />
      )}

    </main>
  );
}
