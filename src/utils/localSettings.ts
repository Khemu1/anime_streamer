export function getPrimaryAccentClass(accent: string): string {
  const accentMap: Record<string, string> = {
    Miruro: "miruro",
    Tomato: "tomato",
    "Royal Blue": "royal-blue",
    Orange: "orange",
    "Sea Green": "sea-green",
    "Hot Pink": "hot-pink",
  };

  return accentMap[accent] || "miruro";
}

export function getAsideLayOut(layout: string): string {
  const layoutMap: Record<string, string> = {
    Float: "float",
    Dock: "dock",
  };

  return layoutMap[layout] || "w-full";
}
