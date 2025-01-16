export const metadata = {
  title: 'koinx',
  description: 'crypto-webapp assignment',
};

import Border from "../components/Border";
import Nav from "../components/Nav";
import Header from "../components/Header";


import CircleContainer from "../components/CircleContainer";
import ImageText from "../components/ImageText";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Border/>
        <Header/>
        <CircleContainer/>
        <ImageText
        imageUrl="/assets/team.jpg"
        title="Our Story"
        description="Discover our variety of freshly brewed coffee, perfect for any time of day."
        link="https://example.com/coffee"
      />
      
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
