/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CreativeService, VisionPillar } from "./types";

export const BRAND_STORY = {
  headline: "Where Ink Finds Wings",
  subtitle: "Shadows & Scripts",
  intro: "We are an elite creative studio and visual arts sanctuary. We don't just draft copy or capture footage; we summon worlds. Combining the meticulous cadence of traditional writing with the visceral depth of modern cinematography, we create visual and textual ecosystems that refuse to be ignored.",
  philosophy: "In a world saturated with digital noise, we believe in the gravity of the quiet, the resonance of the deliberate, and the visual symphony that emerges when light plays with shadow.",
  founded: "Est. MMXXVI",
  location: "Midnight Studio Node",
};

export const VISION_PILLARS: VisionPillar[] = [
  {
    title: "The Script (The Ink)",
    quote: "Words are the architects of the unseen.",
    description: "Every visual masterpiece begins as a whisper of ink. We treat scripts, poetry, and narratives as the absolute, unshakable architecture of all creative expression. A beautiful frame is hollow without a soul; a brilliant script gives it wings."
  },
  {
    title: "The Shadow (The Lens)",
    quote: "Light defines the shape, but shadow reveals the soul.",
    description: "We work in the liminal space where contrast is highest. Through cinematic camera work, graphic depth, and precise photography, we seek out the textures and tones that reveal the truth of a subject. We don't just document; we illuminate."
  },
  {
    title: "The Alchemy (The Union)",
    quote: "True art lives where the word and the image collide.",
    description: "By binding poetry with design, storytelling with cinematography, and brand architecture with human truth, we generate work that is cohesive, powerful, and timeless. This is where stories rise, transformed."
  }
];

export const CREATIVE_SERVICES: CreativeService[] = [
  {
    id: "poetry",
    title: "Poetry & Spoken Word",
    tagline: "The Alchemy of Breath and Syllable",
    description: "Spoken and written compositions that capture the unuttered essence of the human experience. We craft custom poetry, bespoke spoken word audio pieces, and conceptual copywriting that strikes with raw visceral truth.",
    iconName: "Feather",
    deliverables: [
      "Bespoke poetic compositions",
      "Audio-visual spoken word scripts",
      "Conceptual narrative copy",
      "Anthology & manuscript editing"
    ]
  },
  {
    id: "storytelling",
    title: "Immersive Storytelling",
    tagline: "Spanning the Chasm of Imagination",
    description: "Multi-dimensional narrative construction for books, screenplays, digital archives, and brand worlds. We design complex lore, compelling characters, and story bibles that captivate and retain your audience's deepest attention.",
    iconName: "BookOpen",
    deliverables: [
      "Screenplays & scriptwriting",
      "Brand universe development & lore",
      "Character design & dialogue",
      "Interactive digital narrative design"
    ]
  },
  {
    id: "photography",
    title: "Fine Art Photography",
    tagline: "Capturing Shadows, Painting Lights",
    description: "Editorial, high-contrast, and deeply authentic portrait and atmospheric photography. Our style is cinematic, working with natural shadows, grain, and stark lighting to find the quiet, powerful poetry in any subject.",
    iconName: "Camera",
    deliverables: [
      "Editorial & fashion portraiture",
      "Product & conceptual still-life",
      "Album art & creative visuals",
      "Cinematic street & landscape documentation"
    ]
  },
  {
    id: "videography",
    title: "Cinematic Videography",
    tagline: "Sculpting in Time and Motion",
    description: "Art-house style trailers, documentary reels, artistic music visualizers, and sensory video essays. We translate concepts into fluid, high-end motion pictures that carry deep emotional gravity and premium production values.",
    iconName: "Film",
    deliverables: [
      "Artistic video visualizers & music films",
      "Brand documentaries & mini-films",
      "Premium short-form cinematic reels",
      "Post-production & atmospheric grading"
    ]
  },
  {
    id: "graphic-design",
    title: "High-Concept Graphic Design",
    tagline: "Geometry of the Unseen",
    description: "Editorial layouts, high-impact poster designs, and striking print and digital assets. We fuse Swiss grid systems with dark, expressive layouts to create stunning graphic assets that marry structural logic with artistic beauty.",
    iconName: "Layers",
    deliverables: [
      "Editorial & book layout design",
      "Exhibition & art poster series",
      "Digital experience layouts",
      "Fine print & merchandise styling"
    ]
  },
  {
    id: "branding",
    title: "Premium Identity & Branding",
    tagline: "The Soul-Signature of a Brand",
    description: "For visionary creators, labels, and creative entities. We craft custom typography, visual systems, and luxury brand assets that articulate your spirit clearly, ensuring your brand stands out with absolute authority.",
    iconName: "Sparkles",
    deliverables: [
      "Creative direction & brand soul-mapping",
      "Custom brand typography & wordmarks",
      "Brand guidelines & asset libraries",
      "Premium stationery & collateral design"
    ]
  }
];

export const ARTISTIC_WORKS = [
  {
    title: "Epitaph of a Sigh",
    category: "Poetry & Video",
    year: "2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Subterranean Whispers",
    category: "Photography & Story",
    year: "2026",
    link: "#",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "The Weight of Ink",
    category: "Graphic Design",
    year: "2026",
    link: "#",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
  }
];
