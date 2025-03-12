"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  ImageIcon,
  Star,
  CreditCard,
  Layers,
  Settings,
  Mail,
} from "lucide-react";

import { Button } from "@/components/button/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar/Avatar";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card/index";
import { Switch } from "@/src/components/ui";

export default function CardDemo() {
  const [animationVisible, setAnimationVisible] = useState({
    fadeIn: true,
    slideUp: true,
    scale: true,
    bounce: true,
    flip: true,
    stagger: true,
  });
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Card Variants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "default",
              "outline",
              "filled",
              "elevated",
              "glass",
              "destructive",
              "success",
              "info",
              "warning",
            ].map((item) => (
              <Card
                key={item}
                variant={
                  item as
                    | "default"
                    | "outline"
                    | "filled"
                    | "elevated"
                    | "glass"
                    | "destructive"
                    | "success"
                    | "info"
                    | "warning"
                }
              >
                <CardHeader>
                  <CardTitle
                    className={`${
                      item === "filled" ||
                      item === "destructive" ||
                      item === "success" ||
                      item === "info" ||
                      item === "warning"
                        ? "text-white"
                        : "text-black"
                    } capitalize`}
                  >
                    {item} Card
                  </CardTitle>
                  <CardDescription
                    className={`${
                      item === "filled" ||
                      item === "destructive" ||
                      item === "success" ||
                      item === "info" ||
                      item === "warning"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    This is the {item} card style
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Cards can contain any content, including text, images, and
                    actions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Submit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Hover Effects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "scale",
              "elevate",
              "glow",
              "border",
              "background",
              "rotate",
              "tilt",
              "slideUp",
              "pulse",
              "gradient",
              "textColor",
              "borderGlow",
              "zoom",
              "shadowPop",
              "swing",
              "neon",
              "bounce",
              "shake",
              "invert",
              "fadeText",
              "slideLeft",
              "slideRight",
              "slideDown",
              "flicker",
              "wave",
              "colorShift",
              "slideBorderTop",
              "slideBorderBottom",
              "slideBorderLeft",
              "slideBorderRight",
            ].map((item) => (
              <Card
                hover={
                  item as
                    | "scale"
                    | "elevate"
                    | "glow"
                    | "border"
                    | "background"
                    | "rotate"
                    | "tilt"
                    | "slideUp"
                    | "pulse"
                    | "gradient"
                    | "textColor"
                    | "borderGlow"
                    | "zoom"
                    | "shadowPop"
                    | "swing"
                    | "neon"
                    | "bounce"
                    | "shake"
                    | "invert"
                    | "slideBorderTop"
                    | "slideBorderBottom"
                    | "slideBorderLeft"
                    | "slideBorderRight"
                    | "fadeText"
                    | "slideLeft"
                    | "slideRight"
                    | "slideDown"
                    | "flicker"
                    | "wave"
                    | "colorShift"
                }
                interactive={true}
                key={item}
              >
                <CardHeader>
                  <CardTitle>{item} on Hover</CardTitle>
                  <CardDescription>
                    The card effect on hover is {item}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>card content goes here</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Initial render Animation Variants
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {Object.keys(animationVisible).map((key) => (
              <div key={key} className="flex items-center space-x-2">
                <Switch
                  id={key}
                  checked={
                    animationVisible[key as keyof typeof animationVisible]
                  }
                  onCheckedChange={(checked) =>
                    setAnimationVisible({
                      ...animationVisible,
                      [key]: checked,
                    })
                  }
                />
                <label htmlFor={key} className="capitalize">
                  {key}
                </label>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {animationVisible.fadeIn && (
                <Card animationVariant="fadeIn">
                  <CardHeader>
                    <CardTitle>Fade In</CardTitle>
                    <CardDescription>Simple fade in animation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card fades in smoothly when it appears.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {animationVisible.slideUp && (
                <Card animationVariant="slideUp">
                  <CardHeader>
                    <CardTitle>Slide Up</CardTitle>
                    <CardDescription>Card slides up into view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card slides up from below when it appears.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {animationVisible.scale && (
                <Card animationVariant="scale">
                  <CardHeader>
                    <CardTitle>Scale</CardTitle>
                    <CardDescription>Card scales into view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card scales up when it appears.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {animationVisible.bounce && (
                <Card animationVariant="bounce">
                  <CardHeader>
                    <CardTitle>Bounce</CardTitle>
                    <CardDescription>Card bounces into view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card bounces in with a spring effect.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {animationVisible.flip && (
                <Card animationVariant="flip">
                  <CardHeader>
                    <CardTitle>Flip</CardTitle>
                    <CardDescription>Card flips into view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card flips into view with a rotation effect.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {animationVisible.stagger && (
                <Card animationVariant="stagger">
                  <CardHeader>
                    <CardTitle>Stagger</CardTitle>
                    <CardDescription>
                      Staggered children animation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="p-2 bg-muted rounded"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          Item {i}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Pricing Card */}
            <Card
              border="medium"
              rounded="xl"
              hover="bounce"
              interactive={true}
            >
              <CardHeader>
                {/* <Badge className="w-fit mb-2">Popular</Badge> */}
                <p className="w-fit mb-2">Popular</p>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent spacing="loose">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <div className="space-y-2">
                  {[
                    "10 users",
                    "20GB storage",
                    "Email support",
                    "API access",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* User Card */}
            <Card variant="glass" hover="colorShift" interactive={true}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>Account details</CardDescription>
                  </div>
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent spacing="tight">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Account Status</h4>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Active</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Progress</h4>
                    {/* <Progress value={75} className="h-2" /> */}
                    <p>progress bar</p>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      75% Complete
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Membership</h4>
                    {/* <Badge variant="secondary">Premium</Badge> */}
                    <p>Premium</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter border="top">
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </CardFooter>
            </Card>

            {/* Product Card */}
            <Card
              size="sm"
              rounded="xl"
              hover="scale"
              interactive={true}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-t-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-3 right-3">
                  <p className="py-1 px-3 rounded-full bg-black/70 hover:bg-black/70 text-white">
                    New
                  </p>
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle size="sm">Wireless Headphones</CardTitle>
                  <span className="font-bold">$129.99</span>
                </div>
                <CardDescription>Premium noise cancelling</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <div className="flex items-center text-sm text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1 text-muted-foreground">(128)</span>
                </div>
                <Button className="w-full mt-2">Add to Cart</Button>
              </CardFooter>
            </Card>

            {/* Stat Card */}
            <Card variant="elevated" animationVariant="bounce" hover={"swing"}>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>Last 30 days performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">
                      Revenue
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">$24,563</span>
                      <span className="ml-2 text-xs text-green-500">+12%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">Users</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">1,234</span>
                      <span className="ml-2 text-xs text-green-500">+8%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">
                      Orders
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">826</span>
                      <span className="ml-2 text-xs text-green-500">+3%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">
                      Conversion
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">4.6%</span>
                      <span className="ml-2 text-xs text-red-500">-1%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Report
                </Button>
              </CardFooter>
            </Card>

            {/* Integration Card */}
            <Card border="none" rounded="full" variant="outline" hover="border">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>API Integration</CardTitle>
                    <CardDescription>Connect your services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {["Stripe", "GitHub", "Slack"].map((service, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center justify-center"
                    >
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mb-1">
                        {i === 0 ? (
                          <CreditCard className="h-4 w-4" />
                        ) : i === 1 ? (
                          <Sparkles className="h-4 w-4" />
                        ) : (
                          <Mail className="h-4 w-4" />
                        )}
                      </div>
                      <span className="text-xs">{service}</span>
                    </Button>
                  ))}
                </div>
                {/* <Separator className="my-4" /> */}
                <hr />
                <div className="space-y-2">
                  <p className="text-sm">
                    Connect your favorite tools to streamline your workflow.
                  </p>
                  <div className="text-sm flex items-center text-muted-foreground">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    <span>10 integrations available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Explore Integrations</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
