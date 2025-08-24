import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      name: "Ipoh Office",
      addresses: [
        {
          address: "55, Lebuh Pearl, Fair Park, 31400, Ipoh, Perak, Malaysia.",
          phone: "+605 547 1313",
          fax: "+605 548 1313", 
          email: "admin@gibblawyers.com",
          mapUrl: "https://www.google.com/maps/place/55,+Lebuh+Pearl,+Taman+Fair+Park,+31400+Ipoh,+Perak/@4.608316,101.0942946,17z/data=!3m1!4b1!4m5!3m4!1s0x31caecf28a4827fb:0x130c5b0b39d11131!8m2!3d4.6083107!4d101.0964833"
        },
        {
          address: "9-B, Persiaran Greentown 4, Greentown Business Centre, 30450, Ipoh, Malaysia",
          phone: "+605 2410027",
          email: "gibbgreentown@gmail.com",
          mapUrl: "https://www.google.com/maps/search/9-B,+Persiaran+Greentown+4,+Greentown+Business+Centre,+30450,+Ipoh,+Malaysia/@4.5995292,101.0926041,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D"
        }
      ]
    },
    {
      name: "Kuala Lumpur Office", 
      addresses: [
        {
          address: "E-23-3, Menara Suezcap, KL Gateway Office, Jalan Kerinchi, 59200 Kuala Lumpur, Malaysia.",
          phone: "+603 2856 9771",
          fax: "+603 2856 9772",
          email: "admin-kl@gibblawyers.com", 
          mapUrl: "https://maps.app.goo.gl/LZ94GM2gRjVtHpUz9"
        }
      ]
    },
    {
      name: "Penang Office",
      addresses: [
        {
          address: "No. 5, Lorong Abbas 1, 11200, Tanjung Bungah, Penang, Malaysia.",
          phone: "+604 899 1778",
          fax: "+604 891 7007",
          email: "admin-pg@gibblawyers.com",
          mapUrl: "https://www.google.com/maps/place/5,+Lorong+Abbas+1,+10200+Tanjung+Bungah,+Pulau+Pinang/@5.4648078,100.2971642,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac2d729b95e09:0x29effb1538d99ca8!8m2!3d5.4648025!4d100.2997391!16s%2Fg%2F11v0__yr1l?entry=ttu"
        }
      ]
    },
    {
      name: "Teluk Intan Office",
      addresses: [
        {
          address: "28A (1st Floor) Taman Ros, Jalan Sultan Abdullah, 36000, Teluk Intan, Perak, Malaysia.",
          phone: "+605 623 1713",
          fax: "+605 623 2713",
          email: "admin-ti@gibblawyers.com",
          mapUrl: "https://www.google.com/maps/place/Gibb+%26+Hope+Advocates+and+Solicitors/@4.0147023,101.0183558,15z/data=!4m9!1m2!2m1!1s28A+(1st+Floor)+Taman+Ros,+Jalan+Sultan+Abdullah,+36000,+Teluk+Intan,+Perak,+Malaysia!3m5!1s0x31cb15257124b8df:0xf59a1ceb4f398d43!8m2!3d4.0219803!4d101.0380411!15sClUyOEEgKDFzdCBGbG9vcikgVGFtYW4gUm9zLCBKYWxhbiBTdWx0YW4gQWJkdWxsYWgsIDM2MDAwLCBUZWx1ayBJbnRhbiwgUGVyYWssIE1hbGF5c2lhkgEGbGF3eWVy"
        }
      ]
    }
  ];

  return (
    <Layout 
      title="Contact Us - Gibb Lawyers"
      description="In case you have some questions, feel free to call, email or even visit us. You can even drop us a line or two about any enquiries you might have."
    >
      {/* Header Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/images/line.png" alt="" className="h-6" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In case you have some questions, feel free to call, email or even visit us. You can even drop us a line or two about any enquiries you might have. Trust your need, knowing we will succeed.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <img src="/images/window.png" alt="Office" className="h-20 object-contain" />
                </div>
                
                <h2 className="text-2xl font-bold text-primary text-center lg:text-left">
                  {office.name}
                </h2>
                
                {office.addresses.map((addr, addrIndex) => (
                  <Card key={addrIndex} className="border border-border/50">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{addr.address}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a 
                          href={`tel:${addr.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          T: {addr.phone}
                        </a>
                      </div>
                      
                      {addr.fax && (
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">F: {addr.fax}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a 
                          href={`mailto:${addr.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          E: {addr.email}
                        </a>
                      </div>
                      
                      <Button 
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={addr.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <span>MAP</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notary Public Service */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <img src="/images/window.png" alt="Notary Service" className="h-20 object-contain" />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Notary Public Service (Ipoh)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg font-medium text-foreground">William Balasingam</p>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a 
                    href="tel:+60125050713"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    T: +6012 505 0713
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your enquiry" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Interior Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="/images/office-interior.jpg" 
              alt="Gibb Lawyers Office Interior" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;