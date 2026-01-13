import { useState } from "react";
import { ComponentItem, ComponentType, ConfigState } from "./config.types";
import { calculateTotalPrice } from "./config.utils";

export const useConfigurator = () => {
  const [config, setConfig] = useState<ConfigState>({});

  const selectComponent = (type: ComponentType, item: ComponentItem) => {
    setConfig((prev) => ({ ...prev, [type]: item }));
  };

  const totalPrice = calculateTotalPrice(config);
  return { config, selectComponent, totalPrice };
};
