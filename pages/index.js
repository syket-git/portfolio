import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import TopFooter from '../components/TopFooter';
import TopSection from '../components/TopSection';

import { modelData, portfolioData } from '../components/portfolioData';
import Model from '../components/Model';
export default function Home({ data, ModelData }) {
  return (
    <div id="page-top">
      <Header />
      <Navigation />
      <TopSection />
      <Portfolio data={data} />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <TopFooter />
      <div className="scroll-to-top d-lg-none position-fixed">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
      <Model ModelData={ModelData} />
    </div>
  );
}

Home.getInitialProps = async () => {
  const data = await portfolioData();
  const ModelData = await modelData();
  return {
    data,
    ModelData,
  };
};
