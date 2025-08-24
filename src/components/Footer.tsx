import { ExternalLink, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const locations = [
    {
      name: 'PERAK',
      url: 'https://goo.gl/maps/iRwwNmCwdux9ZpfC6'
    },
    {
      name: 'KUALA LUMPUR', 
      url: 'https://maps.app.goo.gl/LZ94GM2gRjVtHpUz9'
    },
    {
      name: 'PENANG',
      url: 'https://www.google.com/maps/place/5,+Lorong+Abbas+1,+10200+Tanjung+Bungah,+Pulau+Pinang/@5.4648078,100.2971642,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac2d729b95e09:0x29effb1538d99ca8!8m2!3d5.4648025!4d100.2997391!16s%2Fg%2F11v0__yr1l?entry=ttu'
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Office Image */}
        <div className="flex justify-center mb-8">
          <img 
            src="/images/window.png" 
            alt="Gibb Lawyers Office" 
            className="h-32 lg:h-40 object-contain"
          />
        </div>

        {/* Location Links */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-8">
          {locations.map((location) => (
            <a
              key={location.name}
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <span>{location.name}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </Button>

          <Button 
            variant="outline"
            asChild
          >
            <a
              href="https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD FIRM PROFILE</span>
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>© 2020 Copyright All Rights Reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
            <span className="mx-2">|</span> 
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;