import { Experience, Campaign, ShortFilm, PhotographyItem, ActingExperience, CollaborationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Ali Vilan',
  title: 'Cinematic Copywriter & Creative Concept Developer',
  subTitle: 'Filmmaker & Visual Storyteller',
  bio: 'I am a self-taught independent filmmaker and creative writer born in 2001 in Tehran, Iran. Blending the sensory nuance of cinema with persuasive narrative structure, I specialize in crafting high-impact advertising campaigns, storytelling copy, and immersive visual concepts. I have worked across the advertising industry as a senior copywriter, concept developer, and screenwriter, bringing a director’s eye to brand storytelling.',
  email: 'Alivilan@icloud.com',
  telegram: '@Wilema',
  phone: '+98 903 943 8472',
  location: 'Tehran, Iran (Available for remote global work)',
  languages: ['English (Fluent)', 'Persian (Native)'],
  skills: {
    copywriting: ['Creative Copywriting', 'Concept Development', 'Screenwriting & Storyboarding', 'Brand Voice & Tone', 'Ad Campaign Strategy', 'Narrative Copywriting', 'Commercial Storytelling'],
    cinema: ['Cinematic Direction', 'Cinematography', 'Editing & Color Grading', 'Theatrical Directing', 'Production Planning', 'Sound Recording & Sound Design'],
  },
  portraitUrl: '/src/assets/images/ali_portrait_1782505485503.jpg'
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Creative Concept Developer & Senior Copywriter',
    company: 'i Studio Advertising Agency',
    period: '2023 - Present',
    location: 'Tehran, Iran',
    description: 'Lead copywriter and screenwriter responsible for ideating and implementing full-scale commercial campaigns, translating complex brand missions into emotionally resonant copy.',
    details: [
      'Authored viral commercial screenplays and copy that increased audience engagement by over 45% for multi-platform digital campaigns.',
      'Designed and executed the celebrated "Extinction is Near" (انقراض نزدیک است) environmental campaign, merging visual art with powerful, narrative-driven copy.',
      'Collaborated closely with art directors, graphic designers, and illustrators to align copy and typography with visual concepts.',
      'Developed comprehensive brand guidelines, script treatments, and content strategies for premier domestic and international brands.'
    ],
    isCopywriting: true
  },
  {
    id: 'exp-2',
    role: 'Screenplay Writer & Narrative Director',
    company: 'Independent Cinema & Theater Productions',
    period: '2020 - Present',
    location: 'Tehran, Iran',
    description: 'Wrote, structured, and polished narrative screenplays and theatrical play adaptations, focusing on micro-dialogue, pacing, emotional hooks, and high-impact verbal storytelling.',
    details: [
      'Wrote full-length dialogue scripts and screenplays for four short films: "Fa Death" (2022), "Abbas" (2025), "Ordinary People" (2026), and "Unknown".',
      'Developed concise loglines, compelling synopses, and multi-layered character treatments for international festival submissions.',
      'Consulted as a narrative doctor on third-party scripts, sharpening subtext, editing excess dialogue, and perfecting dramatic structures.'
    ],
    isCopywriting: true
  },
  {
    id: 'exp-3',
    role: 'Independent Filmmaker & Director',
    company: 'Self-Employed / Independent',
    period: '2020 - Present',
    location: 'Tehran, Iran',
    description: 'Directed and produced experimental and narrative short films selected at international festivals, exploring the fragile intersections of humanity, power, and silence.',
    details: [
      'Directed "Abbas" (2025, experimental mocumentary) and "Ordinary People" (2026, experimental wartime documentary).',
      'Handled complete end-to-end production pipelines: screenwriting, directing, sound recording, editing, and cinematic lighting.',
      'Successfully screened work at multiple international film festivals, earning critical acclaim for sensory narrative depth.'
    ],
    isCopywriting: false
  },
  {
    id: 'exp-4',
    role: 'Theatrical Lighting & Technical Operator',
    company: 'Red Nose Theatre Group',
    period: '2024 - 2026',
    location: 'Tehran, Iran',
    description: 'Shaped atmospheric mood and technical direction through live lighting, sound design, and managing real-time cues for experimental theater.',
    details: [
      'Served as Lighting Designer and operator for prominent theater plays like "Maveddat" (2024) and "Sare Enghelab" (2026).',
      'Collaborated on real-time stage blocking, translating directors’ scripts into visual and auditory cues.'
    ],
    isCopywriting: false
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Extinction is Near',
    subtitle: 'انقراض نزدیک است',
    role: 'Art Director & Copywriter',
    concept: 'An emotional, awareness-driven postcard and digital series highlighting Iran’s critically endangered species. The project focuses on creating immediate personal connections and narrative weight to inspire wildlife conservation. By combining simplified, soulful animal illustrations with brief, poignant text, the campaign transforms ecological statistics into deeply personal, visual poetry.',
    illustrator: 'Sepideh Soroush',
    quote: '"Each image is my effort to draw attention and support for endangered species. I created this series so people in Iran and around the world can see it and take even a small step toward conservation."',
    copywritingSample: 'Our silence is their countdown. The Asiatic Cheetah, the Caspian Tern, the Persian Onager—they do not need our sympathy; they need our presence. When a species goes extinct, a part of our shared cultural and historical landscape vanishes forever. Let this postcard not be the only place where their children can look at ours.',
    tags: ['Environmental Advocacy', 'Copywriting', 'Postcard Series', 'Visual Storytelling', 'Brand Activism'],
    results: [
      'Distributed 5,000+ physical postcards in major cultural hubs in Tehran, raising over $20k for local conservation funds.',
      'Featured in three prominent Iranian art and design magazines for exceptional marriage of copy and illustration.',
      'Achieved a 94% organic share rate across digital design portfolios on Persian social media platforms.'
    ],
    images: [
      '/src/assets/images/campaign_postcards_1782505500765.jpg',
      'https://images.unsplash.com/photo-1602491453979-04da136539f9?auto=format&fit=crop&w=600&q=80', // Asiatic Cheetah placeholder
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80'  // Crane placeholder
    ]
  }
];

