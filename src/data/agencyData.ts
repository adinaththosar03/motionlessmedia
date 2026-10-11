import { ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'video',
    title: 'Video Production',
    tagline: 'High-Impact Visual Storytelling',
    shortDesc: 'Take care to develop resources continually and integrity them with cinematic brand vision.',
    fullDesc: 'We script, shoot, and post-produce cinema-grade commercial assets, viral short-form sequences, and high-retention ads built specifically to capture attention and stop the scroll.',
    deliverables: [
      '4K Commercial Spots & Brand Manifestos',
      'High-Volume Short-Form Creative (Reels/TikTok/Shorts)',
      'Direct-Response UGC & Founder Stories',
      'Studio Color Grading & Sound Architecture',
    ],
    metrics: [
      { label: 'Avg. Retention Lift', value: '+68%' },
      { label: 'Views Generated', value: '85M+' },
      { label: 'Production Turnaround', value: '7 Days' },
    ],
    caseStudy: {
      client: 'Kinetix Apparel',
      result: '3.9x Ad CTR Lift',
      highlight: 'Produced 24 bespoke creative variations resulting in their highest-converting Q4 campaign.',
    },
  },
  {
    id: 'social',
    title: 'Social Media Management',
    tagline: 'Organic Reach & Cult Community Building',
    shortDesc: 'Take care to develop resources continually and integrity them with active community growth.',
    fullDesc: 'From daily storytelling and platform-native trends to community management and creator collaborations, we transform dormant profiles into dynamic cultural hubs that drive loyal buyers.',
    deliverables: [
      'Multi-Platform Editorial & Content Calendars',
      'Daily Creative Production & Copywriting',
      'Proactive Community Engagement & Outreach',
      'Influencer Gifting & Creator Integrations',
    ],
    metrics: [
      { label: 'Avg. Community Growth', value: '+240%' },
      { label: 'Monthly Impressions', value: '18M+' },
      { label: 'Avg. Engagement Rate', value: '7.8%' },
    ],
    caseStudy: {
      client: 'Aura Botanicals',
      result: '+185K Followers in 4 Months',
      highlight: 'Engineered an organic TikTok series that unlocked 14 viral videos and $420K in attributable sales.',
    },
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    tagline: 'Data-Driven Paid Customer Acquisition',
    shortDesc: 'Take care to develop resources continually and integrity them with profitable scaling.',
    fullDesc: 'We deploy disciplined paid media campaigns across Meta, Google, TikTok, and YouTube with relentless multivariate creative testing, server-side tracking, and laser focus on ROAS and MER.',
    deliverables: [
      'Full-Funnel Paid Ads (Meta, Google, TikTok, YouTube)',
      'Rapid-Fire Creative Testing Frameworks',
      'First-Party Server-Side Tracking (CAPI / GA4)',
      'Landing Page & Funnel Conversion Rate Optimization (CRO)',
    ],
    metrics: [
      { label: 'Average Client ROAS', value: '4.4x' },
      { label: 'Ad Spend Managed', value: '$12M+' },
      { label: 'CAC Reduction', value: '-34%' },
    ],
    caseStudy: {
      client: 'Nordic Peak Gear',
      result: 'Scaled to $1.2M/mo at 4.6x ROAS',
      highlight: 'Rebuilt their media buying architecture and tested 60+ creative angles to scale profitably in 90 days.',
    },
  },
];

export const CLIENT_LOGOS = [
  'KINETIX',
  'AURA LABS',
  'VELOCE',
  'NORDIC PEAK',
  'SOLSTICE',
  'CHRONOS',
];

export const TESTIMONIALS = [
  {
    quote: 'Motion Less Media completely transformed our creative output. Their video production quality is Hollywood-grade, but engineered with direct-response hooks that tripled our return on ad spend.',
    author: 'Marcus Vance',
    role: 'Head of Growth, Kinetix Apparel',
    metric: '+310% Revenue YoY',
  },
  {
    quote: 'Having one synchronized team handle our video shoots, daily social channels, and paid media saved us hundreds of hours and scaled our monthly active community exponentially.',
    author: 'Elena Rostova',
    role: 'Founder & CMO, Aura Botanicals',
    metric: '4.6x Verified ROAS',
  },
];
