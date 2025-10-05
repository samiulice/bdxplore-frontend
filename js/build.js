const districts = [
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
            }
        ];

        

document.addEventListener("DOMContentLoaded", () => {
    const districtNav = document.getElementById("district-nav");
    const currentDistrict = new URLSearchParams(window.location.search).get('district');

    if(districtNav && typeof districts !== 'undefined'){
        districts.forEach(district => {
            const aTag = document.createElement("a");
            aTag.href = `districts.html?district=${district.id}`;
            aTag.className = "dropdown-item";
            aTag.textContent = district.name;

            // Active highlight
            if(currentDistrict === district.id){
                aTag.classList.add("active");
                aTag.style.fontWeight = "bold"; // Optional styling
            }

            districtNav.appendChild(aTag);
        });
    }
});

