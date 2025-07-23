import React from 'react';

const founders = [
    { name: "Saumya D. Tewari", title: "Founder & Curator", bio: "With over 15 years of experience in business communication, personality development, and digital content strategy, Saumya has trained students and professionals across leading institutions like Amity University, Sharda University, and SMS Lucknow. She has also collaborated with academic brands and ed-tech platforms to deliver impactful soft skills and mental health workshops. An experienced soft skill trainer and motivational speaker, Saumya blends creativity, empathy, and coaching tools to create emotionally resonant learning experiences.", image: "/saumya-mam.jpeg" },
    { name: "Dheeraj Tewari", title: "Co-Founder & Strategist", bio: "Dheeraj brings 16+ years of global leadership experience from Emerson, where he worked across South Korea, Southeast Asia, and the Middle East on large-scale power and infrastructure projects. His corporate journey is rooted in strategy, training, and digital systems, with a growing focus on cybersecurity and emotional well-being at the workplace. 40 under 40 Awardee 2025(cybersecurity), Dheeraj combines international exposure with grounded insights to lead impactful learning programs for corporate and institutional teams through SAMVAAD.", image: "/Dheeraj-sir.jpg" }
];

export const AboutSection: React.FC = () => {
  return (
    <main className="font-sans text-slate-900 dark:text-stone-100">
      {/* Our Story Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img src="/Story-image.png" alt="Our Story" className="w-3/4 max-w-md md:max-w-full mx-auto" />
            <div className="text-left">
              <p className="text-lg text-slate/80 dark:text-stone/80 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                After spending over 15+ years in professional careers, navigating corporate corridors, delivering results, and meeting milestones, we reached a point where success needed to be redefined. We realised that beyond the KPIs and boardrooms, there was a deeper need: a desire to create lasting human impact. Amidst growing burnout, emotional fatigue, societal pressure, and digital noise, we saw people, especially youth and professionals, struggling silently. Conversations around mental health, emotional wellbeing, identity, and purpose were still whispered in a world that needed them to be heard loud and clear. That's when SAMVAAD was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Values Section */}
      <section className="py-20 bg-[#f8f4f2] dark:bg-[#262727]" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Behtar Samaaj Yani Behtar Samajh</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate/80 dark:text-stone/80 mb-12 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Our guiding ideology is to foster a better society through better understanding. We believe that by encouraging open expression and providing tools for healing, we can collectively build a more aware and empathetic world.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#f2e9e4] dark:bg-[#3a2e2a] rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <img src="/logos/expression.png" alt="Expression Icon" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Expression</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Voicing emotions is the first step to change.</p>
            </div>
            <div className="p-6 bg-[#f2e9e4] dark:bg-[#3a2e2a] rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <img src="/logos/empathy.png" alt="Healing Icon" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Healing</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Growth begins with care and empathy.</p>
            </div>
            <div className="p-6 bg-[#f2e9e4] dark:bg-[#3a2e2a] rounded-lg shadow hover:shadow-md transition" style={{ transitionDuration: '300ms' }}>
              <img src="/logos/engagement.png" alt="Awareness Icon" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Awareness</h3>
              <p className="font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>Informed minds build inclusive communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes We Explore Section */}
      <section className="py-20 bg-[#fffdf9] dark:bg-[#1e1e1e]" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Our Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { theme: 'Sustainability & Conscious Living', icon: '🌿' },
              { theme: 'Cybersecurity & Digital Hygiene', icon: '🛡️' },
              { theme: 'Mental Health & Emotional Wellness', icon: '🧠' },
              { theme: 'Law & Leadership', icon: '⚖️' },
              { theme: 'Arts, Culture & Healing', icon: '🎨' }
            ].map(({ theme, icon }) => (
              <div key={theme} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-md transition text-center" style={{ transitionDuration: '300ms' }}>
                <div className="mb-4 text-3xl">{icon}</div>
                <h3 className="text-lg font-semibold font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>{theme}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-24 bg-[#fffaf6] dark:bg-[#1e1e1e]" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Meet the Founders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFECB3] mx-auto my-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white dark:bg-[#2c2c2c] p-8 rounded-xl shadow-md text-center hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-transparent hover:border-[#FFD700]">
              <img src={founder.image} alt={founder.name} className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white dark:border-slate" />
              <h3 className="text-2xl font-serif font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{founder.name}</h3>
              <p className="inline-block bg-[#74391e] dark:bg-[#e8c3a9] text-white dark:text-[#3d2f28] px-3 py-1 text-sm font-semibold rounded-full mb-4 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>{founder.title}</p>
              <p className="text-slate/80 dark:text-stone/80 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Media Spotlight Section */}
      <section className="py-20 bg-white dark:bg-slate-900" data-aos="fade-up" data-aos-delay="400">
        <div className="container mx-auto px-6 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Our Community & Media Spotlight</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
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
                className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 max-w-[100px] md:max-w-[80px]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};