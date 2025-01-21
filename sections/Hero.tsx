To create a component that mimics the design of www.guper.co, I'll generate a Preact component using TypeScript and Tailwind CSS. This component will include a header, hero section, and features section similar to the Guper website. Here's the code:

import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Feature {
  icon: ImageWidget;
  title: string;
  description: string;
}

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @format color-input
   */
  primaryColor?: string;
  /**
   * @format color-input
   */
  secondaryColor?: string;
  heroImage?: ImageWidget;
  features?: Feature[];
  ctaText?: string;
  ctaLink?: string;
}

export default function GuperHomepage({
  title = "Unlock Your Business Potential",
  subtitle = "Streamline Your Operations",
  description = "Guper is the all-in-one solution for managing your business efficiently. From inventory to customer relations, we've got you covered.",
  primaryColor = "#6366f1",
  secondaryColor = "#4f46e5",
  heroImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  features = [
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Inventory Management",
      description: "Keep track of your stock in real-time with our advanced inventory system."
    },
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Customer Relations",
      description: "Build stronger relationships with your customers using our CRM tools."
    },
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Financial Analytics",
      description: "Gain insights into your business performance with detailed financial reports."
    }
  ],
  ctaText = "Get Started",
  ctaLink = "#"
}: Props) {
  return (
    <div class="bg-gray-50 min-h-screen">
      <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold" style={{ color: primaryColor }}>Guper</div>
          <nav>
            <ul class="flex space-x-4">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section class="py-20">
          <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-10 lg:mb-0">
              <h1 class="text-4xl lg:text-5xl font-bold mb-4" style={{ color: primaryColor }}>{title}</h1>
              <h2 class="text-2xl lg:text-3xl text-gray-600 mb-6">{subtitle}</h2>
              <p class="text-gray-600 mb-8">{description}</p>
              <a href={ctaLink} class="btn btn-primary" style={{ backgroundColor: secondaryColor }}>{ctaText}</a>
            </div>
            <div class="lg:w-1/2">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={600}
                height={400}
                class="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>Our Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} class="text-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    class="mx-auto mb-4"
                  />
                  <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p class="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2023 Guper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}