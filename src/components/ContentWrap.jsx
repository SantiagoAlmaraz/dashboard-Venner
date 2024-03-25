import Statistics from "./Statistics"
import MostPopular from "./MostPopular"

const data = [
    {
        titulo: "Total de vinos",
        cifra: "130",
        icono: "bi bi-bar-chart-fill",
        colorIcono: "cornflowerblue"
    },
    {
        titulo: "Total de vinos nacionales",
        cifra: "80",
        icono: "bi bi-bar-chart",
        colorIcono: "cornflowerblue"
    },
    {
        titulo: "Total de vinos importados",
        cifra: "50",
        icono: "bi bi-bar-chart",
        colorIcono: "cornflowerblue"
    },
    {
        titulo: "Categorías",
        cifra: "9",
        icono: "bi bi-tags-fill",
        colorIcono: "orange"
    },
    {
        titulo: "Cantidad de usuarios",
        cifra: "50",
        icono: "bi bi-people-fill",
        colorIcono: "black"
    },
    {
        titulo: "Total Ventas",
        cifra: "$ 489.567",
        icono: "bi bi-cash",
        colorIcono: "green"
    }
];

function ContentWrap(){
    return (
        <main className="content-wrap">
			<Statistics info = { data }/>
			<MostPopular />
		</main>
    )
}

export default ContentWrap;