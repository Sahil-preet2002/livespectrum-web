import { eventHistory } from "./events";

// Which LiveSpectrum shows an artist appeared in, matched against real event titles.
// Keys are artist names; values are lowercase fragments to look for in the event title.
const KEYWORDS: Record<string, string[]> = {
  "A.R. Rahman": ["a.r. rahman"],
  Shaan: ["shaan"],
  "Amit Tandon": ["amit tandon"],
  "Rekha Bhardwaj": ["rekha bhardwaj"],
  "Asha Bhosle": ["asha,"],
  "Sonu Nigam": ["sonu nigam"],
  "Sunidhi Chauhan": ["sunidhi"],
  "Udit Narayan": ["udit"],
  "Jagjit Singh": ["jagjit"],
  "Pankaj Udhas": ["pankaj udhas"],
  "Ghulam Ali": ["ghulam ali"],
  "Alka Yagnik": ["alka yagnik"],
  "Kumar Sanu": ["kumar sanu"],
  "Kailash Kher": ["kailash"],
  "Kunal Ganjawala": ["kunal"],
  "Saurabh Shukla": ["saurabh shukla"],
  "Shankar Ehsaan Loy": ["shankar ehsaan loy"],
  "Manoj Joshi": ["manoj joshi"],
  "Rahat Fateh Ali Khan": ["rahat fateh"],
  "Paresh Rawal": ["paresh rawal"],
  "Anupam Kher": ["anupam kher"],
  "Javed Jaffrey": ["javed jaffrey"],
  "Jeffrey Iqbal": ["jeffrey iqbal"],
  "Richa Sharma": ["richa sharma"],
  "Amit Kumar": ["amit, emon"],
  "Emon Chatterjee": ["emon"],
  "Ankita Mishra": ["ankita"],
};

export interface Appearance {
  year: string;
  title: string;
}

export function appearancesFor(name: string): Appearance[] {
  const keys = KEYWORDS[name];
  if (!keys) return [];
  return eventHistory
    .filter((e) => keys.some((k) => e.title.toLowerCase().includes(k)))
    .map((e) => ({ year: e.year, title: e.title }));
}
