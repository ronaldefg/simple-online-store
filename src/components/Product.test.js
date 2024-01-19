import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './Product';

const mockAddToCart = jest.fn();
const mockRemoveFromCart = jest.fn();
const mockPreview = jest.fn();

const sampleProduct = {
    id: 1,
    title: 'Sample Product',
    description: 'This is a sample product.',
    price: 20,
    image: 'sample.jpg',
    inCart: false,
};

test('renders product correctly', () => {
    render(
        <Product
            product={sampleProduct}
            onAddToCart={mockAddToCart}
            onRemoveFromCart={mockRemoveFromCart}
            onPreview={mockPreview}
        />
    );

    // Check if product details are rendered
    expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();
    expect(screen.getByText('S/. 20')).toBeInTheDocument();

    // Simulate clicking the "Agregar" button
    userEvent.click(screen.getByText(/Agregar/i));

    // Check if the onAddToCart function is called
    expect(mockAddToCart).toHaveBeenCalledWith(sampleProduct);
});
