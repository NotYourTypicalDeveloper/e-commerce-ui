import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const currCategory = (await searchParams).category;

  return (
    <div className="">
      <ProductList category={currCategory} params="products" />
    </div>
  );
};

export default ProductsPage;
