import { ComponentItem } from "./config.types";

export const COMPONENTS: Record<string, ComponentItem[]> = {
  CPU: [
    { id: "cpu", name: "Intel i5", price: 200 },
    { id: "cpu2", name: "AMD Ryzen 5", price: 180 },
  ],
  GPU: [
    { id: "gtx1660", name: "NVIDIA GTX 1660", price: 300 },
    { id: "rx580", name: "AMD Radeon RX 580", price: 250 },
  ],
  RAM: [
    { id: "8gb", name: "8GB DDR4", price: 40 },
    { id: "16gb", name: "16GB DDR4", price: 70 },
  ],
  STORAGE: [
    { id: "hdd1tb", name: "1TB HDD", price: 50 },
    { id: "ssd500gb", name: "500GB SSD", price: 80 },
  ],
  PSU: [
    { id: "psu500w", name: "500W PSU", price: 60 },
    { id: "psu750w", name: "750W PSU", price: 90 },
  ],
  CASE: [
    { id: "case1", name: "Mid Tower Case", price: 70 },
    { id: "case2", name: "Full Tower Case", price: 120 },
  ],
};
