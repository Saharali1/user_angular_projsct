import { Icart } from "./icart";
import { Order } from "./order";

export interface IsendedOrder {
  order:Order,
  products:Icart[]
}
