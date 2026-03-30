export const mockAuth = {
  user: {
    id: "user_123",
    name: "Marouane Daouyny",
    email: "marouane@example.com",
    image: "https://github.com/marouane.png",
    plan: "Pro",
  },
  status: "authenticated",
};

export const mockSubscriptions = [
  { id: "sub_1", name: "Starter", price: "$29", features: ["1 Project", "Basic Analytics", "Community Support"] },
  { id: "sub_2", name: "Pro", price: "$99", features: ["Unlimited Projects", "Advanced AI Analytics", "24/7 Priority Support"], popular: true },
  { id: "sub_3", name: "Enterprise", price: "Custom", features: ["SLA Guarantee", "Custom Integrations", "Dedicated Account Manager"] },
];
