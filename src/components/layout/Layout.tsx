import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto pt-[var(--header-height)] pb-8">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;