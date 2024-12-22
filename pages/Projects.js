import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Project() {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Mes Projets</h1>
      <p>Voici quelques projets que j'ai réalisés :</p>
      <ul>
        <li>Site e-commerce</li>
        <li>Application portfolio</li>
        <li>Plateforme de blog</li>
      </ul>
      <Footer />
    </div>
  );
}

export default Project;
