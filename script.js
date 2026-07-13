// Book Data Repository
const booksData = [
    {
        title: "ДИГРИДСКОЕ ЗОЛОТО",
        subtitle: "Боевое фэнтези, авторский мир",
        quote: "Начало пути наставников и их учеников из небольшой школы",
        carouselQuotes: [
            "Самобытный авторский мир: магия, политика и этнос",
            "Героиня - наставница боевых магов, начинающая с нуля",
            "Герои втянуты в события, которые им не по силам"
        ],
        annotation: "В этой стране, в Дигриде-Саха, давно живут создатели маги, которые привыкли держать власть при себе. Их почитают, потому что они защищают людей от странных нападений из безлюдной степи. К другим магам, например, к усмерам, создатели относятся холодно. Несмотря на это, Радис Сфета возвращается в родное поместье в провинции Дигриды и становится земельной госпожой. Она собирается создать первый в истории страны учебный корпус для усмеров. Но не успевает девушка приняться за выполнение планов, как на город в её владениях нападают. Радис отбивает атаку и пытается понять, кто на самом деле может желать ей неудачи.",
        status: "Чистовик, электронная версия",
        cycle: "Первая книга цикла",
        reviews: [
            {
                quote: "Мы погружаемся в фэнтезийных мир с необычной магической концепцией. Здесь есть два вида магов: создатели и усмеры. Первые, как вы догадались, могут создавать/созидать. Они все такие положительные и хорошие. А вот вторые - сплошное разрушение. Догадайтесь, кого в этом мире не любят.",
                author: "Elizabeth Vasko"
            },
            {
                quote: "Во главе сюжета тяжелая история жизни Радис и её подопечных – магов. Все против главной героини, отовсюду ей прилетают палки в колеса, а она, отчаявшаяся и сломленная, искренне хочет сделать мир лучше. Радис Сфета берет к себе на обучение людей, обладающих магией. И читателю, вместе с персонажами, предстоит пройти тяжелый путь лишений и утрат. Сюда же ввязываются политика, война, классовое неравенство.",
                author: "Ксения Беззапонная"
            },
            {
                quote: "Много вопросов без ответа, много недосказанности.\n\nВ плюсах конечно полностью авторская задумка мира - это бросается в глаза и это здорово. Но по-моему автор не дотянула свой мир, не до конца его продумала. Хотелось объёма, объяснения противостояния усмеров и магов, людей. Почему? За что? Как?",
                author: "Lika Libris"
            }
        ],
        images: {
            title: "book-1/dz-name.png",
            hero: "book-1/hero-bg.webp",
            heroMobile: "book-1/hero-bg-mobile.webp",
            annotation: [
                "book-1/anno-arts/1.jpg",
                "book-1/anno-arts/2.jpg",
                "book-1/anno-arts/3.jpg"
            ],
            reviews: "book-1/reviews-bg.png",
            reviewsMobile: "book-1/reviews-bg-mobile.png",
            readBg: "book-1/divider-2.png"
        },
        links: {
            wattpad: "https://www.wattpad.com/story/397324947-%D0%B4%D0%B8%D0%B3%D1%80%D0%B8%D0%B4%D1%81%D0%BA%D0%BE%D0%B5-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE",
            litres: "https://www.litres.ru/book/nora-dutt/digridskoe-zoloto-66215580/",
            telegram: "https://t.me/plot_nora/1446",
            reviews: "https://litres.com/book/nora-dutt/digridskoe-zoloto-66215580/reviews/"
        }
    },
    {
        title: "ДОСТОЙНЫЙ СЫН",
        "в разработке": true,
        inDevelopment: true,
        subtitle: "Боевое фэнтези, авторский мир",
        quote: "Вторая книга цикла. Скоро...",
        carouselQuotes: [
            "Самобытный авторский мир: магия, политика и этнос",
            "Мрачные тайны былых времен ближе, чем кажется"
        ],
        annotation: "Давно затихла осада столицы, долгожители получили власть над страной. Теперь они готовят союзников к нескорой битве с настоящим врагом. Радис же больше не при делах. Она, лишившаяся своих учеников и магии, решает найти для себя другое место. Одна любопытная встреча в пути все меняет - девушка задумалась о том, что сможет вернуть себе магию. И тропа эта подведет ее опасно близко к истории о деяниях вечного зла и его Достойного сына.",
        status: "В процессе, электронная версия",
        cycle: "",
        reviews: [],
        images: {
            title: "book-2/title-2.png",
            hero: "book-2/hero-bg.webp",
            annotation: [
                "book-2/annotation-2.png",
                "book-2/annotation-2-alt1.png",
                "book-2/annotation-2-alt2.png"
            ],
            reviews: "book-2/reviews-bg-2.png",
            readBg: "book-2/divider-2.png"
        },
        links: {
            wattpad: "#",
            litres: "#",
            telegram: "https://t.me/plot_nora",
            reviews: "#"
        }
    },
    {
        title: "СТЕПНЫЕ ГОНЧИЕ",
        "в разработке": true,
        inDevelopment: true,
        subtitle: "Боевое фэнтези, авторский мир",
        quote: "Третья книга цикла. Скоро...",
        carouselQuotes: [
            "Степные гончие уже вышли на след беглецов"
        ],
        annotation: "Третья часть переносит нас в бескрайние и опасные безлюдные степи. Легендарные степные гончие рыщут в поисках добычи, а древняя магия просыпается от многовекового сна. Чтобы выжить и остановить надвигающуюся катастрофу, героям придется перешагнуть через собственные принципы.",
        status: "Анонс, скоро",
        cycle: "Третья книга цикла",
        reviews: [
            {
                quote: "Отзывы на третью книгу: потрясающая атмосфера дикой степи, суровые испытания для героев и неожиданные союзы. Читается на одном дыхании.",
                author: "Редакция"
            }
        ],
        images: {
            title: "book-3/title-3.png",
            hero: "book-3/hero-bg.webp",
            annotation: [
                "book-3/annotation-3.png",
                "book-3/annotation-3-alt1.png",
                "book-3/annotation-3-alt2.png"
            ],
            reviews: "book-3/reviews-bg-3.png",
            readBg: "book-3/divider-2.png"
        },
        links: {
            wattpad: "#",
            litres: "#",
            telegram: "https://t.me/plot_nora",
            reviews: "#"
        }
    },
    {
        title: "ЛЕГИОН И СИЯНИЕ",
        "в разработке": true,
        inDevelopment: true,
        subtitle: "Городское фэнтези, авторский мир",
        quote: "",
        carouselQuotes: [
            "Мир, победивший жестокость",
        ],
        annotation: " Современный мир уничтожил последнее место, где против воли дрались легионы — люди, способные создавать темных тварей. Арика, добрая, светлая девушка, погибшая там последней, стала символом борьбы с жестокостью. Восемь лет спустя Эклиш Парле устроился на работу в Фонд  помощи легионов в соседнем мире. Приехал, завел знакомых, тут же занялся заданием от босса. Вот только он случайно увидел Арику. Живую. Теперь Эклиш начинает поиски, но как только его начальство узнает про это, у него появляются серьезные проблемы.",
        status: "Электронная версия. Карточка книги скоро.",
        cycle: "",
        reviews: [
            {
                quote: "Отзывы на финал: грандиозное завершение серии. Все загадки раскрыты, масштабные сражения описаны великолепно, а финал вызывает искренние эмоции.",
                author: "Редакция"
            }
        ],
        images: {
            title: "book-4/title-4.png",
            hero: "book-4/hero-bg.webp",
            annotation: [
                "book-4/annotation-4.png",
                "book-4/annotation-4-alt1.png",
                "book-4/annotation-4-alt2.png"
            ],
            reviews: "book-4/reviews-bg-4.png",
            readBg: "book-4/divider-2.png"
        },
        links: {
            wattpad: "#",
            litres: "#",
            telegram: "https://t.me/plot_nora",
            reviews: "#"
        }
    }
];

