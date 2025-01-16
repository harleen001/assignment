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
        title="our story"
        description="Two years ago, we started juneberry from home with a dream of sharing our love for cheesecake and delicious treats with the world. We never imagined that we would be where we are today - with a thriving cafe outlet that has become a beloved part of the community.

We are so grateful for the support and loyalty of our customers over the past two years. You have been there with us every step of the way, from our humble beginnings to our recent expansion. Your smiles, kind words, and positive reviews have kept us going through the ups and downs of running a small business.

We are proud of what we have achieved in the past two years - from serving our first slice of cheesecake to introducing new menu items that you have come to love. But we know that we couldn't have done it without you. You have been our inspiration, our motivation, and our reason for doing what we do."
        link="https://example.com/coffee"
      />
      
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
