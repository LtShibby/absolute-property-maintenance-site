import { useTheme } from '../context/ThemeContext';

function PageLayout({ children, title, subtitle, className = '' }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-[calc(100vh-5rem)] pt-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <header className="text-center mb-12">
            {title && (
              <h1 className={`${theme.text} text-3xl md:text-4xl font-bold mb-4`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p className={`${theme.text} text-xl opacity-75 max-w-2xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </div>
  );
}

export default PageLayout; 