import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          ntomasheva.ru
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/about" 
            className={`transition-colors ${
              isActive('/about') 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            О себе
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors ${
              isActive('/services') 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Услуги
          </Link>
          <Link 
            to="/cases" 
            className={`transition-colors ${
              isActive('/cases') 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Кейсы
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${
              isActive('/contact') 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Контакты
          </Link>
        </div>
        
        <Button>
          Получить консультацию
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;