export const mockCampaigns = [
  {
    id: 1,
    title: 'Elite Wealth Management',
    status: 'Active',
    impressions: 12540,
    clicks: 842,
    ctr: '6.7%',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800',
    channels: ['Mobile', 'Web'],
    budget: '$5,000',
  },
  {
    id: 2,
    title: 'First-Time Homebuyer Special',
    status: 'Active',
    impressions: 45210,
    clicks: 1250,
    ctr: '2.8%',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    channels: ['ATM', 'Mobile'],
    budget: '$12,000',
  },
  {
    id: 3,
    title: 'Business Platinum Credit',
    status: 'Paused',
    impressions: 8900,
    clicks: 340,
    ctr: '3.8%',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    channels: ['Web'],
    budget: '$2,500',
  },
];

export const mockInstitutions = [
  { id: 1, name: 'Global Trust Bank', users: 120, status: 'Active', tier: 'Enterprise' },
  { id: 2, name: 'Secure Savings Co.', users: 45, status: 'Active', tier: 'Pro' },
  { id: 3, name: 'Metro Finance', users: 12, status: 'Inactive', tier: 'Basic' },
];

export const globalMetrics = [
  { label: 'Total Impressions', value: '1.2M', trend: '+12.5%', isPositive: true },
  { label: 'Total Clicks', value: '45.2K', trend: '+8.2%', isPositive: true },
  { label: 'Avg. CTR', value: '3.75%', trend: '-0.4%', isPositive: false },
  { label: 'Total Revenue', value: '$124.5K', trend: '+18.1%', isPositive: true },
];

export const performanceData = [
  { name: 'Mon', impressions: 4000, clicks: 240 },
  { name: 'Tue', impressions: 3000, clicks: 198 },
  { name: 'Wed', impressions: 2000, clicks: 900 },
  { name: 'Thu', impressions: 2780, clicks: 308 },
  { name: 'Fri', impressions: 1890, clicks: 480 },
  { name: 'Sat', impressions: 2390, clicks: 380 },
  { name: 'Sun', impressions: 3490, clicks: 430 },
];