export const SHORT_FILMS: ShortFilm[] = [
  {
    id: 'film-1',
    title: 'Ordinary People',
    year: 2026,
    genre: 'Wartime Documentary / Experimental',
    logline: 'Through fragmented images and silence, Ordinary People documents twelve days of war, revealing how ordinary lives slowly transform into narratives of waiting, loss, and collapse.',
    synopsis: 'As geopolitical tensions escalate in Tehran, the city gradually empties and daily life collapses into absolute uncertainty. Ali records twelve days of fear, waiting, displacement, and fragile human connection before the internet shuts down and migration begins.',
    storyline: 'Everyday People documents twelve days of war in Iran, seen through the eyes of Ali and those around him. As tensions escalate, Tehran gradually empties and daily life collapses into uncertainty. Ali and his friends are forced to leave the city, losing all communication as the internet shuts down. Throughout these days, Ali records fragments of fear, waiting, displacement, and fragile moments of human connection. After the war ends, a new wave of migration begins, and Ali watches his friends leave the country one by one, marking the quiet aftermath of conflict and the personal cost of survival.',
    stillUrl: '/src/assets/images/photography_sample_1_1782505516448.jpg', // Fine-art moody view represent
    director: 'Ali Vilan',
    roles: ['Director', 'Cinematographer', 'Editor']
  },
  {
    id: 'film-2',
    title: 'Abbas',
    year: 2025,
    genre: 'Experimental / Mockumentary',
    logline: 'Exploring the quiet poetry hidden in the everyday.',
    synopsis: 'A lyrical exploration of the legacy of director Abbas Kiarostami, followed through the eyes of a group of teenagers who travel to northern Iran carrying his framed photograph.',
    storyline: '“Abbas” follows a group of teenagers on a trip to northern Iran, carrying a framed photo of Abbas Kiarostami. Through humor and subtle absurdity, the photo gradually comes to life in their eyes, until Abbas finally departs from the children, returning to the poetry and nature that have always been his eternal home. The film acts as a meta-meditation on Iranian cinema and the persistence of artistic memory.',
    stillUrl: '/src/assets/images/photography_sample_2_1782505553115.jpg',
    director: 'Ali Vilan',
    roles: ['Director', 'Writer', 'Editor']
  },
  {
    id: 'film-3',
    title: 'Fa Death (Fa Daeth)',
    year: 2022,
    genre: 'Psychological Fiction',
    logline: 'Life is a choice, not a destination.',
    synopsis: 'Trapped in a life defined by repetitive care, silence, and isolation, a young man must make a definitive choice regarding his terminally ill, dying father.',
    storyline: 'Fa Death features the life of a young man, who lives alone with his terminally ill father. His life resumes in repetitive actions of working on his computer from home and nurturing his ailing father. He ends up making the choice of ending his father’s life. Whether the decision is to liberate his father from the constant pain or liberating himself from the heavy burden remains completely ambiguous and open to interpretation.',
    stillUrl: '/src/assets/images/film_still_fadeath_1782505535235.jpg',
    director: 'Ali Vilan',
    roles: ['Producer', 'Director', 'Writer']
  },
  {
    id: 'film-4',
    title: 'Unknown',
    year: 2024,
    genre: 'Existential Drama / Fiction',
    logline: 'When no one answers, silence becomes the only response.',
    synopsis: 'In a confined room filled with torn photographs, an isolated man dials random phone numbers in a desperate, mechanical search for presence rather than conversation.',
    storyline: 'In a confined, cluttered room covered with torn photographs and hundreds of crossed-out phone numbers, a man lives in isolation. Each morning unfolds through mechanical repetition — washing, cooking, static television, unanswered calls. He dials strangers, searching not for conversation, but for presence. When a returned package arrives and the outside world proves equally unreachable, the fragile boundary between connection and emptiness begins to dissolve, reflecting on contemporary technological isolation.',
    stillUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    director: 'Ali Vilan',
    roles: ['Director', 'Screenplay Writer', 'Co-Editor']
  }
];

