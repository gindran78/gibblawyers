import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout 
      title="Gibb Lawyers - Experience you need. Achievements you get."
      description="Let Us Take Care of You Legally. Experience you need. Achievements you get."
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-gibb-gray-50 via-background to-secondary/30 flex items-center">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* EST. 1892 Badge */}
            <div className="flex items-center justify-center space-x-6 mb-10">
              <div className="w-12 h-px bg-primary/40"></div>
              <span className="text-base lg:text-lg font-semibold text-primary tracking-[0.2em] uppercase">EST. 1892</span>
              <div className="w-12 h-px bg-primary/40"></div>
            </div>
            
            {/* Tagline */}
            <p className="text-lg lg:text-xl text-muted-foreground font-medium tracking-wide">
              Let Us Take Care of You Legally
            </p>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground block">Experience you need.</span>
                <span className="text-primary block">Achievements you get.</span>
              </h1>
            </div>
            
            {/* CTA */}
            <div className="pt-8">
              <Button asChild size="lg" className="text-base px-8 py-4 font-semibold tracking-wide">
                <Link to="/contact">
                  SCHEDULE CONSULTATION
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-gibb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Can Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our expertise and discover the right legal solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* View Our Lawyers */}
            <div className="group">
              <Link to="/lawyers" className="block">
                <Card className="h-full border border-border/50 bg-card hover:shadow-elegant hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-10 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <img 
                        src="/images/window.png" 
                        alt="Our Lawyers" 
                        className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">View Our</p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Lawyers
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Meet our experienced legal professionals
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Look Into Our Services */}
            <div className="group">
              <Link to="/services" className="block">
                <Card className="h-full border border-border/50 bg-card hover:shadow-elegant hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-10 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <img 
                        src="/images/window.png" 
                        alt="Our Services" 
                        className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Look Into Our</p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Services
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Comprehensive legal services and expertise
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Make An Appointment */}
            <div className="group">
              <Link to="/contact" className="block">
                <Card className="h-full border border-border/50 bg-card hover:shadow-elegant hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-10 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <img 
                        src="/images/window.png" 
                        alt="Make an Appointment" 
                        className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Make An</p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Appointment
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Schedule your consultation today
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gibb-gray-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="w-20 h-px bg-primary/60 mx-auto"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Our Philosophy
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                We invest in our people to serve our stakeholders better.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base px-8 py-4 font-semibold tracking-wide">
                <Link to="/contact">
                  TALK TO US
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-4 font-semibold tracking-wide">
                <Link to="/services">
                  OUR EXPERTISE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
