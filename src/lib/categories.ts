export const PROJECT_CATEGORIES = [
  {
    id: "terminal",
    label: "Terminal",
    description: "CLI tools and terminal utilities",
  },
  {
    id: "web",
    label: "Web",
    description: "Web applications and sites",
  },
  {
    id: "config",
    label: "Config",
    description: "Configuration and setup tools",
  },
] as const;

export type CategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

export function getCategoryLabel(categoryId: string): string {
  const category = PROJECT_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.label || categoryId;
}

export function getCategoryDescription(categoryId: string): string {
  const category = PROJECT_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.description || "";
}

export function getAllCategories() {
  return PROJECT_CATEGORIES;
}
