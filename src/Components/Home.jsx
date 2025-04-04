import img3 from './img3.jpg';
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import { Helmet } from 'react-helmet-async';
import { Carousel } from './Carousel';
import './home.css';

export function Home() {
  return (
    <div>
<Helmet>
  <title>Rahat Chemicals | Premium Menthol Crystals Manufacturer</title>
  <meta name="description" content="India's leading manufacturer of pharmaceutical-grade menthol crystals and essential oils since 2000. ISO-certified, organic production."/>
  <meta name="keywords" content="menthol crystals, peppermint oil, essential oils manufacturer"/>
  <meta property="og:image" content="https://yourdomain.com/logo.png"/>
</Helmet>
      <Carousel />
      <section className="hero-section">
        <h1>Essential Oils and Natural Chemicals</h1>
        <p>We provide top-notch consulting services to help your business grow.</p>
      </section>

      <section className="products-section">
        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2024/3/401897358/JN/QA/VH/26927769/peppermint-oil-500x500.jpg" 
              alt="Peppermint Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Peppermint Oil</h3>
            <p className="card-description">
              Premium quality essential oil extracted through steam distillation. 
              Perfect for aromatherapy and skincare applications.
            </p>
          </div>
        </article>
        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0tF8MDW6p4fPPn620NntcAHaE7%26pid%3DApi&f=1&ipt=17a9c752cd529838e9efae30551226f7cb94dd5fdd1267dfd441e23701805710&ipo=images" 
              alt="Basil Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Basil Oil</h3>
            <p className="card-description">
            Basil essential oil is used topically and massaged into the skin. It may enhance the luster of dull-looking skin and hair. As a result, it is extensively used in many skin care supplements that claim to improve the tone of your skin. 
            </p>
          </div>
        </article>
        <article className="product-card">
          <div className="card-image">
            <img
              src='https://th.bing.com/th/id/OIP.Z5YnBl9ky763zuyeT4_s2wHaFj?w=235&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
              alt="Peppermint Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Spearmint Oil</h3>
            <p className="card-description">
            Spearmint oil is commonly used for flavoring in foods, cosmetics, and dental products, and it may also provide benefits such as reducing inflammation and aiding digestion. 
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qgfoVzryOkMVj-fu1VVEgAHaHa%26pid%3DApi&f=1&ipt=faf7f948bc9fd3f57c6c2d70c423f306b485f7f994353af09dec329c42632875&ipo=images" 
              alt="Hix-3-hexenol natural"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Hix-3-hexenol natural</h3>
            <p className="card-description">
            cis-3-Hexen-1-ol is a natural product that is present in the leaves of most plants.It exudes the strong aroma of freshly cut grass and leaves, which accounts for its trivial name, "leaf oil".
            </p>
          </div>
        </article>
        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yt-gabP1dTVdSgsuPQMg4QAAAA%26pid%3DApi&f=1&ipt=5856e70952e6f256097d3bb13a99504291950086380d4feffdd0b6b2f0799559&ipo=images" 
              alt="Graded Menthones"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Graded Menthones</h3>
            <p className="card-description">
            Menthol / Menthone is used for Pain in arthritis, Pain in the shoulder joint, Pain in the tendons, Pain in muscle strains or sprains, Back pain, Bruising, Cramping, Perfumes, Cosmetics, and other conditions. 
            </p>
          </div>
        </article>
        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://www.health.com/thmb/xCAXd6FFEKV3TM9ynbyRXgwsQpE=/5472x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1144769011-28ed184dd64e4f56813b91f6c6ca5eef.jpg" 
              alt="Clove Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Clove Oil</h3>
            <p className="card-description">
              High-quality essential oil with a strong, spicy aroma, ideal for dental care and relaxation.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2020/8/QH/WO/HG/8932117/mentha-crystal-tl-bold.jpg" 
              alt="Menthol Crystal"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Menthol Crystal</h3>
            <p className="card-description">
            Pure menthol crystals are ideal for medicinal and cosmetic uses, and they are currently trending in the market.
            </p>
          </div>
        </article>
      </section>
      <div className='Images3'>
    <div className="image-container">
        <img src={img12} alt="Factory" />
        <div className="overlay">
            <span className="image-text">🏭 Factory</span>
        </div>
    </div>
    <div className="image-container">
        <img src={img14} alt="Farmers putting Leaves in Machine" />
        <div className="overlay">
            <span className="image-text">👨‍🌾 Farmers at Work</span>
        </div>
    </div>
    <div className="image-container">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hgEkJKX0FMmcRuGYknhsnwHaFj%26pid%3DApi&f=1&ipt=715376495193cea5d5ec381375b98d7764ff3a99b521e355a79998ce28b0cd54&ipo=images" alt=""/>
        <div className="overlay">
            <span className="image-text">🍃 Manufacturing and Processing</span>
        </div>
    </div>
</div>


      <section className="expertise-section">
        <div className="expertise-content">
          <div>
            <img 
              src="https://www.silverlinechemicals.com/images/products/mentha-piperita-oil.jpg" 
              alt="Natural Oils"
            />
          </div>
          <div>
            <h2>Our Expertise</h2>
            <p>
              We specialize in the creation and production of high-quality aromatic compounds 
              and specialty chemicals. Our state-of-the-art manufacturing facilities utilize 
              advanced techniques and industry-leading technology to provide tailored solutions 
              for various industries, including fragrance, cosmetics, food & beverage, and pharmaceuticals. 
              We ensure all our processes meet the highest environmental and safety standards 
              while delivering exceptional performance.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonial">
          <img src={img3} alt="DIRECTOR" />
          <h4>Mr. Mohd Zubair</h4>
          <p>(Director of Raahat Chemicals)</p>
          <p>
            As an experienced manufacturer in the aromatic and chemicals industry, Raahat Chemicals PVT.LTD has been 
            at the forefront of producing high-quality, custom chemicals for over 24 years. Our expertise spans across 
            the creation and formulation of a wide range of chemical compounds, essential oils, and specialty chemicals. 
            We have built a reputation for precision, innovation, and reliability, serving industries such as fragrance, 
            cosmetics, food & beverage, pharmaceuticals, and more.
          </p>
        </div>
      </section>
    </div>
  );
}
