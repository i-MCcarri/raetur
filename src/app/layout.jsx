import './globals.css';

export const metadata = {
  title: 'Jörð Ormr | Official Links',
  description: 'Baritone Vocalist. Dark Nordic Folk & Electronic Trap.',
  icons: {
    // This safely renders the dragon emoji as your browser tab icon
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐉</text></svg>',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We apply the custom visual background here, 
          referencing EarthSerpentLogo.png saved in the public folder.
          'antialiased' keeps the typography sharp.
      */}
      <body className="antialiased min-h-screen bg-[url('/EarthSerpentLogo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        {/* We use a slight overlay here to ensure the foreground 
            elements remain perfectly readable over the visual pattern.
        */}
        <div className="min-h-screen bg-black/70 flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}