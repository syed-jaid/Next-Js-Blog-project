import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

const formet = ({ children }) => {
    return (
        <div>
            <Head>
                <title>JS Blogs</title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default formet;