// Fallback images map (so we default to the generated black placeholders if custom ones don't exist yet)
const fallbackImages = {
    hero: "book-1/hero-bg.webp",
    annotation: "book-1/anno-arts/1.jpg",
    reviews: "book-1/reviews-bg.png",
    readBg: "divider-2.png",
    flowers: "book-1/flowers.png"
};

let currentBookIndex = 0;
let isInitialLoad = true;
let contentTransitionTimeout;

// DOM Elements
const titleImgEl = document.getElementById("book-title-img");
const titleFallbackEl = document.getElementById("book-title-fallback");
const titleEl = document.querySelector("#book-title-fallback .book-title");
const subtitleEl = document.getElementById("book-subtitle");
const quoteEl = document.getElementById("book-quote");
const annotationTextEl = document.getElementById("annotation-text");
const metaStatusEl = document.getElementById("annotation-meta-status");
const metaCycleEl = document.getElementById("annotation-meta-cycle");
const reviewsCarouselEl = document.getElementById("reviews-carousel");

const heroImgEl = document.getElementById("hero-img");
const combinedBgImgEl = document.getElementById("combined-bg-img");
const combinedFlowersImgEl = document.getElementById("combined-flowers-img");
const readSectionEl = document.getElementById("where-to-read");

const linkWattpadEl = document.getElementById("link-wattpad");
const linkLitresEl = document.getElementById("link-litres");
const linkTelegramEl = document.getElementById("link-telegram");

