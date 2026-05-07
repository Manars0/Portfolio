import React from "react";
import tawafuqImg from "../imports/tawafuq.png";
import postImg from "../imports/post.png";
import msImg from "../imports/ms.png";
import dsImg from "../imports/ds.png";
import ksuImg from "../imports/ksu.png";
import ksudsImg from "../imports/ksuds.png";
import skinCareImg from "../imports/skinCare.gif";
import scImg from "../imports/sc.png";
import smartCommunityImg from "../imports/SmartCommunity.gif";
import downloadImg from "../imports/download.gif";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ProjectSection, type Project } from "./components/ProjectSection";

const projects: Project[] = [
  {
    id: "0",
    number: "01",
    title: "Twafuq Platform.",
    category: "FRONTEND",
    description:
      "A web-based platform developed during a hackathon, focused on simplifying user interactions through clean UI and intuitive flows. The experience was designed to reduce friction, improve accessibility, and deliver a clear, goal-driven journey for users within a limited timeframe.",
    tools: ["Figma", "React", "GitHub", "Vercel"],
    image: tawafuqImg,
    imageAlt: "Finance app mockup on phone",
    link: "https://twafuq-builathon.vercel.app/",
    hasLink: true,
    hasDesignDetails: false,
    designDetails: undefined,
  },
  {
    id: "1",
    number: "02",
    title: "Social Media Carousel Design.",
    category: "DESIGN",
    description:
      "A series of multi-slide social media posts designed to communicate ideas in a structured and engaging format. The layouts focus on visual hierarchy, clarity, and storytelling across slides to guide users smoothly from introduction to key message.",
    tools: ["Figma", "Photoshop"],
    image: postImg,
    imageAlt: "Job search app screens",
    link: "#",
    hasLink: false,
    hasDesignDetails: false,
    designDetails: undefined,
  },
  {
    id: "2",
    number: "03",
    title: "Move Smart Mobile App.",
    category: "UI/UX DESIGN",
    description:
      "A mobile app concept designed during Naqlthon, focused on improving transportation experiences through clear navigation, structured flows, and user-friendly interfaces. The design emphasizes usability, accessibility, and smooth interaction across key user journeys.",
    tools: ["Figma", "Photoshop", "Android Studio", "Google Maps API"],
    image: msImg,
    imageAlt: "Job search app screens",
    link: "https://www.figma.com/proto/O99TOw7AwicB6kJetMXHTm/Naqlthon?node-id=36-1458&p=f&t=ENXig5Rq4B0bGZl9-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A90",
    hasLink: true,
    hasDesignDetails: true,
    designDetails: [
      {
        title: "Design System",
        description:
          "A design system built around clarity, movement, and real-time interaction, reflecting the dynamic nature of transportation services.n/The color palette focuses on cool tones such as blue and green to represent trust, safety, and efficiency, while accent colors are used to highlight key actions and live updates.n/The system is designed to support quick decision-making, clear navigation, and a seamless user experience in time-sensitive scenarios.",
        image: dsImg,
      },
    ],
  },
  {
    id: "3",
    number: "04",
    title: "Banking Mobile App UI.",
    category: "UI/UX DESIGN",
    description:
      "A modern banking app interface designed to present financial information in a clear, structured, and accessible way. The UI focuses on simplifying complex data through intuitive layouts, strong hierarchy, and a clean visual system.",
    tools: ["Figma", "Photoshop"],
    image: ksuImg,
    imageAlt: "Job search app screens",
    link: "https://www.figma.com/make/1i3RTgS3M8o2pC21AUCTF1/Luxury-Skincare-Store-Design?t=dWGE8RZY51o7WURQ-0&fullscreen=1",
    hasLink: true,
    hasDesignDetails: true,
    designDetails: [
      {
        title: "Design System",
        description:
          "A structured design system focused on trust, stability, and clarity, aligning with the expectations of financial products.n/A deep green palette was chosen to represent security, growth, and reliability, supported by neutral tones to maintain balance and readability. Accent colors are used carefully to highlight transactions, alerts, and key financial actions without overwhelming the user.n/The system ensures that complex financial data is presented in a clear, accessible, and user-friendly way.",
        image: ksudsImg,
      },
    ],
  },
  {
    id: "4",
    number: "05",
    title: "Luxury Skincare Store Design.",
    category: "UI/UX DESIGN",
    description:
      "A clean and modern e-commerce interface focused on showcasing skincare products with a premium feel. The design emphasizes visual clarity, spacing, and hierarchy to enhance product browsing and create a smooth shopping experience.",
    tools: ["Figma", "Photoshop"],
    image: skinCareImg,
    imageAlt: "Job search app screens",
    link: "https://www.figma.com/make/1i3RTgS3M8o2pC21AUCTF1/Luxury-Skincare-Store-Design?t=dWGE8RZY51o7WURQ-0&fullscreen=1",
    hasLink: true,
    hasDesignDetails: true,
    designDetails: [
      {
        title: "Design System",
        description:
          "A refined design system crafted to reflect a premium and calming skincare experience.n/Soft, neutral tones and light colors were selected to create a sense of cleanliness, elegance, and trust, while subtle accents help guide user attention without disrupting the minimal aesthetic.n/The system focuses on visual balance, whitespace, and product clarity to enhance browsing and create a smooth, luxurious user experience..",
        image: scImg,
      },
    ],
  },

  {
    id: "5",
    number: "06",
    title: "Smart Community Dashboard.",
    category: "DASHBOARDS",
    description:
      "A data-driven dashboard designed to provide real-time insights into community operations, including energy usage, maintenance tracking, and resident engagement.The interface focuses on transforming complex data into clear, actionable visuals through structured layouts, intuitive charts, and a consistent design system.Special attention was given to readability, hierarchy, and scalability, ensuring the dashboard remains efficient and easy to navigate across different data scenarios..",
    tools: ["Figma", "SQL", "Supabase"],
    image: smartCommunityImg,
    imageAlt: "Analytics dashboard on laptop",
    link: "https://www.figma.com/make/yWiPKDFlBvRHSuR2qqvDjf/Smart-Community-Dashboard?p=f&t=Wh6wctijZCoreJAu-0&fullscreen=1",
    hasLink: true,
  },
  {
    id: "6",
    number: "07",
    title: "Transportation Dashboard (Naqlthon).",
    category: "DASHBOARDS",
    description:
      "A dashboard interface designed to monitor and manage transportation-related data efficiently. The layout focuses on clarity, quick data scanning, and structured information display to support better decision-making.",
    tools: ["Figma", "SQL", "Supabase", "Google Maps API"],
    image: downloadImg,
    imageAlt: "Analytics dashboard on laptop",
    link: "https://www.figma.com/proto/O99TOw7AwicB6kJetMXHTm/Naqlthon?node-id=196-3351&p=f&t=ENXig5Rq4B0bGZl9-0&scaling=contain&content-scaling=fixed&page-id=122%3A682&starting-point-node-id=196%3A2872",
    hasLink: true,
  },
];

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#111] antialiased">
      <Header />
      <div className="mx-auto max-w-[1800px] lg:grid lg:grid-cols-[minmax(320px,38%)_minmax(0,1fr)]">
        <Sidebar />
        <main className="w-full lg:scroll-smooth">
          <div className="px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
