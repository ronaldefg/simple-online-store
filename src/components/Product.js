// Product.js
import React from 'react';

const Product = ({product, onAddToCart, onRemoveFromCart, onPreview}) => {

    const {id, title, price, image, inCart} = product;

    return (
        <div key={id} className="group relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <button onClick={() => onPreview(product)}>
                            {title}
                        </button>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">S/. {price}</p>
            </div>
            <div className="mt-4 flex justify-between">
                {inCart ? (
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onRemoveFromCart(product)}
                    >
                        Eliminar
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onAddToCart(product)}
                    >
                        Agregar
                    </button>
                )}
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
                    onClick={() => onPreview(product)}
                >
                    Vista previa
                </button>
            </div>
        </div>
    );
};

export default Product;
