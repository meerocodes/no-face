const LandingPage = () => {
    return(
        <section className="landingPage">
            <div className="wrapper">
                <h3>ARC 1</h3>
                <h2>JOIN THE REVOLUTION</h2>
                <form>
                    <label for="phone" className="sr-only">Phone number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone number:"/>

                    <label for="email" className="sr-only">Email address:</label>
                    <input type="email" id="email" name="email" placeholder="Email address"/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>

    )
}
export default LandingPage;