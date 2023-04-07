import tShirt from '../assets/noFace3dRender.gif';


const LandingPage = () => {
    return(
        <section className="landingPage">
            <div className="wrapper">
                <h3>【ARC 1】</h3>
                <h2>JOIN THE REVOLUTION</h2>
                <div className="imgContainer">
                    <img src={tShirt} alt =' no face club t shirt 3d render'></img>
                </div>
                <form>
                    <label for="phone" className="sr-only">Phone number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone number:" required/>

                    <label for="email" className="sr-only">Email address:</label>
                    <input type="email" id="email" name="email" placeholder="Email address" required/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>

    )
}
export default LandingPage;