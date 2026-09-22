// Language data - Ordered by native speakers (L1)
const languages = [
  { code: "ar", name: "العربية", flag: "ps" },       // Flag changed to "sa" or keep "ps" based on your preference
  { code: "en", name: "English", flag: "us" },
  { code: "zh", name: "中文 (普通话)", flag: "cn" },
  { code: "es", name: "Español", flag: "es" },
  { code: "hi", name: "हिन्दी", flag: "in" },
  { code: "pt", name: "Português", flag: "br" },     // Flag set to "br" (majority native) or "pt"
  { code: "bn", name: "বাংলা", flag: "bd" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "pa", name: "ਪੰਜਾਬੀ / پنجابی", flag: "pk" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "jv", name: "Basa Jawa", flag: "id" },
  { code: "wuu", name: "吴语", flag: "cn" },
  { code: "id", name: "Bahasa Indonesia", flag: "id" },
  { code: "te", name: "తెలుగు", flag: "in" },
  { code: "vi", name: "Tiếng Việt", flag: "vn" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "mr", name: "मराठी", flag: "in" },
  { code: "ta", name: "தமிழ்", flag: "in" },
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "ur", name: "اردو", flag: "pk" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "ro", name: "Română", flag: "ro" },
  { code: "he", name: "עברית", flag: "il" }
];

const listContainer = document.getElementById("languageList");

// Render the list
function renderLanguages() {
  if (!listContainer) return;

  listContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  languages.forEach(lang => {
    const li = document.createElement("li");
    li.setAttribute("role", "menuitem");
    li.innerHTML = `
      <a class="dropdown-item d-flex align-items-center" href="../${lang.code}/index.html">
        <img 
          src="https://flagcdn.com/20x15/${lang.flag}.png" 
          srcset="https://flagcdn.com/40x30/${lang.flag}.png 2x" 
          width="20" 
          height="15" 
          alt="${lang.name}" 
          class="language-flag me-2" 
          loading="lazy"
        >
        <span>${lang.name}</span>
      </a>
    `;
    fragment.appendChild(li);
  });

  listContainer.appendChild(fragment);
}

// Initial render
renderLanguages();