const tabs = document.querySelectorAll(".nav-tab");

// Function to update page content with smooth transition
function updateBookContent(index) {
    if (index < 0 || index >= booksData.length) return;

    currentBookIndex = index;
    const book = booksData[index];

    // Update active state in navigation
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    if (!isInitialLoad) {
        heroImgEl.style.opacity = "0";
    }

    if (contentTransitionTimeout) {
        clearTimeout(contentTransitionTimeout);
    }

    const titleContainer = document.querySelector(".book-title-container");
    // Animate content change slightly (fade out and in)
    const elementsToFade = [
        titleContainer, subtitleEl, quoteEl,
        annotationTextEl, metaStatusEl, metaCycleEl, reviewsCarouselEl
    ];

    elementsToFade.forEach(el => {
        el.style.opacity = "0.2";
        el.style.transition = "opacity 0.2s ease";
    });

    contentTransitionTimeout = setTimeout(() => {
        if (book.inDevelopment || book["в разработке"]) {
            document.body.classList.add("under-development");
        } else {
            document.body.classList.remove("under-development");
        }

        // Title image update with text fallback
        setupTitleImage(titleImgEl, titleFallbackEl, book.images.title, book.title);

        // Update document title
        const formattedTitle = book.title.charAt(0).toUpperCase() + book.title.slice(1).toLowerCase();
        const category = book.subtitle.split(',')[0].trim();
        document.title = `${formattedTitle} — ${category}`;

        // Text changes
        titleEl.textContent = book.title;
        subtitleEl.textContent = book.subtitle;
        quoteEl.textContent = book.quote;
        annotationTextEl.textContent = book.annotation;
        metaStatusEl.textContent = book.status;
        metaCycleEl.textContent = book.cycle;

        // Image source changes with fallback mechanism (support mobile version if available)
        const isMobile = window.innerWidth <= 768;
        const heroMobileSrc = book.images.heroMobile || book.images.hero.replace(".webp", "-mobile.webp").replace(".png", "-mobile.png");
        const heroSrc = isMobile ? heroMobileSrc : book.images.hero;
        const heroFallback = isMobile ? book.images.hero : fallbackImages.hero;
        setupImageWithFallback(heroImgEl, heroSrc, heroFallback, () => {
            heroImgEl.style.opacity = "1";
        });
        const reviewsMobileSrc = book.images.reviewsMobile || book.images.reviews.replace(".webp", "-mobile.webp").replace(".png", "-mobile.png");
        const reviewsSrc = isMobile ? reviewsMobileSrc : book.images.reviews;
        const reviewsFallback = isMobile ? book.images.reviews : fallbackImages.reviews;
        setupImageWithFallback(combinedBgImgEl, reviewsSrc, reviewsFallback);

        const flowersSrc = (book.images && book.images.flowers) ? book.images.flowers : fallbackImages.flowers;
        setupImageWithFallback(combinedFlowersImgEl, flowersSrc, fallbackImages.flowers);

        setupBackgroundImageWithFallback(readSectionEl, book.images.readBg, fallbackImages.readBg);

        // Update read links dynamically
        if (book.links) {
            // Wattpad
            if (book.links.wattpad && book.links.wattpad !== "#") {
                linkWattpadEl.href = book.links.wattpad;
                linkWattpadEl.target = "_blank";
                linkWattpadEl.style.opacity = "1";
                linkWattpadEl.style.pointerEvents = "auto";
            } else {
                linkWattpadEl.href = "#";
                linkWattpadEl.target = "_self";
                linkWattpadEl.style.opacity = "0.4";
                linkWattpadEl.style.pointerEvents = "none";
            }

            // Litres
            if (book.links.litres && book.links.litres !== "#") {
                linkLitresEl.href = book.links.litres;
                linkLitresEl.target = "_blank";
                linkLitresEl.style.opacity = "1";
                linkLitresEl.style.pointerEvents = "auto";
            } else {
                linkLitresEl.href = "#";
                linkLitresEl.target = "_self";
                linkLitresEl.style.opacity = "0.4";
                linkLitresEl.style.pointerEvents = "none";
            }

            // Telegram
            if (book.links.telegram && book.links.telegram !== "#") {
                linkTelegramEl.href = book.links.telegram;
                linkTelegramEl.target = "_blank";
                linkTelegramEl.style.opacity = "1";
                linkTelegramEl.style.pointerEvents = "auto";
            } else {
                linkTelegramEl.href = "#";
                linkTelegramEl.target = "_self";
                linkTelegramEl.style.opacity = "0.4";
                linkTelegramEl.style.pointerEvents = "none";
            }

            // Reviews
            const linkReviewsEl = document.getElementById("link-reviews");
            if (linkReviewsEl) {
                if (book.links.reviews && book.links.reviews !== "#") {
                    linkReviewsEl.href = book.links.reviews;
                    linkReviewsEl.target = "_blank";
                    linkReviewsEl.style.opacity = "1";
                    linkReviewsEl.style.pointerEvents = "auto";
                } else {
                    linkReviewsEl.href = "#";
                    linkReviewsEl.target = "_self";
                    linkReviewsEl.style.opacity = "0.4";
                    linkReviewsEl.style.pointerEvents = "none";
                }
            }
        }

        // Dynamic unique carousel quotes load for this specific book
        initQuotesForBook(index);

        // Dynamic unique reviews carousel quotes load for this specific book
        initReviewsForBook(index);

        // Dynamic unique art slides load for this specific book
        initArtForBook(index);

        elementsToFade.forEach(el => {
            el.style.opacity = "1";
        });
    }, 200);
}

