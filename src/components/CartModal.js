import React from 'react';

const CartModal = ({ isOpen, onClose, cart, onRemoveFromCart, onEmptyCart }) => {
    if (!isOpen) {
        return null;
    }

    const handleRemoveFromCart = (item) => {
        onRemoveFromCart(item);
    };

    const handleEmptyCart = () => {
        onEmptyCart();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded">
                <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>
                <ul className="p-4">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center mb-2">
                            <span className="text-gray-700">{item.title}</span>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                onClick={() => handleRemoveFromCart(item)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="text-base">Monto total: {calculateTotal(cart)}</p>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-4"
                    onClick={() => handleEmptyCart()}
                >
                    Vaciar carrito
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
};

export default CartModal;
