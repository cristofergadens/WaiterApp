import { useState } from "react";
import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "../Orders/styles";
import { OrderModal } from "../OrderModal";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order)
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null)

  }
  return (
    <>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
      <Board>
        <header>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>{orders.length}</span>
        </header>

        {orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order) => (
              <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </OrdersContainer>
        )}
      </Board>
    </>
  );
}
