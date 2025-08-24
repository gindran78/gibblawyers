import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Lawyers = () => {
  const lawyers = [
    {
      name: "ZORINAH BT.MOHD SOBRI",
      title: "MANAGING PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_PuanZ_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/zorinah-bt-mohd-sobri/"
    },
    {
      name: "E. ERNEST BALASINGAM", 
      title: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ERNEST_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/e-ernest-balasingam/"
    },
    {
      name: "EDWIN SEIBEL (A.M.P)",
      title: "SENIOR PARTNER", 
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ES_thumbnail-copy.jpg",
      link: "https://gibblawyers.com/wp/ediwn-seibel-a-m-p/"
    },
    {
      name: "KENNY CHAN",
      title: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_CKL_thumbnail-copy.jpg", 
      link: "https://gibblawyers.com/wp/kenny-chan/"
    },
    {
      name: "TERENCE NAIDU",
      title: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_TN_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/terence-naidu/"
    },
    {
      name: "YAP KOK KHEONG", 
      title: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_VIC_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/yap-kok-kheong/"
    },
    {
      name: "LIM POH LEONG",
      title: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_LPL_thumbnail-copy.jpg",
      link: "https://gibblawyers.com/wp/lim-poh-leong/"
    },
    {
      name: "ONG BEE KHOON",
      title: "PARTNER", 
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_OBK_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/ong-bee-khoon/"
    },
    {
      name: "Benjamin Chwee Yew Keng",
      title: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2023/05/GIBB_Benjamin_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/benjamin-chwee-yew-keng/"
    },
    {
      name: "Nur Liyana Izzati Binti Abd Aziz",
      title: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2023/05/GIBB_Liyana_thumbnail.jpg", 
      link: "https://gibblawyers.com/wp/nur-liyana-izzati-binti-abd-aziz/"
    },
    {
      name: "HO YI YERN",
      title: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2024/05/GIBB_HYY_thumbnail.jpg",
      link: "https://gibblawyers.com/wp/ho-yi-yern/"
    }
  ];

  return (
    <Layout 
      title="Meet Our Lawyers - Gibb Lawyers"
      description="We invest in our people to be better stakeholders for our Client-Partners. Our lawyers are vastly experienced in their array of expertise."
    >
      {/* Header Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/images/line.png" alt="" className="h-6" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Lawyers
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We invest in our people to be better stakeholders for our Client-Partners. Our lawyers are vastly experienced in their array of expertise, dedicated to our clients' cause and committed to the betterment of the community.
          </p>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {lawyers.map((lawyer, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-0">
                  <a 
                    href={lawyer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-foreground mb-2 leading-tight">
                        {lawyer.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {lawyer.title}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lawyers;