// Set up image with error handling to use placeholder fallbacks
function setupImageWithFallback(imgElement, preferredSrc, fallbackSrc, callback) {
    // Reset handlers first
    imgElement.onerror = null;
    imgElement.onload = null;

    imgElement.onload = function () {
        imgElement.onload = null;
        imgElement.onerror = null;
        if (callback) callback();
    };

    imgElement.onerror = function () {
        imgElement.onerror = null;
        imgElement.onload = null;

        imgElement.onload = function () {
            imgElement.onload = null;
            imgElement.onerror = null;
            if (callback) callback();
        };
        imgElement.src = fallbackSrc;
        console.log(`Failed to load ${preferredSrc}, fell back to ${fallbackSrc}`);
    };

    imgElement.src = preferredSrc;
}

// Set up background image with error handling to use placeholder fallbacks
function setupBackgroundImageWithFallback(element, preferredSrc, fallbackSrc) {
    if (!element) return;
    const tempImg = new Image();
    tempImg.src = preferredSrc;
    tempImg.onload = function () {
        element.style.backgroundImage = `url('${preferredSrc}')`;
    };
    tempImg.onerror = function () {
        element.style.backgroundImage = `url('${fallbackSrc}')`;
        console.log(`Failed to load background image ${preferredSrc}, using fallback ${fallbackSrc}`);
    };
}

// Set up title image with fallback to text representation if PNG fails to load
function setupTitleImage(imgElement, fallbackContainer, preferredSrc, textTitle) {
    imgElement.onerror = null;
    imgElement.onload = null;

    // Attempt to load the PNG image
    imgElement.onload = function () {
        imgElement.style.display = "block";
        fallbackContainer.style.display = "none";
    };

    imgElement.onerror = function () {
        imgElement.style.display = "none";
        fallbackContainer.style.display = "block";
        console.log(`Failed to load title image ${preferredSrc}, using text fallback.`);
    };

    imgElement.src = preferredSrc;
    imgElement.alt = textTitle;
}

// Event Listeners for Nav Tabs
tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        updateBookContent(i);
    });
});

// Initialize first book on load
document.addEventListener("DOMContentLoaded", () => {
    // Initial load setup
    updateBookContent(0);
    isInitialLoad = false;
});

// ==========================================================================
// Quotes Carousel (Slider Badge) Autoplay and Interactive Navigation Logic
// ==========================================================================
let currentQuoteIndex = 0;
let quoteInterval;

const quotePrevBtn = document.getElementById("quote-prev");
const quoteNextBtn = document.getElementById("quote-next");

