import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย | TTAT Official Landing Page',
  description: 'ศูนย์กลางระบบลงทะเบียนแข่งขัน ตารางคะแนนจัดอันดับนักกีฬา (National Ranking) และข่าวสารสมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
