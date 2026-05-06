import React, { useMemo, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { ProjectSection, type Project } from "./components/ProjectSection";
import { FilterMenu } from "./components/FilterMenu";

const projects: Project[] = [
  {
    id: "1",
    number: "01",
    title: "Finch.",
    category: "UX DESIGN",
    description:
      "A calm budgeting app concept built during a 48-hour fintech hackathon, focused on mindful spending habits.",
    tools: ["Figma", "React", "Vercel"],
    image: "/src/imports/image.png",
    imageAlt: "Finance app mockup on phone",
    link: "https://twafuq-builathon.vercel.app/",
  },
  {
    id: "2",
    number: "02",
    title: "Pulse.",
    category: "DASHBOARDS",
    description:
      "Internal analytics dashboard MVP for a SaaS startup — turning raw event data into clear, actionable views.",
    tools: ["React", "Recharts", "SQL", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    imageAlt: "Analytics dashboard on laptop",
    link: "#",
  },
  {
    id: "3",
    number: "03",
    title: "Atlas.",
    category: "FRONTEND",
    description:
      "A frontend implementation of a location-aware travel app, built end-to-end as a portfolio MVP.",
    tools: ["React", "Tailwind", "Mapbox"],
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    imageAlt: "Travel app interface mockup",
    link: "#",
  },
  {
    id: "4",
    number: "04",
    title: "Hire.",
    category: "UX DESIGN",
    description:
      "An end-to-end redesign exploration for a job search platform, presented as part of a product design challenge.",
    tools: ["Figma", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1767449356630-c60094b1d1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    imageAlt: "Job search app screens",
    link: "#",
  },
];

export default function App() {
  const filters = ["All", "UX", "Frontend", "Dashboards"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    const categoryMap: Record<string, string> = {
      UX: "UX DESIGN",
      Frontend: "FRONTEND",
      Dashboards: "DASHBOARDS",
    };

    return projects.filter(
      (project) => project.category === categoryMap[activeFilter],
    );
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#111] antialiased">
      <div className="mx-auto max-w-[1800px] lg:grid lg:grid-cols-[minmax(320px,38%)_minmax(0,1fr)]">
        <Sidebar />
        <main className="w-full lg:h-screen lg:overflow-y-auto lg:scroll-smooth">
          <FilterMenu
            filters={filters}
            active={activeFilter}
            onChange={setActiveFilter}
          />
          <div className="px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
            {filteredProjects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="px-5 pb-12 text-[15px] text-neutral-500 md:px-8 lg:px-12 xl:px-16">
              No projects in this category yet.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
