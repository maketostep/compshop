type ProductCardProps = {
  name: string;
  price: number;
  selected?: boolean;
  onClick: () => void;
};

export default function ProductCard({
  name,
  price,
  selected = false,
  onClick,
}: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 16px",
        borderRadius: 12,
        border: selected ? "2px solid #4f46e5" : "1px solid #e5e7eb",
        background: selected ? "#eef2ff" : "#fff",
        cursor: "pointer",
        textAlign: "left",
        minWidth: 180,
      }}
    >
      <div style={{ fontWeight: 600 }}>{name}</div>
      <div style={{ marginTop: 4, color: "#6b7280" }}>
        {price.toLocaleString()} ₽
      </div>
    </button>
  );
}
