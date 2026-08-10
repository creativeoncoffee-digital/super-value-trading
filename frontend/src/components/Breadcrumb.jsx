import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  
  // Split the pathname and remove any empty strings
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper function to format the URL paths into readable text (e.g., "personal-care" -> "Personal Care")
  const formatText = (text) => {
    return text
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // If we are exactly on the home page, we don't necessarily need a breadcrumb
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#f8fafc] border-b border-slate-200 py-3 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar">
        <nav aria-label="Breadcrumb" className="flex items-center whitespace-nowrap">
          <ol className="flex items-center gap-2 text-sm md:text-base font-medium">
            
            {/* HOME ICON & LINK */}
            <li className="flex items-center">
              <Link 
                to="/" 
                className="text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1.5 group"
              >
                <svg className="w-4 h-4 mb-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>

            {/* DYNAMIC PATH GENERATION */}
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

              return (
                <li key={index} className="flex items-center gap-2">
                  
                  {/* Chevron Separator */}
                  <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>

                  {/* Page Link (Orange if active, Gray if parent) */}
                  {isLast ? (
                    <span className="text-orange-500 font-bold pointer-events-none drop-shadow-sm">
                      {formatText(value)}
                    </span>
                  ) : (
                    <Link 
                      to={routeTo} 
                      className="text-slate-500 hover:text-orange-500 transition-colors"
                    >
                      {formatText(value)}
                    </Link>
                  )}
                  
                </li>
              );
            })}

          </ol>
        </nav>
      </div>
    </div>
  );
}