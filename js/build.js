const districts = [
  // your original entries (kept exactly)
  {
    id: "sirajgonj",
    name: "সিরাজগঞ্জ",
    places: [
      "rabindra_kachari_bari",
      "chalan_beel",
      "naborotno_temple",
      "china_dam",
    ],
  },
  {
    id: "dhaka",
    name: "ঢাকা",
    places: [
      "lalbagh_fort",
      "ahsan_manzil",
      "national_museum",
      "sonargaon",
    ],
  },
  {
    id: "chittagong",
    name: "চট্টগ্রাম",
    places: [
      "patenga_beach",
      "foy's_lake",
      "karnaphuli_river",
      "chittagong_hill_tracts",
    ],
  },
  {
    id: "rajshahi",
    name: "রাজশাহী",
    places: [
      "motihar_park",
      "varendra_museum",
      "bagha_mosque",
      "puthia_temple_complex",
    ],
  },
  {
    id: "sylhet",
    name: "সিলেট",
    places: [
      "jaflong",
      "ratargul_swamp_forest",
      "maulvibazar",
      "tea_gardens",
    ],
  },
  {
    id: "khulna",
    name: "খুলনা",
    places: [
      "sundarbans",
      "khulna_zoo",
      "shatgombuj_mosque",
      "bagerhat",
    ],
  },
  {
    id: "barishal",
    name: "বরিশাল",
    places: [
      "khepupara_beel",
      "durga_sagar",
      "taltoli_bridge",
      "barishal_zoo",
    ],
  },
  {
    id: "rangpur",
    name: "রংপুর",
    places: [
      "tajhat_palace",
      "khan_bari",
      "badarganj",
      "paharpur_buddhist_monastery",
    ],
  },
  {
    id: "mymensingh",
    name: "ময়মনসিংহ",
    places: [
      "bangladesh_agricultural_university",
      "shingra_beel",
      "gomostapur",
      "paradip_garden",
    ],
  },
  {
    id: "jessore",
    name: "যশোর",
    places: [
      "shundarban_gate",
      "keshabpur",
      "chatra_beel",
      "jessore_zoo",
    ],
  },
  {
    id: "jamalpur",
    name: "জামালপুর",
    places: [
      "jamalpur_town_hall",
      "kajla_falls",
      "bitho_river",
      "mohanganj_temple",
    ],
  },

  // Newly added (or previously missing) districts with empty places
  { id: "gazipur", name: "গাজীপুর", places: [] },
  { id: "kishoreganj", name: "কিশোরগঞ্জ", places: [] },
  { id: "manikganj", name: "মানিকগঞ্জ", places: [] },
  { id: "munshiganj", name: "মুন্সিগঞ্জ", places: [] },
  { id: "narayanganj", name: "নারায়ণগঞ্জ", places: [] },
  { id: "narsingdi", name: "নরসিংদী", places: [] },
  { id: "tangail", name: "টাঙ্গাইল", places: [] },
  { id: "faridpur", name: "ফরিদপুর", places: [] },
  { id: "gopalganj", name: "গোপালগঞ্জ", places: [] },
  { id: "madaripur", name: "মাদারীপুর", places: [] },
  { id: "rajbari", name: "রাজবাড়ী", places: [] },
  { id: "shariatpur", name: "শরীয়তপুর", places: [] },

  { id: "bandarban", name: "বান্দরবান", places: [] },
  { id: "brahmanbaria", name: "ব্রাহ্মণবাড়িয়া", places: [] },
  { id: "chandpur", name: "চাঁদপুর", places: [] },
  { id: "coxsbazar", name: "কক্সবাজার", places: [] },
  { id: "comilla", name: "কুমিল্লা", places: [] },
  { id: "feni", name: "ফেনী", places: [] },
  { id: "khagrachhari", name: "খাগড়াছড়ি", places: [] },
  { id: "lakshmipur", name: "লক্ষ্মীপুর", places: [] },
  { id: "noakhali", name: "নোয়াখালী", places: [] },
  { id: "rangamati", name: "রাঙ্গামাটি", places: [] },

  { id: "bogura", name: "বগুড়া", places: [] },
  { id: "joypurhat", name: "জয়পুরহাট", places: [] },
  { id: "naogaon", name: "নওগাঁ", places: [] },
  { id: "natore", name: "নাটোর", places: [] },
  { id: "chapainawabganj", name: "চাঁপাইনবাবগঞ্জ", places: [] },
  { id: "pabna", name: "পাবনা", places: [] },

  { id: "habiganj", name: "হবিগঞ্জ", places: [] },
  { id: "moulvibazar", name: "মৌলভীবাজার", places: [] },
  { id: "sunamganj", name: "সুনামগঞ্জ", places: [] },

  { id: "bagerhat", name: "বাগেরহাট", places: [] },
  { id: "chuadanga", name: "চুয়াডাঙ্গা", places: [] },
  { id: "jhenaidah", name: "ঝিনাইদহ", places: [] },
  { id: "kushtia", name: "কুষ্টিয়া", places: [] },
  { id: "magura", name: "মাগুরা", places: [] },
  { id: "meherpur", name: "মেহেরপুর", places: [] },
  { id: "narail", name: "নড়াইল", places: [] },
  { id: "satkhira", name: "সাতক্ষীরা", places: [] },

  { id: "barguna", name: "বরগুনা", places: [] },
  { id: "bhola", name: "ভোলা", places: [] },
  { id: "jhalokathi", name: "ঝালকাঠি", places: [] },
  { id: "patuakhali", name: "পটুয়াখালী", places: [] },
  { id: "pirojpur", name: "পিরোজপুর", places: [] },

  { id: "dinajpur", name: "দিনাজপুর", places: [] },
  { id: "gaibandha", name: "গাইবান্ধা", places: [] },
  { id: "kurigram", name: "কুড়িগ্রাম", places: [] },
  { id: "lalmonirhat", name: "লালমনিরহাট", places: [] },
  { id: "nilphamari", name: "নীলফামারী", places: [] },
  { id: "panchagarh", name: "পঞ্চগড়", places: [] },
  { id: "thakurgaon", name: "ঠাকুরগাঁও", places: [] },

  { id: "netrokona", name: "নেত্রকোণা", places: [] },
  { id: "sherpur", name: "শেরপুর", places: [] },
];