// Dynamically initialize quote slider elements for the selected book
function initQuotesForBook(bookIndex) {
    const book = booksData[bookIndex];
    const quotesTrack = document.getElementById("quotes-track");
    const quotesDotsContainer = document.getElementById("quotes-dots");

    // Clear existing track elements and dots
    quotesTrack.innerHTML = "";
    quotesDotsContainer.innerHTML = "";

    if (book.inDevelopment || book["в разработке"]) {
        stopQuoteAutoplay();
        return;
    }

    if (!book.carouselQuotes || book.carouselQuotes.length === 0) return;

    // Build quotes track and dots dynamically
    book.carouselQuotes.forEach((quoteText, i) => {
        // Create quote span
        const span = document.createElement("span");
        span.className = `slider-text${i === 0 ? " active" : ""}`;
        span.textContent = quoteText;
        quotesTrack.appendChild(span);

        // Create dot span
        const dot = document.createElement("span");
        dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
        dot.setAttribute("data-index", i);

        // Add direct click event listener for dots
        dot.addEventListener("click", () => {
            updateQuoteCarousel(i);
            startQuoteAutoplay(); // Reset autoplay timer on manual dot interaction
        });

        quotesDotsContainer.appendChild(dot);
    });

    // Reset back to the first quote slide
    updateQuoteCarousel(0);
    startQuoteAutoplay();
}

function updateQuoteCarousel(index) {
    const quotesTrack = document.getElementById("quotes-track");
    const quotes = quotesTrack.querySelectorAll(".slider-text");
    const quoteDots = document.querySelectorAll(".slider-dots .carousel-dot");
    const quoteCount = quotes.length;

    if (index < 0 || index >= quoteCount) return;

    currentQuoteIndex = index;

    // Update active class on quotes
    quotes.forEach((quote, i) => {
        if (i === index) {
            quote.classList.add("active");
        } else {
            quote.classList.remove("active");
        }
    });

    // Update active class on dots
    quoteDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    // Scroll track by translating X
    const offset = -index * 100;
    quotesTrack.style.transform = `translateX(${offset}%)`;
}

function startQuoteAutoplay() {
    stopQuoteAutoplay();
    const quotesTrack = document.getElementById("quotes-track");
    const quoteCount = quotesTrack.querySelectorAll(".slider-text").length;

    if (quoteCount <= 1) return; // No autoplay needed for single or empty quotes

    quoteInterval = setInterval(() => {
        let nextIndex = currentQuoteIndex + 1;
        if (nextIndex >= quoteCount) {
            nextIndex = 0;
        }
        updateQuoteCarousel(nextIndex);
    }, 4000); // Auto scroll quotes every 4 seconds
}

function stopQuoteAutoplay() {
    if (quoteInterval) {
        clearInterval(quoteInterval);
    }
}

// Add click events to prev/next buttons inside the slider badge
quotePrevBtn.addEventListener("click", () => {
    const quotesTrack = document.getElementById("quotes-track");
    const quoteCount = quotesTrack.querySelectorAll(".slider-text").length;
    if (quoteCount <= 1) return;

    let prevIndex = currentQuoteIndex - 1;
    if (prevIndex < 0) {
        prevIndex = quoteCount - 1;
    }
    updateQuoteCarousel(prevIndex);
    startQuoteAutoplay(); // Reset timer on manual navigation
});

quoteNextBtn.addEventListener("click", () => {
    const quotesTrack = document.getElementById("quotes-track");
    const quoteCount = quotesTrack.querySelectorAll(".slider-text").length;
    if (quoteCount <= 1) return;

    let nextIndex = currentQuoteIndex + 1;
    if (nextIndex >= quoteCount) {
        nextIndex = 0;
    }
    updateQuoteCarousel(nextIndex);
    startQuoteAutoplay(); // Reset timer on manual navigation
});

// ==========================================================================
// Art Slider (Annotation Section) Autoplay and Interactive Navigation Logic
// ==========================================================================
let currentArtIndex = 0;
let artInterval;

const artPrevBtn = document.getElementById("art-prev");
const artNextBtn = document.getElementById("art-next");

