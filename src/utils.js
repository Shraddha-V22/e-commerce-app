export function getItemCount(cartItems) {
  return cartItems.reduce((sum, cartItem) => cartItem.quantity + sum, 0);
}

export function getSubtotal(cartItems) {
  return cartItems.reduce(
    (sum, { product, quantity }) => product.price * quantity + sum,
    0
  );
}
