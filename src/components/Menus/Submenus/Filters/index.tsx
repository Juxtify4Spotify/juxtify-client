import { useState } from "react";
import CategoryFilter from "../../../Filters/Category";

export default function FiltersSubmenu() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    {
      title: "All",
    },
    {
      title: "Music",
    },
    {
      title: "Podcasts",
    },
    { title: "Audiobooks" },
  ];

  const handleFilterClick = (title: string) => {
    if (title === activeFilter) {
      setActiveFilter("All");
      return;
    }
    setActiveFilter(title);
  };

  return (
    <div className="flex gap-4">
      {filters.map(({ title }, index) => (
        <CategoryFilter
          key={`titke-${index}`}
          title={title}
          active={title === activeFilter}
          onClick={() => handleFilterClick(title)}
        ></CategoryFilter>
      ))}
    </div>
  );
}