// Map divisions -> district ids present above
const divisions = [
  {
    id: "dhaka",
    name: "ঢাকা বিভাগ",
    districts: [
      "dhaka",
      "gazipur",
      "kishoreganj",
      "manikganj",
      "munshiganj",
      "narayanganj",
      "narsingdi",
      "tangail",
      "faridpur",
      "gopalganj",
      "madaripur",
      "rajbari",
      "shariatpur",
    ],
  },
  {
    id: "chattogram",
    name: "চট্টগ্রাম বিভাগ",
    districts: [
      "chittagong",
      "bandarban",
      "brahmanbaria",
      "chandpur",
      "coxsbazar",
      "comilla",
      "feni",
      "khagrachhari",
      "lakshmipur",
      "noakhali",
      "rangamati",
    ],
  },
  {
    id: "rajshahi",
    name: "রাজশাহী বিভাগ",
    districts: [
      "rajshahi",
      "bogura",
      "joypurhat",
      "naogaon",
      "natore",
      "chapainawabganj",
      "pabna",
      "sirajgonj",
    ],
  },
  {
    id: "sylhet",
    name: "সিলেট বিভাগ",
    districts: ["sylhet", "habiganj", "moulvibazar", "sunamganj"],
  },
  {
    id: "khulna",
    name: "খুলনা বিভাগ",
    districts: [
      "khulna",
      "bagerhat",
      "chuadanga",
      "jessore",
      "jhenaidah",
      "kushtia",
      "magura",
      "meherpur",
      "narail",
      "satkhira",
    ],
  },
  {
    id: "barishal",
    name: "বরিশাল বিভাগ",
    districts: [
      "barishal",
      "barguna",
      "bhola",
      "jhalokathi",
      "patuakhali",
      "pirojpur",
    ],
  },
  {
    id: "rangpur",
    name: "রংপুর বিভাগ",
    districts: [
      "rangpur",
      "dinajpur",
      "gaibandha",
      "kurigram",
      "lalmonirhat",
      "nilphamari",
      "panchagarh",
      "thakurgaon",
    ],
  },
  {
    id: "mymensingh",
    name: "ময়মনসিংহ বিভাগ",
    districts: ["mymensingh", "netrokona", "sherpur", "jamalpur"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const districtNav = document.getElementById("district-nav");
  const currentDistrict = new URLSearchParams(window.location.search).get(
    "district"
  );

  if (!districtNav) return;

  // Index districts by id for quick lookup
  const districtById = districts.reduce((acc, d) => {
    acc[d.id] = d;
    return acc;
  }, {});

  // Build multi-level dropdown: Division -> Districts
  divisions.forEach((div) => {
    // Wrapper for submenu
    const wrapper = document.createElement("div");
    wrapper.className = "dropdown-submenu dropend";

    // Division toggle (no navigation)
    const toggle = document.createElement("a");
    toggle.href = "#";
    toggle.className = "dropdown-item dropdown-toggle";
    toggle.setAttribute("data-bs-toggle", "dropdown");
    toggle.textContent = div.name;

    // Submenu container
    const submenu = document.createElement("div");
    submenu.className = "dropdown-menu";

    // Children district links
    (div.districts || []).forEach((did) => {
      const d = districtById[did];
      if (!d) return;
      const a = document.createElement("a");
      a.href = `districts.html?district=${d.id}`;
      a.className = "dropdown-item";
      a.textContent = d.name;

      if (currentDistrict === d.id) {
        a.classList.add("active");
        a.style.fontWeight = "bold";
      }
      submenu.appendChild(a);
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(submenu);
    districtNav.appendChild(wrapper);

    // Mobile/keyboard: toggle submenu on click (only own submenu)
    toggle.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close siblings
        const siblings = wrapper.parentElement?.querySelectorAll(
          ":scope > .dropdown-submenu > .dropdown-menu.show"
        );
        if (siblings) {
          siblings.forEach((m) => {
            if (m !== submenu) m.classList.remove("show");
          });
        }

        submenu.classList.toggle("show");
      },
      false
    );
  });

  // Close open submenus when main dropdown hides (Bootstrap event)
  const mainDropdown = districtNav.closest(".dropdown");
  if (mainDropdown) {
    mainDropdown.addEventListener("hide.bs.dropdown", () => {
      districtNav
        .querySelectorAll(".dropdown-menu.show")
        .forEach((m) => m.classList.remove("show"));
    });
    // Prevent Bootstrap from instantly closing parent when clicking a submenu area
    districtNav.addEventListener("click", (e) => {
      if (e.target?.closest(".dropdown-submenu")) {
        e.stopPropagation();
      }
    });
  }
});
