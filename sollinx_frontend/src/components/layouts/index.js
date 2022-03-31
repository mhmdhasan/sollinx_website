import Navigator from "./navigation";
import Footer from "./footer";

const Layout = ({children}) => {

    return (
        <div className="h-screen">
            <Navigator />
            <div className="w-full">
                {children}
            </div>
            <Footer className="h-1/5"/>
        </div>
        
    )
}

export default Layout;