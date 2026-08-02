'use client';

import React, { useState } from 'react';
import { Tournament } from '@/data/mockData';
import { X, CheckCircle2, Trophy, Calendar, MapPin, AlertCircle, ShieldCheck } from 'lucide-react';

interface TournamentModalProps {
  tournament: Tournament | null;
  onClose: () => void;
}

export const TournamentModal: React.FC<TournamentModalProps> = ({ tournament, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    licenseNumber: '',
    clubName: '',
    province: 'กรุงเทพมหานคร',
    category: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!tournament) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.category || !formData.phone) {
      alert('กรุณากรอกข้อมูลสำคัญให้ครบถ้วน (ชื่อ-นามสกุล, ประเภทการแข่ง, เบอร์โทรศัพท์)');
      return;
    }

    const randomTicket = 'TTAT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full mb-2 border border-red-100">
                แบบฟอร์มสมัครลงแข่งขันออนไลน์
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {tournament.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{tournament.location}</span>
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ชื่อ-นามสกุล นักกีฬา *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น นายภาดาศักดิ์ ตันติวิริยะเวชกุล"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    รหัสสมาชิก TTAT License (ถ้ามี)
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น TTAT-690142"
                    value={formData.licenseNumber}
                    onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    สโมสร / สังกัด *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น สโมสรเทเบิลเทนนิสตำรวจ"
                    value={formData.clubName}
                    onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  เลือกประเภทการแข่งขัน *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50 text-slate-800 font-medium"
                >
                  <option value="">-- โปรดเลือกประเภทการแข่งขัน --</option>
                  {tournament.categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    เบอร์โทรศัพท์ติดต่อ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    อีเมล (สำหรับส่งบัตรประจำตัวแข่ง)
                  </label>
                  <input
                    type="email"
                    placeholder="athlete@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>ค่าธรรมเนียมสมัคร:</span>
                  <span className="text-red-600 font-extrabold">{tournament.registrationFee}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  * หลังยืนยันคำขอ ระบบจะส่งเลขที่อ้างอิงสำหรับการชำระเงินเข้าสู่ระบบสมาคมฯ
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-sm font-bold text-white gradient-crimson rounded-xl shadow-lg shadow-red-500/20 hover:opacity-95 transition-all cursor-pointer mt-2"
              >
                ยืนยันการสมัครแข่งขัน
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Success Ticket */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              สมัครเข้าร่วมการแข่งขันสำเร็จ!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              ระบบได้รับการสมัครของคุณแล้ว โปรดบันทึกรหัสอ้างอิงการสมัครด้านล่างไว้สำหรับแสดงต่อเจ้าหน้าที่
            </p>

            <div className="bg-slate-900 text-white p-5 rounded-2xl max-w-sm mx-auto shadow-md">
              <div className="text-xs text-slate-400 font-medium">รหัสประจำตัวการสมัคร (Registration Ticket)</div>
              <div className="text-2xl font-mono font-black text-amber-400 tracking-widest my-1">
                {ticketId}
              </div>
              <div className="text-xs text-slate-300 font-bold border-t border-slate-800 pt-2 mt-2">
                {formData.fullName} ({formData.category})
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              เสร็จสิ้น / ปิดหน้าต่าง
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
