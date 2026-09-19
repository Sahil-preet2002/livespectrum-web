// Source: livespectrum.com/about-artists.html (names, photos, profile links).
// Category is a simple grouping (music / theatre & cinema / comedy).
export interface Artist {
  name: string;
  category: "Music" | "Theater & Cinema" | "Comedy";
  role: string;
  tagline: string;
  img: string;
  wiki: string;
}

export const artists: Artist[] = [
  {
    "name": "A.R. Rahman",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ar-rahman.jpg",
    "wiki": "https://en.wikipedia.org/wiki/A._R._Rahman"
  },
  {
    "name": "Sonu Nigam",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/sonu-nigam.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Sonu_Nigam"
  },
  {
    "name": "Shaan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/shaan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Shaan_(singer)"
  },
  {
    "name": "Sunidhi Chauhan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/sunidhi-chauhan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Sunidhi_Chauhan"
  },
  {
    "name": "Jagjit Singh",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/jagjit-singh.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Jagjit_Singh"
  },
  {
    "name": "Alka Yagnik",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/alka-yagnik.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Alka_Yagnik"
  },
  {
    "name": "Kumar Sanu",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/kumar-sanu.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Kumar_Sanu"
  },
  {
    "name": "Kailash Kher",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/kailash-kher.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Kailash_Kher"
  },
  {
    "name": "Rahat Fateh Ali Khan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/rahat-fateh-ali-khan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Rahat_Fateh_Ali_Khan"
  },
  {
    "name": "Shankar Ehsaan Loy",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/shankar-ehsaan-loy.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Shankar%E2%80%93Ehsaan%E2%80%93Loy"
  },
  {
    "name": "Rekha Bhardwaj",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/rekha-bhardwaj.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Rekha_Bhardwaj"
  },
  {
    "name": "Richa Sharma",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
    "wiki": "https://en.wikipedia.org/wiki/Richa_Sharma_(singer)"
  },
  {
    "name": "Javed Ali",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/javed-ali.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Javed_Ali"
  },
  {
    "name": "Udit Narayan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/udit-narayan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Udit_Narayan"
  },
  {
    "name": "Pankaj Udhas",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/pankaj-udhas.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Pankaj_Udhas"
  },
  {
    "name": "Ghulam Ali",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ghulam-ali.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Ghulam_Ali_(singer)"
  },
  {
    "name": "Benny Dayal",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/benny-dayal.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Benny_Dayal"
  },
  {
    "name": "Jonita Gandhi",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/jonita-gandhi.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Jonita_Gandhi"
  },
  {
    "name": "Neeti Mohan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/neeti-mohan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Neeti_Mohan"
  },
  {
    "name": "Harshdeep Kaur",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/harshdeep-kaur.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Harshdeep_Kaur"
  },
  {
    "name": "Paresh Rawal",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/paresh-rawal.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Paresh_Rawal"
  },
  {
    "name": "Anupam Kher",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/anupam-kher.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Anupam_Kher"
  },
  {
    "name": "Neena Gupta",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/neena-gupta.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Neena_Gupta"
  },
  {
    "name": "Javed Jaffrey",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/javed-jaffrey.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Jaaved_Jaaferi"
  },
  {
    "name": "Saurabh Shukla",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/saurabh-shukla.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Saurabh_Shukla"
  },
  {
    "name": "Manoj Joshi",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/manoj-joshi-chanakya.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Manoj_Joshi"
  },
  {
    "name": "Amit Tandon",
    "category": "Comedy",
    "role": "Comedy",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/amit-tandon.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Amit_Tandon"
  },
  {
    "name": "Arpita Mukherjee",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/arpita-mukherjee.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Arpita_Mukherjee"
  },
  {
    "name": "Asha Bhosle",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/asha-bhosle.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Asha_Bhosle"
  },
  {
    "name": "Hard Kaur",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/hard-kaur.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Hard_Kaur"
  },
  {
    "name": "Aditya Narayan",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/aditya-narayan.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Aditya_Narayan"
  },
  {
    "name": "Shweta Pandit",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/shweta-pandit.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Shweta_Pandit"
  },
  {
    "name": "Kunal Ganjawala",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/kunal-ganjawala.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Kunal_Ganjawala"
  },
  {
    "name": "Sadiya Siddiqui",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/sadiya-siddiqui.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Sadiya_Siddiqui"
  },
  {
    "name": "Achint Kaur",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/achint-kaur.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Achint_Kaur"
  },
  {
    "name": "Preeti Mamgain",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/preeti-mamgain.jpg",
    "wiki": "https://timesofindia.indiatimes.com/tv/news/hindi/TV-has-become-manic-now-Preeti-Mamgain/articleshow/30113929.cms"
  },
  {
    "name": "Preeti Jhangiani",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/preeti-jhangiani.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Preeti_Jhangiani"
  },
  {
    "name": "Devender Pal Singh",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/devender-pal-singh.png",
    "wiki": "https://en.wikipedia.org/wiki/Devender_Pal_Singh"
  },
  {
    "name": "Rakesh Bedi",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/rakesh-bedi.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Rakesh_Bedi"
  },
  {
    "name": "Ranvir Shorey",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ranvir-shorey.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Ranvir_Shorey"
  },
  {
    "name": "Vinay Pathak",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/vinay-pathak.png",
    "wiki": "https://en.wikipedia.org/wiki/Vinay_Pathak"
  },
  {
    "name": "Rajat Kapoor",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/rajat-kapoor.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Rajat_Kapoor"
  },
  {
    "name": "Konkona Sen",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/konkona-sen.jpg",
    "wiki": "https://en.wikipedia.org/wiki/Konkona_Sen_Sharma"
  },
  {
    "name": "Ali Pervez",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ali-pervez.jpg",
    "wiki": "https://www.bbc.co.uk/music/artists/b5406523-e9a4-42f1-83e6-6444c202fa80"
  },
  {
    "name": "Rasika Shekar",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/rasika-shekar.jpg",
    "wiki": "https://en.m.wikipedia.org/wiki/Rasika_Shekar"
  },
  {
    "name": "Shamit Tyagi",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/shamit-tyagi.jpg",
    "wiki": "https://m.facebook.com/shamitmusician/"
  },
  {
    "name": "Amjad Sabri",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/amjad-sabri.jpg",
    "wiki": "https://en.m.wikipedia.org/wiki/Amjad_Sabri"
  },
  {
    "name": "Aditi Paul",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/aditi-paul.jpg",
    "wiki": "http://aditipaul.in/"
  },
  {
    "name": "Jeffrey Iqbal",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/jeffrey-iqbal.jpg",
    "wiki": "http://www.jeffreyiqbal.com/"
  },
  {
    "name": "Ashok Banthia",
    "category": "Comedy",
    "role": "Comedy",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ashok-banthia.png",
    "wiki": "https://en.m.wikipedia.org/wiki/Ashok_Banthia"
  },
  {
    "name": "Sowmya Raoh",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/sowmya-raoh.jpg",
    "wiki": "https://en.m.wikipedia.org/wiki/Sowmya_Raoh"
  },
  {
    "name": "Amit Kumar",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/amit-kumar.jpg",
    "wiki": "https://en.m.wikipedia.org/wiki/Amit_Kumar"
  },
  {
    "name": "Emon Chatterjee",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/emon-chaterjee.jpg",
    "wiki": "https://m.facebook.com/pg/Emon-Chatterjee-125111554231031/about/?ref=page_internal&mt_nav=0"
  },
  {
    "name": "Ankita Mishra",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/ankita-mishra.jpg",
    "wiki": "https://m.facebook.com/pg/ankeeta.mishraa/about/?ref=page_internal&mt_nav=0"
  },
  {
    "name": "Yashita Sharma",
    "category": "Music",
    "role": "Music",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/yashita-sharma.jpg",
    "wiki": "https://m.facebook.com/yashitasharmalive/"
  },
  {
    "name": "Swati Kantikar",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/swati-kantikar.jpg",
    "wiki": "https://m.facebook.com/swatikanitkar/"
  },
  {
    "name": "Saroj Khan",
    "category": "Theater & Cinema",
    "role": "Theatre & Cinema",
    "tagline": "Promoted by LiveSpectrum Entertainment",
    "img": "/artists/saroj-khan.jpg",
    "wiki": "https://en.m.wikipedia.org/wiki/Saroj_Khan"
  }
];
