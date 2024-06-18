// !! Packages
import { Outlet } from "react-router-dom";
// !! Components
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import Middleware from "../../Components/Common/Config/middleware";
import Apollo from "../../Components/Common/Config/Apollo";

const Layout = () => {
  return (
    <Apollo>
      <Middleware>
        <ThemeProvider>
          <Header />
          <main className="p-2 bg-gray-200 bg-primary-100 text-primary-800  min-h-[100vh] ">
            {<Outlet />}
          </main>
          {window.location.pathname.startsWith("/chat") ? (
            ""
          ) : (
            <Footer>
              <p>
                Follow us on social media for the latest updates and promotions.
              </p>
            </Footer>
          )}
        </ThemeProvider>
      </Middleware>
    </Apollo>
  );
};

export default Layout;
