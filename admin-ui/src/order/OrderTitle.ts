import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "name";

export const OrderTitle = (record: TOrder): string => {
  return record.name || String(record.id);
};
