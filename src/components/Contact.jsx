function Contact() {
  return (
    <div>
      <section id="contact" class="mt-5">
        <div class="container">

          <div class="gap-40"></div>

          <div class="row">
            <div class="col-md-7">
              <form
                id="contact-form"
                action="contact-form.php"
                method="post"
                role="form"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder=""
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder=""
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Subject</label>
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    placeholder=""
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div class="text-right">
                  <br />
                  <button class="btn btn-primary solid blank rounded-pill" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-5">
              <div class="contact-info">
                <h3>Contact Details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eget erat magna. Pellentesque justo ante
                </p>
                <br />
                <p>
                  <i class="fa fa-phone info"></i> +54 9 3435267411
                </p>
                <p>
                  <i class="fa fa-envelope-o info"></i> leandrosavat@gmail.com
                </p>
                <p>
                  <i class="fa fa-globe info"></i> https://leandrosavat.vercel.app/
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
