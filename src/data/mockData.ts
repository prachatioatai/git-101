export interface Tournament {
  id: string;
  title: string;
  location: string;
  dateRange: string;
  deadline: string;
  status: 'OPEN' | 'UPCOMING' | 'CLOSED';
  categories: string[];
  prizePool: string;
  registrationFee: string;
  bannerBg: string;
  organizer: string;
  maxParticipants: number;
  currentParticipants: number;
}

export interface PlayerRank {
  id: string;
  rank: number;
  previousRank: number;
  movement: 'up' | 'down' | 'same';
  movementValue: number;
  name: string;
  club: string;
  province: string;
  points: number;
  category: 'men_single' | 'women_single' | 'youth_u19' | 'youth_u15';
  avatar: string;
  winRate: string;
  tournamentsPlayed: number;
  isNationalTeam: boolean;
}

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 'ttat-championship-2026',
    title: 'การแข่งขันเทเบิลเทนนิสชิงแชมป์ประเทศไทย ประจำปี 2569 (TTAT All Thailand Championship 2026)',
    location: 'ศูนย์ฝึกกีฬาเทเบิลเทนนิสแห่งชาติ การกีฬาแห่งประเทศไทย หัวหมาก กรุงเทพฯ',
    dateRange: '15 - 20 สิงหาคม 2569',
    deadline: '10 สิงหาคม 2569 (เหลืออีก 8 วัน)',
    status: 'OPEN',
    categories: ['ชายเดี่ยวทั่วไป', 'หญิงเดี่ยวทั่วไป', 'เยาวชน U19', 'เยาวชน U15', 'ประเภทคู่'],
    prizePool: '฿350,000',
    registrationFee: '฿300 / ประเภท',
    bannerBg: 'from-red-600 via-slate-900 to-navy-950',
    organizer: 'สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย',
    maxParticipants: 512,
    currentParticipants: 384,
  },
  {
    id: 'ttat-youth-cup-1',
    title: 'รายการเก็บคะแนนสะสมเยาวชนพัฒนาทีมชาติ รายการที่ 2/2569 (TTAT Rising Star Youth Cup)',
    location: 'อาคารศูนย์กีฬาประเวศ กรุงเทพมหานคร',
    dateRange: '5 - 7 กันยายน 2569',
    deadline: '28 สิงหาคม 2569',
    status: 'OPEN',
    categories: ['เยาวชน ชาย U19', 'เยาวชน หญิง U19', 'เยาวชน U15', 'เยาวชน U13'],
    prizePool: '฿120,000',
    registrationFee: '฿200 / ประเภท',
    bannerBg: 'from-blue-700 via-slate-900 to-indigo-950',
    organizer: 'สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย',
    maxParticipants: 256,
    currentParticipants: 192,
  },
  {
    id: 'ttat-master-league-2026',
    title: 'เทเบิลเทนนิส ลีกอาชีพประเทศไทย รายการ TTAT Thailand Master League 2026 Stage 3',
    location: 'แฟชั่นไอส์แลนด์ ฮอลล์ ชั้น 3 กรุงเทพฯ',
    dateRange: '25 - 28 กันยายน 2569',
    deadline: '15 กันยายน 2569',
    status: 'UPCOMING',
    categories: ['ชายเดี่ยวอาชีพ', 'หญิงเดี่ยวอาชีพ', 'ประเภททีมสโมสร'],
    prizePool: '฿500,000',
    registrationFee: '฿500 / ประเภท',
    bannerBg: 'from-amber-600 via-slate-900 to-slate-950',
    organizer: 'สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย ร่วมกับ กกท.',
    maxParticipants: 128,
    currentParticipants: 64,
  },
  {
    id: 'ttat-senior-open',
    title: 'การแข่งขันเทเบิลเทนนิสอาวุโสชิงชนะเลิศแห่งประเทศไทย ประจำปี 2569',
    location: 'ศูนย์ฝึกกีฬากลางแจ้ง จังหวัดเชียงใหม่',
    dateRange: '10 - 12 ตุลาคม 2569',
    deadline: '1 ตุลาคม 2569',
    status: 'UPCOMING',
    categories: ['อาวุโส 40 ปีขึ้นไป', 'อาวุโส 50 ปีขึ้นไป', 'อาวุโส 60 ปีขึ้นไป'],
    prizePool: '฿80,000',
    registrationFee: '฿250 / ประเภท',
    bannerBg: 'from-emerald-700 via-slate-900 to-teal-950',
    organizer: 'สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย',
    maxParticipants: 150,
    currentParticipants: 45,
  },
];

