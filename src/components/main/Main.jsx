import "./Main.css";
function Main() {
    return (
        <>
        <main>
            <h2>Bienvenido a PCeros.cl!</h2>
            <p class="bienvenida">
                <strong>PCeros.cl</strong>es tu tienda de confianza para todo lo relacionado con computadoras y tecnología.
            </p>
            <section class="tarjetas">
                <article class="tarjeta">
                    <h3>Desarrollo Web</h3>
                    <p>Clases de desarrollo web con tecnologías modernas.</p>
                    <button>Ver más</button>
                </article>
                    <article class="tarjeta">
                    <h3>Aplicaciones Móviles</h3>
                    <p>Desarrollo de aplicaciones para iOS y Android.</p>
                    <button>Ver más</button>
                </article>
                    <article class="tarjeta">
                    <h3>Cloud Computing</h3>
                    <p>Servicios de computación en la nube para empresas y particulares.</p>
                    <button>Ver más</button>
                </article>
            </section>
        </main>
        </>
    );
}
export default Main;