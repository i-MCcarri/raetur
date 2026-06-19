'use client';

import Image from 'next/image';

export default function Home() {
  // Keeping your perfectly alphabetized links...
const links = [
    { name: 'Instagram', url: 'https://instagram.com/nomadicearthdragon', color: 'border-nordicPurple text-white hover:bg-nordicPurple/10' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/jordormr', color: 'border-bronze text-white hover:bg-bronze/10' },
    { name: 'Spotify', url: 'https://open.spotify.com/artist/2bTNBHoUfCEYyD4kuTdIr6?si=T_AAnKXSTN2H1jYJrgYfBw', color: 'border-dragonGreen text-white hover:bg-dragonGreen/10' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@jr.ormr', color: 'border-white text-white hover:bg-white/10' },
    { name: 'Twitter', url: 'https://twitter.com/JordOrmr', color: 'border-bronze text-white hover:bg-bronze/10' },
    { name: 'YouTube', url: 'https://youtube.com/@JordOrmr', color: 'border-dragonGreen text-white hover:bg-dragonGreen/10' },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Profile Section */}
      <div className="z-10 flex flex-col items-center text-center max-w-md w-full">
        
        {/* SCALE-SHAPED PROFILE PIC SECTION */}
        <div className="relative w-32 h-32 mb-4">
          <div className="w-full h-full bg-bronze flex items-center justify-center p-1 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%,_50%_0%)]">
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%,_50%_0%)]">
              {/* IMAGE UPDATE: Pointing to the new portrait */}
              <Image 
                src="/jord-ormr-profile.jpg" 
                alt="Jörð Ormr Portrait" 
                width={128} 
                height={128} 
                className="object-cover scale-110"
                priority
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold tracking-widest text-white mb-2 uppercase">
          Jörð Ormr
        </h1>

        {/* TEXT UPDATE: The new definition replacing the handle */}
        <p className="text-sm text-gray-300 mb-8 tracking-wider px-4 leading-relaxed">
          Ancient. Rooted. The Dragon of the Earth.
        </p>
        {/* Links Stack */}
        <div className="w-full space-y-4 px-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-4 text-center font-medium tracking-wide border rounded-lg transition-all duration-300 transform active:scale-95 ${link.color}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 mt-12 text-xs text-gray-600 tracking-widest uppercase">
        rætur v1.0
      </footer>
    </main>
  );
}