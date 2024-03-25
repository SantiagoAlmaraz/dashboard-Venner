import Logo from "../assets/img/logo-venner4.png";

function MenuWrap() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={Logo} alt="Logo Digital House" />
        </div>
        <figcaption>Vinoteca Venner</figcaption>
      </figure>
      <nav>
        <section className="discover">
          <h3>Menú</h3>
          <ul>
            <li>
              <a href="/products">
                <i
                  className="bi bi-film"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Vinos
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-play-circle"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Categorías
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-bar-chart"></i>- Más vendidos
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-tags"></i>- Promociones
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-graph-up"></i>- Estadísticas
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default MenuWrap;
