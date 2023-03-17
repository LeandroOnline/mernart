import About from "./About";
import Footer from "./Footer";
import Services from "./Services";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="d-flex col-md-8 mt-5 text-white flex-column">
              <h1 className="display-1 fw-bolder mb-4">MERN Full Stack App</h1>
              <p className="lead">
                This is the way to see how full stack app works with MongoBD,
                Express, React and Node.js. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Natus, magnam error maiores saepe
                eveniet nobis obcaecati autem asperiores, aliquid, debitis nam
                hic rerum. Sit numquam, officia optio mollitia aspernatur
                corporis! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ex fuga officiis enim, ut dolorum aperiam, ea dolore
                tempore error velit quisquam architecto saepe qui. Illo
                molestiae accusamus quisquam provident quod.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#contact"
                  className="btn me-4 rounded-pill px-4 py-2 w-25 btn-light"
                >
                  Start
                </a>
                <a
                  href="#about"
                  className="btn me-4 rounded-pill px-4 py-2 w-25 btn-outline-light"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
    </div>
  );
}
export default Home;
