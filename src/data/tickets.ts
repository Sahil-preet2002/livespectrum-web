// Source: livespectrum.com/ticketing-information.html and the official seating chart
// (public/tickets/seating-chart.jpg). Prices are the base prices printed on the chart.
export const ticketingData = {
  "event": {
    "title": "Jai Shri Ram – Ramayana",
    "presenter": "Arnav & Anvi Mahajan, along with Arvind & Neha Mahajan",
    "starring": [
      "Puneet Issar",
      "Vindu Dara Singh"
    ],
    "date": "Sunday, May 5",
    "time": "5:30 PM",
    "venue": "Raleigh Memorial Auditorium",
    "ticketUrl": "https://www.ticketmaster.com/event/2D006065C81E3DCE",
    "detailsUrl": "https://www.facebook.com/events/s/jai-shri-ram-ramayan/937099701457882/",
    "seatingChart": "/tickets/seating-chart.jpg"
  },
  "tiers": [
    {
      "price": 56,
      "color": "#c4c4c4",
      "name": "Grey section"
    },
    {
      "price": 76,
      "color": "#e31fe3",
      "name": "Magenta section"
    },
    {
      "price": 96,
      "color": "#c8102e",
      "name": "Red section"
    },
    {
      "price": 126,
      "color": "#3c8f3c",
      "name": "Green section"
    },
    {
      "price": 146,
      "color": "#22d3ee",
      "name": "Cyan section"
    },
    {
      "price": 196,
      "color": "#ffe600",
      "name": "Yellow section"
    },
    {
      "price": 246,
      "color": "#f59a1e",
      "name": "Orange section"
    }
  ],
  "fees": "Plus $3.22 facility fee & 7.25% taxes",
  "meetAndGreet": {
    "price": 75,
    "points": [
      "Exclusive time with celebrities",
      "Professional photos are available with the celebrities",
      "Logistics are handled very discreetly"
    ]
  },
  "notes": [
    "Kids are allowed.",
    "This concert raises awareness of water safety (drowning prevention). Check the SafeSplash website for trial classes.",
    "SafeSplash offer: 10% off some seats with the code 10AkmSafeSplash (until March 31).",
    "Sharkey's Cuts for Kids offers Mundan ceremonies and 25% off adult haircuts.",
    "All ticket purchases are non-refundable, no exceptions.",
    "If the concert is cancelled, ticket money is refunded."
  ],
  "contacts": {
    "infoLine": "571-241-6285",
    "phone": "919-308-5500",
    "hotline": "877-222-9324",
    "email": "1livespectrum@gmail.com"
  },
  "sponsors": [
    {
      "name": "AKM Investments",
      "href": "http://www.akminvestment.com"
    },
    {
      "name": "SafeSplash Holly Springs",
      "href": "https://www.safesplash.com/locations/holly-springs-nc"
    },
    {
      "name": "SafeSplash Morrisville",
      "href": "https://www.safesplash.com/locations/morrisville-triangle-nc"
    },
    {
      "name": "Sharkey's Cuts for Kids",
      "href": "https://sharkeys.bookedby.com/store/d3673688-c523-11eb-bfbd-0ab754383715"
    }
  ]
} as const;
