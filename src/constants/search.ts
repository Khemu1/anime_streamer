export const genresFilter = [
  { name: "Action", value: "action" },
  { name: "Romance", value: "romance" },
  { name: "Comedy", value: "comedy" },
  { name: "Drama", value: "drama" },
  { name: "Ecchi", value: "ecchi" },
  { name: "Fantasy", value: "fantasy" },
  { name: "Horror", value: "horror" },
  { name: "Mahou Shoujo", value: "mahou-shoujo" },
  { name: "Mecha", value: "mecha" },
  { name: "Mystery", value: "mystery" },
  { name: "Psychological", value: "psychological" },
  { name: "Sci-Fi", value: "sci-fi" },
  { name: "Slice of Life", value: "slice-of-life" },
  { name: "Supernatural", value: "supernatural" },
  { name: "Sports", value: "sports" },
  { name: "Thriller", value: "thriller" },
  { name: "Adventure", value: "adventure" },
];

export const tagsFilter = [
  { name: "Achromatic", value: "achromatic" },
  { name: "Achronological Order", value: "achronological-order" },
  { name: "Acrobatics", value: "acrobatics" },
  { name: "Acting", value: "acting" },
  { name: "Adoption", value: "adoption" },
  { name: "Agender", value: "agender" },
  { name: "Agriculture", value: "agriculture" },
  { name: "Airsoft", value: "airsoft" },
  { name: "Alchemy", value: "alchemy" },
  { name: "Aliens", value: "aliens" },
  { name: "Alternate Universe", value: "alternate-universe" },
  { name: "American Football", value: "american-football" },
  { name: "Amnesia", value: "amnesia" },
  { name: "Anachronism", value: "anachronism" },
  { name: "Advertisement", value: "advertisement" },
  { name: "Afterlife", value: "afterlife" },
  { name: "Age Gap", value: "age-gap" },
  { name: "Age Regression", value: "age-regression" },
  { name: "Ancient China", value: "ancient-china" },
  { name: "Angels", value: "angels" },
  { name: "Animals", value: "animals" },
  { name: "Anthology", value: "anthology" },
  { name: "Anthropomorphism", value: "anthropomorphism" },
  { name: "Anti-Hero", value: "anti-hero" },
  { name: "Apocalypse", value: "apocalypse" },
  { name: "Artificial Intelligence", value: "artificial-intelligence" },
  { name: "Assassins", value: "assassins" },
  { name: "Aviation", value: "aviation" },
  { name: "Band", value: "band" },
  { name: "Battle Royale", value: "battle-royale" },
  { name: "Board Games", value: "board-games" },
  { name: "Body Swapping", value: "body-swapping" },
  { name: "Bounty Hunters", value: "bounty-hunters" },
  { name: "Camping", value: "camping" },
  { name: "Card Games", value: "card-games" },
  { name: "Childhood Friends", value: "childhood-friends" },
  { name: "Circus", value: "circus" },
  { name: "Climbing", value: "climbing" },
  { name: "Cooking", value: "cooking" },
  { name: "Crime", value: "crime" },
  { name: "Cyberpunk", value: "cyberpunk" },
  { name: "Dark Fantasy", value: "dark-fantasy" },
  { name: "Demons", value: "demons" },
  { name: "Detective", value: "detective" },
  { name: "Dinosaurs", value: "dinosaurs" },
  { name: "Dragons", value: "dragons" },
  { name: "Dystopia", value: "dystopia" },
  { name: "Espionage", value: "espionage" },
  { name: "Fashion", value: "fashion" },
  { name: "Fishing", value: "fishing" },
  { name: "Folklore", value: "folklore" },
  { name: "Found Family", value: "found-family" },
  { name: "Gambling", value: "gambling" },
  { name: "Ghosts", value: "ghosts" },
  { name: "Gladiators", value: "gladiators" },
  { name: "High School", value: "high-school" },
  { name: "Historical Fiction", value: "historical-fiction" },
  { name: "Interspecies Relationships", value: "interspecies-relationships" },
  { name: "Kaiju", value: "kaiju" },
  { name: "Martial Arts", value: "martial-arts" },
  { name: "Mecha Battles", value: "mecha-battles" },
  { name: "Military", value: "military" },
  { name: "Musical", value: "musical" },
  { name: "Parallel Worlds", value: "parallel-worlds" },
  { name: "Pirates", value: "pirates" },
  { name: "Reincarnation", value: "reincarnation" },
  { name: "Robots", value: "robots" },
  { name: "Space Exploration", value: "space-exploration" },
  { name: "Steampunk", value: "steampunk" },
  { name: "Time Travel", value: "time-travel" },
  { name: "Treasure Hunting", value: "treasure-hunting" },
  { name: "Urban Fantasy", value: "urban-fantasy" },
  { name: "Virtual Reality", value: "virtual-reality" },
  { name: "Zombies", value: "zombies" },
];

const currentYear = new Date().getFullYear();

export const yearsFilter = Array.from(
  { length: currentYear - 1940 + 1 },
  (_, index) => {
    const year = 1940 + index;
    return { name: year.toString(), value: year.toString() };
  }
);

export const statusFilter = [
  { name: "Any Status", value: "any" },
  { name: "CANCELLED", value: "cancelled" },
  { name: "FINISHED", value: "finished" },
  { name: "HIATUS", value: "hiatus" },
  { name: "NOT YET RELEASED", value: "not_yet_released" },
  { name: "RELEASING", value: "releasing" },
];

