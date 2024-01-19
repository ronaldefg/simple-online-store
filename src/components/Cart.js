// Cart.js
import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onEmptyCart }) => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden shadow-lg my-4">
            <h2 className="text-2xl font-bold text-center bg-gray-200 py-2">Carrito de compras</h2>
            <p className="text-center text-base">Cantidad de productos: {cart.length}</p>
            <ul className="p-4">
                {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">{item.title}</span>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => onRemoveFromCart(item)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <p className="text-center text-base">Monto total: {calculateTotal(cart)}</p>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-4"
                onClick={onEmptyCart}
            >
                Vaciar carrito
            </button>
        </div>
    );
};

const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
};

export default Cart;
