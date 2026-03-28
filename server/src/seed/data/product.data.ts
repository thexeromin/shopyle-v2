import mongoose from 'mongoose'

export const getProductData = (
  cat: Record<string, mongoose.Types.ObjectId>
) => [
  {
    name: 'Premium Wool Coat',
    description:
      'A sophisticated, heavyweight wool blend coat designed for harsh winters. Features a tailored fit, deep pockets, and a silky interior lining.',
    price: 299.99,
    category: cat['Outerwear'],
    stock: 45,
    sold: 12,
    photo:
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800',
  },
  {
    name: 'Classic Cotton Tee',
    description:
      'Your new everyday essential. Made from 100% organic heavyweight cotton for a structured yet breathable fit. Pre-shrunk and garment dyed.',
    price: 45.0,
    category: cat['Tops'],
    stock: 120,
    sold: 85,
    photo:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800',
  },
  {
    name: 'Relaxed Fit Denim',
    description:
      'Vintage-inspired relaxed fit jeans crafted from premium Japanese selvedge denim. Designed to fade beautifully over time.',
    price: 120.0,
    category: cat['Bottoms'],
    stock: 60,
    sold: 34,
    photo:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800',
  },
  {
    name: 'Knit Cashmere Sweater',
    description:
      'Ultra-soft, ultra-warm 100% Mongolian cashmere. Features a classic crew neckline and ribbed cuffs. Perfect for layering.',
    price: 180.5,
    category: cat['Tops'],
    stock: 30,
    sold: 8,
    photo:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800',
  },
  {
    name: 'Minimalist Leather Belt',
    description:
      'Hand-cut from full-grain Italian leather, finished with a matte black brushed steel buckle. Durable and timeless.',
    price: 65.0,
    category: cat['Accessories'],
    stock: 85,
    sold: 42,
    photo:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
  },
  {
    name: 'Structured Blazer',
    description:
      'A modern take on a classic silhouette. Unstructured shoulders with a slightly boxy fit, made from a breathable linen-cotton blend.',
    price: 210.0,
    category: cat['Outerwear'],
    stock: 25,
    sold: 5,
    photo:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
  },
]
