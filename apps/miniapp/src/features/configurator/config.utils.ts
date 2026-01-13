import { ConfigState } from "./config.types";

export const calculateTotalPrice = (config: ConfigState): number =>
  Object.values(config).reduce((sum, item) => sum + (item?.price ?? 0), 0);
