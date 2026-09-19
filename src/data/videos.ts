// Source: livespectrum.com/Video.html. YouTube titles come from YouTube itself;
// Facebook videos are the LiveSpectrum page videos listed on the site.
export interface VideoItem {
  id: string;
  source: "youtube" | "facebook";
  title: string;
  category: string;
  url: string;
}

export const videoVault: VideoItem[] = [
  {
    "id": "CBiuxyxVDpY",
    "source": "youtube",
    "title": "LiveSpectrum Entertainment Introduction Video",
    "category": "Intro",
    "url": "https://www.youtube.com/watch?v=CBiuxyxVDpY"
  },
  {
    "id": "dMNicYYnB9k",
    "source": "youtube",
    "title": "Promo 2 – Shaan Concert in Raleigh, July 13",
    "category": "Promo",
    "url": "https://www.youtube.com/watch?v=dMNicYYnB9k"
  },
  {
    "id": "9uPhCvbUdSE",
    "source": "youtube",
    "title": "Promo – Shaan Live in Raleigh, AKM Investments Sponsored",
    "category": "Promo",
    "url": "https://www.youtube.com/watch?v=9uPhCvbUdSE"
  },
  {
    "id": "iPsxlanp-Qg",
    "source": "youtube",
    "title": "Promo – SHAAN Live in Concert, Fri July 13, Raleigh Memorial Auditorium",
    "category": "Promo",
    "url": "https://www.youtube.com/watch?v=iPsxlanp-Qg"
  },
  {
    "id": "l-sMvgjK69s",
    "source": "youtube",
    "title": "SHAAN Talks About Love in Concert – Fri July 13 in Raleigh",
    "category": "Interview",
    "url": "https://www.youtube.com/watch?v=l-sMvgjK69s"
  },
  {
    "id": "YTe-nHjBLi0",
    "source": "youtube",
    "title": "Shaan Promo with NC Arts in Action Kids",
    "category": "Promo",
    "url": "https://www.youtube.com/watch?v=YTe-nHjBLi0"
  },
  {
    "id": "0ADX6YZvzx4",
    "source": "youtube",
    "title": "NC Arts in Action Founder Jacques d'Amboise Talks with Arvind Mahajan",
    "category": "Interview",
    "url": "https://www.youtube.com/watch?v=0ADX6YZvzx4"
  },
  {
    "id": "J3Qo_G58qQo",
    "source": "youtube",
    "title": "A.R. Rahman Jai Ho Tour 2010 in Raleigh – Highlights",
    "category": "Highlights",
    "url": "https://www.youtube.com/watch?v=J3Qo_G58qQo"
  },
  {
    "id": "i1C0e90OBCs",
    "source": "youtube",
    "title": "Alka & Kumar Sanu Concert, Raleigh 2014",
    "category": "Highlights",
    "url": "https://www.youtube.com/watch?v=i1C0e90OBCs"
  },
  {
    "id": "MuIjROvjNzU",
    "source": "youtube",
    "title": "Alka Yagnik Interview for RTP, NC Concert",
    "category": "Interview",
    "url": "https://www.youtube.com/watch?v=MuIjROvjNzU"
  },
  {
    "id": "dz_UOa5rSZQ",
    "source": "youtube",
    "title": "Kumar Sanu Interview for RTP, NC Concert",
    "category": "Interview",
    "url": "https://www.youtube.com/watch?v=dz_UOa5rSZQ"
  },
  {
    "id": "xca65qAsqkg",
    "source": "youtube",
    "title": "Alka Yagnik & Kumar Sanu Concert at RTP, North Carolina",
    "category": "Promo",
    "url": "https://www.youtube.com/watch?v=xca65qAsqkg"
  },
  {
    "id": "10155401411770622",
    "source": "facebook",
    "title": "Amit Tandon talks about his experience in Raleigh",
    "category": "Interview",
    "url": "https://www.facebook.com/livespectrum/videos/10155401411770622/"
  },
  {
    "id": "10155822424505622",
    "source": "facebook",
    "title": "Arvind Mahajan interviewed by Divakar Shukla",
    "category": "Interview",
    "url": "https://www.facebook.com/livespectrum/videos/10155822424505622/"
  },
  {
    "id": "10153051868960622",
    "source": "facebook",
    "title": "Personal message from Rahat Fateh Ali Khan for fans",
    "category": "Interview",
    "url": "https://www.facebook.com/livespectrum/videos/10153051868960622/"
  },
  {
    "id": "10155404411025622",
    "source": "facebook",
    "title": "A mesmerizing evening with Rekha Bhardwaj at Raleigh Memorial Auditorium",
    "category": "Highlights",
    "url": "https://www.facebook.com/livespectrum/videos/10155404411025622/"
  },
  {
    "id": "1345075188974505",
    "source": "facebook",
    "title": "Richa Sharma sings a Jagjit Singh ghazal",
    "category": "Highlights",
    "url": "https://www.facebook.com/livespectrum/videos/1345075188974505/"
  }
];
