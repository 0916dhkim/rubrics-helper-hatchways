export const Categories = [
  ["Code organization", "readability"],
  ["Code organization", "maintainability"],
  ["Code organization", "consistency"],
  ["Attention to detail", "cleanup"],
  ["Attention to detail", "consistency"],
  ["Attention to detail", "quality"],
  ["Frontend", "react best practices"],
  ["Frontend", "general best practices"],
  ["Frontend", "performance"],
  ["Backend", "REST API"],
  ["Backend", "security"],
  ["Backend", "performance"],
] as const;

type MajorCategory = typeof Categories[number][0];

export const MajorCategories = Array.from(
  Categories.reduce<Set<MajorCategory>>((agg, value) => {
    agg.add(value[0]);
    return agg;
  }, new Set())
);

export type Category = typeof Categories[number];

export type Note = {
  privateNote: string;
  publicNote: string;
  link: string;
  category: Category;
};
