export interface Prophet {
  id: number;
  nameEnglish: string;
  nameArabic: string;
  period: string;
  location: string;
  knownFor: string;
  biography: string;
  keyEvents: Array<{
    title: string;
    description: string;
  }>;
  teachings: string[];
  quranMentions: number;
}

export const prophetsData: Prophet[] = [
  {
    id: 1,
    nameEnglish: "Adam",
    nameArabic: "آدم",
    period: "Beginning of Creation",
    location: "Paradise, then Earth",
    knownFor: "First human and prophet",
    biography: "Adam (peace be upon him) was the first human being created by Allah and the first prophet. He was created from clay and given life by Allah's command. Adam was taught the names of all things and was honored by the angels. He lived in Paradise with his wife Hawwa (Eve) before descending to Earth to begin humanity's journey.",
    keyEvents: [
      {
        title: "Creation",
        description: "Allah created Adam from clay and breathed life into him, teaching him the names of all things.",
      },
      {
        title: "Life in Paradise",
        description: "Adam and Hawwa lived in Paradise, enjoying its blessings and provisions.",
      },
      {
        title: "Descent to Earth",
        description: "After seeking forgiveness, they descended to Earth to begin humanity's journey.",
      },
    ],
    teachings: [
      "The importance of seeking forgiveness from Allah",
      "Human beings are Allah's honored creation",
      "Repentance is always accepted by Allah",
    ],
    quranMentions: 25,
  },
  {
    id: 2,
    nameEnglish: "Nuh",
    nameArabic: "نوح",
    period: "Ancient Times",
    location: "Mesopotamia",
    knownFor: "Built the Ark during the Great Flood",
    biography: "Prophet Nuh (Noah, peace be upon him) preached to his people for 950 years, calling them to worship Allah alone. Despite facing rejection and mockery, he remained patient and steadfast. When his people refused to believe, Allah commanded him to build an ark for the great flood that would come.",
    keyEvents: [
      {
        title: "The Call to Faith",
        description: "Nuh called his people to abandon idol worship and turn to Allah for 950 years.",
      },
      {
        title: "Building the Ark",
        description: "Following Allah's command, Nuh built a great ark as his people mocked him.",
      },
      {
        title: "The Great Flood",
        description: "The flood came, saving the believers and destroying those who rejected faith.",
      },
    ],
    teachings: [
      "Patience in calling others to truth",
      "Trusting in Allah's plan even when it seems difficult",
      "The consequences of rejecting divine guidance",
    ],
    quranMentions: 43,
  },
  {
    id: 3,
    nameEnglish: "Ibrahim",
    nameArabic: "إبراهيم",
    period: "~2000 BCE",
    location: "Ur, Canaan, Makkah",
    knownFor: "Father of prophets, built the Kaaba",
    biography: "Prophet Ibrahim (Abraham, peace be upon him) is known as the 'Friend of Allah' and the father of the prophets. He challenged his people's idol worship, was tested with numerous trials, and built the Kaaba with his son Ismail in Makkah. His unwavering faith and submission to Allah serve as an example for all believers.",
    keyEvents: [
      {
        title: "Destroying the Idols",
        description: "Ibrahim broke the idols worshipped by his people to show their powerlessness.",
      },
      {
        title: "The Fire",
        description: "When thrown into a fire, Allah commanded it to be cool and safe for him.",
      },
      {
        title: "Building the Kaaba",
        description: "With his son Ismail, Ibrahim built the Kaaba as a house of worship for Allah.",
      },
      {
        title: "The Great Test",
        description: "Ibrahim was tested with sacrificing his son, showing ultimate submission to Allah.",
      },
    ],
    teachings: [
      "Complete submission to Allah's will",
      "Standing firm against falsehood",
      "The importance of monotheism",
    ],
    quranMentions: 69,
  },
  {
    id: 4,
    nameEnglish: "Musa",
    nameArabic: "موسى",
    period: "~1400 BCE",
    location: "Egypt, Sinai",
    knownFor: "Led the Israelites out of Egypt, received the Torah",
    biography: "Prophet Musa (Moses, peace be upon him) was sent to Pharaoh and the people of Egypt. He performed miracles by Allah's permission, including parting the Red Sea. He received the Torah on Mount Sinai and led the Children of Israel out of slavery. He is one of the most mentioned prophets in the Quran.",
    keyEvents: [
      {
        title: "The Staff and Miracles",
        description: "Musa's staff transformed into a serpent and performed other miracles by Allah's will.",
      },
      {
        title: "Parting the Red Sea",
        description: "Allah parted the sea for Musa and the believers to escape Pharaoh's army.",
      },
      {
        title: "Receiving the Torah",
        description: "On Mount Sinai, Musa received divine revelation including the Ten Commandments.",
      },
    ],
    teachings: [
      "Standing against oppression and tyranny",
      "Trusting in Allah's help in difficult times",
      "The importance of divine law and guidance",
    ],
    quranMentions: 136,
  },
  {
    id: 5,
    nameEnglish: "Isa",
    nameArabic: "عيسى",
    period: "~4 BCE - 30 CE",
    location: "Palestine",
    knownFor: "Miraculous birth, performed miracles, will return before the Day of Judgment",
    biography: "Prophet Isa (Jesus, peace be upon him) was born miraculously to Maryam (Mary) without a father. He spoke as an infant to defend his mother's honor. He performed many miracles by Allah's permission, including healing the sick and raising the dead. He was raised to the heavens and will return before the Day of Judgment.",
    keyEvents: [
      {
        title: "Miraculous Birth",
        description: "Born to Maryam without a father, a sign of Allah's power.",
      },
      {
        title: "Speaking in the Cradle",
        description: "As an infant, Isa spoke to defend his mother and proclaim his prophethood.",
      },
      {
        title: "Performing Miracles",
        description: "Healed the blind and lepers, and brought the dead to life by Allah's permission.",
      },
      {
        title: "Ascension",
        description: "Allah raised him to the heavens, and he will return before the Day of Judgment.",
      },
    ],
    teachings: [
      "Devotion and worship of Allah alone",
      "Compassion and mercy towards all creation",
      "The power of sincere prayer",
    ],
    quranMentions: 25,
  },
  {
    id: 6,
    nameEnglish: "Muhammad",
    nameArabic: "محمد",
    period: "570 - 632 CE",
    location: "Makkah, Madinah",
    knownFor: "Final Prophet, received the Quran",
    biography: "Prophet Muhammad (peace be upon him) is the final messenger of Allah. He received the Quran through Angel Jibreel over 23 years. He transformed Arabian society, establishing justice, equality, and the worship of one God. His character, teachings, and example (Sunnah) guide Muslims worldwide. He is described as a mercy to all the worlds.",
    keyEvents: [
      {
        title: "The First Revelation",
        description: "In the Cave of Hira, Angel Jibreel revealed the first verses of the Quran.",
      },
      {
        title: "The Night Journey",
        description: "Isra and Mi'raj - the miraculous journey to Jerusalem and ascension to the heavens.",
      },
      {
        title: "The Hijrah",
        description: "Migration from Makkah to Madinah, marking the beginning of the Islamic calendar.",
      },
      {
        title: "The Farewell Sermon",
        description: "Delivered his final sermon on Mount Arafat, completing Allah's message to humanity.",
      },
    ],
    teachings: [
      "The perfection of faith and character",
      "Justice, equality, and human dignity",
      "Mercy and compassion for all of creation",
      "The Quran as the final revelation",
    ],
    quranMentions: 4,
  },
];
