/* Zusatzstoffe
[ 1] = mit Farbstoffen
[ 2] = mit Konservierungsstoffen
[ 3] = mit Antioxidationsmittel
[ 4] = mit Geschmacksverstärker
[ 5] = geschwefelt
[ 6] = geswärtzt
[ 7] = mit Phosphat
[ 8] = mit Milcheiweiß
[ 9] = Koffeinhaltig
[10] = chininhaltig
[11] = mit Süßungsmitteln
[12] = enthält eine Phenylalaninquelle
[13] = gewachst
[14] = mit Nitritpökelsalz
[15] = Taurin
[16] = Tartazin


* Allergene
[A] = Weizen
[B] = Milcherzeugnis
[C] = Sellerie
[D] = Ei und Eierzeugnisse
[E] = Haselnüße oder Nußerzeugnisse
[F] = Erdnüße
[G] = Soja oder Sojaerzeugnisse
[H] = Walnuss
[I] = Senf oder Senferzeugnisse
[J] = Sulfit
[K] = Sesam
[L] = Fisch
[M] = Krebstiere
[N] = Weichtiere
[O] = Lupinen
[P] = Pecanuss
[Q] = Mandel
[R] = Roggen
*/

window.appConfig = {
    mailServerUrl: 'http://gspz24agoapagjpy.myfritz.net:5000/contact_data.php',
    openAt: [
    {
            day: 'Monday',
            from: '11:00',
            to: '14:30'
        }, {
            day: 'Monday',
            from: '17:00',
            to: '22:30'
        },{
            day: 'Tuesday',
            from: '11:00',
            to: '14:30'
        }, {
            day: 'Tuesday',
            from: '17:00',
            to: '22:30'
        }, {
            day: 'Wednesday',
            from: '11:00',
            to: '14:30'
        }, {
            day: 'Wednesday',
            from: '17:00',
            to: '22:30'
        }, {
            day: 'Thursday',
            from: '11:00',
            to: '14:30'
        }, {
            day: 'Thursday',
            from: '17:00',
            to: '22:30'
        }, {
            day: 'Friday',
            from: '11:00',
            to: '14:30'
        }, {
            day: 'Friday',
            from: '17:00',
            to: '22:30'
        },{
            day: 'Saturday',
            from: '9:00',
            to: '22:30'
        }, {
            day: 'Sunday',
            from: '12:00',
            to: '22:00'
        }
    ],
    closed: {//TODO move everything into cafeData
        closed: false,
        message: "wir sind am 22.09 zurück"
    },

    footNote: {
        allergens: {
            "Weizen": "A",
            "Milcherzeugnis": "B",
            "Sellerie": "C",
            "Ei und Eierzeugnisse": "D",
            "Haselnüße oder Nußerzeugnisse": "E",
            "Erdnüße": "F",
            "Soja oder Sojaerzeugnisse": "G",
            "Walnuss": "H",
            "Senf oder Senferzeugnisse": "I",
            "Sulfit": "J",
            "Sesam": "K",
            "Fisch": "L",
            "Krebstiere": "M",
            "Weichtiere": "N",
            "Lupinen": "O",
            "Pecanuss": "P",
            "Mandel": "Q",
            "Roggen": "R",
            "Krebsfleisch-Imitat": "S"
        },

        additives: {
            "mit Farbstoffen": "1",
            "mit Konservierungsstoffen": "2",
            "mit Antioxidationsmittel": "3",
            "mit Geschmacksverstärker": "4",
            "geschwefelt": "5",
            "geswärtzt": "6",
            "mit Phosphat": "7",
            "mit Milcheiweiß": "8",
            "Koffeinhaltig": "9",
            "chininhaltig": "10",
            "mit Süßungsmitteln": "11",
            "enthält eine Phenylalaninquelle": "12",
            "gewachst": "13",
            "mit Nitritpökelsalz": "14",
            "Taurin": "15",
            "Tartazin": "16"
        },

        contact: "Wenden Sie sich bitte an die Rufnummer 089 / 233 - 63508"
    },
    normalizationData: {
        allergens: {
            "Soja oder Sojaerzeugnisse": "soy",
            "Milcherzeugnis": "milk-product",
            "Sesam": "sesame",
            "Erdnüße": "peanut",
            "Fisch": "fish",
            "Mandel": "almond"
        },

        additives: {
            "mit Geschmacksverstärker": "flavor-enhancer",
            "mit Farbstoffen": "dye",
            "mit Antioxidationsmittel": "Antioxidant"
        },

        traits: {
            "Vorspeizen": "appetizers",
            "vegetarisch": "vegetarian",
            "fleisch": "meat",
            "Hähnchen": "chicken",
            "Bambus": "bamboo",
            "Glasnudeln": "noodles",
            "Pilze": "mushroom",
            "Kokos": "coconut",
            "japanisch": "japanese",
            "Seetang": "seaweed",
            "Rind": "beef",
            "Spinat": "spinach",
            "Fisch": "fish",
            "Lachs": "salmon",
            "Avokado": "avocado",
            "Ente": "duck",
            "Thunfisch": "tuna",
            "Käse": "cheese",
            "Garnelen": "shrimps",
            "Hauptspeise": "main-course",
            "Peperoni": "pepperoni",
            "Zwiebel": "onion",
            "Ananas": "pineapple",
            "Nudeln": "noodels",
            "Reis": "rice",
            "Ingwer": "ginger",
            "Krabben": "crab",
            "Honig": "honey",
            "Banan": "banana",
            "Koffein": "caffeine",
            "Saft": "juice",
            "Bier": "beer",
            "Wein": "wine"
        }
    },

    //TODO gernelen > seafood
    cafeData: {
        "id": 5,
        "name": "ASIA LITTLE DRAGON",
        "about": "Bei uns können Sie bestellen, liefern lassen,\n selber abholen oder auch in unseren\n Räumlichkeiten Platz nehmen\n",
        "defaultImage": "http://asia-littledragon.de/images_br/ld_seitback1.jpg",
        "points": [
          {
            "id": 51
          }
        ],
        "menu": [
            {
                "category" : "Mittagsmenu",
                "unavailableExcuse": 'Diese Speise ist nur währen Mittagspause verfügbar',
                "availableAt": [{
                    from: '11:00',
                    to: '14:30'
                }],
                "supplementedBy": [{
                    "reference": {
                        "category": "Mittagsmenu",
                        "item": "Sauer-Scharf-Suppe"
                    }
                }, {
                    "reference": {
                        "category": "Mittagsmenu",
                        "item": "4 Mini Frühlingsrollen"
                    }
                }],
                "supplementPrompt": "Bitte wählen Sie die Vorspeise",
                "items" : [
                {
                  "name" : "M1 Gebratenes Gemüse",
                  "description" : "mit Champignons",
                  "price" : 5.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M2 Gebratenes Gemüse",
                  "description" : "mit Erdnuss-Sauce und Kokosmilch",
                  "price" : 5.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M3 Gebratenes Gemüse",
                  "description" : "mit China-Curry und Kokosmilch",
                  "price" : 5.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M4 Gebratenes Gemüse",
                  "description" : "mit Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 5.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M5 Gebratener Tofu",
                  "description" : "mit verschiedenen Gemüse und Champinions",
                  "price" : 6.00,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M6 Gebratener Tofu",
                  "description" : "mit Gemüse Erdnuss-Sauce und Kokosmilch",
                  "price" : 6.00,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis", "Erdnüße"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M7 Gebratener Tofu",
                  "description" : "mit Gemüse, China-Curry und Kokosmilch",
                  "price" : 6.00,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M8 Gebratener Tofu",
                  "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 6.00,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M9 Gebratener Eierreis",
                  "description" : "mit versch. Gemüse",
                  "price" : 5.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M10 Gebratene Eiernudeln",
                  "description" : "mit versch. Gemüse",
                  "price" : 6.00,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["vegetarisch"]
                },
                {
                  "name" : "M11 Gebratener Eierreis",
                  "description" : "mit Gemüse und Hühnerfleisch",
                  "price" : 6.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M12 Gebratener Eierreis",
                  "description" : "mit Gemüse und Rindfleisch",
                  "price" : 7.00,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M13 Gebratene Eiernudeln",
                  "description" : "mit Gemüse und Hühnerfleisch",
                  "price" : 6.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M14 Gebratene Eiernudeln",
                  "description" : "mit Gemüse und Rindfleisch",
                  "price" : 7.00,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M15 Chop-Suey",
                  "description" : "gebr. Hühnerfleisch mit versch. Gemüse",
                  "price" : 6.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M16 Gung-Po",
                  "description" : "gebr. Hühnerfl., Gemüse in Hoisin und Cashewnüssen",
                  "price" : 6.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M17 Bamboo",
                  "description" : "gebr. Hühnerfleisch, Bambus, Pilze",
                  "price" : 6.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen", "Bambus", "Pilze"]
                },
                {
                  "name" : "M18 Ga Chua Ngot",
                  "description" : "gebackenes Hühnerfleisch, Gemüse, Ananas, Bambus, in süß-sauer Sause",
                  "price" : 6.90,
                  "spiciness": 1,
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen", "Bambus"]
                },
                {
                  "name" : "M19 Sate",
                  "description" : "gebr. Hühnerfleisch mit Gemüse Erdnuss-Sause und Kokosmlich",
                  "price" : 6.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis", "Erdnüße"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M20 China-Curry",
                  "description" : "gebr. Hühnerfleisch, Gemüse, China-Curry und Kokosmilch",
                  "price" : 6.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M21 Thai-Curry",
                  "description" : "gebr. Hühnerfleisch, Gemüse, Kokosmilch, Thai-Rot-Curry, Basilikum",
                  "price" : 6.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M22 Knusprige Hühnerkeule",
                  "description" : "mit versch. Gemüse",
                  "price" : 7.50,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M23 Kn. Hühnerkeulest",
                  "description" : "mit Gemüse in Hoisin, Cashewnüsse",
                  "price" : 7.50,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M24 Knusprige Hühnerkeule",
                  "description" : "mit Gemüse, Bambus und Pilze",
                  "price" : 7.50,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M25 Knusprige Hühnerkeule",
                  "description" : "mit Gemüse, Kokosmilch und Erdnuss-Sause",
                  "price" : 7.50,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Erdnüße", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M26 Knusprige Hühnerkeule",
                  "description" : "mit Gemüse, China-Curry und Kokosmilch",
                  "price" : 7.50,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M27 Knusprige Hühnerkeule",
                  "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 7.50,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Hähnchen"]
                },
                {
                  "name" : "M28 Chop-Suey",
                  "description" : "gebratenes Rindfleisch mit versch. Gemüse",
                  "price" : 7.50,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M29 Gung-Po",
                  "description" : "gebr. Rindfl., Gemüse in Hoisin und Cashewnüsse",
                  "price" : 7.50,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M30 Sate",
                  "description" : "gebr. Rindfl., Gemüse in Hoisin und Cashewnüsse",
                  "price" : 7.50,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis", "Erdnüße"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M31 China-Curry",
                  "description" : "gebr. Rindfl, Gemüse, China-Curry und Kokosmilch",
                  "price" : 7.50,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M32 Thai Curry",
                  "description" : "gebratenes Rindfleisch, Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 7.50,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M33 Nua Pad Bai",
                  "description" : "gebratenes Rindfleisch, Thai Basilikum, rote Zwiebeln",
                  "price" : 7.50,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Rind"]
                },
                {
                  "name" : "M34 Sate",
                  "description" : "gebratenes Schweinfleisch, Gemüse, Kokosmilch & Erdnuss-Sause",
                  "price" : 6.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis", "Erdnüße"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Schwein"]
                },
                {
                  "name" : "M35 China-Curry",
                  "description" : "gebratenes Schweinfleisch, Gemüse, China-Curry, Kokosmilch",
                  "price" : 6.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Schwein"]
                },
                {
                  "name" : "M36 Thai-Curry",
                  "description" : "gebratenes Schweinfleisch, Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 6.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Schwein"]
                },
                {
                  "name" : "M37 Knusprige Ente",
                  "description" : "mit verschiedenem Gemüse",
                  "price" : 7.90,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M38 Knusprige Ente",
                  "description" : "mit Gemüse in Hoisin und Cashewnüsse",
                  "price" : 7.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M39 Knusprige Ente",
                  "description" : "mit Gemüse Erdnuss-Sauce und Kokosmilch",
                  "price" : 7.90,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Erdnüße", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M40 Knusprige Ente",
                  "description" : "mit Gemuse, China-Curry und Kokosmilch",
                  "price" : 7.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M41 Knusprige Ente",
                  "description" : "mit Gemuse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "spiciness": 2,
                  "price" : 7.90,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M42 Knusprige Ente",
                  "description" : "mit Gemuse, Ananas, Bambus in süßsauer Sauce",
                  "price" : 7.90,
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["Ente"]
                },
                {
                  "name" : "M43 Muc Thai Curry",
                  "description" : "geb. Tintenfisch, Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 7.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["seafood"]
                },
                {
                  "name" : "M44 Ca Thai Curry",
                  "description" : "gebackenes Fischfilet, Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 6.90,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["seafood"]
                },
                {
                  "name" : "M45 Tom Thai Curry",
                  "description" : "gebr. Großgarnelen, Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
                  "price" : 8.00,
                  "spiciness": 2,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["seafood"]
                },
                {
                  "name" : "M46 Gung-Po",
                  "description" : "gebr. Großgarnelen, Gemüse in Hoisin und Cashewnüsse",
                  "price" : 8.00,
                  "spiciness": 1,
                  "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["seafood"]
                },
                {
                  "name" : "M47 Chop-Suey",
                  "description" : "gebr. Großgarnelen mit verschiedenem Gemüse",
                  "price" : 8.00,
                  "allergens": ["Soja oder Sojaerzeugnisse"],
                  "additives": ["mit Geschmacksverstärker"],
                  "traits" : ["seafood"]
                },
                {
                  "name" : "4 Mini Frühlingsrollen",
                  "price" : 0,
                  "onlyAsSupplement": true
                },
                {
                  "name" : "Sauer-Scharf-Suppe",
                  "price" : 0,
                  "onlyAsSupplement": true
                } ] },

          {"category" : "Suppen",
            "traits" : ["soup"],
            "items" : [
            {
              "name" : "1 Gemüse-Suppe",
              "description" : "mit frischem Gemüse & Glasnudeln",
              "price" : 2.70,
              //"spiciness": 1,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["vegetarisch"]
             // "ingredients" : null,
              //"nutritionFacts" : {
              //  "calories" : null,
              //  "carbohydrate" : null,
              //  "protein" : null,
             //   "fat" : null},

            },
            {
              "name" : "2 Peking-Suppe",
              "description" : "mit Gemüse (süß-sauer-scharf)",
              "price" : 2.70,
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["vegetarisch"]
            },
            {
              "name" : "3 Wan-Tan-Suppe",
              "description" : "mit Gemüse & fleischgefüllten Maultaschen",
              "price" : 3.50,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["fleisch"]
            },
            {
              "name" : "4 Glasnudel-Suppe",
              "description" : "mit Gemüse, Hühnerbrust, Bambus & Glasnudeln",
              "price" : 3.50,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["Hähnchen", "Bambus", "Glasnudeln"]
            },
            {
              "name" : "5 Tom-Yam-Gai",
              "description" : "mit Gemüse, Hühnerbrust, Pilze in thail.Sauce, scharf",
              "price" : 3.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["Hähnchen", "Pilze"]
            },
            {
              "name" : "6 Tom-Kha-Gai",
              "description" : "mit Gemüse, Hühnerbrust, Pilze, Kokosmilch, sauer-scharf",
              "price" : 3.90,
              "spiciness": 2,
              "allergens": ["Milcherzeugnis"],
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["Hänchen", "Pilze", "Kokos"]
            },
            {
              "name" : "7 Tom-Yam-Gung",
              "description" : "mit Gemüse, Garnelen, Pilze in thail.Sauce, sauer-scharf",
              "price" : 4.00,
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["Garnelen", "Pilze"]
            },
            {
              "name" : "8 Miso-Suppe",
              "description" : "mit Tofu & Seetang (japanisch)",
              "price" : 3.90,
              "traits" : ["japanisch"]
            },
            {
              "name" : "9 Kani-Miso-Suppe",
              "description" : "mit Krebsfleisch & Seetang (japanisch)",
              "price" : 3.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["japanisch", "Krabben", "Seetang"]
            },
            {
              "name" : "10 Little Dragon-Suppe",
              "description" : "mit Gemüse, Schnellnudeln, Hühnerbrust & Koriander",
              "price" : 3.90,
              "additives": ["mit Geschmacksverstärker"],
              "traits" : ["Nudeln", "Hähnchen"]
            } ] },
          {"category" : "Vorspeisen",
            "traits" : ["Vorspeisen"],
            "items" : [
            {
              "name" : "11 Krupuk",
              "description" : "Krabbenchips",
              "price" : 2.00,
              "traits": ["vegetarisch"]
            },
            {
              "name" : "12 Herbstrollen",
              "description" : "Vegetarische Minirolle",
              "price" : 2.50,
              "traits" : ["vegetarian"]
            },
            /*{
              "name" : "013a China-Frühlingsrollen",
              "description" : "mit Fleisch",
              "price" : 3.00
            },*/
            {
              "name" : "013 China-Frühlingsrollen",
              "description" : "mit Hühnerfleisch, Gemüse aus Reisblättern",
              "price" : 3.00
            },
            {
              "name" : "14 Wan-Tan",
              "description" : "Gebackene fleischgefüllte Maultaschen",
              "price" : 3.50
            },
            {
              "name" : "15 Vietnam-Frühlingsrollen",
              "description" : "mit Gemüse, Fleisch und Glasnudeln",
              "price" : 3.50
            },
            {
              "name" : "16 Chicken-Wings",
              "description" : "Hühnerflügel, gebacken mit süßer Chilisauce",
              "price" : 3.50,
              "traits" : ["Hähnchen"]
            },
            {
              "name" : "17 Großgarnelen",
              "description" : "Gebacken mit süßer Chilisauce",
              "price" : 5.00,
              "spiciness": 1,
              "traits" : ["Garnelen", "seafood"]
            } ] },
          {"category" : "Salate",
            "traits" : ["salads"],
            "items" : [
            {//TODO add dressing as supplement
              "name" : "21 Gemischter Salat",
              "description" : "mit Gemüse der Saison (Bitte Dressing auswählen)",
              "price" : 4.00,
              "traits" : ["vegetarisch"]
            },
            {
              "name" : "021a Develey-Dressing Balsamico",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "021b Develey-Dressing Essig-Öl",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "021c Develey-Dressing French",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "021d Develey-Dressing Joghurt",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "021e Develey-Dressing Kräuter",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "021f Develey-Dressing Sauerrahm",
              "description" : "Je Salat nur ein Dressing auswählen",
              "price" : 0.00
            },
            {
              "name" : "22 Hühnerbrustfilet-Salat",
              "description" : "mit Sojabohnen",
              "price" : 3.50,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "trait": ["Hähnchen"]
            },
            {
              "name" : "23 Hühnerbrust Salat",
              "description" : "mit roten Zwiebeln, Gurken und Thai-Kräuter",
              "price" : 4.00,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits" : ["Hähnchen"]
            },
            {
              "name" : "24 Tintenfisch Salat",
              "description" : "mit roten Zwiebeln, Gurken und Thai-Kräuter",
              "price" : 4.50,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["seafood"]
            },
            {
              "name" : "25 Rindfleisch Salat",
              "description" : "mit roten Zwiebeln, Gurken und Thai-Kräuter",
              "price" : 4.50,
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Rind"]
            },
            {
              "name" : "26 Grossgarnelen Salat",
              "description" : "Salat aus Spinat mit Sesam Sauce (Japanisch)",
              "price" : 5.00,
              "allergens": ["Soja oder Sojaerzeugnisse", "Sesam"],
              "traits" : ["japanisch", "Spinat"]
            },
            {
              "name" : "27 Horenso-Gomaae Salat",
              "description" : "Salat aus Spinat mit Sesam Sauce (Japanisch)",
              "price" : 4.00,
              "allergens": ["Sesam", "Erdnüße"],
              "traits": ["spinat", "japanisch"]
            },
            {
              "name" : "28 Seetang Salat",
              "description" : "mit Seetang und Eissalat (Japanisch)",
              "price" : 3.90,
              "traits": ["japanisch"]
            },
            {
              "name" : "29 Isosalat",
              "description" : "Oktopus, Krebse, Thunfisch, Lachs, fliegender Fisch-Rogen (Japanisch)",
              "price" : 9.90,
              "additives": ["mit Farbstoffen"],
              "allergens": ["Fisch"],
              "traits" : ["seafood", "fisch", "japanisch"]
            } ] },
          {"category" : "Tages Sushi",
            "traits" : ["sushi", "lunch-menu", "japanisch"],
            "items" : [
            {
              "name" : "S41 12 Röllchen",
              "description" : "3 Tekka-, 3 Kappa-, 3 Sake-, 3 Avokado-Maki",
              "price" : 5.90,
              "traits" : ["Avokado", "Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S41.menu_02_05_2016_09_51_41.png"]
            },
            {
              "name" : "S42 12 Röllchen",
              "description" : "6 Sake-, 6 Tekka-Maki",
              "price" : 6.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S42.menu_02_05_2016_09_57_22.png"]
            },
            {
              "name" : "S43 12 Röllchen",
              "description" : "6 Salmon-Philadelphia-, 6 Sake-, 3 Avokado-Maki",
              "price" : 8.90,
              "traits" : ["Avokado", "Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S43.menu_02_05_2016_10_14_05.jpg"]
            },
            {
              "name" : "S44 18 Röllchen",
              "description" : "6 Kappa-, 6 Avokado-, 6 Avokado-Philadelphia-Maki",
              "price" : 8.90,
              "traits" : ["Avokado", "vegetarisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S44.menu_02_05_2016_10_07_00.jpg"]
            },
            {
              "name" : "S45 18 Röllchen",
              "description" : "3 Shinko[1]-, 3 Kampyo[1]-, 3 Avokado-, 3 Kappa-, 6 Horenso-Goaae-Maki",
              "price" : 8.90,
              "additives": ["mit Antioxidationsmittel"],
              "traits" : ["Avokado", "vegetarisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S45.menu_02_05_2016_10_10_14.jpg"]
            },
            {
              "name" : "S46 12 Röllchen + 2 Nigiri",
              "description" : "3 Sake-, 3 Tekka-, 6 Kappa-Maki + 1 Thunfisch, 1 Lachs",
              "price" : 8.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S46.menu_02_05_2016_10_11_52.jpg"]
            },
            {
              "name" : "S47 18 Röllchen",
              "description" : "6 Sake-Kawa-, 3 Kappa-, 6 Sake-, 3 Avokado-Maki",
              "price" : 9.90,
              "traits" : ["Avokado", "Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S47.menu_02_05_2016_11_04_40.jpg"]
            },
            {
              "name" : "S48 12 Röllchen + 3 Nigiri",
              "description" : "3 Kappa-, 3 Sake-, 3 Kampyo[1]-, 3 Tekka-Maki + 1 Thunfisch, 1 Lachs, 1 Eierstrich",
              "price" : 10.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S48.menu_02_05_2016_11_04_56.jpg"]
            },
            {
              "name" : "S49 12 Röllchen + 2 Nigiri",
              "description" : "6 Sake-, 6 Tekka-Maki + 1 Thunfisch, 1 Lachs",
              "price" : 10.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S49.menu_02_05_2016_11_05_18.jpg"]
            },
            {
              "name" : "S50 12 Röllchen + 2 Nigiri",
              "description" : "6 Sake-, 6 Alaska-Sesam-Maki + 1 Thunfisch, 1 Lachs",
              "price" : 11.90,
              "allergens": ["Sesam"],
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S50.menu_03_05_2016_15_04_18.jpg"]
            },
            {
              "name" : "S51 18 Röllchen",
              "description" : "6 California Tobiko[1,S]-, 6 Sake-Kawa-, 6 Avocado-Philadelphia-Maki",
              "price" : 13.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["Fisch", "Avokado"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S51.menu_03_05_2016_15_04_34.jpg"]
            },
            {
              "name" : "S52 6 Röllchen + 5 Nigiri",
              "description" : "3 California Tobiko[1,S]-, 3 Alaska-Tobiko[1]-Maki + 1 Thunfisch, 1 Lachs, 1 Eierstich, 1 Scampi, 1 Tintenfisch",
              "price" : 13.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["Avokado", "Fisch", "seafood"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S52.menu_03_05_2016_15_04_49.jpg"]
            },
            {
              "name" : "S53 12 Röllchen + 4 Nigiri",
              "description" : "6 California[1,S]-Sesam-, 3 Avokado-, 3 Kappa-Maki + 1 Thunfisch, 1 Lachs, 1 Scampi, 1 Tintenfisch",
              "price" : 14.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["Avokado", "Fisch", "seafood"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S53.menu_03_05_2016_15_09_17.jpg"]
            },
            {
              "name" : "S54 12 Röllchen + 5 Nigiri",
              "description" : "3 Sake-, 3 Kampyo[1]-, 3 Tekka-, 3 Kappa-Maki + 1 Thunfisch, 1 Lachs, 1 Scampi, 1 Tintenfisch, 1 Octopus",
              "price" : 14.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["Fisch", "seafood"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S54.menu_03_05_2016_15_09_38.jpg"]
            },
            {
              "name" : "S55 12 Röllchen + 6 Nigiri",
              "description" : "6 Avokado-, 6 Tekka-Maki + 2 Thunfisch, 2 Lachs, 1 Scampi, 1 Octopus",
              "price" : 15.90,
              "traits" : ["Avokado", "Fisch", "seafood"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S55.menu_03_05_2016_15_09_58.jpg"]
            },
            {
              "name" : "S56 12 Röllchen + 6 Nigiri",
              "description" : "3 Kappa-, 3 Shinko-, 3 Ebi-, 3 Kani[S]-Maki + 2 Thunfisch, 2 Lachs, 1 Scampi, 1 Tintenfisch",
              "price" : 15.90,
              "traits" : ["Fisch", "seafood"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S56.menu_03_05_2016_15_18_17.jpg"]
            },
            {
              "name" : "S57 12 Röllchen + 6 Nigiri",
              "description" : "3 Shinko-, 3 Kampyo[1]-, 3 Avokado-, 3 Kappa-Maki + 3 Thunfisch, 2 Lachs, 1 Lachskaviar",
              "price" : 16.90,
              "additives": ["mit Farbstoffen"],
              "traits" : ["Avokado", "Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S57.menu_03_05_2016_15_18_35.jpg"]
            },
            {
              "name" : "S58 24 Röllchen + 10 Nigiri (für 2 Personen)",
              "description" : "6 Kappa-, 6 Tekka-, 6 Alaska-, 6 Sake-Maki + 10 Nigiri",
              "price" : 29.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S58.menu_03_05_2016_15_23_46.jpg"]
            },
            {
              "name" : "S59 18 Röllchen + 14 Nigiri (für 2-3 Personen)",
              "description" : "6 California[1,S]-, 6 Shinko-, 6 Alaska-Tobiko[1]-Maki + 14 Nigiri",
              "price" : 34.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S59.menu_03_05_2016_15_26_38.jpg"]
            },
            {
              "name" : "S60 18 Röllchen + 18 Nigiri (für 3 Personen)",
              "description" : "6 Sake-, 6 Tekka-, 6 Alaska-Tobiko[1]-Maki + 18 Nigiri",
              "price" : 44.90,
              "traits" : ["Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S60.menu_03_05_2016_15_27_55.jpg"]
            },
            {
              "name" : "S61 36 Röllchen - 28 Nigiri (Familien-Glück f. 4 Per.)",
              "description" : "6 Shinko-, 6 Tekka-, 6 Sake-, 6 Avokado-, 6 Sake-Kawa-, 6 Alaska-Tobico-Maki + 28 Nigiri",
              "price" : 64.90,
              "traits" : ["Avokado", "Fisch"],
              "pics" : ["http://asia-littledragon.de/images/tagessushi/S61.menu_03_05_2016_15_28_43.jpg"]
            } ] },
          {"category" : "Sushi - Nigiri",
            "traits" : ["sushi", "nigiri", "japanisch"],
            "items" : [
            {
              "name" : "301 Sushi Nigiri - Avocado",
              "description" : "Avocado (1 Stück)",
              "price" : 1.80,
              "traits" : ["Avokado", "vegetarisch"]
            },
            {
              "name" : "302 Sushi Nigiri - Ika",
              "description" : "Tintenfisch (1 Stück)",
              "price" : 2.10,
              "traits" : ["seafood"]
            },
            {
              "name" : "303 Sushi Nigiri - Toka",
              "description" : "Oktopus (1 Stück)",
              "price" : 2.00,
              "traits" : ["seafood"]
            },
            {
              "name" : "304 Sushi Nigiri - Kani",
              "description" : "Krebsfleisch (1 Stück)",
              "price" : 1.80
            },
            {
              "name" : "305 Sushi Nigiri - Sake",
              "description" : "Lachs (1 Stück)",
              "price" : 2.20,
               "traits" : ["Fisch"]
            },
            {
              "name" : "306 Sushi Nigiri - Ebi",
              "description" : "Scampi (1 Stück)",
              "price" : 2.50,
              "traits" : ["seafood"]
            },
            {
              "name" : "307 Sushi Nigiri - Maguro",
              "description" : "Thunfisch (1 Stück)",
              "price" : 2.50,
              "traits" : ["Fisch"]
            },
            {
              "name" : "308 Sushi Nigiri - Tobiko",
              "description" : "Fliegender Fisch-Rogen (1 Stück)",
              "price" : 3.00,
              "traits": ["Fisch"]
            },
            {
              "name" : "309 Sushi Nigiri - Ikura",
              "description" : "Lachskaviar",
              "price" : 3.40,
              "traits": ["Fisch"]
            } ] },
          {"category" : "Sushi - Nori Maki",
            "traits" : ["sushi", "maki"],
            "items" : [
            {
              "name" : "311 Sushi Nori Maki - Kappa-Maki",
              "description" : "mit Gurken und Sesam (6 Röllchen)",
              "price" : 2.40,
              "traits": ["vegetarisch"],
              "allergens": ["Sesam"]
            },
            {
              "name" : "312 Sushi Nori Maki - Avokado-Maki",
              "description" : "mit Avokado (6 Röllchen)",
              "price" : 2.80,
              "traits": ["Avokado", "vegetarisch"]
            },
            {
              "name" : "313 Sushi Nori Maki - Kamo-Maki",
              "description" : "mit Entenbrust (6 Röllchen)",
              "price" : 4.00,
              "traits": ["Ente"]
            },
            {
              "name" : "314 Sushi Nori Maki - Sake-Maki",
              "description" : "mit Lachs (6 Röllchen)",
              "price" : 3.00,
              "traits": ["Fisch"]
            },
            {
              "name" : "315 Sushi Nori Maki - Salmon Stick Maki",
              "description" : "mit Lachs und Avocado (6 Röllchen)",
              "price" : 3.50,
              "traits": ["Fisch", "Avokado"]
            },
            {
              "name" : "316 Sushi Nori Maki - Kampyo-Maki",
              "description" : "mit Kürbis (6 Röllchen)",
              "price" : 2.90,
              "traits": ["vegetarisch"]
            },
            {
              "name" : "317 Sushi Nori Maki - Tekka-Maki",
              "description" : "mit Thunfisch (6 Röllchen)",
              "price" : 3.50,
              "traits": ["Thunfisch", "Fisch"]
            },
            {
              "name" : "318 Sushi Nori Maki - Ebi-Maki",
              "description" : "mit Scampi (6 Röllchen)",
              "price" : 3.50,
              "traits": ["seafood"]
            },
            {
              "name" : "319 Sushi Nori Maki - Kani-Maki",
              "description" : "mit Krebsfleisch (6 Röllchen)",
              "price" : 2.60,
              "additives": ["mit Farbstoffen"],
              "traits": ["seafood"]
            },
            {
              "name" : "320 Sushi Nori Maki - Shinko-Maki",
              "description" : "mit Rettich (6 Röllchen)",
              "price" : 2.90,
              "traits": ["vegetarisch"]
            } ] },
          {"category" : "Sushi Inside-Out Maki",
            "traits" : ["sushi", "maki"],
            "items" : [
            {
              "name" : "321 Sushi Inside-Out Maki - Horenso-Goaae-Maki",
              "description" : "mit Spinat und Sesamsauce, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.30,
              "allergens": ["Sesam"],
              "traits": ["Spinat", "Sesam", "vegetarisch"]
            },
            {
              "name" : "322 Sushi Inside-Out Maki - Alaska-Sesam-Maki",
              "description" : "mit Lachs, Avokado, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.50,
              "allergens": ["Sesam"],
              "traits": ["Fisch", "Avokado"]
            },
            {
              "name" : "323 Sushi Inside-Out Maki - Alaska-Tobiko[1]-Maki",
              "description" : "mit Lachs, Avokado, ummantelt und Fliegender Fisch-Rogen (6 Röllchen)",
              "price" : 5.00,
              "additives": ["mit Farbstoffen"],
              "traits": ["Fisch", "Avokado"]
            },
            {
              "name" : "324 Sushi Inside-Out Maki - Sake-Kawa-Maki",
              "description" : "mit Gegrillte Lachshaut, Gurken und Mayonnaise, ummantelt und Sesam (6 Röllchen)",
              "price" : 5.00,
              "allergens": ["Sesam"],
              "traits": ["Fisch"]
            },
            {
              "name" : "325 Sushi Inside-Out Maki - Maguro-Maki",
              "description" : "mit Ente, Gurken und Mayonaise, ummantelt und Sesam (6 Röllchen)",
              "price" : 5.50,
              "allergens": ["Sesam"],
              "traits": ["Ente"]
            },
            {
              "name" : "326 Sushi Inside-Out Maki - Tori-Karaage-Maki",
              "description" : "mit fritierte Hühnerstücke, Gurken und Mayonnaise, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.80,
              "allergens": ["Sesam"],
              "traits": ["Hähnchen"]
            },
            {
              "name" : "327 Sushi Inside-Out Maki - California-Sesam-Maki",
              "description" : "mit Surimi[1,S] und Avokado, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.50,
              "additives": ["mit Farbstoffen"],
              "allergens": ["Sesam", "Krebsfleisch-Imitat"],
              "traits": ["Avokado"]
            },
            {
              "name" : "328 Sushi Inside-Out Maki - California-Tobiko-Maki",
              "description" : "mit Surimi[1,S] und Avokado, ummantelt und Fliegender Fisch-Rogen (6 Röllchen)",
              "price" : 5.00,
              "additives": ["mit Farbstoffen"],
              "allergens": ["Sesam", "Krebsfleisch-Imitat"],
              "traits": ["Fisch", "Avokado"]
            },
            {
              "name" : "329 Sushi Inside-Out Maki - Boston-Maki",
              "description" : "mit Thunfisch und Avokado, ummantelt und Sesam (6 Röllchen)",
              "price" : 5.00,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Thunfisch"]
            },
            {//TODO supplement
              "name" : "330a Sushi Inside-Out Maki - Salmon-Philadelphia-Maki",
              "description" : "mit Frischkäse, Lachs und Gurken, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.90,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Lachs"]
            },
            {
              "name" : "330b Sushi Inside-Out Maki - Salmon-Philadelphia-Maki",
              "description" : "mit Frischkäse, Lachs und Avokado, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.90,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Lachs", "Käse"]
            },
            {
              "name" : "331 Sushi Inside-Out Maki - Avokado-Philadelphia-Maki",
              "description" : "mit Frischkäse und Avokado, ummantelt und Sesam (6 Röllchen)",
              "price" : 4.20,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "vegetarisch", "Käse"]
            },
            {
              "name" : "332 Sushi Inside-Out Maki - Tuna-Philadelphia-Maki",
              "description" : "mit Frischkäse, Thunfisch und Gurken, ummantelt und Sesam (6 Röllchen)",
              "price" : 5.30,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Thunfisch", "Käse"]
            } ] },
          {"category" : "Sushi Temaki / Sashimi",
            "traits" : ["sushi", "temaki"],
            "items" : [
            {
              "name" : "333 Sushi Temaki - Maguro",
              "description" : "mit Thunfisch und Avokado (1 Stück)",
              "price" : 4.00,
              "traits": ["Avokado", "Thunfisch"]
            },
            {
              "name" : "334 Sushi Temaki - Sake",
              "description" : "mit Lachs und Avokado (1 Stück)",
              "price" : 4.00,
              "traits": ["Avokado", "Lachs"]
            },
            {
              "name" : "335 Sushi Temaki - California",
              "description" : "mit Avokado, Surimi[1,S], Lachskaviar und Sesam (1 Stück)",
              "price" : 5.00,
              "additives": ["mit Farbstoffen"],
              "allergens": ["Sesam", "Krebsfleisch-Imitat"],
              "traits": ["Avokado", "Fisch"]
            },
            {
              "name" : "336 Sushi Temaki - Ebi",
              "description" : "mit Garnelen, Gurken und Sesam (1 Stück)",
              "price" : 5.00,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Garnelen", "seafood"]
            },
            {
              "name" : "337 Sushi Temaki - Ikura",
              "description" : "mit Lachskaviar, Avokado und Sesam (1 Stück)",
              "price" : 5.00,
              "allergens": ["Sesam"],
              "traits": ["Avokado", "Lachs"]
            },
            {
              "name" : "338 Gemischte Sashimi",
              "description" : "mit Lachs und Thunfisch",
              "price" : 14.90,
              "traits": ["Lachs", "Thunfisch"]
            } ] },
          {"category" : "Hühnerfleischgerichte (mit Reis)",
            "traits" : ["chicken", "rice", "Hauptspeise"],
            "items" : [
            {
              "name" : "211 Gebr. Hühnerfleisch - Chop-Suey",
              "description" : "mit Gemüse",
              "price" : 7.90,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "212 Gebr. Hühnerfleisch - Gung-Po",
              "description" : "mit Gemüse, Cashew in Hoisin",
              "price" : 7.90,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"]
            },
            {
              "name" : "213 Gebr. Hühnerfleisch - Bamboo",
              "description" : "mit Bambus und Pilze",
              "price" : 7.90,
              "traits": ["Bambus", "Pilze"],
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "214 Gebr. Hühnerfleisch - Sate",
              "description" : "mit Gemüse, Kokosmilch in Erdnuss-Sauce",
              "price" : 7.90,
              "spiciness": 1,
              "traits": ["kokos"],
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis", "Erdnüße"]
            },
            {
              "name" : "215 Gebr. Hühnerfleisch - China-Curry",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse", "Milcherzeugnis"],
              "traits": ["curry", "kokos"]
            },
            {
              "name" : "216 Gebr. Hühnerfleisch - Suki Yaki",
              "description" : "mit Gemüse und Glasnudeln",
              "price" : 7.90,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Nudeln"]
            },
            {
              "name" : "217 Gebr. Hühnerfleisch - Gai Tord Jieu Lhon",
              "description" : "mit Gemüse, Kokosmilch, Tamarinde, Koriander",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "218 Gebr. Hühnerfleisch - Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "219 Gebr. Hühnerfleisch - Gai Pad Bai Graprau",
              "description" : "mit Peperoni, Thai Basilikum, rote Zwiebeln",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Peperoni", "Zwiebel"]
            },
            {
              "name" : "220 Gebr. Hühnerfleisch - Ga Chua Ngot",
              "description" : "mit Gemüse, Ananas, Bambus in süß-sauer Sauce",
              "price" : 7.90,
              "additives": ["mit Geschmacksverstärker"],
              "traits": ["Ananas", "Bambus"]
            } ] },
          {"category" : "Hühnerkeule (o. Knochen, m. Reis)",
            "traits" : ["Hähnchen"],
            "items" : [
            {
              "name" : "221 Knusprige Hühnerkeule",
              "description" : "mit Gemüse",
              "price" : 8.90,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "222 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Cashew in Hoisin",
              "price" : 8.90,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse", "Haselnüße oder Nußerzeugnisse"],
            },
            {
              "name" : "223 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Bambus und Pilze",
              "price" : 8.90,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse", "Bambus", "Pilze"]
            },
            {
              "name" : "224 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Kokosmilch in Erdnuss-Sauce",
              "price" : 8.90,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "225 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 8.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "226 Knusprige Hühnerkeule",
              "description" : "mit Gemüse und Glasnudeln",
              "price" : 8.90,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Nudeln"]
            },
            {
              "name" : "227 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Kokosmilch, Tamarinde, Koriander",
              "price" : 8.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "228 Knusprige Hühnerkeule",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry, Basilikum",
              "price" : 8.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            } ] },
          {"category" : "Rindfleischgerichte (mit Reis)",
            "traits" : ["beef", "Reis"],
            "items" : [
            {
              "name" : "231 Gebr. Rindfleisch - Chop-Suey",
              "description" : "mit Gemüse",
              "price" : 8.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "232 Gebr. Rindfleisch - Gung-Po",
              "description" : "mit Gemüse, Cashew in Hoisin",
              "price" : 8.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Haselnüße oder Nußerzeugnisse", "Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "233 Gebr. Rindfleisch - Bamboo",
              "description" : "mit Bambus und Pilze",
              "price" : 8.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Bambus", "Pilze"]
            },
            {
              "name" : "234 Gebr. Rindfleisch - Sate",
              "description" : "mit Gemüse, Kokosmilch in Erdnuss-Sauce",
              "price" : 8.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "235 Gebr. Rindfleisch - China-Curry",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "236 Gebr. Rindfleisch - Suki Yaki",
              "description" : "mit Gemüse und Glasnudeln",
              "price" : 8.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Nudeln"]
            },
            {
              "name" : "237 Gebr. Rindfleisch - Nua Tord Jieu Lhon",
              "description" : "mit Gemüse, Kokosmilch, Tamarinde und Koriander",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "238 Gebr. Rindfleisch - Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "239 Gebr. Rindfleisch - Nua Pad Bai Graprau",
              "description" : "mit Peperoni, Thai Basilikum, rote Zwiebeln",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Peperoni", "Zwiebel"]
            },
            {
              "name" : "240 Gebr. Rindfleisch - Bo Xa Ot",
              "description" : "mit Paprika, Zwiebeln und Zitronengras",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Zwiebel"]
            },
            {
              "name" : "240A Gebr. Rindfleisch - Bo Xao Hanh",
              "description" : "mit Zwiebeln, Lauch und Austernsauce",
              "price" : 8.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Zwiebel"]
            } ] },
          {"category" : "Schweinefleischgerichte (mit Reis)",
            "traits" : ["pork", "Reis"],
            "items" : [
            {
              "name" : "241 Gebr. Schweinefleisch - Chop-Suey",
              "description" : "mit Gemüse",
              "price" : 7.550,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "242 Gebr. Schweinefleisch - Gung-Po",
              "description" : "mit Gemüse, Cashew in Hoisin",
              "price" : 7.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Haselnüße oder Nußerzeugnisse", "Soja oder Sojaerzeugnisse"],
            },
            {
              "name" : "243 Gebr. Schweinefleisch - Bamboo",
              "description" : "mit Bambus und Pilze",
              "price" : 7.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Bambus", "Pilze"]
            },
            {
              "name" : "244 Gebr. Schweinefleisch - Sate",
              "description" : "mit Gemüse, Kokosmilch in Erdnuss-Sauce",
              "price" : 7.90,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "245 Gebr. Schweinefleisch - China-Curry",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "246 Gebr. Schweinefleisch - Suki Yaki",
              "description" : "mit Gemüse und Glasnudeln",
              "price" : 7.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Nudeln"]
            },
            {
              "name" : "247 Gebr. Schweinefleisch - Mu Tord Jieu Lhon",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "248 Thai Curry",
              "description" : "gebratenes Schweinfleisch, Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 7.90,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            } ] },
          {"category" : "Entenfleischgerichte (mit Reis)",
            "traits" : ["duck", "Reis"],
            "items" : [
            {
              "name" : "251 Gebr. Entenfleisch - Chop-Suey",
              "description" : "mit Gemüse",
              "price" : 11.00,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "252 Gebr. Entenfleisch - Gung-Po",
              "description" : "mit Gemüse, Cashew in Hoisin",
              "price" : 11.00,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"]
            },
            {
              "name" : "253 Gebr. Entenfleisch - Bamboo",
              "description" : "mit Bambus und Pilze",
              "price" : 11.00,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Bambus", "Pilze"]
            },
            {
              "name" : "254 Gebr. Entenfleisch - Sate",
              "description" : "mit Gemüse, Kokosmilch in Erdnuss-Sauce",
              "price" : 11.00,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "255 Gebr. Entenfleisch - China-Curry",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 11.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "256 Gebr. Entenfleisch - Suki Yaki",
              "description" : "mit Gemüse und Glasnudeln",
              "price" : 11.00,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Nudeln"]
            },
            {
              "name" : "257 Gebr. Entenfleisch - Ped Yang Tow Jiew Lhon",
              "description" : "mit Gemüse, Kokosmilch, Tamarinde und Koriander",
              "price" : 11.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "258 Gebr. Entenfleisch - Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 11.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "259 Gebr. Entenfleisch - Vit Chua Ngot",
              "description" : "mit Gemüse, Ananas, Bambus, in süß-saurer Sauce",
              "price" : 11.00,
              "additives": ["mit Geschmacksverstärker"],
              "traits": ["Bambus", "Ananas"]
            } ] },
          {"category" : "Meerfrüchtegerichte (mit Reis)",
            "traits" : ["seafood", "Reis"],
            "items" : [
            {
              "name" : "261 Gebr. Tintenfisch - Muc Xan Gung",
              "description" : "mit Gemüse und Ingwer",
              "price" : 8.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Ingwer"]
            },
            {
              "name" : "262 Gebr. Tintenfisch - Muc Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry mit Basilikum",
              "price" : 8.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "263 Gebr. Fischfilet - Ca Chua Ngot",
              "description" : "mit Gemüse, Ananas, Bambus in süß-sauer Sauce",
              "price" : 8.00,
              "additives": ["mit Geschmacksverstärker"],
              "traits": ["Ananas", "Bambus", "Fisch", "seafood-NEG"]
            },
            {
              "name" : "264 Gebr. Fischfilet - Ca Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry mit Basilikum",
              "price" : 8.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos", "Fisch", "seafood-NEG"]
            },
            {
              "name" : "265 Gebr. Großgarnelen - Tom Chop-Suey",
              "description" : "mit Gemüse",
              "price" : 12.00,
              "additives": ["mit Geschmacksverstärker"],
              "traits": ["Garnelen"]
            },
            {
              "name" : "266 Gebr. Großgarnelen - Tom Thai Curry",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 12.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos", "Garnelen"]
            },
            {
              "name" : "267 Gebr. Großgarnelen - Tom Xa Ot",
              "description" : "mit Gemüse, Paprika, Bambus und Zitronengras",
              "price" : 12.00,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Bambus", "Garnelen"]
            },
            {
              "name" : "268 Gebr. Großgarnelen - Tom Chua Ngot",
              "description" : "mit Gemüse, Ananas, Bambus in süß-saurer Sauce",
              "price" : 12.00,
              "additives": ["mit Geschmacksverstärker"],
              "traits": ["Bambus", "Garnelen", "Ananas"]
            },
            {
              "name" : "269 Gebr. Großgarnelen - Gung-Po",
              "description" : "mit Gemüse, Cashewnüsse, in hoisin Sauce",
              "price" : 12.00,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Haselnüße oder Nußerzeugnisse", "Soja oder Sojaerzeugnisse"],
              "traits": ["Garnelen"]
            } ] },
          {
            "category" : "Gebratener Reis",
            "traits" : ["Reis"],
            "items": [{
                "name" : "271 Gebratener Eierreis",
                "description" : "mit Gemüse",
                "price" : 7.00,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"]
              },
              {
                "name" : "272 Gebratener Eierreis",
                "description" : "mit Gemüse und Hühnerfleisch",
                "price" : 7.90,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Hähnchen", "vegetarisch-NEG"] //TODO auto override vegetarisch with meat
              },
              {
                "name" : "273 Gebratener Eierreis",
                "description" : "mit Gemüse und Rindfleisch",
                "price" : 8.00,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Rind", "vegetarisch-NEG"] //TODO auto override vegetarisch with meat
              },
              {
                "name" : "274 Gebratener Eierreis",
                "description" : "mit Gemüse und Krabben",
                "price" : 8.20,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Krabben", "vegetarisch-NEG"]
              },
              {
                "name" : "275 Gebratener Eierreis - Nasi-Goreng",
                "description" : "mit Gemüse, versch. Fleisch, Krabben und Curry",
                "price" : 8.50,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Krabben", "Fleisch", "vegetarisch-NEG"]
              },
              {
                "name" : "276a Gebratener Eierreis",
                "description" : "mit Gemüse, knuspriges Entenfleisch (Hoisinsauce)",
                "price" : 11.90, //TODO complement
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Ente", "vegetarisch-NEG"]
              },
              {
                "name" : "276b Gebratener Eierreis",
                "description" : "mit Gemüse, knuspriges Entenfleisch (Süß-sauer Sauce)",
                "price" : 11.90,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Ente", "vegetarisch-NEG"]
              }]
          },


          {
            "category" : "Gebratener Reis",
            "traits" : ["Reis"],
            "items": [{
                "name" : "277 Gebratene Eiernudeln",
                "description" : "mit Gemüse",
                "price" : 7.0,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "278 Gebratene Eiernudeln",
                "description" : "mit Gemüse und Hühnerfleisch",
                "price" : 7.90,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Hähnchen", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "279 Gebratene Eiernudeln",
                "description" : "mit Gemüse und Rindfleisch",
                "price" : 8.00,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Rind", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "280 Gebratene Eiernudeln",
                "description" : "mit Gemüse und Krabben",
                "price" : 8.20,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Krabben", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "281 Gebratene Eiernudeln - Bami-Goreng",
                "description" : "mit Gemüse, versch. Fleisch, Krabben und Curry",
                "price" : 8.50,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Fleisch", "Krabben", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "282a Gebratene Eiernudeln",
                "description" : "mit Gemüse, knuspriges Entenfleisch (Hoisinsauce)",
                "price" : 11.90,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Ente", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              },
              {
                "name" : "282b Gebratene Eiernudeln",
                "description" : "mit Gemüse, knuspriges Entenfleisch (Süß-sauer Sauce)",
                "price" : 11.90,
                "additives": ["mit Geschmacksverstärker"],
                "allergens": ["Ei und Eierzeugnisse", "Soja oder Sojaerzeugnisse"],
                "traits": ["Ente", "vegetarisch-NEG", "Nudeln"] //TODO reis-NEG
              }]
          },
          {"category" : "Vegetarische Gerichte (mit Reis)",
            "traits" : ["vegetarisch", "Reis"],
            "items" : [
            {
              "name" : "291 Gebratenes Gemüse",
              "description" : "mit Champignons",
              "price" : 7.00,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Pilze"]
            },
            {
              "name" : "292 Gebratenes Gemüse",
              "description" : "mit Erdnuss-Sauce und Kokosmilch",
              "price" : 7.20,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "293 Gebratenes Gemüse",
              "description" : "mit China-Curry und Kokosmilch",
              "price" : 7.20,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "294 Gebratenes Gemüse",
              "description" : "mit Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 7.20,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "295 Gebratener Tofu",
              "description" : "mit Gemüse und Champignons",
              "price" : 7.50,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Soja oder Sojaerzeugnisse"],
              "traits": ["Plize"]
            },
            {
              "name" : "296 Gebratener Tofu",
              "description" : "mit Gemüse, Kokosmilch und Erdnuss-Sauce",
              "price" : 7.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Erdnüße", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "297 Gebratener Tofu",
              "description" : "mit Gemüse, Kokosmilch und China-Curry",
              "price" : 7.50,
              "spiciness": 1,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            },
            {
              "name" : "298 Gebratener Tofu",
              "description" : "mit Gemüse, Kokosmilch, Thai-Rot Curry und Basilikum",
              "price" : 7.50,
              "spiciness": 2,
              "additives": ["mit Geschmacksverstärker"],
              "allergens": ["Milcherzeugnis", "Soja oder Sojaerzeugnisse"],
              "traits": ["Kokos"]
            }
             ] },
          {"category" : "Nachtisch",
            "traits" : ["dessert"], //TODO test
            "items" : [
            {
              "name" : "121 Gebackene Banane",
              "description" : "mit Honig und Mandeln",
              "price" : 3.00,
              "allergens": ["Mandel"],
              "traits": ["Honig", "Banan"]
            },
            {
              "name" : "122 Gebackene Ananas",
              "description" : "mit Honig und Mandeln",
              "price" : 3.00,
              "allergens": ["Mandel"],
              "traits": ["Honig", "Ananas"]
            },
            {
              "name" : "124a BEN & JERRY's Caramel Chew Chew",
              "description" : "(150ml) (Grundpreis 21,30 Euro pro 1,0L)",
              "price" : 3.20
            },
            {
              "name" : "124b BEN & JERRY's Strawberry Cheesecake",
              "description" : "(150ml) (Grundpreis 21,30 Euro pro 1,0L)",
              "price" : 3.20
            },
            {
              "name" : "124c BEN & JERRY's Cookie Dough",
              "description" : "(150ml) (Grundpreis 21,30 Euro pro 1,0L)",
              "price" : 3.20
            },
            {
              "name" : "124d BEN & JERRY's Chunky Monkey",
              "description" : "(150ml) (Grundpreis 21,30 Euro pro 1,0L)",
              "price" : 3.20
            },
            {
              "name" : "123 Mangocreme",
              "description" : "null",
              "price" : 3.00,
              "traits": ["Mango"]
            } ] },
          {"category" : "Getränke",
            "traits" : ["drinks"],
            "items" : [
            {
              "name" : "801 Coca Cola (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "Koffeinhaltig"],
              "traits" : ["Koffein"]
            },
            {
              "name" : "801 Coca Cola (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "Koffeinhaltig"],
              "traits" : ["Koffein"]
            },
            {
              "name" : "802 Coca Cola Light (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"]
            },
            {
              "name" : "802 Coca Cola Light (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"]
            },
            {
              "name" : "802 Coca Cola Light (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"]
            },
            {
              "name" : "802 Coca Cola Light (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"]
            },
            {
              "name" : "803 Fanta (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "803 Fanta (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "804 Sprite (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "804 Sprite (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "804 Mezzo Mix (0.3l)",
              "price" : 1.80,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "mit Phosphat"]
            },
            {
              "name" : "804 Mezzo Mix (0.4l)",
              "price" : 2.40,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "mit Phosphat"]
            },
            {
              "name" : "807 Mineralwasser (0.3l)",
              "price" : 1.80
            },
            {
              "name" : "807 Mineralwasser (0.4l)",
              "price" : 2.40
            },
            {
              "name" : "808 Apfelschorle (0.3l)",
              "price" : 1.80
            },
            {
              "name" : "808 Apfelschorle (0.4l)",
              "price" : 2.40
            },
            {
              "name" : "809 Johanisbeerschorle (0.3l)",
              "additives": [
                "mit Farbstoffen"
              ],
              "price" : 1.80
            },
            {
              "name" : "809 Johanisbeerschorle (0.4l)",
              "additives": [
                "mit Farbstoffen"
              ],
              "price" : 2.40
            },
            {
              "name" : "810 Alkoholfreis Bier (0.5l)",
              "allergens": ["Weizen"],
              "price" : 2.90
            }]
          },


          {"category" : "Flasche",
            "traits" : ["drinks"],
            "items" : [
            {
              "name" : "811 Coca Cola (1l)",
              "price" : 3.90,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "Koffeinhaltig"
              ],
              "traits" : ["Koffein"]
            },
            {
              "name" : "811 Coca Cola Light (1l)",
              "price" : 3.90,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"]
            },
            {
              "name" : "812 Coca Cola Light (1l)",
              "price" : 3.90,
              "additives": [
                "mit Farbstoffen",
                "geschwefelt",
                "geswärtzt",
                "mit Phosphat"
              ]
            },
            {
              "name" : "813 Fanta (1l)",
              "price" : 3.90,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "814 Sprite (1l)",
              "price" : 3.90,
              "additives": [
                "mit Antioxidationsmittel"]
            },
            {
              "name" : "815 Mezzo Mix (1l)",
              "price" : 3.90,
              "additives": [
                "mit Farbstoffen",
                "mit Antioxidationsmittel",
                "mit Phosphat"]
            },
            {
              "name" : "816 Mineralwasser (1l)",
              "price" : 3.90
            },
            {
              "name" : "817 Apfelschorle (1l)",
              "price" : 3.90
            }]
          },

          {"category" : "Asiatische Saft",
          "items" : [{
              "name" : "820 Lycheesaft (0.3l)",
              "price" : 1.80,
              "allergens": ["Sulfit"],
              "traits": ["Saft"]
            },{
              "name" : "820 Lycheesaft (0.4l)",
              "price" : 2.40,
              "allergens": ["Sulfit"],
              "traits": ["Saft"]
            },
            {
              "name" : "821 Mangosaft (0.3l)",
              "price" : 1.80,
              "allergens": ["Sulfit"],
              "traits": ["Saft"]
            },
            {
              "name" : "821 Mangosaft (0.4l)",
              "price" : 2.40,
              "allergens": ["Sulfit"],
              "traits": ["Saft"]
            } ] },

          {"category" : "Warme Getränke",
          "items" : [{
              "name" : "822 Espresso",
              "price" : 2.10,
              "traits": ["Kaffein"]
            },{
              "name" : "823 Kaffe",
              "price" : 2.50,
              "traits": ["Kaffein"]
            },
            {
              "name" : "824 Jasmin Tee",
              "price" : 2.90
            },
            {
              "name" : "825 Grüner Tee",
              "price" : 2.90
            },
            {
              "name" : "826 Kamillentee",
              "price" : 2.00
            },
            {
              "name" : "827 Schwarztee",
              "price" : 2.00
            } ,
            {
              "name" : "828 Pfefferminztee",
              "price" : 2.00
            } ] },
          {"category" : "Bier",
            "traits" : ["alcohol", "drinks", "Bier"],
            "items" : [
            {
              "name" : "830 Helles Bier (0,5L)",
              "price" : 2.90,
              "allergens": ["Weizen"]
            },
            {
              "name" : "831 Weißbier (0,5L)",
              "price" : 2.90,
              "allergens": ["Weizen"]
            },
            {
              "name" : "832 Dunkles Weißbier (0,5L)",
              "price" : 2.90,
              "allergens": ["Weizen"]
            },
            {
              "name" : "833 Pils (0,33L)",
              "price" : 2.50,
              "allergens": ["Weizen"]
            }]
          },
          {"category" : "Bier",
            "traits" : ["alcohol", "drinks", "Bier"],
            "items":[
            {
              "name" : "834 Tsingtao Bier (0,33L)",
              "description" : "China Bier",
              "price" : 2.50,
              "allergens": ["Weizen"]
            },
            {
              "name" : "835 Singha (0,33L)",
              "description" : "Thai Bier",
              "price" : 2.50,
              "allergens": ["Weizen"]
            }]
          },
          {
            "category" : "Weine",
            "traits": ["Wein"],
            "items": [
            {
              "name" : "840 Weiße Weinschorle (0.2l)",
              "price" : 3.50,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "841 Pinot Grigio (0,2l)",
              "description" : "trocken aus Italien, IGT11% vol",
              "price" : 3.50,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "841 Pinot Grigio (Fl. 0,75l)",
              "description" : "trocken aus Italien, IGT11% vol",
              "price" : 10.90,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "842 Chardonnay (0,2l)",
              "description" : "trocken aus Italien, IGT11% vol",
              "price" : 3.50,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "842 Chardonnay (Fl. 0,75l)",
              "description" : "trocken aus Italien, IGT11% vol",
              "price" : 10.90,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "843 Chianti (0,2l)",
              "description" : "trocken aus Italien, 12% vol",
              "price" : 3.50,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "843 Chianti (Fl. 0,75l)",
              "description" : "trocken aus Italien, 12% vol",
              "price" : 10.90,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "844 Bordeaux (0,2l)",
              "description" : "trocken aus Frankreich",
              "price" : 3.50,
              "allergens": ["Sulfit"],
            },
            {
              "name" : "844 Bordeaux (Fl. 0,75l)",
              "description" : "trocken aus Frankreich",
              "price" : 10.90,
              "allergens": ["Sulfit"],
            }]
          },
          {
            "category" : "Brands-Spirituosen",
            "traits": ["alcohol", "drinks"],
            "items": [{
                "name" : "Bambus Schnapp (2cl)",
                "description" : "aus China, 45% vol",
                "price" : 2.50,
            },{
                "name" : "Wodka Gorbatschow (2cl)",
                "description" : "aus Deutschland, 37.5% vol",
                "price" : 2.50,
            }]
           },
          {
            "category" : "Wein aus Asien",
            "traits": ["Wein"],
            "items": [
            {
              "name" : "860 Lycheewein (0.2l)",
              "description" : "Deutschland, 10% vol",
              "price" : 3.40
            },
            {
              "name" : "860 Lycheewein (Fl. 0.5l)",
              "description" : "Deutschland, 10% vol",
              "price" : 7.50
            },
            {
              "name" : "861 Pflaumenwein (0.2l)",
              "description" : "Choya, Japan, 10% vol",
              "price" : 3.40
            },
            {
              "name" : "861 Pflaumenwein (Fl. 0.5l)",
              "description" : "Choya, Japan, 10% vol",
              "price" : 7.50
            },
            {
              "name" : "862 Sake (0.2l)",
              "description" : "Deutschland, 15% vol",
              "price" : 3.80
            },
            {
              "name" : "862 Sake (Fl. 0.5l)",
              "description" : "Deutschland, 15% vol",
              "price" : 12.90
            }] },
          {"category" : "Extras",
            "traits" : ["extras"],
            "items" : [
            {
              "name" : "400 Portion Reis",
              "price" : 1.50,
              "traits": ["Reis"]
            },
            {
              "name" : "401a Gebratener Reis",
              "price" : 3.00,
              "traits": ["Reis"]
            },
            {
              "name" : "401b Gebratene Nudeln",
              "price" : 3.00,
              "traits": ["Nudeln"]
            },
            {
              "name" : "402a Kanton-Sauce",
              "price" : 2.00
            },
            {
              "name" : "402b Hoisin-Sauce",
              "price" : 2.00
            },
            {
              "name" : "402c Süß-sauer-Souce",
              "price" : 2.00
            },
            {
              "name" : "403a Thai-Sauce",
              "price" : 3.00
            },
            {
              "name" : "403b China-Curry-Sauce",
              "price" : 3.00
            },
            {
              "name" : "403c Erdnuß-Sauce",
              "price" : 3.00
            } ] },
          {"category" : "Allergene, Zusatzstoffe, Weitere Fragen",
            "traits" : ["extras"],
            "items" : [
            {
              "name" : "400 Portion Reis",
              "price" : 1.50,
              "traits": ["Reis"]
            },
            {
              "name" : "401a Gebratener Reis",
              "price" : 3.00,
              "traits": ["Reis"]
            },
            {
              "name" : "401b Gebratene Nudeln",
              "price" : 3.00,
              "traits": ["Nudeln"]
            },
            {
              "name" : "402a Kanton-Sauce",
              "price" : 2.00
            },
            {
              "name" : "402b Hoisin-Sauce",
              "price" : 2.00
            },
            {
              "name" : "402c Süß-sauer-Souce",
              "price" : 2.00
            },
            {
              "name" : "403a Thai-Sauce",
              "price" : 3.00
            },
            {
              "name" : "403b China-Curry-Sauce",
              "price" : 3.00
            },
            {
              "name" : "403c Erdnuß-Sauce",
              "price" : 3.00
            } ] }
        ]
      },

      supportedZipCodes: [
            {
                zip: 80333,
                place: "München",
                minimalSum: 25
            }, {
                zip: 80469,
                place: "München",
                minimalSum: 25
            }, {
                zip: 80538,
                place: "München Ludwig- / Isarvorstadt",
                minimalSum: 25
            }, {
                zip: 80539,
                place: "München",
                minimalSum: 25
            }, {
                zip: 81539,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81541,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81543,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81545,
                place: "München",
                minimalSum: 15
            }, {
                zip: 81547,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81549,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81667,
                place: "München",
                minimalSum: 15
            }, {
                zip: 81669,
                place: "München",
                minimalSum: 15
            }, {
                zip: 81671,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81673,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81675,
                place: "München",
                minimalSum: 17
            }, {
                zip: 81677,
                place: "München",
                minimalSum: 12
            }, {
                zip: 81679,
                place: "München",
                minimalSum: 17
            }, {
                zip: 81735,
                place: "München Waldperlach",
                minimalSum: 17
            }, {
                zip: 81737,
                place: "München Perlach",
                minimalSum: 15
            }, {
                zip: 81739,
                place: "München",
                minimalSum: 17
            }, {
                zip: 81825,
                place: "München",
                minimalSum: 22
            }, {
                zip: 81827,
                place: "München",
                minimalSum: 25
            }, {
                zip: 81829,
                place: "München",
                minimalSum: 30
            }, {
                zip: 82008,
                place: "Unterhaching",
                minimalSum: 17
            }, {
                zip: 85521,
                place: "Ottobrunn",
                minimalSum: 25
            }, {
                zip: 85579,
                place: "Neubiberg",
                minimalSum: 20
            }
          ]

}



/*
80333	München	ab 25,00 €
80469	München	ab 25,00 €
80538	München Ludwig- / Isarvorstadt	ab 25,00 €
80539	München	ab 25,00 €
81539	München	ab 12,00 €
81541	München	ab 12,00 €
81543	München	ab 12,00 €
81545	München	ab 15,00 €
81547	München	ab 12,00 €
81549	München	ab 12,00 €
81667	München	ab 15,00 €
81669	München	ab 15,00 €
81671	München	ab 12,00 €
81673	München	ab 12,00 €
81675	München	ab 17,00 €
81677	München	ab 12,00 €
81679	München	ab 17,00 €
81735	München Waldperlach	ab 17,00 €
81737	München Perlach	ab 15,00 €
81739	München	ab 17,00 €
81825	München	ab 22,00 €
81827	München	ab 25,00 €
81829	München	ab 30,00 €
82008	Unterhaching	ab 17,00 €
85521	Ottobrunn	ab 25,00 €
85579	Neubiberg	ab 20,00 € */