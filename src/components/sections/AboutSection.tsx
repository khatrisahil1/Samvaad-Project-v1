import React from 'react';

const founders = [
    { name: "Saumya D. Tewari", title: "Founder & Curator", bio: "With over 15 years of experience...", image: "https://placehold.co/400x400/FFFFF0/36454F?text=Saumya+T." },
    { name: "Dheeraj Tewari", title: "Co-Founder & Strategist", bio: "Dheeraj brings 16+ years of global leadership experience...", image: "https://placehold.co/400x400/FFFFF0/36454F?text=Dheeraj+T." }
];

export const AboutSection: React.FC = () => {
  return (
    <main className="font-sans text-slate-900 dark:text-stone-100">
      {/* Our Story Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
          <p className="text-lg text-slate/80 dark:text-stone/80 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            After spending over 15+ years in professional careers, navigating corporate corridors, delivering results, and meeting milestones, we reached a point where success needed to be redefined. We realised that beyond the KPIs and boardrooms, there was a deeper need: a desire to create lasting human impact. Amidst growing burnout, emotional fatigue, societal pressure, and digital noise, we saw people, especially youth and professionals, struggling silently. Conversations around mental health, emotional wellbeing, identity, and purpose were still whispered in a world that needed them to be heard loud and clear. That's when SAMVAAD was born.
          </p>
        </div>
      </section>

      {/* Vision & Core Values Section */}
      <section className="py-20 bg-white dark:bg-slate-900" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Behtar Samaaj with Behtar Samajh</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate/80 dark:text-stone/80 mb-12 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Our guiding ideology is to foster a better society through better understanding. We believe that by encouraging open expression and providing tools for healing, we can collectively build a more aware and empathetic world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-100 dark:bg-slate-800 rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Expression</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Voicing emotions is the first step to change.</p>
            </div>
            <div className="p-6 bg-stone-100 dark:bg-slate-800 rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Healing</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Growth begins with care and empathy.</p>
            </div>
            <div className="p-6 bg-stone-100 dark:bg-slate-800 rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Awareness</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Informed minds build inclusive communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes We Explore Section */}
      <section className="py-20 bg-sage-50 dark:bg-slate-900" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Themes We Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { theme: 'Sustainability & Conscious Living', icon: '🌿' },
              { theme: 'Cybersecurity & Digital Hygiene', icon: '🛡️' },
              { theme: 'Mental Health & Emotional Wellness', icon: '🧠' },
              { theme: 'Law & Leadership', icon: '⚖️' },
              { theme: 'Arts, Culture & Healing', icon: '🎨' }
            ].map(({ theme, icon }) => (
              <div key={theme} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
                <div className="mb-4 text-3xl">{icon}</div>
                <h3 className="text-lg font-semibold font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>{theme}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-20 bg-white dark:bg-slate-900" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Meet the Founders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-stone-100 dark:bg-slate-800 p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition" style={{ transitionDuration: '300ms' }}>
              <img src={founder.image} alt={founder.name} className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white dark:border-slate" />
              <h3 className="text-2xl font-serif font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{founder.name}</h3>
              <p className="text-sage dark:text-sage-light font-semibold mb-4 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>{founder.title}</p>
              <p className="text-slate/80 dark:text-stone/80 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Media Spotlight Section */}
      <section className="py-20 bg-white dark:bg-slate-900" data-aos="fade-up" data-aos-delay="400">
        <div className="container mx-auto px-6 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Our Community & Media Spotlight</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              'emerson.svg',
              'bluewater.svg',
              'wdf.svg',
              'theprint.svg',
              'ani.svg',
              'tribune.svg'
            ].map((logo) => (
              <img
                key={logo}
                src={`/logos/${logo}`}
                alt={logo.replace('.svg', '')}
                className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};