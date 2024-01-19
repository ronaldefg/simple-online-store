import React, {useEffect, useState} from 'react';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import ProductModal from './components/ProductModal';

const App = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                const productsWithInCart = data.map(product => ({ ...product, inCart: false }));
                setProducts(productsWithInCart);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        console.log("Demo");
        setCart([...cart, {...product, inCart: true}]);
        setProducts((prevProducts) => {
            return prevProducts.map((prevProduct) =>
                prevProduct.id === product.id ? { ...prevProduct, inCart: true } : prevProduct
            );
        });
        console.log("Demo 2");
    };
    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        const updatedProducts = products.map(item => (
            item.id === product.id ? { ...item, inCart: false } : item
        ));
        setProducts(updatedProducts);
    };

    const emptyCart = () => {
        // Logic to empty the cart
        // Update the 'cart' state
        setCart([]);
    };

    const previewProduct = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <Dashboard cart={cart} onRemoveFromCart={removeFromCart} onEmptyCart={emptyCart}/>
            <ProductList products={products} onRemoveFromCart={removeFromCart} onAddToCart={addToCart} onPreviewProduct={previewProduct}/>
            {selectedProduct && (
                <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={closeModal} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
            )}
        </div>
    );
};

export default App;
