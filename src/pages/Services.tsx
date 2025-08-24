import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Services = () => {
  const practices = [
    { name: "ADMINISTRATIVE LAW", url: "https://gibblawyers.com/wp/administrative-law/" },
    { name: "ALTERNATE DISPUTE RESOLUTION & LITIGATION", url: "https://gibblawyers.com/wp/litigation-adr/" },
    { name: "BANKING & FINANCE", url: "https://gibblawyers.com/wp/banking-finance/" },
    { name: "CONSTRUCTION & ENGINEERING LAW", url: "https://gibblawyers.com/litigation-adr/" },
    { name: "CORPORATE & COMMERCIAL LAW", url: "https://gibblawyers.com/wp/corporate-restructuring/" },
    { name: "CRIMINAL LAW", url: "https://gibblawyers.com/wp/criminal-law/" },
    { name: "DEBT RECOVERY", url: "https://gibblawyers.com/wp/debt-recovery/" },
    { name: "EMPLOYMENT INDUSTRIAL & HUMAN RESOURCES", url: "https://gibblawyers.com/wp/employment/" },
    { name: "FAMILY LAW", url: "https://gibblawyers.com/wp/family-law/" },
    { name: "INSOLVENCY & LIQUIDATION", url: "https://gibblawyers.com/wp/insolvency-liquidation/" },
    { name: "INSURANCE", url: "https://gibblawyers.com/wp/insurance/" },
    { name: "INTELLECTUAL PROPERTY", url: "https://gibblawyers.com/wp/intellectual-property/" },
    { name: "REAL ESTATE & CONVEYANCING", url: "https://gibblawyers.com/wp/real-estate-conveyancing/" },
    { name: "TRUST & ESTATE PLANNING", url: "https://gibblawyers.com/wp/estates-trusts/" }
  ];

  const trainingTopics = [
    "Understanding the Employment Laws of Brunei Darrussalam",
    "Safeguarding your company's interest in commercial transactions", 
    "The role of the Industrial Court",
    "Assessing documents for Motor Vehicle Accident Claims",
    "Understanding Termination, Retrenchment & Redundancy",
    "The role of Adjusters in Motor Vehicle Claims Investigations",
    "Risk Assessment on Property & Banking Security Documentation",
    "Recovery Rights of Financial Institutions for Abandoned Projects", 
    "The Amendments To Improve The Housing Delivery System",
    "The Architect's Duty Of Care"
  ];

  return (
    <Layout 
      title="Our Legal Services - Gibb Lawyers"
      description="In our Client-Partner relationship, we listen with compassion to understand our clients, their business, its corporate culture."
    >
      {/* Header Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/images/line.png" alt="" className="h-6" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Legal Services
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In our Client-Partner relationship, we listen with compassion to understand our clients, their business, its corporate culture so as to better equip our clients for the ever-evolving complex environments and provide winning solutions while mitigating the risks.
          </p>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {practices.map((practice, index) => (
              <a
                key={index}
                href={practice.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 flex items-center justify-between">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {practice.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Training
            </h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Training is an integral part of the firm's practice. We believe in better equipping our clients in the manner they manage their organization, advising and addressing issues in their operations. Over the years we have conducted training for several of our clients in the areas of Insurance, Employment, Banking & Commercial law and Construction Law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Some of the topics we have covered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {trainingTopics.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notarial Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Notarial Services
            </h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We offer Notary Public services for attestation and notarisation of documents in Malaysia. We are a firm which has been providing a wide range of legal services in the bustling business hubs of Malaysia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notaries Public are internationally recognised witnesses whose primary functions include the authentication and attestation of documents to be used overseas and locally (when necessary) The service is essential for the certification of documents namely identity cards, passports and certificates. In addition, the attestation is essential in the transfer of properties and estate and probate matters and any other legal matters beyond the jurisdiction of Malaysian Law.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The benefit for such a service is that it saves an individual time and the cost of travel of attending to the matter personally overseas
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-foreground font-medium">
                    Please contact <a href="tel:+60125050713" className="text-primary hover:underline">Mr William Balasingam at +60125050713</a> for more information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;