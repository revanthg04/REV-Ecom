import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../constants/Const"
const PopularProducts = () => {
  return (
    <section id="products"
    className="max-container
    max-sm:mt-12">
     
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our  <span className="text-coral-red">Best-seller</span> Products</h2>
      </div>
      <div className="mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cold-1
      sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}
          />
        ))}
      </div>

    </section>
  )

}

export default PopularProducts
