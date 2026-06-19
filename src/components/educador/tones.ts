import type { BrandTone } from "@/data/educador";

interface ToneStyle {
  /** soft tinted background */
  soft: string;
  /** text color */
  text: string;
  /** solid background */
  solid: string;
  /** thin top accent border */
  ring: string;
}

export const toneStyles: Record<BrandTone, ToneStyle> = {
  blue: {
    soft: "bg-brand-blue-50",
    text: "text-brand-blue-ink",
    solid: "bg-brand-blue",
    ring: "group-hover:border-brand-blue/40",
  },
  yellow: {
    soft: "bg-brand-yellow-50",
    text: "text-brand-amber",
    solid: "bg-brand-yellow",
    ring: "group-hover:border-brand-yellow/50",
  },
  red: {
    soft: "bg-brand-red-50",
    text: "text-brand-red-ink",
    solid: "bg-brand-red",
    ring: "group-hover:border-brand-red/40",
  },
  green: {
    soft: "bg-brand-green-50",
    text: "text-brand-green-ink",
    solid: "bg-brand-green",
    ring: "group-hover:border-brand-green/40",
  },
};
