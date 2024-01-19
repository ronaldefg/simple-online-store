import React, {Fragment, useRef, useEffect } from 'react';
import {Dialog, Transition} from '@headlessui/react';

const ProductModal = ({product, isOpen, onClose, onAddToCart, onRemoveFromCart}) => {
    const cancelButtonRef = useRef(null);
    const [isInCart, setIsInCart] = React.useState(product.inCart);

    useEffect(() => {
        setIsInCart(product.inCart);
    }, [product.inCart]);

    const handleAddToCart = () => {
        onAddToCart(product);
        setIsInCart(true);
    };

    const handleRemoveFromCart = () => {
        onRemoveFromCart(product);
        setIsInCart(false);
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto sm:w-full">
                                        <img
                                            className="h-full w-full object-cover rounded-lg"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="ml-3 mt-1">
                                        <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                                            {product.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">{product.description}</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Precio:
                                            S/. {product.price}</p>
                                        {isInCart ? (
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                                                onClick={handleRemoveFromCart}
                                            >
                                                Eliminar del Carrito
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                                onClick={handleAddToCart}
                                            >
                                                Agregar al Carrito
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                                        onClick={onClose}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ProductModal;