export const MOCK_RANKINGS: PlayerRank[] = [
  // Men's Singles
  {
    id: 'm1',
    rank: 1,
    previousRank: 1,
    movement: 'same',
    movementValue: 0,
    name: 'ภาดาศักดิ์ ตันติวิริยะเวชกุล (ตั้ม)',
    club: 'สโมสรเทเบิลเทนนิสตำรวจ / กองทัพบก',
    province: 'กรุงเทพมหานคร',
    points: 4850,
    category: 'men_single',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    winRate: '88.5%',
    tournamentsPlayed: 14,
    isNationalTeam: true,
  },
  {
    id: 'm2',
    rank: 2,
    previousRank: 4,
    movement: 'up',
    movementValue: 2,
    name: 'ศรายุทธ ตันเจริญ (ไบร์ท)',
    club: 'สโมสรปิงปองราชนาวี',
    province: 'ชลบุรี',
    points: 4620,
    category: 'men_single',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    winRate: '84.2%',
    tournamentsPlayed: 12,
    isNationalTeam: true,
  },
  {
    id: 'm3',
    rank: 3,
    previousRank: 2,
    movement: 'down',
    movementValue: 1,
    name: 'ชัยศิษย์ ชัยทัศน์ (บอล)',
    club: 'สโมสรเทเบิลเทนนิสบ้านปิงปอง',
    province: 'นนทบุรี',
    points: 4390,
    category: 'men_single',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    winRate: '81.0%',
    tournamentsPlayed: 15,
    isNationalTeam: true,
  },
  {
    id: 'm4',
    rank: 4,
    previousRank: 3,
    movement: 'down',
    movementValue: 1,
    name: 'คมกริช สุขประเสริฐ (แม็กซ์)',
    club: 'สโมสรปิงปองมหาวิทยาลัยธนบุรี',
    province: 'กรุงเทพมหานคร',
    points: 4150,
    category: 'men_single',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    winRate: '79.4%',
    tournamentsPlayed: 11,
    isNationalTeam: false,
  },
  {
    id: 'm5',
    rank: 5,
    previousRank: 7,
    movement: 'up',
    movementValue: 2,
    name: 'ภูริพงษ์ แซ่ลี้ (โอ๊ต)',
    club: 'สโมสรปิงปองเยาวชนเชียงใหม่',
    province: 'เชียงใหม่',
    points: 3980,
    category: 'men_single',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    winRate: '76.8%',
    tournamentsPlayed: 13,
    isNationalTeam: false,
  },

  // Women's Singles
  {
    id: 'w1',
    rank: 1,
    previousRank: 1,
    movement: 'same',
    movementValue: 0,
    name: 'สุธาสินี เสวตรบุตร (หญิง)',
    club: 'สโมสรปิงปองเจนเนอราลี่ / ทหารอากาศ',
    province: 'ระนอง',
    points: 5200,
    category: 'women_single',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    winRate: '92.4%',
    tournamentsPlayed: 16,
    isNationalTeam: true,
  },
  {
    id: 'w2',
    rank: 2,
    previousRank: 2,
    movement: 'same',
    movementValue: 0,
    name: 'อรวรรณ พะนังจิตร (ทิพย์)',
    club: 'สโมสรเทเบิลเทนนิสตำรวจ',
    province: 'กรุงเทพมหานคร',
    points: 4950,
    category: 'women_single',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    winRate: '89.1%',
    tournamentsPlayed: 15,
    isNationalTeam: true,
  },
  {
    id: 'w3',
    rank: 3,
    previousRank: 5,
    movement: 'up',
    movementValue: 2,
    name: 'จินต์จุฑา อภิบาลภูวนารถ (แพร)',
    club: 'สโมสรปิงปองนครราชสีมา',
    province: 'นครราชสีมา',
    points: 4210,
    category: 'women_single',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    winRate: '82.0%',
    tournamentsPlayed: 13,
    isNationalTeam: true,
  },
  {
    id: 'w4',
    rank: 4,
    previousRank: 3,
    movement: 'down',
    movementValue: 1,
    name: 'กมลชนก เสวตรบุตร (บัว)',
    club: 'สโมสรปิงปองเจนเนอราลี่',
    province: 'ระนอง',
    points: 4080,
    category: 'women_single',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    winRate: '78.5%',
    tournamentsPlayed: 11,
    isNationalTeam: false,
  },

  // Youth U19
  {
    id: 'u1',
    rank: 1,
    previousRank: 3,
    movement: 'up',
    movementValue: 2,
    name: 'ณภัทร ธรรมาธิวัฒน์ (วิน)',
    club: 'สโมสรเทเบิลเทนนิสสตรีวิทยา 2',
    province: 'กรุงเทพมหานคร',
    points: 3850,
    category: 'youth_u19',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    winRate: '86.4%',
    tournamentsPlayed: 10,
    isNationalTeam: true,
  },
  {
    id: 'u2',
    rank: 2,
    previousRank: 1,
    movement: 'down',
    movementValue: 1,
    name: 'ภิรมย์พงศ์ วงศ์ศรี (เจมส์)',
    club: 'สโมสรปิงปองชลบุรี อะคาเดมี',
    province: 'ชลบุรี',
    points: 3720,
    category: 'youth_u19',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200',
    winRate: '83.9%',
    tournamentsPlayed: 12,
    isNationalTeam: false,
  },

  // Youth U15
  {
    id: 'u15_1',
    rank: 1,
    previousRank: 1,
    movement: 'same',
    movementValue: 0,
    name: 'ชินนภัทร รัตนเวช (เอิร์ธ)',
    club: 'สโมสรปิงปองอัสสัมชัญธนบุรี',
    province: 'กรุงเทพมหานคร',
    points: 3450,
    category: 'youth_u15',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    winRate: '91.0%',
    tournamentsPlayed: 9,
    isNationalTeam: true,
  },
];
