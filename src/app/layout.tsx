export const metadata = {
  title: 'koinx',
  description: 'crypto-webapp assignment',
};

import Border from "../components/Border";
import Nav from "../components/Nav";
import CircleContainer from "../components/CircleContainer";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Border/>
        <CircleContainer/>
      
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
