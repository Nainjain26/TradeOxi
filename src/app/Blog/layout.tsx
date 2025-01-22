import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container max-w-5xl mx-auto md:py-5 md:px-10  p-4  ">
      {children}
    </div>
  );
};
 
export default Layout;
