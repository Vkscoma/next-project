import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Finder",
  keywords: "property, management, real estate",
  description: "Main layout for the property management system",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="pastel">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
