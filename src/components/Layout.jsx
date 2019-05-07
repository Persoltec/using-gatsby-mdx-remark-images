import React from 'react';

const Layout = ({ children }) => (
  <>
    <header>
      <h1>A webpage!</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; Raúl R. Pearson</p>
    </footer>
  </>
);

export default Layout;
