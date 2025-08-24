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
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-secondary/40 via-background to-primary/10 flex items-center">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* EST. 1892 Badge */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img src="/images/line.png" alt="" className="h-6" />
              <span className="text-lg font-bold text-primary tracking-wider">EST. 1892</span>
              <img src="/images/line.png" alt="" className="h-6" />
            </div>
            
            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-gibb-bronze mb-6 font-medium">
              Let Us Take Care of You Legally
            </p>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-12 leading-tight">
              <span className="text-foreground">Experience you need.</span>
              <br />
              <span className="text-primary">Achievements you get.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* View Our Lawyers */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Link to="/lawyers" className="block">
                  <div className="mb-6">
                    <img 
                      src="/images/window.png" 
                      alt="Lawyers" 
                      className="h-24 lg:h-32 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">View Our</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Lawyers
                    </h3>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Look Into Our Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Link to="/services" className="block">
                  <div className="mb-6">
                    <img 
                      src="/images/window.png" 
                      alt="Services" 
                      className="h-24 lg:h-32 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Look Into Our</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Services
                    </h3>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Make An Appointment */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Link to="/contact" className="block">
                  <div className="mb-6">
                    <img 
                      src="/images/window.png" 
                      alt="Appointment" 
                      className="h-24 lg:h-32 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Make An</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Appointment
                    </h3>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              We invest in our people to serve our stakeholders better.
            </p>
            
            <div className="mt-12">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">
                  TALK TO US
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
