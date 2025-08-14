interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'The MC1R Longitudinal Study',
    description: `A first-of-its-kind effort to track MC1R carriers across time—mapping health constellations and rewriting how redhead biology is studied.`,
    imgSrc: '/img/projects/longitudinal.png',
    href: '/blog/mc1r-longitudinal-study',
  },
  {
    title: 'Sunscreen Safety for Redheads',
    description: `Can DeSci help redheads verify and access safer, more effective sunscreen formulas the FDA has neglected for decades?`,
    imgSrc: '/img/projects/sunscreen.png',
    href: '/blog/sunscreen-safety-redheads',
  },
  {
    title: 'Tretinoin & Arm Bruising in Redheads',
    description: `Investigating the effects of tretinoin on sun-damaged forearm skin in bruise-prone individuals.`,
    imgSrc: '/img/projects/tretinoin.png',
    href: '/blog/tretinoin-arm-purpura',
  },
  {
    title: 'Redheads and Heat Intolerance',
    description: `Do redheads overheat more easily? We’re measuring heat sensitivity, wearable temp data, and thermoregulation quirks.`,
    imgSrc: '/img/projects/heat.png',
    href: '/blog/heat-intolerance-redheads',
  },
  {
    title: 'MC1R and ADHD Patterns',
    description: `Exploring anecdotal links between red hair and executive function, sensory overload, and dopamine regulation.`,
    imgSrc: '/img/projects/adhd.png',
    href: '/blog/mc1r-adhd-patterns',
  },
  {
    title: 'The Redhead Migraine Project',
    description: `Redheads report more migraines and aura symptoms. Let’s collect patterns, triggers, and possible MC1R correlations.`,
    imgSrc: '/img/projects/migraine.png',
    href: '/blog/redhead-migraine-project',
  },
  {
    title: 'Hormones, Libido & MC1R',
    description: `Is the MC1R gene linked to hormonal sensitivity? We’re exploring libido, cycle tracking, and endocrine outliers.`,
    imgSrc: '/img/projects/hormones.png',
    href: '/blog/hormones-libido-mc1r',
  },
  {
    title: 'Redhead Anesthesia Resistance',
    description: `Redheads often need more anesthesia—but how much more? We’re gathering surgical anecdotes and dosage patterns.`,
    imgSrc: '/img/projects/anesthesia.png',
    href: '/blog/anesthesia-resistance',
  },
  {
    title: 'Redhead Eye Color & Vision Sensitivity',
    description: `Eye color and photophobia go hand in hand. Are blue-eyed redheads more light-sensitive than others?`,
    imgSrc: '/img/projects/eye-color.png',
    href: '/blog/redhead-eye-vision',
  },
  {
    title: 'MC1R & Immune Response',
    description: `Does MC1R impact autoimmune risk or inflammatory cycles? We’ll track data across migraines, allergies, and gut health.`,
    imgSrc: '/img/projects/immune.png',
    href: '/blog/mc1r-immune-response',
  },
  {
    title: 'Redhead Skin Microbiome',
    description: `How different is the skin biome of redheads? We’re looking into barrier function, eczema rates, and UV repair pathways.`,
    imgSrc: '/img/projects/skin-microbiome.png',
    href: '/blog/redhead-skin-microbiome',
  },
  {
    title: 'The Four Leaf Clover Phenotype',
    description: `Exploring a quirky but replicable talent among redheads—finding four-leaf clovers—and what it might tell us about perception and MC1R.`,
    imgSrc: '/img/projects/clover.png',
    href: '/blog/four-leaf-clover-phenotype',
  },
]

export default projectsData
