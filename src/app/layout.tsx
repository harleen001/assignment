export const metadata = {
  title: 'koinx',
  description: 'crypto-webapp assignment',
};

import Nav from "../components/Nav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
