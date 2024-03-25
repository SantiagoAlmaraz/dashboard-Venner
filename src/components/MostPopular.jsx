import Arcangel from "../assets/img/arcangel.png";
import Catena from "../assets/img/catena.png";
import Zuccardi from "../assets/img/zuccardi.png";
import Cuvelier from "../assets/img/cuvelier.png";
import Yacochuya from "../assets/img/yacochuya.png";
import SaintFelicien from "../assets/img/saintfelicien.png";

function MostPopular() {
  return (
    <section className="content">
      <h2>Más populares</h2>
      <article className="person-boxes">
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Arcangel} alt="Arcangel" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Arcangel</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Catena} alt="Catena" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Catena</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Zuccardi} alt="Zuccardi" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Zuccardi</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Cuvelier} alt="Cuvelier" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Cuvelier</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Yacochuya} alt="Yacochuya" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Yacochuya</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={SaintFelicien} alt="SaintFelicien" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Saint Felicien</h2>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default MostPopular;
