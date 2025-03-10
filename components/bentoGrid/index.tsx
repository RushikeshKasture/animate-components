"use client";

import { useState } from "react";
import { BentoGrid, type BentoGridItem, type AnimationType } from "./BentoGrid";
import {
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Rocket,
  Globe,
  Code,
  Layers,
  Palette,
  BookOpen,
  Coffee,
  MessageSquare,
  Users,
  Heart,
  Star,
  Clock,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";
import { Slider } from "@/src/components/ui/slider";

export default function BentoGridDemo() {
  const [variant, setVariant] = useState<
    | "default"
    | "featured"
    | "masonry"
    | "compact"
    | "wide"
    | "mosaic"
    | "pinterest"
    | "dashboard"
    | "hero"
    | "asymmetric"
    | "magazine"
    | "gallery"
    | "custom"
  >("default");
  const [animation, setAnimation] = useState<AnimationType>("slideUp");
  const [hoverEffect, setHoverEffect] = useState<
    | "none"
    | "scale"
    | "glow"
    | "border"
    | "lift"
    | "rippleBorder"
    | "shake"
    | "wobble"
  >("none");
  const [gap, setGap] = useState<"none" | "sm" | "md" | "lg">("md");
  const [borderRadius, setBorderRadius] = useState<
    "none" | "sm" | "md" | "lg" | "full"
  >("md");
  const [padding, setPadding] = useState<"none" | "sm" | "md" | "lg">("md");
  const [shadow, setShadow] = useState<"none" | "sm" | "md" | "lg">("md");
  const [animationDuration, setAnimationDuration] = useState(0.5);
  const [staggerDelay, setStaggerDelay] = useState(0.5);
  const [aspectRatio, setAspectRatio] = useState<
    | "auto"
    | "square"
    | "video"
    | "portrait"
    | "ultrawide"
    | "panoramic"
    | "golden"
    | "custom"
  >("auto");

  const items: BentoGridItem[] = [
    {
      id: 1,
      title: "AI-Powered Insights",
      description:
        "Leverage machine learning to extract insights from your data",
      icon: <Cpu className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30027164/pexels-photo-30027164/free-photo-of-scenic-waterfront-view-with-person-standing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      size: "featured",
      gridArea: "1 / 1 / 3 / 3", // For asymmetric layouts
    },
    {
      id: 2,
      title: "Lightning Fast Performance",
      description: "Optimized for speed and efficiency across all devices",
      icon: <Zap className="h-6 w-6" />,
      size: "medium",
      customAspectRatio: "16/9", // Custom aspect ratio
    },
    {
      id: 3,
      title: "Real-time Analytics",
      description: "Monitor your metrics as they happen with live updates",
      icon: <Activity className="h-6 w-6" />,
      size: "small",
    },
    {
      id: 4,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your most sensitive data",
      icon: <ShieldCheck className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30999314/pexels-photo-30999314/free-photo-of-scenic-palm-lined-road-in-hawaii-with-misty-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      size: "wide",
    },
    {
      id: 5,
      title: "Scalable Infrastructure",
      description: "Grows with your business from startup to enterprise",
      icon: <Rocket className="h-6 w-6" />,
      size: "small",
    },
    {
      id: 6,
      title: "Global CDN",
      description: "Content delivery optimized for users around the world",
      icon: <Globe className="h-6 w-6" />,
      size: "small",
    },
    {
      id: 7,
      title: "Developer API",
      description: "Extensive API for custom integrations and workflows",
      icon: <Code className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30865805/pexels-photo-30865805/free-photo-of-traditional-chinese-temple-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      size: "tall",
      customAspectRatio: "9/16", // Tall aspect ratio
    },
    {
      id: 8,
      title: "Modular Architecture",
      description: "Flexible components that adapt to your specific needs",
      icon: <Layers className="h-6 w-6" />,
      size: "medium",
    },
    {
      id: 9,
      title: "Beautiful UI",
      description: "Stunning interfaces designed for optimal user experience",
      icon: <Palette className="h-6 w-6" />,
      size: "large",
    },
  ];

  const asymmetricItems: BentoGridItem[] = [
    {
      id: 1,
      title: "Featured Article",
      description: "This is the main feature that spans multiple grid cells",
      icon: <Cpu className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30932158/pexels-photo-30932158/free-photo-of-charming-flower-shop-with-blooming-display.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "1 / 1 / 3 / 3", // row-start/col-start/row-end/col-end
      customAspectRatio: "4/3",
    },
    {
      id: 2,
      title: "Secondary Feature",
      description: "A wide item that spans two columns",
      icon: <Zap className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30993125/pexels-photo-30993125/free-photo-of-elegant-woman-with-pink-fur-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "1 / 3 / 2 / 5",
      customAspectRatio: "2/1",
    },
    {
      id: 3,
      title: "Quick Update",
      description: "A small item for brief content",
      icon: <Activity className="h-6 w-6" />,
      gridArea: "2 / 3 / 3 / 4",
    },
    {
      id: 4,
      title: "Security Notice",
      description: "Important security information",
      icon: <ShieldCheck className="h-6 w-6" />,
      gridArea: "2 / 4 / 3 / 5",
    },
    {
      id: 5,
      title: "New Release",
      description: "Latest product update",
      icon: <Rocket className="h-6 w-6" />,
      gridArea: "3 / 1 / 4 / 2",
    },
    {
      id: 6,
      title: "Global Announcement",
      description: "News affecting all users",
      icon: <Globe className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/5593531/pexels-photo-5593531.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "3 / 2 / 4 / 4",
      customAspectRatio: "2/1",
    },
    {
      id: 7,
      title: "Developer Update",
      description: "Changes to our API and developer tools",
      icon: <Code className="h-6 w-6" />,
      gridArea: "3 / 4 / 5 / 5",
      customAspectRatio: "1/2",
    },
    {
      id: 8,
      title: "System Architecture",
      description: "How our platform is built",
      icon: <Layers className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30646422/pexels-photo-30646422/free-photo-of-vintage-car-and-hot-air-balloons-in-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "4 / 1 / 5 / 4",
      customAspectRatio: "3/1",
    },
  ];

  const magzineItems: BentoGridItem[] = [
    {
      id: 1,
      title: "The Future of Design Systems",
      description:
        "How modern design systems are evolving to meet the needs of complex applications and diverse teams",
      icon: <BookOpen className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30743611/pexels-photo-30743611/free-photo-of-vintage-car-on-ocean-drive-at-colony-hotel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "1 / 1 / 4 / 4", // Main feature article
      customAspectRatio: "4/3",
    },
    {
      id: 2,
      title: "Interview: Leading UX Designer",
      description:
        "An exclusive interview with one of the industry's most influential designers",
      icon: <Coffee className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30918119/pexels-photo-30918119/free-photo-of-dramatic-view-of-empire-state-through-manhattan-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "1 / 4 / 3 / 7", // Secondary feature
      customAspectRatio: "3/2",
    },
    {
      id: 3,
      title: "Upcoming Events & Conferences",
      description:
        "Mark your calendar for these must-attend design and development events",
      icon: <Clock className="h-6 w-6" />,
      gridArea: "3 / 4 / 4 / 7", // Banner
      customAspectRatio: "3/1",
    },
    {
      id: 4,
      title: "Popular This Week",
      description: "The most-read articles and resources from our community",
      icon: <Star className="h-6 w-6" />,
      gridArea: "4 / 1 / 7 / 3", // Sidebar
      customAspectRatio: "2/3",
    },
    {
      id: 5,
      title: "Case Study: Redesigning a Banking App",
      description:
        "How one team transformed a complex financial app into a user-friendly experience",
      icon: <MessageSquare className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/30872675/pexels-photo-30872675/free-photo-of-scenic-view-of-colorful-houses-in-lake-como.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "4 / 3 / 6 / 5", // Content block
    },
    {
      id: 6,
      title: "Community Spotlight",
      description: "Celebrating the amazing work from our design community",
      icon: <Users className="h-6 w-6" />,
      image:
        "https://images.pexels.com/photos/20298975/pexels-photo-20298975/free-photo-of-exterior-of-a-japanese-cafe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      gridArea: "4 / 5 / 6 / 7", // Content block
    },
    {
      id: 7,
      title: "Subscribe to Our Newsletter",
      description:
        "Get the latest design news and resources delivered to your inbox weekly",
      icon: <Heart className="h-6 w-6" />,
      gridArea: "6 / 3 / 7 / 7", // Footer banner
      customAspectRatio: "4/1",
    },
  ];

  const handleAnimationChange = (value: string) => {
    setAnimation(value as AnimationType);
  };

  const handleVariantChange = (value: string) => {
    setVariant(
      value as
        | "default"
        | "featured"
        | "masonry"
        | "compact"
        | "wide"
        | "mosaic"
        | "pinterest"
        | "dashboard"
        | "hero"
        | "asymmetric"
        | "magazine"
        | "gallery"
        | "custom"
    );
  };

  const handleHoverEffectChange = (value: string) => {
    setHoverEffect(
      value as
        | "none"
        | "scale"
        | "glow"
        | "border"
        | "lift"
        | "rippleBorder"
        | "wobble"
        | "shake"
    );
  };

  const handleGapChange = (value: string) => {
    setGap(value as "none" | "sm" | "md" | "lg");
  };

  const handleBorderRadiusChange = (value: string) => {
    setBorderRadius(value as "none" | "sm" | "md" | "lg" | "full");
  };

  const handlePaddingChange = (value: string) => {
    setPadding(value as "none" | "sm" | "md" | "lg");
  };

  const handleShadowChange = (value: string) => {
    setShadow(value as "none" | "sm" | "md" | "lg");
  };

  const handleAnimationDurationChange = (value: number[]) => {
    setAnimationDuration(value[0]);
  };

  const handleStaggerDelayChange = (value: number[]) => {
    setStaggerDelay(value[0]);
  };

  const handleAspectRatioChange = (value: string) => {
    setAspectRatio(
      value as
        | "auto"
        | "square"
        | "video"
        | "portrait"
        | "ultrawide"
        | "panoramic"
        | "golden"
        | "custom"
    );
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Bento Grid Component</h1>
        <p className="text-muted-foreground">
          A customizable bento grid with various layouts and animations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <p>Grid Layout</p>
            <Select value={variant} onValueChange={handleVariantChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="masonry">Masonry</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="wide">Wide</SelectItem>
                <SelectItem value="mosaic">Mosaic</SelectItem>
                <SelectItem value="pinterest">Pinterest</SelectItem>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="hero">Hero</SelectItem>
                <SelectItem value="asymmetric">Asymmetric</SelectItem>
                <SelectItem value="magazine">Magazine</SelectItem>
                <SelectItem value="gallery">Gallery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Animation Type</p>
            <Select value={animation} onValueChange={handleAnimationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select animation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fade">Fade</SelectItem>
                <SelectItem value="slideUp">Slide Up</SelectItem>
                <SelectItem value="slideDown">Slide Down</SelectItem>
                <SelectItem value="slideLeft">Slide Left</SelectItem>
                <SelectItem value="slideRight">Slide Right</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
                <SelectItem value="stagger">Stagger</SelectItem>
                <SelectItem value="bounce">Bounce</SelectItem>
                <SelectItem value="flip">Flip</SelectItem>
                <SelectItem value="rotate">Rotate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Hover Effect</p>
            <Select value={hoverEffect} onValueChange={handleHoverEffectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select hover effect" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
                <SelectItem value="glow">Glow</SelectItem>
                <SelectItem value="border">Border</SelectItem>
                <SelectItem value="lift">Lift</SelectItem>
                <SelectItem value="rippleBorder">Ripple Border</SelectItem>
                <SelectItem value="shake">Shake</SelectItem>
                <SelectItem value="wobble">Wobble</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p>Gap</p>
            <Select value={gap} onValueChange={handleGapChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select gap" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Border Radius</p>
            <Select
              value={borderRadius}
              onValueChange={handleBorderRadiusChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select border radius" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
                <SelectItem value="full">Full</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Padding</p>
            <Select value={padding} onValueChange={handlePaddingChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select padding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p>Shadow</p>
            <Select value={shadow} onValueChange={handleShadowChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select shadow" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Aspect Ratio</p>
            <Select value={aspectRatio} onValueChange={handleAspectRatioChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select aspect ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="square">Square (1:1)</SelectItem>
                <SelectItem value="video">Video (16:9)</SelectItem>
                <SelectItem value="portrait">Portrait (3:4)</SelectItem>
                <SelectItem value="ultrawide">Ultrawide (21:9)</SelectItem>
                <SelectItem value="panoramic">Panoramic (3:1)</SelectItem>
                <SelectItem value="golden">Golden Ratio (1.618:1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Animation Duration: {animationDuration.toFixed(1)}s</p>
            <Slider
              value={[animationDuration]}
              min={0.1}
              max={2}
              step={0.1}
              onValueChange={handleAnimationDurationChange}
            />
          </div>

          <div className="space-y-2">
            <p>Stagger Delay: {staggerDelay.toFixed(1)}s</p>
            <Slider
              value={[staggerDelay]}
              min={0.05}
              max={0.5}
              step={0.05}
              onValueChange={handleStaggerDelayChange}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 p-12">
        <div className="flex flex-col gap-10 py-6">
          <p className="text-center  font-medium text-lg">Bento</p>
          <BentoGrid
            items={items}
            variant={variant}
            animationType={animation}
            animationDuration={animationDuration}
            animationStaggerChildren={staggerDelay}
            hoverEffect={hoverEffect}
            gap={gap}
            borderRadius={borderRadius}
            padding={padding}
            shadow={shadow}
            showImages={true}
            aspectRatio={aspectRatio}
          />
        </div>

        <div className="flex flex-col gap-10 py-6">
          <p className="text-center  font-medium text-lg">asymmetric</p>
          <BentoGrid
            items={asymmetricItems}
            variant="custom"
            customGridTemplateColumns="repeat(4, 1fr)"
            customGridTemplateRows="auto"
            gap="md"
            animationType="fade"
            hoverEffect="scale"
            showImages={true}
          />
        </div>

        <div className="flex flex-col gap-10 py-6">
          <p className="text-center font-medium text-lg">Magzine</p>
          <BentoGrid
            items={magzineItems}
            variant="custom"
            customGridTemplateColumns="repeat(6, 1fr)"
            customGridTemplateRows="auto"
            gap="md"
            animationType="stagger"
            animationStaggerChildren={0.1}
            hoverEffect="lift"
            showImages={true}
          />
        </div>
      </div>
    </div>
  );
}
