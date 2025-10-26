# Product Management Guide

This guide explains how to add new products to your Elegance Kurthis website with the new fabric-based organization.

## Adding New Products

### Step 1: Add Product Images

1. **Recommended folder structure** (optional but organized):
   ```
   public/products/
     ├── cotton/
     │   ├── product1.jpg
     │   ├── product2.jpg
     ├── silk/
     │   ├── product1.jpg
     ├── rayon/
     └── linen/
   ```
   
2. You can also keep all images in `public/products/` directly
3. Use descriptive names (e.g., `navy-cotton-classic.jpg`)
4. **Multiple images per product**: Just add more image paths in the array
5. Recommended format: JPG or PNG
6. Recommended dimensions: At least 800x1000px for best quality

### Step 2: Update Product Data

Open the file `src/data/products.ts` and add your new product to the `products` array:

```typescript
{
  id: "KUR011",                    // Unique product ID
  name: "Product Name",            // Product name
  description: "Product description with key features",
  price: 2499,                     // Price in rupees
  images: [                        // Array of image paths (1 or more)
    "/products/cotton/product1.jpg",
    "/products/cotton/product2.jpg",
    "/products/cotton/product3.jpg"
  ],
  fabricType: "Cotton",            // IMPORTANT: Must be one of: 'Cotton', 'Silk', 'Rayon', 'Linen'
  category: "Festive",             // Sub-category (see below)
  details: {
    fabric: "Premium Cotton",      // Detailed fabric description
    color: "Navy Blue",            // Color description
    size: ["S", "M", "L", "XL"],  // Available sizes
    care: "Machine wash"           // Care instructions
  }
}
```

### Step 3: Save and View

After adding the product data, save the file. The website will automatically:
- Group your product under its fabric type dropdown
- Display it in the carousel with other products of the same fabric
- Show all product images when clicked (if multiple images provided)

## Adding New Fabric Types

Currently supported fabric types: **Cotton**, **Silk**, **Rayon**, **Linen**

### To add a new fabric type (e.g., "Georgette"):

1. **Update the Product interface** in `src/data/products.ts`:
   ```typescript
   fabricType: 'Cotton' | 'Silk' | 'Rayon' | 'Linen' | 'Georgette';
   ```

2. **Add products with the new fabric type**:
   ```typescript
   {
     id: "KUR011",
     name: "Flowing Georgette",
     // ... other details
     fabricType: "Georgette",  // New fabric type
     // ... rest of product data
   }
   ```

3. **That's it!** The system automatically:
   - Creates a new dropdown for "Georgette Kurthis"
   - Groups all Georgette products together
   - Adds carousel navigation
   - Sorts fabric types alphabetically

The code dynamically detects all fabric types used in your products array, so no manual configuration needed!

## WhatsApp Configuration

To update the WhatsApp Business number:

1. Open `src/data/products.ts`
2. Find the `generateWhatsAppLink` function
3. Update the `phoneNumber` variable:

```typescript
const phoneNumber = "919999999999"; // Replace with your number (with country code)
```

## Product Sub-Categories

Available sub-categories (for the `category` field):
- **Festive**: For special occasions and celebrations
- **Casual**: Everyday wear
- **Evening**: Evening events and parties
- **Traditional**: Traditional and classic designs
- **Formal**: Formal occasions and office wear

## Features

- **Fabric-based organization**: Products automatically grouped by fabric type
- **Carousel display**: Shows 3 products at a time on desktop, scrollable with arrows
- **Multiple images**: Each product can have multiple images viewable in a popup
- **Mobile responsive**: Adapts beautifully to all screen sizes
- **Dynamic categories**: New fabric types automatically create new dropdowns

## Tips for Best Results

1. **Image Quality**: Use high-resolution images with good lighting
2. **Consistent Background**: White or cream backgrounds work best
3. **Product ID**: Always use unique IDs (KUR001, KUR002, etc.)
4. **Pricing**: Ensure prices are competitive and accurate
5. **Descriptions**: Keep descriptions concise but informative (40-60 words)

## Need Help?

If you encounter any issues or need assistance, please contact your web developer.
