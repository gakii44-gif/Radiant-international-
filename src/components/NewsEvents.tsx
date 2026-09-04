import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
  Trophy,
  Share2,
  CalendarPlus,
} from 'lucide-react';
import { newsArticles, schoolEvents } from '../data/schoolData';
import { NewsArticle, SchoolEvent } from '../types';

interface NewsEventsProps {
  onSelectArticle: (article: NewsArticle) => void;
  onOpenTour: () => void;
}

export const NewsEvents: React.FC<NewsEventsProps> = ({
  onSelectArticle,
  onOpenTour,
}) => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];
  const otherArticles = newsArticles.filter((a) => a.id !== featuredArticle.id);

  return (
    <section id="news-events" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
              <span className="w-6 h-[1.5px] bg-[#C59B27]" />
              <span>Campus Pulse</span>
              <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
              News, Stories & Upcoming Events
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-xl">
              Stay connected with student breakthroughs, arts galas, sports tournaments, and key academic calendar milestones.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-stone-100 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('news')}
              id="news-tab-btn"
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === 'news'
                  ? 'bg-[#0B1E3D] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#0B1E3D]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#DFB743]" />
              <span>Latest News & Articles</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              id="events-tab-btn"
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === 'events'
                  ? 'bg-[#0B1E3D] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#0B1E3D]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFB743]" />
              <span>Upcoming School Events</span>
            </button>
          </div>
        </div>

        {/* View 1: News & Stories */}
        {activeTab === 'news' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Featured Article Banner */}
            <div className="bg-[#FCFAF7] rounded-3xl border border-stone-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative min-h-[280px]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B1E3D] text-[#DFB743] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {featuredArticle.category}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center space-x-3 text-xs text-stone-500 mb-2">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1E3D] leading-tight">
                      {featuredArticle.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {featuredArticle.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-700">
                      By {featuredArticle.author}
                    </span>
                    <button
                      onClick={() => onSelectArticle(featuredArticle)}
                      id="featured-article-read-btn"
                      className="px-4 py-2 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFB743]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other 3 News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((art) => (
                <div
                  key={art.id}
                  id={`news-card-${art.id}`}
                  className="bg-[#FCFAF7] rounded-2xl overflow-hidden border border-stone-200 hover:border-[#C59B27]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B1E3D]/90 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[10px] font-bold text-[#DFB743] uppercase tracking-wider">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center space-x-2 text-[11px] text-stone-500 mb-1.5">
                        <Calendar className="w-3 h-3 text-[#C59B27]" />
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#0B1E3D] line-clamp-2 leading-snug">
                        {art.title}
                      </h4>
                      <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-stone-200/80 mt-auto">
                    <button
                      onClick={() => onSelectArticle(art)}
                      className="text-xs font-bold text-[#0B1E3D] hover:text-[#C59B27] flex items-center space-x-1 transition-colors"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 2: Upcoming School Events */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
            {schoolEvents.map((evt) => (
              <div
                key={evt.id}
                id={`event-card-${evt.id}`}
                className="bg-[#FCFAF7] rounded-2xl p-6 border border-stone-200 hover:border-[#C59B27]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                      {evt.category}
                    </span>
                    <span className="text-xs font-semibold text-[#0B1E3D]">
                      {evt.targetAudience}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0B1E3D] mb-2 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 space-y-2 mt-auto">
                  <div className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
                    <Calendar className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                    <span>{evt.date}</span>
                    <span className="text-stone-300">|</span>
                    <Clock className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-stone-600">
                    <MapPin className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                    <span>{evt.location}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        alert(
                          `Event Reminder Added: "${evt.title}" on ${evt.date} (${evt.time}) at ${evt.location}. We look forward to welcoming you!`
                        );
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-[#0B1E3D] text-xs font-semibold flex items-center space-x-1.5"
                    >
                      <CalendarPlus className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>Add to Calendar</span>
                    </button>
                    {evt.category === 'Open Day' && (
                      <button
                        onClick={onOpenTour}
                        className="px-3.5 py-1.5 rounded-lg bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold"
                      >
                        RSVP for Open Morning
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