// Dynamically initialize art slider elements for the selected book
function initArtForBook(bookIndex) {
    const book = booksData[bookIndex];
    const artTrack = document.getElementById("art-track");
    const artDotsContainer = document.getElementById("art-dots");

    // Clear existing track elements and dots
    artTrack.innerHTML = "";
    artDotsContainer.innerHTML = "";

    if (book.inDevelopment || book["в разработке"]) {
        stopArtAutoplay();
        return;
    }

    if (!book.images.annotation || book.images.annotation.length === 0) return;

    // Build art track and dots dynamically
    book.images.annotation.forEach((imgSrc, i) => {
        // Create image element
        const img = document.createElement("img");
        img.className = "art-slide-img";
        img.alt = `Иллюстрация к аннотации ${i + 1}`;
        img.style.cursor = "zoom-in";

        // Use our safe fallback mechanism for each image
        setupImageWithFallback(img, imgSrc, fallbackImages.annotation);

        img.addEventListener("click", () => {
            openLightbox(i);
        });

        artTrack.appendChild(img);

        // Create dot span
        const dot = document.createElement("span");
        dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
        dot.setAttribute("data-index", i);

        // Add direct click event listener for dots
        dot.addEventListener("click", () => {
            updateArtCarousel(i);
            startArtAutoplay(); // Reset autoplay timer on manual dot interaction
        });

        artDotsContainer.appendChild(dot);
    });

    // Reset back to the first art slide
    updateArtCarousel(0);
    startArtAutoplay();
}

function updateArtCarousel(index) {
    const artTrack = document.getElementById("art-track");
    const artImages = artTrack.querySelectorAll(".art-slide-img");
    const artDots = document.querySelectorAll(".art-slider-dots .carousel-dot");
    const artCount = artImages.length;

    if (index < 0 || index >= artCount) return;

    currentArtIndex = index;

    // Update active class on dots
    artDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    // Scroll track by translating X
    const offset = -index * 100;
    artTrack.style.transform = `translateX(${offset}%)`;
}

function startArtAutoplay() {
    stopArtAutoplay();
    const artTrack = document.getElementById("art-track");
    const artCount = artTrack.querySelectorAll(".art-slide-img").length;

    if (artCount <= 1) return; // No autoplay needed for single or empty arts

    artInterval = setInterval(() => {
        let nextIndex = currentArtIndex + 1;
        if (nextIndex >= artCount) {
            nextIndex = 0;
        }
        updateArtCarousel(nextIndex);
    }, 4000); // Auto scroll arts every 4 seconds
}

function stopArtAutoplay() {
    if (artInterval) {
        clearInterval(artInterval);
    }
}

// Add click events to prev/next buttons inside the art slider
artPrevBtn.addEventListener("click", () => {
    const artTrack = document.getElementById("art-track");
    const artCount = artTrack.querySelectorAll(".art-slide-img").length;
    if (artCount <= 1) return;

    let prevIndex = currentArtIndex - 1;
    if (prevIndex < 0) {
        prevIndex = artCount - 1;
    }
    updateArtCarousel(prevIndex);
    startArtAutoplay(); // Reset timer on manual navigation
});

artNextBtn.addEventListener("click", () => {
    const artTrack = document.getElementById("art-track");
    const artCount = artTrack.querySelectorAll(".art-slide-img").length;
    if (artCount <= 1) return;

    let nextIndex = currentArtIndex + 1;
    if (nextIndex >= artCount) {
        nextIndex = 0;
    }
    updateArtCarousel(nextIndex);
    startArtAutoplay(); // Reset timer on manual navigation
});

// Subtle Parallax Effect on Mousemove over the Combined Section
const combinedSection = document.querySelector(".combined-section");
if (combinedSection && combinedBgImgEl && combinedFlowersImgEl) {
    combinedSection.addEventListener("mousemove", (e) => {
        const rect = combinedSection.getBoundingClientRect();
        // Calculate mouse position relative to the center of the section
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Subtle displacement coefficients (very small for a "крошечный, едва различимый" effect)
        // Background image moves less, flower petals move slightly more to create depth
        const decorX = (x / rect.width) * -6;
        const decorY = (y / rect.height) * -6;

        const flowersX = (x / rect.width) * -14;
        const flowersY = (y / rect.height) * -14;

        combinedBgImgEl.style.transform = `scale(1.03) translate(${decorX}px, ${decorY}px)`;
        combinedFlowersImgEl.style.transform = `scale(1.06) translate(${flowersX}px, ${flowersY}px)`;
    });

    combinedSection.addEventListener("mouseleave", () => {
        // Return smoothly to base scaled state
        combinedBgImgEl.style.transform = "scale(1.03) translate(0px, 0px)";
        combinedFlowersImgEl.style.transform = "scale(1.06) translate(0px, 0px)";
    });
}