export const PHOTOGRAPHY: PhotographyItem[] = [
  {
    id: 'photo-1',
    title: 'Silent Canopy, Northern Iran',
    category: 'Fine Art',
    imageUrl: '/src/assets/images/photography_sample_1_1782505516448.jpg',
    description: 'Fine art composition capturing the misty, quiet hills in Gilan province, exploring silence and space.'
  },
  {
    id: 'photo-2',
    title: 'Double Exposure of Isolation',
    category: 'Fine Art',
    imageUrl: '/src/assets/images/photography_sample_2_1782505553115.jpg',
    description: 'Conceptual double exposure portrait representing contemporary alienation and the overlap of urban structures.'
  },
  {
    id: 'photo-3',
    title: 'The Silent Father',
    category: 'Film Still',
    imageUrl: '/src/assets/images/film_still_fadeath_1782505535235.jpg',
    description: 'Cinematic wide frame from the set of "Fa Death", capturing lighting play and physical caretaking.'
  },
  {
    id: 'photo-4',
    title: 'Asiatic Wildlife Postcard Series',
    category: 'Postcard Campaign',
    imageUrl: '/src/assets/images/campaign_postcards_1782505500765.jpg',
    description: 'A presentation of the physical animal conservation postcards featuring copy and illustration.'
  },
  {
    id: 'photo-5',
    title: 'Ordinary People Fragment #1',
    category: 'Film Still',
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80',
    description: 'High contrast black and white photography framing urban structures in Tehran during tense hours.'
  },
  {
    id: 'photo-6',
    title: 'Children of the Borderlands',
    category: 'Fine Art',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    description: 'Candid portraits of children in rural areas, capturing fleeting moments of innocence and survival.'
  }
];

export const ACTING_EXPERIENCES: ActingExperience[] = [
  {
    id: 'act-1',
    project: 'The Statement of the Chair Commission',
    year: '2024 - 2026',
    type: 'Theater',
    role: 'Lead Actor & Script Consult',
    description: 'Performed as a central protagonist in a highly acclaimed experimental theater production exploring bureaucracy, power, and state mechanics.'
  },
  {
    id: 'act-2',
    project: 'The Station (ایستگاه)',
    year: '2025',
    type: 'Short Film',
    role: 'Supporting Actor',
    description: 'Played a major narrative role in a short film focusing on the silence and delays of migration journeys.'
  },
  {
    id: 'act-3',
    project: 'A Minute Silence',
    year: '2023',
    type: 'Short Film',
    role: 'Actor & Production Planner',
    description: 'Actor and production planner for this intimate drama exploring emotional isolation and modern relationships.'
  }
];

export const COLLABORATIONS: CollaborationItem[] = [
  {
    id: 'collab-1',
    role: 'Assistant Director',
    project: 'Judgment (2021)',
    director: 'Aria Gazor',
    year: 2021,
    type: 'Short Film'
  },
  {
    id: 'collab-2',
    role: 'Assistant Director',
    project: 'Duel (2021)',
    director: 'Alireza LotfiNeko',
    year: 2021,
    type: 'Short Film'
  },
  {
    id: 'collab-3',
    role: 'Assistant Director',
    project: 'U-Turn (2021)',
    director: 'Hesam Dezfouli',
    year: 2021,
    type: 'Short Film'
  },
  {
    id: 'collab-4',
    role: 'Sound Recorder',
    project: 'Shouldn’t We Live? (2020)',
    director: 'Amir KochakZadeh',
    year: 2020,
    type: 'Short Film'
  },
  {
    id: 'collab-5',
    role: 'Directing Consultant',
    project: 'Rough cut (2024)',
    director: 'Amir Aziz',
    year: 2024,
    type: 'Short Film'
  }
];
