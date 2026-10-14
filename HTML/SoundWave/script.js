/* =====================================================
   SoundWave - script.js
   ===================================================== */


/* ---------- Songs (the song cards in index.html are the single source of truth) ---------- */

const songCards = Array.from(document.querySelectorAll(".song-card-wrapper"));

const youtubePlayer = document.getElementById("youtubePlayer");
const currentSong = document.getElementById("currentSong");
const currentMeta = document.getElementById("currentMeta");
const currentDesc = document.getElementById("currentDesc");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const reloadBtn = document.getElementById("reloadBtn");

function cleanText(text) {
    return text.replace(/\s+/g, " ").trim();
}

const songs = songCards.map(card => {
    const button = card.querySelector(".play-song");

    return {
        name: button.dataset.song,
        video: button.dataset.video,
        track: cleanText(card.querySelector(".song-number").textContent),
        artist: cleanText(card.querySelector(".song-footer span").textContent),
        description: cleanText(card.querySelector(".music-card-body p").textContent)
    };
});

let currentIndex = 0;


// Show this song's own title, track number, artist and description in the player
function updatePlayerInfo(index) {
    const song = songs[index];

    currentSong.textContent = song.name;

    if (currentMeta) {
        currentMeta.textContent = `${song.track}  •  ${song.artist}`;
    }
    if (currentDesc) {
        currentDesc.textContent = song.description;
    }

    songCards.forEach((card, i) => {
        card.querySelector(".music-card")
            .classList.toggle("is-playing", i === index);
    });
}

function videoUrl(song) {
    return `https://www.youtube.com/embed/${song.video}?autoplay=1&rel=0`;
}

function playSong(index) {
    if (index < 0) {
        index = songs.length - 1;
    }
    if (index >= songs.length) {
        index = 0;
    }

    currentIndex = index;
    updatePlayerInfo(currentIndex);

    youtubePlayer.src = videoUrl(songs[currentIndex]);

    document.getElementById("player").scrollIntoView({
        behavior: "smooth"
    });
}


// Each card gets its own song cover (YouTube thumbnail of that exact video)
songCards.forEach((card, index) => {
    const song = songs[index];
    const art = card.querySelector(".album-art");

    const cover = document.createElement("img");
    cover.className = "album-cover";
    cover.src = `https://i.ytimg.com/vi/${song.video}/mqdefault.jpg`;
    cover.alt = `${song.name} cover`;
    cover.loading = "lazy";
    // if the image cannot load, the original gradient + icon stays visible
    cover.addEventListener("error", function () {
        cover.remove();
    });

    const playOverlay = document.createElement("span");
    playOverlay.className = "cover-play";
    playOverlay.innerHTML = '<i class="bi bi-play-fill"></i>';

    const badge = document.createElement("span");
    badge.className = "cover-badge";
    badge.textContent = "NOW PLAYING";

    art.prepend(cover);
    art.append(playOverlay, badge);

    art.addEventListener("click", function () {
        playSong(index);
    });

    card.querySelector(".play-song").addEventListener("click", function () {
        playSong(index);
    });
});

previousBtn.addEventListener("click", function () {
    playSong(currentIndex - 1);
});

nextBtn.addEventListener("click", function () {
    playSong(currentIndex + 1);
});

reloadBtn.addEventListener("click", function () {
    youtubePlayer.src = videoUrl(songs[currentIndex]);
});

// The page loads with song 1 in the player, so show its details from the start
updatePlayerInfo(0);


/* ---------- Search ---------- */

const searchInput = document.getElementById("songSearch");

const noResults = document.createElement("p");
noResults.className = "no-results";
noResults.textContent = "No songs found. Try a different name.";
noResults.style.display = "none";
document.getElementById("musicCards").insertAdjacentElement("afterend", noResults);

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase().trim();
    let visibleCount = 0;

    songCards.forEach((card, index) => {
        const song = songs[index];
        const text = `${song.name} ${song.artist}`.toLowerCase();
        const matches = text.includes(searchValue);

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
});


/* ---------- Contact form ---------- */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const formFields = [nameInput, emailInput, subjectInput, messageInput];


// Name: letters only (single spaces between words allowed), at least 3 letters
function validateName(value) {
    if (value === "") {
        return "Please enter your name.";
    }
    if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)) {
        return "Name can contain only letters and single spaces (no numbers or symbols).";
    }
    if (value.replace(/ /g, "").length < 3) {
        return "Name must contain at least 3 letters.";
    }
    if (value.length > 40) {
        return "Name must not be longer than 40 characters.";
    }
    return "";
}


// Email: must START with a letter (numbers allowed after it), one @,
// domain with a dot and a letters-only extension
function validateEmail(value) {
    if (value === "") {
        return "Please enter your email address.";
    }

    const message = "Please enter a valid email address (example: has123@gmail.com).";

    if (!/^[A-Za-z]/.test(value)) {
        return "Email must start with a letter (example: has123@gmail.com).";
    }

    if (value.length > 254 || (value.match(/@/g) || []).length !== 1) {
        return message;
    }

    const [local, domain] = value.split("@");

    const localOk =
        local.length <= 64 &&
        /^[A-Za-z][A-Za-z0-9]*(?:[._+-][A-Za-z0-9]+)*$/.test(local);

    const domainOk =
        /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.test(domain);

    return localOk && domainOk ? "" : message;
}


function validateSubject(value) {
    if (value === "") {
        return "Please enter a subject.";
    }
    if (value.length > 100) {
        return "Subject must not be longer than 100 characters.";
    }
    return "";
}


function validateMessage(value) {
    if (value === "") {
        return "Please write your message.";
    }
    return "";
}


// Shows the error under the field (falls back to the line under the form)
function setFieldError(input, text) {
    const feedback = document.getElementById(input.id + "Error");

    input.classList.add("is-invalid");

    if (feedback) {
        feedback.textContent = text;
        formMessage.textContent = "";
    } else {
        formMessage.textContent = text;
        formMessage.style.color = "#ff6b6b";
    }
}

function clearFieldError(input) {
    const feedback = document.getElementById(input.id + "Error");

    input.classList.remove("is-invalid");

    if (feedback) {
        feedback.textContent = "";
    }
}


// Name: numbers and symbols cannot even be typed
nameInput.addEventListener("input", function () {
    const cleaned = this.value.replace(/[^A-Za-z ]/g, "");

    if (cleaned !== this.value) {
        this.value = cleaned;
        setFieldError(this, "Only letters are allowed in the name.");
    } else {
        clearFieldError(this);
    }
});

[emailInput, subjectInput, messageInput].forEach(field => {
    field.addEventListener("input", function () {
        clearFieldError(field);
        formMessage.textContent = "";
    });
});


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formFields.forEach(clearFieldError);
    formMessage.textContent = "";

    // trim + collapse repeated spaces in the name
    const name = nameInput.value.trim().replace(/\s+/g, " ");
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    const checks = [
        [nameInput, validateName(name)],
        [emailInput, validateEmail(email)],
        [subjectInput, validateSubject(subject)],
        [messageInput, validateMessage(message)]
    ];

    for (const [input, error] of checks) {
        if (error) {
            setFieldError(input, error);
            input.focus();
            return;
        }
    }

    formMessage.textContent =
        "Your message has been submitted successfully!";

    formMessage.style.color = "#9d7cff";

    contactForm.reset();
});


/* ---------- Navbar active link ---------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
