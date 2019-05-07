import React from 'react';

const Layout = ({ children }) => (
  <div style={{ maxWidth: '650px', margin: '0 auto' }}>
    <header>
      <h1>A webpage!</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; Raúl R. Pearson</p>
    </footer>
  </div>
);

export default Layout;
