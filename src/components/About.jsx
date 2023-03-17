import work from "../assets/trabajo-en-equipo.png";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={work} alt="about" className="w-75 mt-1" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-5"> Who <b>We</b> Are</h1>
              <hr />
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus qui minus suscipit itaque voluptates commodi mollitia libero vero totam eius! Dicta, eos at? Dolore ab nemo voluptas assumenda atque molestias!. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi facere dignissimos labore assumenda exercitationem architecto veniam tenetur asperiores, voluptates possimus similique quibusdam voluptatibus repellat. Laudantium tempore quasi sequi deleniti.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
