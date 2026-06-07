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
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

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
          name: "Menu",          id: "#menu"},
        {
          name: "Story",          id: "#about"},
        {
        name: "Reviews",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="New Gunjan"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient"}}
      title="Where Every Sweet Feels Like a Celebration."
      description="Fresh sweets, iconic samosas, authentic Indian flavors, and family dining — crafted with tradition since generations."
      buttons={[
        {
          text: "Explore Menu",          href: "#menu"},
        {
          text: "Order Online",          href: "#"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-dessert-with-sliced-kiwis-candies-white-background-dessert-cream-fruits-cake-candy_140725-96379.jpg",          imageAlt: "Sweet shop display"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-delicious-cake-with-green-cream-dark-wall-cookies-biscuit-sweet-sugar-cake-pie_140725-53256.jpg",          imageAlt: "Fresh Jalebi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pakistani-food-with-sauce-top-view_23-2148825162.jpg",          imageAlt: "Premium samosa"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-with-red-carpet-floor-tables-chairs_140725-8024.jpg",          imageAlt: "Family dining"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/various-dried-fruits-nuts-glass-plate_114579-30511.jpg",          imageAlt: "Mithai box"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-delight-bowl-with-teapots_23-2148088438.jpg",          imageAlt: "Traditional sweet"},
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
          id: "m1",          value: "15,000+",          description: "Happy Customers"},
        {
          id: "m2",          value: "100+",          description: "Daily Fresh Items"},
        {
          id: "m3",          value: "24/7",          description: "Quick Service"},
        {
          id: "m4",          value: "100%",          description: "Authentic Taste"},
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
          id: "p1",          brand: "Signature",          name: "Royal Samosa",          price: "$1.50",          rating: 5,
          reviewCount: "500+",          imageSrc: "http://img.b2bpic.net/free-photo/samsa-samosas-with-meat_658428-356.jpg"},
        {
          id: "p2",          brand: "Classic",          name: "Desi Ghee Jalebi",          price: "$3.00",          rating: 5,
          reviewCount: "400+",          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-heart-shaped-red-italian-pasta-bowl-dark-surface_140725-103104.jpg"},
        {
          id: "p3",          brand: "Street Food",          name: "Pav Bhaji",          price: "$4.50",          rating: 4,
          reviewCount: "200+",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-delicious-indian-street-food_23-2151996239.jpg"},
        {
          id: "p4",          brand: "Favorite",          name: "Masala Dosa",          price: "$5.00",          rating: 5,
          reviewCount: "300+",          imageSrc: "http://img.b2bpic.net/free-photo/crispy-bakery-with-various-sauces_140725-2902.jpg"},
        {
          id: "p5",          brand: "Snack",          name: "Chowmein",          price: "$4.00",          rating: 4,
          reviewCount: "150+",          imageSrc: "http://img.b2bpic.net/free-photo/asian-food-restaurant_7939-1960.jpg"},
        {
          id: "p6",          brand: "Mithai",          name: "Kaju Katli",          price: "$8.00",          rating: 5,
          reviewCount: "600+",          imageSrc: "http://img.b2bpic.net/free-photo/organic-homemade-nougat-made-with-honey_114579-9057.jpg"},
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
          type: "text",          content: "From Sweet Shop to Family Destination"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/still-life-vintage-writing-love-letter_23-2150784430.jpg",          alt: "Old Shop Timeline"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      useInvertedBackground={true}
      textboxLayout="default"
      testimonials={[
        {
          id: "t1",          name: "Mariyam Akhtar",          date: "Jan 2024",          title: "A Taste of Home",          quote: "New Gunjan always brings back fond memories with their authentic flavors. The sweets are simply divine, and the samosas are a must-try!",          tag: "Local Resident",          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660763.jpg",          avatarAlt: "Mariyam Akhtar"
        },
        {
          id: "t2",          name: "Rachna Srivastava",          date: "Feb 2024",          title: "My Family's Favorite",          quote: "We've been loyal customers for years, and New Gunjan never disappoints. Their quality and taste are consistently excellent. Highly recommended!",          tag: "Loyal Customer",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-elegant-senior-woman_329181-2294.jpg",          avatarAlt: "Rachna Srivastava"
        },
        {
          id: "t3",          name: "Akash Singh",          date: "Mar 2024",          title: "Best Indian Sweets in Town",          quote: "As a local foodie, I can confidently say New Gunjan has the best Indian sweets. Every item is fresh and bursting with traditional flavors. A real gem!",          tag: "Local Foodie",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-man-smiling-camera_23-2148753232.jpg",          avatarAlt: "Akash Singh"
        },
        {
          id: "t4",          name: "Dr Amit Kumar",          date: "Apr 2024",          title: "Exceptional Service and Taste",          quote: "Being a regular, I appreciate the consistent quality and friendly service. New Gunjan has become a staple for all our family gatherings. Simply fantastic!",          tag: "Regular Patron",          avatarSrc: "http://img.b2bpic.net/free-photo/young-man-with-beard-wearing-blue-shirt-glasses-isolated-grey-wall_231208-1647.jpg",          avatarAlt: "Dr Amit Kumar"
        },
        {
          id: "t5",          name: "Rahul Verma",          date: "May 2024",          title: "Authenticity You Can Taste",          quote: "If you're looking for truly authentic Indian food and sweets, look no further. New Gunjan captures the essence of traditional recipes perfectly. I'm a huge fan!",          tag: "Food Lover",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-happy-man_23-2148419618.jpg",          avatarAlt: "Rahul Verma"
        }
      ]}
      title="Customer Love"
      description="Trusted by local families for over 50 years"
    />
  </div>

  <div id="festivals" data-section="festivals">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Diwali Boxes",          description: "Hand-picked assortment for festivals.",          imageSrc: "http://img.b2bpic.net/free-photo/female-model-posing-with-gift-box_114579-18643.jpg",          imageAlt: "Festival box"},
        {
          title: "Wedding Sweets",          description: "Custom orders for grand celebrations.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-heart-shaped-gift-box-with-delicious-macarons-dark-icy-background_140725-143475.jpg",          imageAlt: "Wedding sweets"},
        {
          title: "Corporate Gifting",          description: "Professional packs for partners.",          imageSrc: "http://img.b2bpic.net/free-photo/dried-fruits-nuts-wooden-bag-with-bottle-wine_114579-30033.jpg",          imageAlt: "Corporate gift"},
      ]}
      title="Make Every Festival Sweeter"
      description="Celebrate life with our premium gifting solutions."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      text="Visit Once, Crave Forever. Open daily 9AM - 10PM."
      buttons={[
        {
          text: "WhatsApp Now",          href: "https://wa.me/yournumber"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Story",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
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