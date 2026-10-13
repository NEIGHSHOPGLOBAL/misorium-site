import { Navigate } from 'react-router-dom';

function hasCartItems() {
  const storedCart = localStorage.getItem('cart');

  if (!storedCart) return false;

  try {
    const cart = JSON.parse(storedCart);
    return Array.isArray(cart) ? cart.length > 0 : cart?.items?.length > 0;
  } catch {
    return false;
  }
}

export default function Checkout() {
  if (!hasCartItems()) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="container section">
      <h1>Checkout</h1>
    </div>
  );
}
