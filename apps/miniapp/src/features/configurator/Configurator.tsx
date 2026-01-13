import ProductCard from "../../shared/ui/ProductCard";
import { COMPONENTS } from "./config.data";
import { ComponentType } from "./config.types";
import { useConfigurator } from "./useConfigurator";
export const Configurator = () => {
  const { selectComponent, totalPrice } = useConfigurator();

  return (
    <div>
      {Object.entries(COMPONENTS).map(([type, items]) => (
        <section key={type}>
          <h2>{type}</h2>
          <div>
            {items.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                onClick={() => selectComponent(type as ComponentType, item)}
              />
            ))}
          </div>
        </section>
      ))}

      <h3>Итого: {totalPrice} ₽</h3>
      <button>Оформить заказ</button>
    </div>
  );
};
