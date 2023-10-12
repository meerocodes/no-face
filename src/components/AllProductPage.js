import AllProductPageBuyButton from './AllProductPageBuyButton';
import Nav from './Nav';
import Footer from './Footer';

const AllProductsPage = () => {

    return(
        <>
            <Nav />

            <section className="productPage">
                <div className="wrapper">
                <AllProductPageBuyButton />
                </div>

            </section>
            <Footer />
        </>
    )
}

export default AllProductsPage;
