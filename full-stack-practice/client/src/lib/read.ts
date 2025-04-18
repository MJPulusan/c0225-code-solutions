export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error(`Failed to fetch catalog: ${res.status}`);
  return await res.json();
}

export async function readProduct(productId: number): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`);
  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
  return await res.json();
}
