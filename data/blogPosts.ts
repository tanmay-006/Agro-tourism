export type BlogCategory = "Project Notes" | "Farm Stories" | "Sustainability" | "Technology";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  displayCategory: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "perfect-grain-guide-1121-basmati",
    title: "Why agro-tourism belongs in a computer engineering project",
    category: "Project Notes",
    displayCategory: "PROJECT NOTE",
    excerpt: "Root & Rise turns a rural tourism idea into a frontend journey that connects people, farms, and practical technology.",
    image: "/images/farm.jpeg",
    featured: true,
    content: `
# Why agro-tourism belongs in a computer engineering project

Root & Rise is a frontend concept for discovering farm stays, learning from growers, and finding local produce. The project shows how software can make rural experiences easier to understand without pretending to replace the people who host them.

## From idea to interface
The homepage introduces the problem, while the supporting pages demonstrate experiences, local produce, technology, sustainability, and a mock booking flow.

## What is intentionally mocked
Availability, payments, inventory, and sensor data are represented as demo states. A future backend could connect those interfaces to real farms and verified hosts.
    `,
  },
  {
    slug: "global-rice-market-forecast-2024",
    title: "Designing a respectful digital farm experience",
    category: "Farm Stories",
    displayCategory: "FARM STORY",
    excerpt: "A good agro-tourism platform starts with the host story: place, season, people, and the boundaries of a working farm.",
    image: "/images/about-hero.jpg",
    content: `
# Designing a respectful digital farm experience

A farm is not a theme park. Root & Rise uses clear descriptions, small-group activities, and host-led stories to help visitors arrive with realistic expectations.

## What guests should see
Visitors can explore a field walk, a kitchen workshop, a seed library, or a slow-living craft session. Each activity explains its duration, location, and community value before a visitor sends a request.

## The next step
A production service would verify hosts, publish accessibility information, and let communities control which stories and images they share.
    `,
  },
  {
    slug: "soil-to-soul-regenerative-farming",
    title: "Making soil health part of the visitor story",
    category: "Sustainability",
    displayCategory: "SUSTAINABILITY",
    excerpt: "Sustainability becomes more memorable when visitors can see water care, crop diversity, and soil stewardship in practice.",
    image: "/images/grain.jpeg",
    content: `
# Making soil health part of the visitor story

Agro-tourism can make sustainable farming understandable through small, human moments: a seed-saving lesson, a water-wise irrigation explanation, or a walk through a diverse field.

## Beyond a green label
The project avoids treating sustainability as a marketing badge. Future versions could show measurable indicators such as water saved, local spending, and farmer income.
    `,
  },
  {
    slug: "science-of-rice-aging-aroma-length",
    title: "A simple technology stack for a complex place",
    category: "Technology",
    displayCategory: "TECHNOLOGY",
    excerpt: "Sensors, dashboards, maps, and thoughtful frontend design can work together to support—not obscure—the farm story.",
    image: "/images/about-sourcing-1.jpg",
    content: `
# A simple technology stack for a complex place

The Root & Rise demo uses a responsive Next.js interface to bring together stays, experiences, local produce, and a contact flow.

## Future integrations
IoT sensors could share soil and weather signals, a cloud service could manage host calendars, and recommendation tools could match guests with activities. Each integration would need consent, secure data handling, and a low-bandwidth option.
    `,
  },
  {
    slug: "exporting-excellence-quality-standards",
    title: "What a responsible booking flow should explain",
    category: "Project Notes",
    displayCategory: "PROJECT NOTE",
    excerpt: "A booking form should set expectations clearly: what is available, what is indicative, and what still needs a host conversation.",
    image: "/images/about-sourcing-2.png",
    content: `
# What a responsible booking flow should explain

The contact page is a booking demo, not a live reservation system. It collects an interest, preferred date, and group size so a future host could follow up.

## Why clarity matters
Labelling mock prices, demo availability, and future payment features helps visitors trust the interface. A production version would add confirmations, cancellation terms, and secure payments only after the host workflow is ready.
    `,
  },
  {
    slug: "traditional-basmati-recipes-northern-india",
    title: "Local produce can be a learning experience",
    category: "Farm Stories",
    displayCategory: "LOCAL PRODUCE",
    excerpt: "A small produce catalogue can connect a visitor’s meal to the people, season, and place that made it possible.",
    image: "/images/about-sourcing-3.png",
    content: `
# Local produce can be a learning experience

The local-produce section is a mock marketplace for seasonal grains, preserves, spices, and seed cards. Its purpose is to show how discovery and learning could sit alongside a farm visit.

## Future scope
Provenance details, pickup options, producer profiles, and fair pricing could turn the demo catalogue into a useful community marketplace.
    `,
  },
];
