// Centralized site data — used across nav, footer, schema, CTAs
// Dampproofing Insurance — dampproofing & waterproofing contractor coverage

export const SITE = {
  name: "Dampproofing Insurance",
  legalName: "Dampproofing Insurance (by Contractors Choice Agency)",
  domain: "dampproofinginsurance.com",
  url: "https://dampproofinginsurance.com",
  tagline: "Coverage Built for Waterproofing Pros",
  description:
    "Specialized commercial insurance for dampproofing and waterproofing contractors — GL, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, inland marine, and bonds. All 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Dampproofing",
  brandSub: "Contractor Insurance",
  nicheShort: "dampproofing contractor",
  nicheShortCap: "Dampproofing Contractor",
  nichePlural: "dampproofing contractors",
  nichePluralCap: "Dampproofing Contractors",
  operator: "waterproofing operation",
  operatorCap: "Waterproofing Operation",
  industry: "dampproofing and waterproofing",
  industryCap: "Dampproofing and Waterproofing",
  audience: "waterproofing contractors",
  audienceCap: "Waterproofing Contractors",
  ownerTitle: "waterproofing contractor",
  regionPill: "Texas · Southeast · National",
  serviceSuffix: "Dampproofing Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability for Dampproofing Contractors",
    short: "Protection for property damage and third-party injury claims",
    description:
      "The foundational coverage every dampproofing and waterproofing contractor needs. Covers third-party bodily injury, property damage during excavation and application, completed-operations claims when a waterproofed foundation leaks later, and defense costs when a homeowner or GC names you in a lawsuit.",
    icon: "ShieldCheck",
    keywords: ["dampproofing contractor insurance", "waterproofing general liability", "dampproofing GL insurance", "foundation waterproofing liability"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "For solvent membranes, coal tar, and chemical exposure",
    description:
      "Dampproofing involves solvent-based waterproofing membranes, coal tar pitch, crystalline chemicals, and VOC-emitting products that trigger pollution exclusions in standard GL policies. Contractor Pollution Liability covers bodily injury, property damage, and cleanup costs from chemical releases on the job site.",
    icon: "Droplets",
    keywords: ["contractor pollution liability dampproofing", "waterproofing chemical insurance", "CPL insurance waterproofing", "solvent membrane pollution coverage"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For crawl space crews, excavation workers, and applicators",
    description:
      "Dampproofing crews face confined space entry, chemical exposure, excavation hazards, and physical strain that make workers' comp essential. We class-code dampproofing and waterproofing labor correctly so your crew is protected and your audit doesn't produce a surprise bill.",
    icon: "HardHat",
    keywords: ["dampproofing workers compensation", "waterproofing crew workers comp", "crawl space workers compensation", "foundation contractor workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Work Trucks",
    short: "Trucks, trailers, and chemical transport coverage",
    description:
      "Your work trucks carry tools, spray equipment, solvents, and drainage materials to every job site. Commercial auto covers liability, physical damage, hired and non-owned vehicles, and the specialized exposures of hauling chemical products and waterproofing equipment on public roads.",
    icon: "Truck",
    keywords: ["dampproofing commercial auto", "waterproofing truck insurance", "contractor vehicle coverage", "chemical transport auto insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Injection pumps, spray systems, and drainage gear",
    description:
      "Injection equipment, spray rigs, drainage boards, sump pump systems, and excavation tools represent significant capital. Tools & Equipment coverage protects them from theft, damage, and breakdown whether at your shop, in transit, or on the job site.",
    icon: "Wrench",
    keywords: ["dampproofing tools equipment insurance", "waterproofing equipment coverage", "injection pump insurance", "spray rig insurance contractor"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Excess limits above your GL and auto",
    description:
      "A single completed-operations claim on a failed waterproofing system can exceed your primary GL limits when mold damage, structural repair, and homeowner legal fees stack up. A Commercial Umbrella provides excess coverage above your GL, auto, and employers' liability for catastrophic claims.",
    icon: "Umbrella",
    keywords: ["dampproofing umbrella insurance", "waterproofing excess liability", "contractor umbrella policy", "foundation contractor umbrella coverage"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine Coverage",
    short: "Equipment and materials in transit or at job sites",
    description:
      "Inland Marine protects your waterproofing equipment, drainage materials, spray systems, and chemical products while they're in transit between jobs or staged at a site where your property policy doesn't reach. Ideal for contractors who run multiple crews across multiple active sites.",
    icon: "Package",
    keywords: ["dampproofing inland marine insurance", "waterproofing equipment transit coverage", "contractor equipment floater", "tools in transit insurance"],
  },
  {
    slug: "bonds",
    title: "Contractor License & Surety Bonds",
    short: "License bonds and performance bonds for waterproofing jobs",
    description:
      "Many states and municipalities require dampproofing and waterproofing contractors to carry a contractor's license bond. Larger commercial and government projects also require performance and payment bonds. We place bonds quickly so you can bid the work and stay compliant.",
    icon: "FileCheck",
    keywords: ["dampproofing contractor bond", "waterproofing license bond", "contractor surety bond", "performance bond waterproofing"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · AZ · NM · OK", blurb: "Clay soil, expansive soil movement, and high moisture intrusion make Texas and Southwest dampproofing contractors essential — and their liability exposure significant. We insure TX, AZ, NM, and OK waterproofing contractors with programs built for the region's soil and weather conditions." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · NC · SC", blurb: "High water tables, tropical moisture, and hurricane-driven flooding create year-round demand for dampproofing and waterproofing in the Southeast. We insure FL, GA, NC, and SC contractors with GL, pollution liability, workers' comp, and commercial auto programs sized for the region." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Freeze-thaw cycles crack Midwest foundations every winter, driving strong demand for basement waterproofing and interior drain tile systems. We place insurance programs for IL, OH, MI, and IN dampproofing contractors with proper pollution and completed-operations coverage." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT", blurb: "Old housing stock, dense urban basements, and historic preservation projects make the Northeast one of the most active dampproofing and waterproofing markets. We insure NY, PA, NJ, and CT contractors with programs that account for high completed-operations exposure on older structures." },
  { slug: "california", name: "California", region: "CA · Pacific Coast", blurb: "Hillside drainage, seismic foundation work, and mudslide-prone areas create unique dampproofing and waterproofing exposures along the California coast. We insure CA waterproofing contractors with GL, pollution liability, and inland marine programs built for the state's regulatory environment." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · WY · ID", blurb: "Snowmelt, spring drainage surges, and mountain foundation work drive demand for dampproofing services across the Mountain States. We insure CO, UT, WY, and ID waterproofing contractors with programs designed for seasonal work patterns and high-elevation job sites." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA · MD · DC · DE", blurb: "Government and commercial building waterproofing, tidal area moisture, and dense urban construction make the Mid-Atlantic a complex market for dampproofing contractors. We insure VA, MD, DC, and DE contractors with specialty programs sized for commercial and government projects." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR", blurb: "Extreme rainfall, year-round moisture, moss, and mold make waterproofing essential across Washington and Oregon. We insure Pacific Northwest dampproofing contractors with pollution liability, GL, and workers' comp programs built for the region's persistent wet conditions." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Dampproofing-specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 350, suffix: "+", label: "Dampproofing contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We got hit with a completed-operations claim two years after a basement waterproofing job — the homeowner claimed our drain tile failed and caused mold. Our old GL policy had a pollution exclusion that the carrier used to deny the claim. Dampproofing Insurance placed a real contractor pollution liability policy that covered us. The claim was settled and we didn't pay out of pocket.", name: "Marcus D.", role: "Owner", location: "Ohio" },
  { quote: "As a crawl space encapsulation company, we were having trouble getting pollution liability because of the solvent-based vapor barriers we use. Most carriers wouldn't touch us or quoted crazy premiums. These guys understood exactly what we do, placed an A-rated CPL policy, and the premium was reasonable. Finally feel like we're actually covered.", name: "Teresa W.", role: "Operations Manager", location: "North Carolina" },
  { quote: "Our spray rig and injection equipment got stolen off a job site — over $40,000 in equipment gone. Our tools and equipment coverage paid out fast with no argument about whether the equipment was 'scheduled' properly. They helped us get back on the road in two weeks. That's the kind of coverage you don't appreciate until you need it.", name: "Kevin R.", role: "Waterproofing Contractor", location: "Texas" },
] as const;
