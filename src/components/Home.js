

// import React from 'react';

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// }

// export default Home;
import React from 'react';


function Home() {
    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="App">
            <header className="header">
                <img src="https://via.placeholder.com/100x50" alt="Logo" className="logo" />
                <h1>My E-Commerce Site</h1>
                <input type="text" placeholder="Search products..." />
            </header>
            <nav className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <main>
                <section className="hero-section">
                    <h2>Welcome to the Best Online Shop!</h2>
                    <p>Find the best products at unbeatable prices!</p>
                </section>
                <section className="discounts-section">
                    <h2>Special Discounts</h2>
                    <p>Save up to 50% on select items!</p>
                </section>
                {/* <section className="product-showcase">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </section> */}
                <section className="info-section">
                    <h2>About Our Store</h2>
                    <p>We offer the best products at the best prices, sourced from around the world.</p>
                    <button className="learn-more">Learn More</button>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 My E-Commerce Site. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;