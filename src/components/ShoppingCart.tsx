import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/utils";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, cartItemQuantity, cartTotal } =
    useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartItemQuantity > 0 ? (
            <div className="ms-auto fw-bold fs-5">
              Cart Total: {formatCurrency(cartTotal)}
            </div>
          ) : (
            <span>Cart is Empty</span>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
