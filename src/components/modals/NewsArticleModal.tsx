import React from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';
import { NewsArticle } from '../../types';

interface NewsArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsArticleModal: React.FC<NewsArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden relative my-8">
        
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 bg-[#0B1E3D] text-[#DFB743] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {article.category}
          </div>

          <div className="absolute bottom-4 inset-x-6 text-white">
            <div className="flex items-center space-x-3 text-xs text-slate-300 mb-1">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>{article.readTime}</span>
              </span>
            </div>
            <h2 className="font-serif text-lg sm:text-2xl font-bold leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-stone-700 text-xs sm:text-sm leading-relaxed">
          
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs text-stone-500">
            <span className="flex items-center space-x-1.5 font-medium text-stone-700">
              <User className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Published by {article.author}</span>
            </span>
            <button
              onClick={() => {
                alert('Article link copied to clipboard!');
              }}
              className="flex items-center space-x-1 text-[#0B1E3D] hover:text-[#C59B27] font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF9F6] border-l-4 border-[#C59B27] text-stone-800 font-medium italic">
            {article.summary}
          </div>

          <div className="space-y-3 whitespace-pre-line text-stone-700 pt-2">
            {article.fullContent}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl shadow-xs"
            >
              Close Story
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
