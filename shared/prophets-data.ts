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
    nameEnglish: "Idris",
    nameArabic: "إدريس",
    period: "Ancient Times",
    location: "Babylon/Egypt",
    knownFor: "Early prophet, elevated to high station",
    biography: "Prophet Idris (Enoch, peace be upon him) was an early prophet known for his wisdom and knowledge. He was the first to write with a pen and taught people various sciences. Allah raised him to a high station, and he is praised in the Quran for his truthfulness and patience.",
    keyEvents: [
      {
        title: "Teaching Writing",
        description: "Idris was among the first to teach humans the art of writing.",
      },
      {
        title: "Elevation",
        description: "Allah raised him to a high and honored station.",
      },
    ],
    teachings: [
      "The value of knowledge and learning",
      "Truthfulness in all matters",
      "Patience and steadfastness in worship",
    ],
    quranMentions: 2,
  },
  {
    id: 3,
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
    id: 4,
    nameEnglish: "Hud",
    nameArabic: "هود",
    period: "Ancient Times",
    location: "Al-Ahqaf, Arabia",
    knownFor: "Prophet to the people of 'Ad",
    biography: "Prophet Hud (peace be upon him) was sent to the people of 'Ad, who were known for their strength and tall stature. They built great monuments but became arrogant and turned away from Allah. Hud called them to worship Allah alone, but most rejected his message.",
    keyEvents: [
      {
        title: "Warning the People of 'Ad",
        description: "Hud warned his people against their arrogance and idol worship.",
      },
      {
        title: "The Devastating Wind",
        description: "Those who rejected were destroyed by a fierce wind sent by Allah.",
      },
    ],
    teachings: [
      "Humility before Allah regardless of worldly power",
      "The danger of arrogance and pride",
      "Material strength without faith leads to destruction",
    ],
    quranMentions: 7,
  },
  {
    id: 5,
    nameEnglish: "Salih",
    nameArabic: "صالح",
    period: "Ancient Times",
    location: "Al-Hijr, Arabia",
    knownFor: "Prophet to the people of Thamud, miracle of the she-camel",
    biography: "Prophet Salih (peace be upon him) was sent to the people of Thamud, who carved homes in mountains. They demanded a miracle, and Allah sent them a she-camel as a sign. Despite this clear miracle, most people rejected Salih's message and harmed the camel.",
    keyEvents: [
      {
        title: "The Miracle of the She-Camel",
        description: "Allah sent a she-camel as a sign, with specific instructions for its care.",
      },
      {
        title: "Destruction of Thamud",
        description: "When they killed the camel, a punishment came upon those who rejected faith.",
      },
    ],
    teachings: [
      "Respecting Allah's signs and miracles",
      "The sin of transgression against divine commands",
      "Warnings must be heeded before it's too late",
    ],
    quranMentions: 9,
  },
  {
    id: 6,
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
    id: 7,
    nameEnglish: "Lut",
    nameArabic: "لوط",
    period: "~2000 BCE",
    location: "Sodom and Gomorrah",
    knownFor: "Prophet to the people of Sodom",
    biography: "Prophet Lut (Lot, peace be upon him) was sent to a people who committed grave immoral acts. He called them to righteousness and warned them of Allah's punishment, but they rejected his message. He and the believers were saved when divine punishment came upon the transgressors.",
    keyEvents: [
      {
        title: "Warning Against Immorality",
        description: "Lut warned his people against their shameful acts and called them to purity.",
      },
      {
        title: "Divine Rescue",
        description: "Angels came to rescue Lut and his family before the punishment.",
      },
      {
        title: "Destruction of the Cities",
        description: "The cities were destroyed as a consequence of their persistence in sin.",
      },
    ],
    teachings: [
      "The importance of moral purity",
      "Speaking out against widespread immorality",
      "Divine justice against those who persist in wrongdoing",
    ],
    quranMentions: 27,
  },
  {
    id: 8,
    nameEnglish: "Ismail",
    nameArabic: "إسماعيل",
    period: "~2000 BCE",
    location: "Makkah, Arabia",
    knownFor: "Son of Ibrahim, helped build the Kaaba",
    biography: "Prophet Ismail (Ishmael, peace be upon him) was the son of Ibrahim and Hajar. He was left in the barren valley of Makkah as an infant, where the well of Zamzam miraculously appeared. He helped his father build the Kaaba and is known for his patience and obedience.",
    keyEvents: [
      {
        title: "Settlement in Makkah",
        description: "As an infant, Ismail and his mother were left in Makkah, where Zamzam water appeared.",
      },
      {
        title: "The Test of Sacrifice",
        description: "Ismail willingly submitted to being sacrificed in obedience to Allah's command.",
      },
      {
        title: "Building the Kaaba",
        description: "He assisted his father Ibrahim in constructing the sacred Kaaba.",
      },
    ],
    teachings: [
      "Obedience to parents and Allah",
      "Trust in Allah's provision",
      "Willing sacrifice for the sake of faith",
    ],
    quranMentions: 12,
  },
  {
    id: 9,
    nameEnglish: "Ishaq",
    nameArabic: "إسحاق",
    period: "~2000 BCE",
    location: "Canaan",
    knownFor: "Son of Ibrahim, father of Yaqub",
    biography: "Prophet Ishaq (Isaac, peace be upon him) was the son of Ibrahim and Sarah, born in their old age as a blessing from Allah. He continued his father's mission and was the father of Prophet Yaqub. He is praised in the Quran as a righteous prophet.",
    keyEvents: [
      {
        title: "Miraculous Birth",
        description: "Born to elderly parents as a gift and sign from Allah.",
      },
      {
        title: "Continuing the Legacy",
        description: "Carried forward the monotheistic message of his father Ibrahim.",
      },
    ],
    teachings: [
      "Allah's power to grant beyond expectations",
      "Carrying forward the legacy of righteousness",
      "Gratitude for Allah's blessings",
    ],
    quranMentions: 17,
  },
  {
    id: 10,
    nameEnglish: "Yaqub",
    nameArabic: "يعقوب",
    period: "~1800 BCE",
    location: "Canaan",
    knownFor: "Also known as Israel, father of twelve sons",
    biography: "Prophet Yaqub (Jacob, peace be upon him), also known as Israel, was the son of Ishaq and grandson of Ibrahim. He was the father of twelve sons, including Yusuf. He endured many trials, including the long separation from his beloved son Yusuf, yet remained patient and faithful.",
    keyEvents: [
      {
        title: "Loss of Yusuf",
        description: "Endured the pain of losing his son Yusuf, yet maintained trust in Allah.",
      },
      {
        title: "Reunion",
        description: "After years of patience, was reunited with Yusuf in Egypt.",
      },
    ],
    teachings: [
      "Beautiful patience (Sabr Jamil) in the face of hardship",
      "Trust in Allah's plan even in darkest times",
      "The importance of family bonds",
    ],
    quranMentions: 16,
  },
  {
    id: 11,
    nameEnglish: "Yusuf",
    nameArabic: "يوسف",
    period: "~1700 BCE",
    location: "Canaan, Egypt",
    knownFor: "Beautiful patience, interpreted dreams, rose from slavery to vizier",
    biography: "Prophet Yusuf (Joseph, peace be upon him) faced numerous trials from a young age. Betrayed by his brothers, sold into slavery, falsely accused, and imprisoned, he remained patient and righteous. His ability to interpret dreams led him to become the vizier of Egypt, where he forgave his brothers and reunited with his family.",
    keyEvents: [
      {
        title: "The Dream",
        description: "As a youth, saw a dream of eleven stars, the sun, and moon prostrating to him.",
      },
      {
        title: "Thrown into the Well",
        description: "His jealous brothers threw him into a well and told their father he was killed.",
      },
      {
        title: "In Prison",
        description: "Falsely accused, he was imprisoned where he interpreted dreams.",
      },
      {
        title: "Becoming Vizier",
        description: "Interpreted the king's dream and became the minister of Egypt.",
      },
      {
        title: "Forgiveness and Reunion",
        description: "Forgave his brothers and was reunited with his father Yaqub.",
      },
    ],
    teachings: [
      "Patience and forgiveness in adversity",
      "Maintaining purity and integrity",
      "Trust in Allah's ultimate plan",
    ],
    quranMentions: 27,
  },
  {
    id: 12,
    nameEnglish: "Ayyub",
    nameArabic: "أيوب",
    period: "Ancient Times",
    location: "Arabia/Syria region",
    knownFor: "Extraordinary patience during severe trials",
    biography: "Prophet Ayyub (Job, peace be upon him) was a wealthy and righteous man blessed with family and health. He was tested with the loss of his wealth, children, and health, yet he never complained or lost faith. His patience became legendary, and Allah eventually restored his blessings manifold.",
    keyEvents: [
      {
        title: "The Great Trial",
        description: "Lost his wealth, children, and health, yet remained patient and grateful.",
      },
      {
        title: "Steadfastness",
        description: "Despite immense suffering, never complained or questioned Allah's wisdom.",
      },
      {
        title: "Restoration",
        description: "Allah restored his health, wealth, and family as a reward for his patience.",
      },
    ],
    teachings: [
      "Patience in the face of extreme hardship",
      "Gratitude to Allah in all circumstances",
      "Faith is tested but rewarded",
    ],
    quranMentions: 4,
  },
  {
    id: 13,
    nameEnglish: "Shuaib",
    nameArabic: "شعيب",
    period: "Ancient Times",
    location: "Madyan (Midian)",
    knownFor: "Prophet to the people of Madyan, father-in-law of Musa",
    biography: "Prophet Shuaib (peace be upon him) was sent to the people of Madyan who were engaged in fraudulent business practices. He called them to worship Allah alone and to deal honestly in their transactions. Most rejected his message, and they were destroyed. He later gave shelter to Prophet Musa.",
    keyEvents: [
      {
        title: "Calling to Honesty",
        description: "Warned his people against cheating in weights and measures.",
      },
      {
        title: "Rejection and Destruction",
        description: "His people rejected him and were destroyed by divine punishment.",
      },
      {
        title: "Hosting Musa",
        description: "Later gave refuge to Prophet Musa and became his father-in-law.",
      },
    ],
    teachings: [
      "Honesty and fairness in business dealings",
      "Economic justice is a religious duty",
      "Worship includes ethical conduct",
    ],
    quranMentions: 11,
  },
  {
    id: 14,
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
    id: 15,
    nameEnglish: "Harun",
    nameArabic: "هارون",
    period: "~1400 BCE",
    location: "Egypt, Sinai",
    knownFor: "Brother and assistant of Musa, eloquent speaker",
    biography: "Prophet Harun (Aaron, peace be upon him) was the older brother of Musa and served as his assistant and spokesman. He was known for his eloquence and helped Musa in conveying Allah's message to Pharaoh and the Children of Israel. He served as a leader when Musa went to Mount Sinai.",
    keyEvents: [
      {
        title: "Supporting Musa",
        description: "Appointed by Allah to assist his brother Musa in his mission.",
      },
      {
        title: "Speaking to Pharaoh",
        description: "Helped Musa convey the message to Pharaoh with eloquence.",
      },
      {
        title: "The Golden Calf Incident",
        description: "Tried to prevent the people from worshipping the golden calf in Musa's absence.",
      },
    ],
    teachings: [
      "The value of supporting righteous causes",
      "Using one's gifts in service of faith",
      "Brotherhood and cooperation in faith",
    ],
    quranMentions: 20,
  },
  {
    id: 16,
    nameEnglish: "Dhul-Kifl",
    nameArabic: "ذو الكفل",
    period: "Ancient Times",
    location: "Possibly Iraq/Syria region",
    knownFor: "Patience and righteousness",
    biography: "Prophet Dhul-Kifl (possibly Ezekiel, peace be upon him) is mentioned briefly in the Quran as a righteous and patient prophet. While details of his life are limited, he is honored among the prophets for his steadfastness and good deeds.",
    keyEvents: [
      {
        title: "Righteous Leadership",
        description: "Led his people with patience and righteousness.",
      },
    ],
    teachings: [
      "Patience in fulfilling responsibilities",
      "Righteousness in leadership",
      "Steadfastness in faith",
    ],
    quranMentions: 2,
  },
  {
    id: 17,
    nameEnglish: "Dawud",
    nameArabic: "داود",
    period: "~1000 BCE",
    location: "Jerusalem",
    knownFor: "Received the Psalms (Zabur), great voice in worship",
    biography: "Prophet Dawud (David, peace be upon him) was both a prophet and a king. He received the Zabur (Psalms) and was known for his beautiful voice in praising Allah. He defeated the giant Goliath as a youth, became king of the Israelites, and ruled with justice and wisdom.",
    keyEvents: [
      {
        title: "Defeating Goliath",
        description: "As a youth, defeated the giant warrior Goliath with Allah's help.",
      },
      {
        title: "Receiving the Zabur",
        description: "Allah revealed the Psalms (Zabur) to him.",
      },
      {
        title: "Just Kingship",
        description: "Ruled as a just and wise king, settling disputes with fairness.",
      },
    ],
    teachings: [
      "Justice and fairness in leadership",
      "The power of praising and remembering Allah",
      "Humility despite power and status",
    ],
    quranMentions: 16,
  },
  {
    id: 18,
    nameEnglish: "Sulayman",
    nameArabic: "سليمان",
    period: "~950 BCE",
    location: "Jerusalem",
    knownFor: "Great wisdom, commanded jinn and animals, magnificent kingdom",
    biography: "Prophet Sulayman (Solomon, peace be upon him) was the son of Dawud. He was granted immense wisdom and a kingdom unlike any other. He could understand the speech of animals and birds, and commanded both humans and jinn. Despite his vast power and wealth, he remained devoted to Allah.",
    keyEvents: [
      {
        title: "The Gift of Wisdom",
        description: "Granted great wisdom and understanding by Allah.",
      },
      {
        title: "Understanding Animals",
        description: "Could understand and communicate with birds, ants, and other creatures.",
      },
      {
        title: "Commanding the Jinn",
        description: "Was given authority over jinn who helped build magnificent structures.",
      },
      {
        title: "The Queen of Sheba",
        description: "Called the Queen of Sheba to Islam, who accepted faith.",
      },
    ],
    teachings: [
      "True power lies in submission to Allah",
      "Wisdom is a divine gift to be used righteously",
      "Gratitude for blessings, no matter how great",
    ],
    quranMentions: 17,
  },
  {
    id: 19,
    nameEnglish: "Ilyas",
    nameArabic: "إلياس",
    period: "~900 BCE",
    location: "Northern Kingdom of Israel",
    knownFor: "Stood against Baal worship",
    biography: "Prophet Ilyas (Elijah, peace be upon him) was sent to the Israelites who had turned to worshipping Baal and other false gods. He called them back to the worship of Allah alone, performed miracles, and stood firm against the corrupt rulers of his time.",
    keyEvents: [
      {
        title: "Confronting Baal Worship",
        description: "Challenged the prophets of Baal and called people back to monotheism.",
      },
      {
        title: "Miracles",
        description: "Performed miracles by Allah's permission to show the truth.",
      },
    ],
    teachings: [
      "Standing firm against false worship",
      "Courage in confronting corruption",
      "Unwavering monotheism",
    ],
    quranMentions: 2,
  },
  {
    id: 20,
    nameEnglish: "Al-Yasa",
    nameArabic: "اليسع",
    period: "~850 BCE",
    location: "Israel",
    knownFor: "Successor of Ilyas, continued his mission",
    biography: "Prophet Al-Yasa (Elisha, peace be upon him) was the successor of Prophet Ilyas. He continued the mission of calling people to worship Allah alone and performed various miracles. He is honored in the Quran as one of the righteous prophets.",
    keyEvents: [
      {
        title: "Succeeding Ilyas",
        description: "Continued the prophetic mission after Ilyas.",
      },
      {
        title: "Performing Miracles",
        description: "Performed miracles to support the message of monotheism.",
      },
    ],
    teachings: [
      "Continuing the work of righteousness",
      "Healing and helping through faith",
      "Steadfastness in calling to truth",
    ],
    quranMentions: 2,
  },
  {
    id: 21,
    nameEnglish: "Yunus",
    nameArabic: "يونس",
    period: "~800 BCE",
    location: "Nineveh (modern Iraq)",
    knownFor: "Swallowed by a whale, his people believed",
    biography: "Prophet Yunus (Jonah, peace be upon him) was sent to the people of Nineveh. When they initially rejected his message, he left in frustration. He was swallowed by a large fish and glorified Allah from within its belly. After being released, he returned to find his entire city had turned to faith.",
    keyEvents: [
      {
        title: "Leaving His People",
        description: "Left his people in frustration before receiving Allah's permission.",
      },
      {
        title: "In the Belly of the Whale",
        description: "Swallowed by a great fish, where he repented and glorified Allah.",
      },
      {
        title: "Release and Return",
        description: "Released by the fish and returned to find his people had believed.",
      },
    ],
    teachings: [
      "The importance of patience with people",
      "Seeking forgiveness in times of distress",
      "Allah's mercy extends to all who repent",
    ],
    quranMentions: 4,
  },
  {
    id: 22,
    nameEnglish: "Zakariya",
    nameArabic: "زكريا",
    period: "~100 BCE",
    location: "Palestine",
    knownFor: "Father of Yahya, granted a son in old age",
    biography: "Prophet Zakariya (Zechariah, peace be upon him) was a righteous prophet who devoted his life to worship and service. In his old age, he prayed for an heir, and Allah granted him a son, Yahya, despite his wife being barren. He cared for Maryam (Mary) in the temple.",
    keyEvents: [
      {
        title: "Prayer for a Son",
        description: "Despite old age and his wife's barrenness, prayed for a righteous heir.",
      },
      {
        title: "Birth of Yahya",
        description: "Granted the miraculous birth of Prophet Yahya in his old age.",
      },
      {
        title: "Guardian of Maryam",
        description: "Served as the guardian of Maryam, mother of Isa.",
      },
    ],
    teachings: [
      "Never lose hope in Allah's mercy",
      "The power of sincere supplication",
      "Devotion in worship throughout life",
    ],
    quranMentions: 7,
  },
  {
    id: 23,
    nameEnglish: "Yahya",
    nameArabic: "يحيى",
    period: "~1 BCE - 30 CE",
    location: "Palestine",
    knownFor: "Born miraculously, lived in piety and chastity",
    biography: "Prophet Yahya (John the Baptist, peace be upon him) was the son of Zakariya, born through a miracle. He was granted wisdom from childhood and lived a life of extreme piety, chastity, and devotion. He confirmed the truth of Isa and called people to righteousness.",
    keyEvents: [
      {
        title: "Miraculous Birth",
        description: "Born to elderly parents as a sign of Allah's power.",
      },
      {
        title: "Wisdom from Youth",
        description: "Granted wisdom, knowledge, and prophethood from a young age.",
      },
      {
        title: "Confirming Isa",
        description: "Testified to the truth of Prophet Isa's message.",
      },
    ],
    teachings: [
      "Purity and chastity in life",
      "Devotion from an early age",
      "Kindness and compassion to all",
    ],
    quranMentions: 5,
  },
  {
    id: 24,
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
    id: 25,
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
