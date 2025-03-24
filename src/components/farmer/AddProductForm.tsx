
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Image, DollarSign, Box, Tag } from "lucide-react";

// Form validation schema
const productSchema = z.object({
  name: z.string().min(2, { message: "Product name must be at least 2 characters" }),
  price: z.string().refine(
    (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
    { message: "Price must be a positive number" }
  ),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  stock: z.string().refine(
    (val) => !isNaN(parseInt(val)) && parseInt(val) >= 0,
    { message: "Stock must be a positive number" }
  ),
  category: z.string().min(1, { message: "Please select a category" }),
  image: z.string().url({ message: "Please enter a valid image URL" }),
});

type ProductFormValues = z.infer<typeof productSchema>;

interface AddProductFormProps {
  onSubmit: (data: ProductFormValues) => void;
  onCancel: () => void;
  initialData?: any;
}

export default function AddProductForm({ onSubmit, onCancel, initialData }: AddProductFormProps) {
  // Initialize the form with either initial data or defaults
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData ? {
      name: initialData.name,
      price: initialData.price.toString(),
      description: initialData.description,
      stock: initialData.stock.toString(),
      category: initialData.category,
      image: initialData.image,
    } : {
      name: "",
      price: "",
      description: "",
      stock: "",
      category: "",
      image: "",
    },
  });

  const handleSubmit = (values: ProductFormValues) => {
    onSubmit({
      ...values,
      price: parseFloat(values.price),
      stock: parseInt(values.stock),
    });
  };

  // Sample categories for the select dropdown
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Eggs",
    "Meat",
    "Grains",
    "Baked Goods",
    "Preserves",
    "Other",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Box className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Organic Apples"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="2.99"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock Quantity</FormLabel>
                <FormControl>
                  <Input
                    placeholder="50"
                    type="number"
                    min="0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your product here..."
                  className="min-h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <Image className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="https://example.com/image.jpg"
                    className="pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {field.value && (
          <div className="mt-2 p-2 border rounded">
            <p className="text-sm text-muted-foreground mb-2">Image Preview:</p>
            <img 
              src={field.value} 
              alt="Product preview" 
              className="max-h-40 object-contain mx-auto" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/400x300?text=Image+Preview";
              }}
            />
          </div>
        )}
        
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            {initialData ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
