import FloatingCartButton from "@/@core/shared/floatingCartButton";

export default function Ecommercelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <FloatingCartButton totalItems={10} />
    </div>
  );
}
