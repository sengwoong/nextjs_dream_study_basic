import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import tshirt from "@/../../public/images/tshirt.png";
import shoose from "@/../../public/images/shoose.png";
import jin from "@/../../public/images/jin.png";
import GoProuduct from "@/components/GoProuduct";
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // notFound();
  }
  console.log(`/images/${product.image}`);

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}.png`}
        alt={product.name}
        width="300"
        height="300"
      />

      <GoProuduct />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
