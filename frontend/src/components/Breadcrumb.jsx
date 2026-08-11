import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb({ 
  textColor = 'text-white',           
  activeColor = 'text-orange-500',    
  hoverColor = 'hover:text-orange-400' 
}) {
  const location = useLocation();
  
  // Split the pathname and remove any empty strings
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper function to format the URL paths into readable text
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
    // Absolute positioned to perfectly overlap the hero section
    <div className="absolute top-[80px] md:top-[100px] left-0 w-full z-40 px-6 md:px-[clamp(1.5rem,5vw,4rem)] pointer-events-none">
      <div className="max-w-[1400px] mx-auto pointer-events-auto">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-2 text-sm md:text-base font-medium">
            
            {/* HOME ICON & LINK */}
            <li className={`flex items-center ${textColor}`}>
              <Link 
                to="/" 
                // Color props are applied directly to the link to override index.css
                className={`flex items-center gap-1.5 transition-colors duration-200 ${textColor} ${hoverColor}`}
              >
                <svg className="w-4 h-4 mb-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <li key={index} className={`flex items-center gap-2 ${textColor}`}>
                  
                  {/* Simple Slash Separator */}
                  <span className={`opacity-50 ${textColor}`}>/</span>

                  {/* Page Link */}
                  {isLast ? (
                    <span className={`${activeColor} font-bold pointer-events-none drop-shadow-sm`}>
                      {formatText(value)}
                    </span>
                  ) : (
                    <Link 
                      to={routeTo} 
                      className={`transition-colors duration-200 ${textColor} ${hoverColor}`}
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