const lang = {
    en: { search: "Search", gptSearchPlaceholder: "What Would You Like to Watch Today?🤩..." },
    hindi: { search: "खोज", gptSearchPlaceholder: "आज क्या आप देखना चाहेंगे?🤩..." },
    spanish: { search: "Buscar", gptSearchPlaceholder: "¿Qué te gustaría ver hoy?🤩..." },
    french: { search: "Rechercher", gptSearchPlaceholder: "Que voulez-vous regarder aujourd'hui?🤩..." },
    german: { search: "Suchen", gptSearchPlaceholder: "Was möchten Sie heute ansehen?🤩..." },
    italian: { search: "Cerca", gptSearchPlaceholder: "Cosa ti piacerebbe guardare oggi?🤩..." },
    portuguese: { search: "Buscar", gptSearchPlaceholder: "O que você gostaria de assistir hoje?🤩..." },
    chinese: { search: "搜索", gptSearchPlaceholder: "今天想看什么？🤩..." },
    japanese: { search: "検索", gptSearchPlaceholder: "今日は何を見たいですか？🤩..." },
    russian: { search: "Поиск", gptSearchPlaceholder: "Что бы вы хотели посмотреть сегодня?🤩..." },
    arabic: { search: "بحث", gptSearchPlaceholder: "ماذا تريد أن تشاهد اليوم؟🤩..." },
    korean: { search: "검색", gptSearchPlaceholder: "오늘 무엇을 보고 싶으신가요?🤩..." },
    turkish: { search: "Arama", gptSearchPlaceholder: "Bugün ne izlemek istersiniz?🤩..." },
    dutch: { search: "Zoeken", gptSearchPlaceholder: "Wat wil je vandaag kijken?🤩..." },
    swedish: { search: "Sök", gptSearchPlaceholder: "Vad vill du titta på idag?🤩..." },
    polish: { search: "Szukaj", gptSearchPlaceholder: "Co chcesz dzisiaj obejrzeć?🤩..." },
    thai: { search: "ค้นหา", gptSearchPlaceholder: "วันนี้คุณอยากดูอะไร?🤩..." },
    indonesian: { search: "Cari", gptSearchPlaceholder: "Apa yang ingin Anda tonton hari ini?🤩..." },
    vietnamese: { search: "Tìm kiếm", gptSearchPlaceholder: "Hôm nay bạn muốn xem gì?🤩..." },
    filipino: { search: "Maghanap", gptSearchPlaceholder: "Ano ang gusto mong panoorin ngayon?🤩..." },
    hebrew: { search: "חפש", gptSearchPlaceholder: "מה היית רוצה לצפות היום?🤩..." },
    greek: { search: "Αναζήτηση", gptSearchPlaceholder: "Τι θα θέλατε να παρακολουθήσετε σήμερα;🤩..." },
    romanian: { search: "Căutare", gptSearchPlaceholder: "Ce ai vrea să vezi azi?🤩..." },
    hungarian: { search: "Keresés", gptSearchPlaceholder: "Mit szeretnél ma nézni?🤩..." },
    finnish: { search: "Hae", gptSearchPlaceholder: "Mitä haluaisit katsoa tänään?🤩..." },
    ukrainian: { search: "Пошук", gptSearchPlaceholder: "Що б ви хотіли подивитися сьогодні?🤩..." },
    malay: { search: "Cari", gptSearchPlaceholder: "Apa yang anda mahu tonton hari ini?🤩..." },
    bengali: { search: "অনুসন্ধান", gptSearchPlaceholder: "আজ আপনি কি দেখতে চান?🤩..." },
    tamil: { search: "தேடல்", gptSearchPlaceholder: "இன்று நீங்கள் என்ன பார்க்க விரும்புகிறீர்கள்?🤩..." },
    telugu: { search: "వెతకండి", gptSearchPlaceholder: "ఈరోజు మీరు ఏమి చూడాలనుకుంటున్నారు?🤩..." },
    marathi: { search: "शोधा", gptSearchPlaceholder: "आज तुम्ही काय पहायला आवडेल?🤩..." },
    punjabi: { search: "ਖੋਜ", gptSearchPlaceholder: "ਅੱਜ ਤੁਸੀਂ ਕੀ ਦੇਖਣਾ ਚਾਹੁੰਦੇ ਹੋ?🤩..." },
    gujarati: { search: "શોધો", gptSearchPlaceholder: "આજે તમે શું જોવું ઇચ્છો છો?🤩..." },
    kannada: { search: "ಹುಡುಕು", gptSearchPlaceholder: "ಇಂದು ನೀವು ಏನನ್ನು ವೀಕ್ಷಿಸಲು ಇಚ್ಛಿಸುತ್ತೀರಿ?🤩..." },
    malayalam: { search: "തിരയുക", gptSearchPlaceholder: "ഇന്ന് നിങ്ങൾ എന്താണ് കാണാൻ ആഗ്രഹിക്കുന്നത്?🤩..." },
    sinhala: { search: "සොයන්න", gptSearchPlaceholder: "ඔබ අද බලන්න කැමති දේ කුමක්ද?🤩..." },
    burmese: { search: "ရှာဖွေရန်", gptSearchPlaceholder: "ဒီနေ့ ဘာကြည့်ချင်လဲ?🤩..." },
    lao: { search: "ຄົ້ນຫາ", gptSearchPlaceholder: "ທ່ານຕ້ອງການເບິ່ງຫຍັງມື້ນີ້?🤩..." },
    khmer: { search: "ស្វែងរក", gptSearchPlaceholder: "ថ្ងៃនេះអ្នកចង់មើលអ្វី?🤩..." },
    pashto: { search: "لټون", gptSearchPlaceholder: "نن څه لیدل غواړئ؟🤩..." },
    persian: { search: "جستجو", gptSearchPlaceholder: "امروز چه چیزی دوست دارید تماشا کنید؟🤩..." },
    uzbek: { search: "Qidiruv", gptSearchPlaceholder: "Bugun nimani tomosha qilmoqchisiz?🤩..." },
    kazakh: { search: "Іздеу", gptSearchPlaceholder: "Бүгін не көргіңіз келеді?🤩..." },
    georgian: { search: "ძებნა", gptSearchPlaceholder: "რას უყურებდი დღეს?🤩..." },
    armenian: { search: "Որոնել", gptSearchPlaceholder: "Ի՞նչ կցանկանայիր դիտել այսօր։🤩..." },
    haitian_creole: { search: "Chèche", gptSearchPlaceholder: "Kisa ou ta renmen gade jodia?🤩..." },
    swahili: { search: "Tafuta", gptSearchPlaceholder: "Ungependa kutazama nini leo?🤩..." },
    zulu: { search: "Sesha", gptSearchPlaceholder: "Ufuna ukubuka ini namhlanje?🤩..." },
    afrikaans: { search: "Soek", gptSearchPlaceholder: "Wat wil jy vandag kyk?🤩..." },
    albanian: { search: "Kërko", gptSearchPlaceholder: "Çfarë do të dëshironit të shikonit sot?🤩..." },
    amharic: { search: "ፈልግ", gptSearchPlaceholder: "ዛሬ ምን ማየት ይፈልጋሉ?🤩..." },
    azerbaijani: { search: "Axtar", gptSearchPlaceholder: "Bu gün nə izləmək istərdiniz?🤩..." },
    basque: { search: "Bilatu", gptSearchPlaceholder: "Zer ikusi nahi zenuke gaur?🤩..." },
    belarusian: { search: "Пошук", gptSearchPlaceholder: "Што б вы хацелі паглядзець сёння?🤩..." },
    bosnian: { search: "Pretraži", gptSearchPlaceholder: "Šta biste danas želeli da gledate?🤩..." },
    catalan: { search: "Cerca", gptSearchPlaceholder: "Què t’agradaria veure avui?🤩..." },
    corsican: { search: "Cerca", gptSearchPlaceholder: "Cosa vulete fighjà oghje?🤩..." },
    croatian: { search: "Pretraži", gptSearchPlaceholder: "Što želite gledati danas?🤩..." },
    estonian: { search: "Otsi", gptSearchPlaceholder: "Mida soovite täna vaadata?🤩..." },
    fijian: { search: "Vakasavasava", gptSearchPlaceholder: "Na cava o vinakata me o raica nikua?🤩..." },
    frisian: { search: "Sykje", gptSearchPlaceholder: "Wat wolle jo hjoed sjen?🤩..." },
    galician: { search: "Buscar", gptSearchPlaceholder: "Que che gustaría ver hoxe?🤩..." },
    haitian: { search: "Chèche", gptSearchPlaceholder: "Kisa ou vle gade jodi a?🤩..." },
    hawaiian: { search: "Huli", gptSearchPlaceholder: "He aha kāu e makemake ai e nānā i kēia lā?🤩..." },
    hmong: { search: "Nrhiav", gptSearchPlaceholder: "Koj xav saib dab tsi hnub no?🤩..." },
    icelandic: { search: "Leita", gptSearchPlaceholder: "Hvað viltu horfa á í dag?🤩..." },
    igbo: { search: "Chọọ", gptSearchPlaceholder: "Gịnị ka ị ga-ahụ taa?🤩..." },
    irish: { search: "Cuardach", gptSearchPlaceholder: "Cad ba mhaith leat féachaint inniu?🤩..." },
    javanese: { search: "Telusuri", gptSearchPlaceholder: "Apa sing pengin sampeyan tonton dina iki?🤩..." },
    luxembourgish: { search: "Sichen", gptSearchPlaceholder: "Wat wëllt Dir haut kucken?🤩..." },
    latvian: { search: "Meklēt", gptSearchPlaceholder: "Ko jūs vēlētos skatīties šodien?🤩..." },
    lithuanian: { search: "Ieškoti", gptSearchPlaceholder: "Ką norėtumėte šiandien žiūrėti?🤩..." },
    malagasy: { search: "Mitady", gptSearchPlaceholder: "Inona no tianao hojerena anio?🤩..." },
    maltese: { search: "Fittex", gptSearchPlaceholder: "X’tixtieq tara llum?🤩..." },
    maori: { search: "Rapu", gptSearchPlaceholder: "He aha tāu e hiahia ana ki te mātakitaki i tēnei rā?🤩..." },
    mongolian: { search: "Хайлт", gptSearchPlaceholder: "Өнөөдөр та юу үзэхийг хүсч байна вэ?🤩..." },
    nepalese: { search: "खोज्नुहोस्", gptSearchPlaceholder: "आज तपाईं के हेर्न चाहनुहुन्छ?🤩..." },
    northern_sotho: { search: "Batla", gptSearchPlaceholder: "O rata go bona eng lehono?🤩..." },
    norwegian: { search: "Søk", gptSearchPlaceholder: "Hva vil du se i dag?🤩..." },
    occitan: { search: "Recercar", gptSearchPlaceholder: "Qu'es çò que voldriás veire uèi?🤩..." },
    oromo: { search: "Barbaadi", gptSearchPlaceholder: "Har’a maal ilaaltu?🤩..." },
    samoan: { search: "Su'e", gptSearchPlaceholder: "O le a le mea e te fia matamata i ai i le asō?🤩..." },
    serbian: { search: "Претражи", gptSearchPlaceholder: "Шта бисте данас желели да гледате?🤩..." },
    sesotho: { search: "Batla", gptSearchPlaceholder: "U batla ho shebella eng kajeno?🤩..." },
    shona: { search: "Tsvaga", gptSearchPlaceholder: "Chii chaunoda kuona nhasi?🤩..." },
    sindhi: { search: "ڳولا", gptSearchPlaceholder: "اڄ توهان ڇا ڏسڻ چاهيو ٿا؟🤩..." },
    slovak: { search: "Hľadať", gptSearchPlaceholder: "Čo by ste si dnes chceli pozrieť?🤩..." },
    slovene: { search: "Iskanje", gptSearchPlaceholder: "Kaj bi danes radi gledali?🤩..." },
    somali: { search: "Raadi", gptSearchPlaceholder: "Maxaad rabtaa inaad daawato maanta?🤩..." },
    sundanese: { search: "Milarian", gptSearchPlaceholder: "Naon anu anjeun hoyong tonton dinten ayeuna?🤩..." },
    tatar: { search: "Эзләү", gptSearchPlaceholder: "Бүген нәрсә карыйсыгыз килә?🤩..." },
    tswana: { search: "Batla", gptSearchPlaceholder: "O batla go bona eng gompieno?🤩..." },
    turkmen: { search: "Gözle", gptSearchPlaceholder: "Bu gün näme görmegi isleýärsiňiz?🤩..." },
    uyghur: { search: "ئىزدەش", gptSearchPlaceholder: "بۈگۈن نېمە كۆرۈشنى خاليسىز؟🤩..." },
    welsh: { search: "Chwilio", gptSearchPlaceholder: "Beth hoffech chi wylio heddiw?🤩..." },
    xhosa: { search: "Khangela", gptSearchPlaceholder: "Ucinga ukuba ungabukela ntoni namhlanje?🤩..." },
    yoruba: { search: "Wa", gptSearchPlaceholder: "Kini o fẹ lati wo loni?🤩..." }
};

export default lang;