export const formatFilter = [
  {
    name: "ANY FORMAT",
    value: "any",
  },
  {
    name: "TV",
    value: "tv",
  },
  {
    name: "MOVIE",
    value: "movie",
  },
  {
    name: "MUSIC",
    value: "music",
  },
  {
    name: "OVA",
    value: "ova",
  },
  {
    name: "NOVEL",
    value: "novel",
  },
  {
    name: "ONE_SHOT",
    value: "one_shot",
  },
  {
    name: "SPECIAL",
    value: "special",
  },
  {
    name: "TV_SHORT",
    value: "tv_short",
  },
];

export const seasonsFilter = [
  { name: "Any Season", value: "any" },
  { name: "Winter", value: "winter" },
  { name: "Spring", value: "spring" },
  { name: "Summer", value: "summer" },
  { name: "Fall", value: "fall" },
];

export const SourceMatrialFilter = [
  { name: "ANIME", value: "anime" },
  { name: "COMIC", value: "comic" },
  { name: "DOUJINSHI", value: "doujinshi" },
  { name: "MANGA", value: "manga" },
  { name: "GAME", value: "game" },
  { name: "LIGHT_NOVEL", value: "light_novel" },
  { name: "NOVAL", value: "novel" },
  { name: "VISUAL_NOVEL", value: "visual_novel" },
  { name: "WEB_NOVEL", value: "web_novel" },
  { name: "LIVE_ACTION", value: "live_action" },
  { name: "MULTIMDEIA_PROJECT", value: "multimedia_project" },
  { name: "ORIGNAL", value: "original" },
  { name: "OTHER", value: "other" },
  { name: "PICTURE_BOOK", value: "picture_book" },
  { name: "VIDEO_GAME", value: "video_game" },
];

export const countryOfOriginFilter = [
  { name: "Any Country", value: "any" },
  { name: "Japan", value: "japan" },
  { name: "United States", value: "united_states" },
  { name: "United Kingdom", value: "united_kingdom" },
  { name: "France", value: "france" },
  { name: "Germany", value: "germany" },
  { name: "Italy", value: "italy" },
  { name: "Spain", value: "spain" },
  { name: "Netherlands", value: "netherlands" },
  { name: "Brazil", value: "brazil" },
  { name: "Russia", value: "russia" },
  { name: "Canada", value: "canada" },
  { name: "Australia", value: "australia" },
  { name: "China", value: "china" },
  { name: "South Korea", value: "south_korea" },
  { name: "India", value: "india" },
];

export const dubsLanguageFilter = [
  { name: "Any Language", value: "any" },
  { name: "English", value: "english" },
  { name: "Japanese", value: "japanese" },
  { name: "Korean", value: "korean" },
  { name: "Chinese", value: "chinese" },
  { name: "French", value: "french" },
  { name: "German", value: "german" },
  { name: "Italian", value: "italian" },
  { name: "Spanish", value: "spanish" },
  { name: "Russian", value: "russian" },
  { name: "Portuguese", value: "portuguese" },
  { name: "Dutch", value: "dutch" },
  { name: "Swedish", value: "swedish" },
  { name: "Polish", value: "polish" },
  { name: "Turkish", value: "turkish" },
  { name: "Vietnamese", value: "vietnamese" },
  { name: "Arabic", value: "arabic" },
  { name: "Thai", value: "thai" },
  { name: "Indonesian", value: "indonesian" },
  { name: "Malay", value: "malay" },
  { name: "Tamil", value: "tamil" },
];

export const adultContentFilter = [
  { name: "Any Content", value: "any" },
  { name: "Adult", value: "adult" },
  { name: "Non-Adult", value: "non_adult" },
];

export const sortByFilter = [
  { name: "POPULARITY ASCE", value: "popularity" },
  { name: "POPULARITY DESC", value: "popularity_desc" },
  { name: "CHAPTERS ASCE", value: "chapters" },
  { name: "CHAPTERS DESC", value: "chapters_desc" },
  { name: "DURATION ASCE", value: "duration" },
  { name: "DURATION DESC", value: "duration_desc" },
  { name: "END DATE ASCE", value: "end_date" },
  { name: "END DATE DESC", value: "end_date_desc" },
  { name: "EPISODES ASCE", value: "episodes" },
  { name: "EPISODES DESC", value: "episodes_desc" },
  { name: "FAVOURITES ASCE", value: "favourites" },
  { name: "FAVOURITES DESC", value: "favourites_desc" },
  { name: "FORMAT ASCE", value: "format" },
  { name: "FORMAT DESC", value: "format_desc" },
  { name: "ID ASCE", value: "id" },
  { name: "ID DESC", value: "id_desc" },
  { name: "SCORE ASCE", value: "score" },
  { name: "SCORE DESC", value: "score_desc" },
  { name: "SEARCH MATCH", value: "search_match" },
  { name: "START DATE ASCE", value: "start_date" },
  { name: "START DATE DESC", value: "start_date_desc" },
  { name: "STATUS ASCE", value: "status" },
  { name: "STATUS DESC", value: "status_desc" },
  { name: "TITLE ENGLISH ASCE", value: "title_english" },
  { name: "TITLE ENGLISH DESC", value: "title_english_desc" },
  { name: "TITLE ROMAJI ASCE", value: "title_romaji" },
  { name: "TITLE ROMAJI DESC", value: "title_romaji_desc" },
  { name: "TITLE NATIVE ASCE", value: "title_native" },
  { name: "TITLE NATIVE DESC", value: "title_native_desc" },
  { name: "TYPE ASCE", value: "type" },
  { name: "TYPE DESC", value: "type_desc" },
  { name: "TRENDING ASCE", value: "trending" },
  { name: "TRENDING DESC", value: "trending_desc" },
  { name: "UPDATED AT ASCE", value: "updated_at" },
  { name: "UPDATED AT DESC", value: "updated_at_desc" },
  { name: "VOLUMES ASCE", value: "volumes" },
  { name: "VOLUMES DESC", value: "volumes_desc" },
];
