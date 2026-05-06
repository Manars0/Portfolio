import React from "react";

type Props = {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
};

export function FilterMenu({ filters, active, onChange }: Props) {
  return (
    <div className="sticky top-0 z-20 border-b border-neutral-200/60 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px]">
      <nav className="flex flex-wrap gap-x-8 gap-y-3 px-5 py-5 md:px-8 lg:px-12 xl:px-16">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={`relative pb-2 text-[14px] transition-colors tracking-tight ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {filter}
              <span
                className={`absolute left-0 right-0 -bottom-px h-[2px] transition-all ${
                  isActive ? "bg-[#E85D2A]" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
