import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Lawyers', href: '/lawyers' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              GIBB<span className="text-accent">&co</span>
            </div>
          </Link>

          {/* Est. 1892 Badge - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <img src="/images/line.png" alt="" className="h-4" />
            <span className="font-medium">EST. 1892</span>
            <img src="/images/line.png" alt="" className="h-4" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-muted-foreground">中文</span>
              <span className="text-muted-foreground">한국어</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <img src="/images/line.png" alt="" className="h-3" />
                  <span className="font-medium">EST. 1892</span>
                  <img src="/images/line.png" alt="" className="h-3" />
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-muted-foreground">中文</span>
                  <span className="text-muted-foreground">한국어</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;