import Header from "../components/header";
import Footer from "../components/footer";

const formet = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default formet;