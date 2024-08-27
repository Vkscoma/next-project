import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";

export const metadata = {
  title: "Property Finder",
  keywords: "property, management, real estate",
  description: "Main layout for the property management system",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
