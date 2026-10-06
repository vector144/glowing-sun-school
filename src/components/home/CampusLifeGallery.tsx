import { useState } from 'react';
import { Eye, Calendar } from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { SectionHeader } from '../common/SectionHeader';
import { Lightbox } from '../common/Lightbox';

export const CampusLifeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'classroom', 'activities', 'events', 'celebrations', 'campus'];

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Moments of Wonder"
          title="A Peek Inside Our"
          highlightText="Happy Campus"
          subtitle="Real smiles, genuine friendships, creative sparks — see what everyday life at Glowing Sun Kids School looks like."
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-amber-100/60 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer aspect-[3/4] bg-slate-100 border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent opacity-75 group-hover:opacity-90 transition" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-sm">
                {item.category}
              </div>

              {/* View Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 inset-x-3 text-white">
                <h4 className="text-sm font-bold line-clamp-1 group-hover:text-amber-300 transition">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
