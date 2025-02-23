import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    "_id": "67b9596773ea42d545d7b988",
		"table": "123",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza quatro queijos",
					"imagePath": "1739936955710-quatro-queijos.png",
					"price": 40,
				},
				"quantity": 3,
				"_id": "67b9596773ea42d545d7b989"
			},
			{
				"product": {
					"name": "Coca cola",
					"imagePath": "1740103082158-coca-cola.png",
					"price": 8,
				},
				"quantity": 3,
				"_id": "67b9596773ea42d545d7b98a"
			}
		],
	}
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕢" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]}/>
    </Container>
  );
}
