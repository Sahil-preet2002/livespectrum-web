// Source: livespectrum.com/non-profit.html (organizations, links, logos).
// "about" lines are based on each organization's own website.
export interface NonProfitCause {
  name: string;
  website: string;
  logo: string;
  about: string;
}

export const nonProfitCauses: NonProfitCause[] = [
  {
    "name": "NCIAP People's Medical Care",
    "website": "http://nciap.org/",
    "logo": "/nonprofits/nonp1.jpg",
    "about": "Primary care and medical services in Raleigh, NC."
  },
  {
    "name": "Aniridia Foundation International",
    "website": "http://www.aniridia.net/",
    "logo": "/nonprofits/nonp2.jpg",
    "about": "Supports corneal research and clinical studies for people living with aniridia."
  },
  {
    "name": "Inter-Faith Food Shuttle",
    "website": "https://www.foodshuttle.org/",
    "logo": "/nonprofits/nonp3.jpg",
    "about": "Raleigh-based non-profit working on food recovery and hunger relief."
  },
  {
    "name": "NC Arts in Action",
    "website": "https://www.ncartsinaction.org/",
    "logo": "/nonprofits/nonp4.png",
    "about": "Live music in every dance class for elementary students across the Triangle."
  }
];
