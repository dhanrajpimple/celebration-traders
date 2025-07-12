export default function Products() {
  const products = [
    {
      id: 1,
      name: "Firecrackers (पटाखे)",
      image: "/placeholder.svg?height=200&width=200",
      category: "Crackers & Fireworks",
    },
    {
      id: 2,
      name: "Cold Pyro",
      image: "/placeholder.svg?height=200&width=200",
      category: "Cold Pyro Effects",
    },
    {
      id: 3,
      name: "Birthday & Party Items",
      image: "/placeholder.svg?height=200&width=200",
      category: "Celebration Materials",
    },
    {
      id: 4,
      name: "Electric Lights",
      image: "/placeholder.svg?height=200&width=200",
      category: "Lighting & Decor",
    },
    {
      id: 5,
      name: "Decorations",
      image: "/placeholder.svg?height=200&width=200",
      category: "Party Decorations",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Our Products</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-red-600 p-2 rounded">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-subheading">{product.name}</h3>
              <p className="text-gray-600 font-text">{product.category}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
