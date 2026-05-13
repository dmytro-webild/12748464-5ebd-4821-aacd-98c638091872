"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Story",
          id: "#about",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="New Gunjan"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient",
      }}
      title="Where Every Sweet Feels Like a Celebration."
      description="Fresh sweets, iconic samosas, authentic Indian flavors, and family dining — crafted with tradition since generations."
      buttons={[
        {
          text: "Explore Menu",
          href: "#menu",
        },
        {
          text: "Order Online",
          href: "#",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-dessert-with-sliced-kiwis-candies-white-background-dessert-cream-fruits-cake-candy_140725-96379.jpg",
          imageAlt: "Sweet shop display",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-delicious-cake-with-green-cream-dark-wall-cookies-biscuit-sweet-sugar-cake-pie_140725-53256.jpg",
          imageAlt: "Fresh Jalebi",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pakistani-food-with-sauce-top-view_23-2148825162.jpg",
          imageAlt: "Premium samosa",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-with-red-carpet-floor-tables-chairs_140725-8024.jpg",
          imageAlt: "Family dining",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/various-dried-fruits-nuts-glass-plate_114579-30511.jpg",
          imageAlt: "Mithai box",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-delight-bowl-with-teapots_23-2148088438.jpg",
          imageAlt: "Traditional sweet",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100%",
          description: "Loved by Local Families",
        },
        {
          id: "m2",
          value: "100+",
          description: "Daily Fresh Items",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Quick Service",
        },
        {
          id: "m4",
          value: "100%",
          description: "Authentic Taste",
        },
      ]}
      title="Trusted by Generations"
      description="Providing authentic taste for families and communities."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "Signature",
          name: "Royal Samosa",
          price: "$1.50",
          rating: 5,
          reviewCount: "500+",
          imageSrc: "http://img.b2bpic.net/free-photo/samsa-samosas-with-meat_658428-356.jpg",
        },
        {
          id: "p2",
          brand: "Classic",
          name: "Desi Ghee Jalebi",
          price: "$3.00",
          rating: 5,
          reviewCount: "400+",
          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-heart-shaped-red-italian-pasta-bowl-dark-surface_140725-103104.jpg",
        },
        {
          id: "p3",
          brand: "Street Food",
          name: "Pav Bhaji",
          price: "$4.50",
          rating: 4,
          reviewCount: "200+",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-delicious-indian-street-food_23-2151996239.jpg",
        },
        {
          id: "p4",
          brand: "Favorite",
          name: "Masala Dosa",
          price: "$5.00",
          rating: 5,
          reviewCount: "300+",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-bakery-with-various-sauces_140725-2902.jpg",
        },
        {
          id: "p5",
          brand: "Snack",
          name: "Chowmein",
          price: "$4.00",
          rating: 4,
          reviewCount: "150+",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-food-restaurant_7939-1960.jpg",
        },
        {
          id: "p6",
          brand: "Mithai",
          name: "Kaju Katli",
          price: "$8.00",
          rating: 5,
          reviewCount: "600+",
          imageSrc: "http://img.b2bpic.net/free-photo/organic-homemade-nougat-made-with-honey_114579-9057.jpg",
        },
      ]}
      title="Customer Favorites"
      description="Authentic Indian delights crafted for you."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "From Sweet Shop to Family Destination",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/still-life-vintage-writing-love-letter_23-2150784430.jpg",
          alt: "Old Shop Timeline",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Mariyam Akhtar",
          role: "Patron",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660763.jpg",
        },
        {
          id: "t2",
          name: "Rachna Srivastava",
          role: "Patron",
          company: "Loyal Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-elegant-senior-woman_329181-2294.jpg",
        },
        {
          id: "t3",
          name: "Akash Singh",
          role: "Patron",
          company: "Local Foodie",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-smiling-curly-woman-lean-wall_176420-16738.jpg",
        },
        {
          id: "t4",
          name: "Dr Amit Kumar",
          role: "Patron",
          company: "Regular",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/airbnb-host-welcoming-guests_23-2149872021.jpg",
        },
        {
          id: "t5",
          name: "Rahul Verma",
          role: "Patron",
          company: "Food Lover",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-photo-beautiful-lady-sitting-restaurant-smiling-camera_114579-92383.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "50+",
          label: "Years served",
        },
        {
          value: "10K+",
          label: "Happy families",
        },
        {
          value: "4.9/5",
          label: "Customer rating",
        },
      ]}
      title="Customer Love"
      description="What our family members say about us."
    />
  </div>

  <div id="festivals" data-section="festivals">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Diwali Boxes",
          description: "Hand-picked assortment for festivals.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-model-posing-with-gift-box_114579-18643.jpg",
          imageAlt: "Festival box",
        },
        {
          title: "Wedding Sweets",
          description: "Custom orders for grand celebrations.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-heart-shaped-gift-box-with-delicious-macarons-dark-icy-background_140725-143475.jpg",
          imageAlt: "Wedding sweets",
        },
        {
          title: "Corporate Gifting",
          description: "Professional packs for partners.",
          imageSrc: "http://img.b2bpic.net/free-photo/dried-fruits-nuts-wooden-bag-with-bottle-wine_114579-30033.jpg",
          imageAlt: "Corporate gift",
        },
      ]}
      title="Make Every Festival Sweeter"
      description="Celebrate life with our premium gifting solutions."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Visit Once, Crave Forever. Open daily 9AM - 10PM."
      buttons={[
        {
          text: "WhatsApp Now",
          href: "https://wa.me/yournumber",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Story",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="New Gunjan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
