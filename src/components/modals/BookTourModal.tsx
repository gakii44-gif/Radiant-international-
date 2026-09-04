import React, { useState } from 'react';
import {
  X,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Compass,
  Users,
  Video,
  Building,
} from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookTourModal: React.FC<BookTourModalProps> = ({ isOpen, onClose }) => {
  const [tourType, setTourType] = useState<'in-person' | 'virtual'>('in-person');
  const [date, setDate] = useState<string>('2026-03-24');
  const [timeSlot, setTimeSlot] = useState<string>('09:30 AM (Morning Tour)');
  const [gradeInterest, setGradeInterest] = useState<string>('Cambridge Primary (Year 1, 2, or 3)');
  const [parentName, setParentName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [attendeesCount, setAttendeesCount] = useState<string>('2 Adults + 1 Student');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-[#0B1E3D] text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFB743] mb-1">
            <Compass className="w-4 h-4" />
            <span>Personalized Campus Visit</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            Schedule Your School Tour
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Experience our vibrant learning community, meet divisional leaders, and explore our world-class campus facilities.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0B1E3D]">
                Your Tour is Confirmed!
              </h3>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-left space-y-2 text-xs text-stone-700 max-w-md mx-auto">
                <div className="flex items-center space-x-2 font-bold text-[#0B1E3D]">
                  <CalendarCheck className="w-4 h-4 text-[#C59B27]" />
                  <span>{tourType === 'in-person' ? 'On-Campus Private Walkthrough' : '1-on-1 Virtual Consultation'}</span>
                </div>
                <div>Date & Time: <strong>{date} at {timeSlot}</strong></div>
                <div>Division Focus: <strong>{gradeInterest}</strong></div>
                <div>Location: <strong>{tourType === 'in-person' ? 'Main Welcome Lobby, Gate 1' : 'Secure Video Meeting Link'}</strong></div>
              </div>

              <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                An invitation with parking and check-in instructions has been sent to <strong>{email}</strong>. We look forward to meeting you!
              </p>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-8 py-2.5 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Tour Format Switcher */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Select Tour Format:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTourType('in-person')}
                    className={`p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                      tourType === 'in-person'
                        ? 'bg-amber-50 border-[#C59B27] ring-1 ring-[#C59B27] text-[#0B1E3D]'
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    <Building className="w-5 h-5 text-[#C59B27] flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold">In-Person Tour</div>
                      <div className="text-[10px] text-stone-500">Walkthrough Campus</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                      tourType === 'virtual'
                        ? 'bg-amber-50 border-[#C59B27] ring-1 ring-[#C59B27] text-[#0B1E3D]'
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    <Video className="w-5 h-5 text-[#C59B27] flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold">Live Virtual Tour</div>
                      <div className="text-[10px] text-stone-500">Video Consultation</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  >
                    <option value="09:00 AM (Morning Live Class Observation)">09:00 AM (Live Class Observation)</option>
                    <option value="10:30 AM (Campus & STEM Labs Tour)">10:30 AM (STEM & Sports Tour)</option>
                    <option value="01:30 PM (Afternoon Tour)">01:30 PM (Afternoon Tour)</option>
                    <option value="03:30 PM (After-School Sports & Arts)">03:30 PM (Sports & Arts Showcase)</option>
                    <option value="Saturday 10:00 AM (Weekend Open Tour)">Saturday 10:00 AM (Weekend Tour)</option>
                  </select>
                </div>
              </div>

              {/* Division Interest */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Grade Division of Primary Interest:
                </label>
                <select
                  value={gradeInterest}
                  onChange={(e) => setGradeInterest(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                >
                  <option value="Early Years: Creche Class (18 Months – 2 Years)">Early Years: Creche Class (18 Months – 2 Years)</option>
                  <option value="Early Years: Baby Class (3 – 4 Years)">Early Years: Baby Class (3 – 4 Years)</option>
                  <option value="Early Years: Middle Class (4 – 5 Years)">Early Years: Middle Class (4 – 5 Years)</option>
                  <option value="Early Years: Top Class (5 – 6 Years)">Early Years: Top Class (5 – 6 Years)</option>
                  <option value="Cambridge Primary: Year 1 (Ages 6+)">Cambridge Primary: Year 1 (Ages 6+)</option>
                  <option value="Cambridge Primary: Year 2 (Ages 7+)">Cambridge Primary: Year 2 (Ages 7+)</option>
                  <option value="Cambridge Primary: Year 3 (Ages 8+)">Cambridge Primary: Year 3 (Ages 8+)</option>
                  <option value="Whole Campus Overview (Early Years & Year 1-3)">Whole Campus Overview (Early Years & Year 1-3)</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Parent Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Morrison"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david.morrison@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 345-6789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Estimated Number of Attendees
                  </label>
                  <select
                    value={attendeesCount}
                    onChange={(e) => setAttendeesCount(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  >
                    <option value="1 Parent">1 Parent</option>
                    <option value="2 Parents">2 Parents</option>
                    <option value="2 Parents + 1 Student">2 Parents + 1 Student</option>
                    <option value="Family Group (3+ People)">Family Group (3+ People)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <CalendarCheck className="w-4 h-4" />
                      <span>Confirm School Tour Booking</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
