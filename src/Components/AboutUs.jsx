import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./aboutUs.css";
import { FaFlask, FaAward, FaLeaf, FaShippingFast } from "react-icons/fa";

export const AboutUs = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Business",
    "name": "Rahat essential oils and Chemicals",
    "url": "https://www.Rahat essential oils and Chemicals.com",
    "logo": "https://www.yourbusinesswebsite.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/yourbusiness",
      "https://www.instagram.com/yourbusiness"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "📞 +91 79839 05205,+91 89236 97291,",
      "contactType": "MANUFACTURER",
      "areaServed": "INDIA",
      "availableLanguage": "English,Hindi"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mohallah Nagran,Near Jama Masjid",
      "addressLocality": "Budaun",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "243601",
      "addressCountry": "INDIA"
    }
  };
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Rahat Chemicals</h1>
          <p>Pioneers in Chemical Manufacturing Since 2000</p>
        </div>
      </section>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>
      {/* Content Sections */}
      <section className="about-content">
        {/* History Section */}
        <article className="history-section grid-section">
          <div className="text-content">
            <h2>Our Journey</h2>
            <p>
              Established in 2002, Rahat Chemicals has grown from a small local manufacturer 
              to a nationally recognized leader in specialty chemical production. 
              With our roots in Budaun, Uttar Pradesh, we've consistently delivered 
              high-quality products while maintaining our commitment to environmental 
              sustainability.
            </p>
          </div>
          <div className="image-content">
            <img 
              src="https://bonnieplants.com/cdn/shop/articles/BONNIE_mint_iStock-543204012-1800px_4f952d52-ceef-4716-b9ba-063af39b87d7.jpg?v=1642541970&width=1800" 
              alt="Chemical manufacturing facility" 
            />
          </div>
        </article>

        {/* Mission and Values */}
        <article className="mission-section grid-section reversed">
          <div className="image-content">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d6c7cd0fd6b2" 
              alt="Quality control laboratory" 
            />
          </div>
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              To deliver innovative chemical solutions that empower industries while 
              maintaining the highest standards of safety, quality, and environmental 
              responsibility.
            </p>
            
            <div className="value-cards">
              <div className="value-card">
                <FaFlask className="value-icon" />
                <h3>Innovation</h3>
                <p>Continuous R&D for cutting-edge solutions</p>
              </div>
              <div className="value-card">
                <FaLeaf className="value-icon" />
                <h3>Sustainability</h3>
                <p>Eco-friendly production processes</p>
              </div>
              <div className="value-card">
                <FaAward className="value-icon" />
                <h3>Quality</h3>
                <p>ISO-certified quality assurance</p>
              </div>
              <div className="value-card">
                <FaShippingFast className="value-icon" />
                <h3>Reliability</h3>
                <p>Timely nationwide delivery</p>
              </div>
            </div>
          </div>
        </article>

        {/* Achievements */}
        <section className="achievements">
          <h2>Our Milestones</h2>
          <div className="achievement-cards">
            <div className="achievement-card">
              <h3>25+</h3>
              <p>Years in Business</p>
            </div>
            <div className="achievement-card">
              <h3>500+</h3>
              <p>Products in Portfolio</p>
            </div>
            <div className="achievement-card">
              <h3>10,000+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="achievement-card">
              <h3>50+</h3>
              <p>Industry Awards</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Partner With Us?</h2>
          <p>Discover how our chemical solutions can benefit your business</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
            <Link to="/products" className="cta-button secondary">
              View Products
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};