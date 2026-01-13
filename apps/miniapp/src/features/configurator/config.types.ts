export type ComponentType = "CPU" | "GPU" | "RAM" | "STORAGE" | "PSU" | "CASE";

export type ComponentItem = {
  id: string;
  name: string;
  price: number;
};

export type ConfigState = Partial<Record<ComponentType, ComponentItem>>;
