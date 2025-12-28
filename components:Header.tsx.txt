import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Over Ons', href: '#over-ons' },
    { name: 'Prijsindicatie', href: '#prijsindicatie' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">H</div>
          <span className={`font-extrabold text-2xl tracking-tight ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}>
            Hayk<span className="text-slate-700">Reiniging</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-3 border-l border-slate-200 pl-6">
            <a href="https://www.instagram.com/haykschoonmaak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E1306C] transition-colors" title="Volg ons op Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/haykschoonmaak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors" title="Volg ons op Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
          >
            Offerte Aanvragen
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