// Subtle Parallax Effect on Mousemove over the Hero Section
const heroSection = document.querySelector(".hero-section");
const heroImg = document.getElementById("hero-img");
if (heroSection && heroImg) {
    heroSection.addEventListener("mousemove", (e) => {
        const rect = heroSection.getBoundingClientRect();
        // Calculate mouse position relative to the center of the section
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Subtle displacement coefficients
        const heroX = (x / rect.width) * -12;
        const heroY = (y / rect.height) * -12;

        const isDev = booksData[currentBookIndex].inDevelopment || booksData[currentBookIndex]["в разработке"];
        const baseScale = isDev ? 1.12 : 1.04;
        heroImg.style.transform = `scale(${baseScale}) translate(${heroX}px, ${heroY}px)`;
    });

    heroSection.addEventListener("mouseleave", () => {
        // Return smoothly to base scaled state
        const isDev = booksData[currentBookIndex].inDevelopment || booksData[currentBookIndex]["в разработке"];
        const baseScale = isDev ? 1.12 : 1.04;
        heroImg.style.transform = `scale(${baseScale}) translate(0px, 0px)`;
    });
}

// ==========================================================================
// Lightbox Gallery Logic
// ==========================================================================
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.querySelector(".lightbox-close");
const lightboxPrevBtn = document.querySelector(".lightbox-arrow.prev");
const lightboxNextBtn = document.querySelector(".lightbox-arrow.next");
const lightboxDotsContainer = document.getElementById("lightbox-dots");

let currentLightboxIndex = 0;

function openLightbox(index) {
    const book = booksData[currentBookIndex];
    if (!book.images.annotation || book.images.annotation.length === 0) return;

    currentLightboxIndex = index;
    updateLightboxContent();

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevents scrolling background
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function updateLightboxContent() {
    const book = booksData[currentBookIndex];
    const imgSrc = book.images.annotation[currentLightboxIndex];

    // Smooth fade out/in effect for the image inside lightbox
    lightboxImg.style.opacity = "0";
    setTimeout(() => {
        setupImageWithFallback(lightboxImg, imgSrc, fallbackImages.annotation);
        lightboxImg.style.opacity = "1";
    }, 150);

    // Build dots dynamically
    lightboxDotsContainer.innerHTML = "";
    book.images.annotation.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = `carousel-dot${i === currentLightboxIndex ? " active" : ""}`;
        dot.addEventListener("click", () => {
            currentLightboxIndex = i;
            updateLightboxContent();
        });
        lightboxDotsContainer.appendChild(dot);
    });
}

function showNextLightboxImg() {
    const book = booksData[currentBookIndex];
    if (!book.images.annotation) return;

    currentLightboxIndex = (currentLightboxIndex + 1) % book.images.annotation.length;
    updateLightboxContent();
}

function showPrevLightboxImg() {
    const book = booksData[currentBookIndex];
    if (!book.images.annotation) return;

    currentLightboxIndex = (currentLightboxIndex - 1 + book.images.annotation.length) % book.images.annotation.length;
    updateLightboxContent();
}

// Lightbox event listeners
if (lightbox) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
    lightboxPrevBtn.addEventListener("click", showPrevLightboxImg);
    lightboxNextBtn.addEventListener("click", showNextLightboxImg);

    // Close on overlay background click (but not content card click)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowRight") {
            showNextLightboxImg();
        } else if (e.key === "ArrowLeft") {
            showPrevLightboxImg();
        }
    });
}

// Handle window resize to switch between mobile and desktop hero/reviews images dynamically
let lastWasMobile = window.innerWidth <= 768;
window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== lastWasMobile) {
        lastWasMobile = isMobile;
        const book = booksData[currentBookIndex];
        
        // Hero image
        const heroMobileSrc = book.images.heroMobile || book.images.hero.replace(".webp", "-mobile.webp").replace(".png", "-mobile.png");
        const heroSrc = isMobile ? heroMobileSrc : book.images.hero;
        const heroFallback = isMobile ? book.images.hero : fallbackImages.hero;
        setupImageWithFallback(heroImgEl, heroSrc, heroFallback);

        // Reviews background image
        const reviewsMobileSrc = book.images.reviewsMobile || book.images.reviews.replace(".webp", "-mobile.webp").replace(".png", "-mobile.png");
        const reviewsSrc = isMobile ? reviewsMobileSrc : book.images.reviews;
        const reviewsFallback = isMobile ? book.images.reviews : fallbackImages.reviews;
        setupImageWithFallback(combinedBgImgEl, reviewsSrc, reviewsFallback);
    }
});

// ==========================================================================
// Reviews Carousel Autoplay and Interactive Navigation Logic
// ==========================================================================
let currentReviewIndex = 0;
let reviewsInterval;

const reviewsPrevBtn = document.getElementById("reviews-prev");
const reviewsNextBtn = document.getElementById("reviews-next");

