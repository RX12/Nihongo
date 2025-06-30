// vocab.js

// --- VOKABELN LEKTION 1-12 (bleibt unverändert) ---
const vocabularyL1_12 = [
    // ... (alle Vokabeln von Lektion 1-12 wie zuvor)
    { kana: "わたし", romaji: "watashi", german: "ich" },
    // ...
    { kana: "おかえりなさい", romaji: "okaerinasai", german: "Willkommen zurück." }
];

const vocabularyLessons = {
    1: vocabularyL1_12.slice(0, 31),
    2: vocabularyL1_12.slice(31, 61),
    3: vocabularyL1_12.slice(61, 93),
    4: vocabularyL1_12.slice(93, 143),
    5: vocabularyL1_12.slice(143, 194),
    6: vocabularyL1_12.slice(194, 244),
    7: vocabularyL1_12.slice(244, 290),
    8: vocabularyL1_12.slice(290, 340),
    9: vocabularyL1_12.slice(340, 382),
    10: vocabularyL1_12.slice(382, 426),
    11: vocabularyL1_12.slice(426, 477),
    12: vocabularyL1_12.slice(477),
    // --- HIER WIRD DIE NEUE LISTE REGISTRIERT ---
    bildbeschreibung: vocabBildbeschreibung 
};


// --- NEUE LISTE: Bildbeschreibung ---
// Diese Liste wird unten im `vocabularyLessons`-Objekt hinzugefügt.
const vocabBildbeschreibung = [
    // Verbs
    { kana: "ねます", romaji: "nemasu", german: "Schlafen / sleeping" },
    { kana: "たべます", romaji: "tabemasu", german: "Essen / eating" },
    { kana: "べんきょうします", romaji: "benkyō shimasu", german: "Lernen / studying" },
    { kana: "しゃしんをとります", romaji: "shashin o torimasu", german: "Fotografieren / taking a picture" },
    { kana: "いわいます", romaji: "iwaimasu", german: "feiern / celebrating" },
    { kana: "およぎます", romaji: "oyogimasu", german: "Schwimmen / swimming" },
    { kana: "はたらきます", romaji: "hatarakimasu", german: "Arbeiten / working" },
    { kana: "みます", romaji: "mimasu", german: "Sehen / watching" },
    { kana: "すわります", romaji: "suwarimasu", german: "Sitzen / sitting" },
    { kana: "おしえます", romaji: "oshiemasu", german: "Unterrichten / teaching" },
    { kana: "あいます", romaji: "aimasu", german: "Treffen / meeting" },
    { kana: "かいます", romaji: "kaimasu", german: "Kaufen / buying" },
    { kana: "えをかきます", romaji: "e o kakimasu", german: "Malen / painting" },
    { kana: "はなします", romaji: "hanashimasu", german: "Sich unterhalten / talking" },
    { kana: "かします", romaji: "kashimasu", german: "Jemandem etw. ausleihen / renting" },
    { kana: "かります", romaji: "karimasu", german: "Von jemandem etw. ausleihen / borrowing" },
    { kana: "いきます", romaji: "ikimasu", german: "Gehen / going" },
    { kana: "のみます", romaji: "nomimasu", german: "Trinken / drinking" },
    { kana: "あります", romaji: "arimasu", german: "existieren (Dinge) / there is" },
    { kana: "います", romaji: "imasu", german: "existieren (Lebewesen) / there is" },
    { kana: "です", romaji: "desu", german: "Sein / being" },
    // Person
    { kana: "おとこのひと", romaji: "otoko no hito", german: "Mann / man" },
    { kana: "おんなのひと", romaji: "onna no hito", german: "Frau / woman" },
    { kana: "おんなのこ", romaji: "onna no ko", german: "Mädchen / girl" },
    { kana: "おとこのこ", romaji: "otoko no ko", german: "Junge / boy" },
    { kana: "かぞく", romaji: "kazoku", german: "Familie / family" },
    // Colours
    { kana: "あかい", romaji: "akai", german: "Rot / red" },
    { kana: "あおい", romaji: "aoi", german: "Blau / blue" },
    { kana: "きいろい", romaji: "kiiroi", german: "Gelb / yellow" },
    { kana: "みどり", romaji: "midori", german: "Grün / green" },
    { kana: "ちゃいろ", romaji: "chairo", german: "Braun / brown" },
    { kana: "くろい", romaji: "kuroi", german: "Schwarz / black" },
    { kana: "むらさき", romaji: "murasaki", german: "Violett / violet" },
    { kana: "オレンジ", romaji: "orenji", german: "Orange / orange" },
    { kana: "ピンク", romaji: "pinku", german: "Rosa / pink" },
    { kana: "しろい", romaji: "shiroi", german: "Weiss / white" },
    // Nouns
    { kana: "うち", romaji: "uchi", german: "Zuhause / home" },
    { kana: "プール", romaji: "puuru", german: "Schwimmbad / swimming pool" },
    { kana: "やま", romaji: "yama", german: "Berg / mountain" },
    { kana: "きっさてん", romaji: "kissaten", german: "Kaffeehaus / coffee shop" },
    { kana: "としょかん", romaji: "toshokan", german: "Bibliothek / library" },
    { kana: "スーパー", romaji: "suupaa", german: "Supermarkt / grocery store" },
    { kana: "テレビ", romaji: "terebi", german: "Fernseher / TV" },
    { kana: "ほん", romaji: "hon", german: "Buch / book" },
    { kana: "ミルク", romaji: "miruku", german: "Milch / milk" },
    { kana: "こくばん", romaji: "kokuban", german: "Schultafel / school board" },
    { kana: "バナナ", romaji: "banana", german: "Banane / banana" },
    { kana: "パソコン", romaji: "pasokon", german: "Computer / computer" },
    { kana: "まど", romaji: "mado", german: "Fenster / window" },
    { kana: "ケーキ", romaji: "keeki", german: "Torte / cake" },
    { kana: "おべんとう", romaji: "o-bentō", german: "Lunchbox / lunch box" },
    { kana: "はし", romaji: "hashi", german: "Stäbchen / chopstick" },
    { kana: "にほんりょうり", romaji: "nihon ryōri", german: "Japanisches Essen / Japanese food" },
    { kana: "てんき", romaji: "tenki", german: "Wetter / weather" },
    { kana: "コーヒー", romaji: "koohii", german: "Kaffee / coffee" },
    { kana: "はた", romaji: "hata", german: "Fahne / flag" },
    { kana: "りんご", romaji: "ringo", german: "Apfel / apple" },
    { kana: "パン", romaji: "pan", german: "Brot / bread" },
    { kana: "テーブル", romaji: "teeburu", german: "Esstisch / dining table" },
    { kana: "つくえ", romaji: "tsukue", german: "Schreibtisch / desk" },
    { kana: "でんしゃ", romaji: "densha", german: "Zug / train" },
    { kana: "うみ", romaji: "umi", german: "Meer / sea" },
    { kana: "ビル", romaji: "biru", german: "Gebäude / building" },
    { kana: "みず", romaji: "mizu", german: "Wasser / water" },
    { kana: "いす", romaji: "isu", german: "Stuhl / seat" },
    { kana: "ぼうし", romaji: "bōshi", german: "Mütze, Kappe / hat" },
    { kana: "シャツ", romaji: "shatsu", german: "Hemd / shirt" },
    { kana: "リュックサック", romaji: "ryukkusakku", german: "Rucksack / backpack" },
    { kana: "おかね", romaji: "okane", german: "Geld / money" },
    { kana: "ズボン", romaji: "zubon", german: "Hose / trousers" },
    { kana: "スカート", romaji: "sukaato", german: "Rock / skirt" },
    { kana: "かばん", romaji: "kaban", german: "Tasche / bag" },
    { kana: "チョーク", romaji: "chooku", german: "Kreide / chalk" },
    { kana: "き", romaji: "ki", german: "Baum / tree" },
    // Adjectives
    { kana: "たのしい", romaji: "tanoshii", german: "Spass machen / having a fun" },
    { kana: "いい", romaji: "ii", german: "gut, schön / good, nice" },
    { kana: "たいへん", romaji: "taihen", german: "Anstrengend / tiring" },
    { kana: "おいしい", romaji: "oishii", german: "gut schmeckend, lecker / tasty" },
    { kana: "うれしい", romaji: "ureshii", german: "sich freuen / looking forward to" },
    { kana: "あつい", romaji: "atsui", german: "Heiss / hot" }
];