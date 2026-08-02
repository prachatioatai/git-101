'use client';

import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="services" className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full gradient-crimson flex items-center justify-center text-white font-black text-lg">
                TTAT
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                สมาคมกีฬาเทเบิลเทนนิสแห่งประเทศไทย
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              หน่วยงานบริหารจัดการและพัฒนาศักยภาพกีฬาเทเบิลเทนนิสแห่งประเทศไทย 
              มุ่งสู่ความเป็นเลิศในระดับภูมิภาคและระดับโลก
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-red-500" />
              <span>สมาชิกการกีฬาแห่งประเทศไทย (SAT)</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              สถานที่ทำการ & การติดต่อ
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>286 การกีฬาแห่งประเทศไทย ชั้น 16 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>02 170 9474</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>ttatoffice@yahoo.co.th</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              บริการและลิงก์ด่วน
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#tournaments" className="hover:text-white transition-colors">
                  • ปฏิทินรายการแข่งขันประจำปี
                </a>
              </li>
              <li>
                <a href="#ranking" className="hover:text-white transition-colors">
                  • ตารางคะแนนสะสมจัดอันดับ (Ranking)
                </a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-white transition-colors">
                  • ระบบลงทะเบียนสโมสร/นักกีฬา
                </a>
              </li>
              <li>
                <a href="https://ttat.or.th" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  • เว็บไซต์ทางการ (ttat.or.th)
                </a>
              </li>
            </ul>
          </div>

          {/* Official Sponsors */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              ผู้สนับสนุนอย่างเป็นทางการ
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300 font-bold text-center">
                การกีฬาแห่งประเทศไทย (SAT)
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300 font-bold text-center">
                กองทุนพัฒนาการกีฬา (NSDF)
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300 font-bold text-center">
                Grand Sport
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300 font-bold text-center">
                Butterfly / DHS
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-medium flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Table Tennis Association of Thailand (TTAT). All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">นโยบายความเป็นส่วนตัว</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">ข้อกำหนดการใช้งาน</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