function initReviewsForBook(bookIndex) {
    const book = booksData[bookIndex];
    const reviewsTrack = document.getElementById("reviews-track");
    const reviewsDotsContainer = document.getElementById("reviews-dots");
    const reviewsCarouselContainer = document.getElementById("reviews-carousel");

    // Clear existing track elements and dots
    if (reviewsTrack) reviewsTrack.innerHTML = "";
    if (reviewsDotsContainer) reviewsDotsContainer.innerHTML = "";

    if (book.inDevelopment || book["в разработке"] || !book.reviews || book.reviews.length === 0) {
        stopReviewsAutoplay();
        if (reviewsCarouselContainer) {
            reviewsCarouselContainer.style.display = "none";
        }
        return;
    }

    if (reviewsCarouselContainer) {
        reviewsCarouselContainer.style.display = "flex";
    }

    // Build reviews track and dots dynamically
    book.reviews.forEach((rev, i) => {
        // Create slide container
        const slide = document.createElement("div");
        slide.className = `reviews-slide${i === 0 ? " active" : ""}`;

        // Create quote paragraph
        const quotePara = document.createElement("p");
        quotePara.className = "reviews-quote";
        quotePara.textContent = rev.quote;
        slide.appendChild(quotePara);

        // Create author element
        if (rev.author) {
            const authorDiv = document.createElement("div");
            authorDiv.className = "reviews-author";
            authorDiv.textContent = rev.author;
            slide.appendChild(authorDiv);
        }

        reviewsTrack.appendChild(slide);

        // Create dot span
        const dot = document.createElement("span");
        dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
        dot.setAttribute("data-index", i);

        // Add direct click event listener for dots
        dot.addEventListener("click", () => {
            updateReviewsCarousel(i);
            startReviewsAutoplay(); // Reset autoplay timer on manual dot interaction
        });

        reviewsDotsContainer.appendChild(dot);
    });

    // Reset back to the first slide
    updateReviewsCarousel(0);
    startReviewsAutoplay();
}

function updateReviewsCarousel(index) {
    const reviewsTrack = document.getElementById("reviews-track");
    if (!reviewsTrack) return;
    const slides = reviewsTrack.querySelectorAll(".reviews-slide");
    const dots = document.querySelectorAll(".reviews-dots .carousel-dot");
    const count = slides.length;

    if (index < 0 || index >= count) return;

    currentReviewIndex = index;

    // Update active class on slides
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Update active class on dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    // Scroll track by translating X
    const offset = -index * 100;
    reviewsTrack.style.transform = `translateX(${offset}%)`;
}

function startReviewsAutoplay() {
    stopReviewsAutoplay();
    const reviewsTrack = document.getElementById("reviews-track");
    if (!reviewsTrack) return;
    const count = reviewsTrack.querySelectorAll(".reviews-slide").length;

    if (count <= 1) return; // No autoplay needed for single or empty reviews

    reviewsInterval = setInterval(() => {
        let nextIndex = currentReviewIndex + 1;
        if (nextIndex >= count) {
            nextIndex = 0;
        }
        updateReviewsCarousel(nextIndex);
    }, 6000); // Auto scroll reviews every 6 seconds
}

function stopReviewsAutoplay() {
    if (reviewsInterval) {
        clearInterval(reviewsInterval);
    }
}

// Add click events to prev/next buttons
if (reviewsPrevBtn && reviewsNextBtn) {
    reviewsPrevBtn.addEventListener("click", () => {
        const reviewsTrack = document.getElementById("reviews-track");
        if (!reviewsTrack) return;
        const count = reviewsTrack.querySelectorAll(".reviews-slide").length;
        if (count <= 1) return;

        let prevIndex = currentReviewIndex - 1;
        if (prevIndex < 0) {
            prevIndex = count - 1;
        }
        updateReviewsCarousel(prevIndex);
        startReviewsAutoplay(); // Reset timer on manual navigation
    });

    reviewsNextBtn.addEventListener("click", () => {
        const reviewsTrack = document.getElementById("reviews-track");
        if (!reviewsTrack) return;
        const count = reviewsTrack.querySelectorAll(".reviews-slide").length;
        if (count <= 1) return;

        let nextIndex = currentReviewIndex + 1;
        if (nextIndex >= count) {
            nextIndex = 0;
        }
        updateReviewsCarousel(nextIndex);
        startReviewsAutoplay(); // Reset timer on manual navigation
    });
}
