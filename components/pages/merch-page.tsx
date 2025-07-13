"use client"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MerchPage() {
  const merchItems = [
    {
      id: 1,
      name: "SAMVAAD Eco-Friendly Notebook",
      description: "Perfect for journaling your thoughts and expressions.",
      price: "$15.00",
      image: "/placeholder.svg?height=300&width=300",
      color: "border-primary", // Use primary accent for border
    },
    {
      id: 2,
      name: "Mindful Moments Mug",
      description: "Start your day with a reminder to pause and reflect.",
      price: "$18.00",
      image: "/placeholder.svg?height=300&width=300",
      color: "border-secondary", // Use secondary accent for border
    },
    {
      id: 3,
      name: "Community Connection T-Shirt",
      description: "Wear your support for mental wellness and community.",
      price: "$25.00",
      image: "/placeholder.svg?height=300&width=300",
      color: "border-accent", // Use accent for border
    },
    {
      id: 4,
      name: "Healing Journey Tote Bag",
      description: "Carry your essentials and a message of hope.",
      price: "$22.00",
      image: "/placeholder.svg?height=300&width=300",
      color: "border-primary",
    },
  ]

  const handleAddToCart = (itemName: string) => {
    alert(`"${itemName}" added to cart! Thank you for supporting SAMVAAD.`)
  }

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          SAMVAAD Merchandise
        </h1>
        <p className="max-w-3xl mx-auto text-lg font-body text-muted-foreground text-center mb-12">
          Support SAMVAAD's mission and spread awareness with our thoughtfully designed, eco-conscious merchandise.
          Every purchase helps us continue building a better society with better understanding.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {merchItems.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-2",
                item.color, // Apply dynamic border color
              )}
            >
              <CardHeader className="p-0 mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="rounded-t-lg object-cover w-full h-64"
                />
              </CardHeader>
              <CardContent className="p-4 pt-0 text-center">
                <CardTitle className="text-xl font-heading font-semibold mb-2">{item.name}</CardTitle>
                <p className="text-sm font-body text-muted-foreground mb-3">{item.description}</p>
                <p className="text-2xl font-heading font-bold text-primary mb-4">{item.price}</p>
                <Button
                  onClick={() => handleAddToCart(item.name)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
