////// DATE OF LAST UPDATE (Month, Year) //
const currentDate = "August, 2024"





////// PROPERTIES
const db_forSale = [

// Example property entry:
 //["P-0000",      0, "LOCATION",                "AREA",                     "INFO",                     "BUILDINGS",                         "FOLDER_ID________________________", "PREVIEW_IMG_ID___________________"],


// Paste example below / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /


  ["P-2279",      0, "South Coorg",                "7 + 5 Acres",              "Coffee + Wet Land",        "No infracture",                     "1LIsv1iqQaOMeR-oV0CqqpFY_Qb1X32gE", "1dSFD66yqoOYkVvQnzXU-9SeK36oyCybN"],
  ["P-2278",      0, "South Coorg Near Golf Club", "8.25 + 3 Acres",           "Coffee + Wet Land",        "Irrigation tank & direct access",   "1XLqcWMmW7QWuFB36OBD7k5MMGv-Db-z9", "1IHF42W8KS-X8uTiuXNQimHYYuMpCyFCV"],
  ["P-2277",      0, "North/South Coorg",          "120 Acers",                "A-Z Facilities",           "Bungalow + Labour Line",            "1hCYu1zjaDkVL2WRXTCCBmN1dNbBv6FkP", "1_fHYt5dFibQu9EXY2pEwTgcv-RXJbWgg"],
  ["P-2276",      0, "North Coorg",                "18 Acres",                 "Coffee Plantation",        "House + Labour Line & river access","1Cx3HZNv7NzXNnSNVibkLz0lAjAactNd7", "17dWlTGkUjUxvU_H4PJAO8mWiR_M7oqC2"],	
  ["P-2275",      0, "1km from Virajpet Town",     "800/1200/2400 Sq Ft Plots","Ready for registration",   "Direct access from main road",      "1t7JpVk_-6W3bQOj-ap3Gz8NZJXoRIHVN", "1fVrlF50jxiWo1TCS7n3T_ofKw39H8KXg"],
  ["P-2274",      0, "Near Coorg Golf Links",      "1 & 2 Acres",              "Scenic Area",              "Tilled House",                      "167qnvtPCziHWdbNY4YFm3orXRwYRqtAF", "1DaVkaVAzJUKP2fbNk-1Zr6Pg6gqokaaf"],
  ["P-2273",      0, "South Coorg",                "31 Acres",                 "A-Z Facilities ",          "House + Labour Line",               "1fSIhh4mIwqkJvhZsoV8cFvwEBo6RjzF8", "1f2LoRFvTQ-WVyWLkB-RWjOXAM-qpJJHh"],
  ["P-2272",      0, "10km from Virajpet",         "5.25 Acres",               "Coffee & Areca",           "Labour Line",                       "153J-UxlarbP3iDdGed7_k-xihjsAMN1Y", "1D8EUo2kSfm8IK0hp7n8wpCKzvR8nP0tU"],	
  ["P-2271",      0, "North Coorg",                "14 Acers",                 "Hill-top View",            "No infracture",                     "14VEnfMeopFdo-pmP_AB1ZaUISszADwqj", "14lgyAyB7f5lA5YnOcJ1dRHA2bfqxTy5M"],
  ["P-2270",      0, "7km from Ponnempet",         "6 Acres",                  "Coffee & Areca",           "Tiled House",                       "1-4BhrZ8Du1zAcAgo0uMVhAm63KRVVcML", "1Ez-LXky45UnRg2na-nXF5PEokyBl3SKb"],
  ["P-2268",      0, "Near Bittangala",            "9 Acres",                  "Tabletop Location",        "2 Bed House",                       "1-3WNcPoDI2AljUJ9Dk_3trmD_8uc7zmM", "1-McAFIt7awUpLV1SQGhlTn2uNK8cjyse"],
  ["P-2266",      0, "South Coorg",                "6 Acres",                  "Adjacent to river",        "No infrastructure",                 "1zG-ZgY7e4PlY5jbYKAj3UihoQY87FsZK", "1zMDP6yt47kjQ8QpW9pfSODjo74bbMQOU"],
  ["P-2265",      0, "North Coorg",                "45 Acres",                 "Coffee & Wet Land",        "House + 6 Cottages",                "1ynX7EpzUwii_u2FGjl9JTCy4KNU_ODUH", "1yzusDWXnhKJXHXPDaMPXDC6roO-zi5KH"],
  ["P-2264",      0, "North Coorg",                "100 Acres",                "50 Acre Plantation",       "Labour Line + Irigation Tank",      "1yjAjPwXecRGgONcCHQMoOKNJGeJa7Hrc", "1ynUhrH07ZKICOj7gtDTX4OC49BT_rfZr"],
  ["P-2260",      0, "South Coorg",                "6 Acres",                  "Coffee & Areca",           "Cultivated Land + Irigation Tank",  "10GGzXNZviUyTRlkf8B4VsNvazOGDTm7m", "10lDfHyOSL-goKqok8duP0CJonBAbrkXG"],
  ["P-2259",      0, "3km from Virajpet",          "3.5 Acres",                "Coffee Plantation",        "Cultivated Land + Irigation Tank",  "1-kTMUzrEqUMAjv5wyudvdy2Zq__d2Gt3", "10-zxfHQcUgTegOYE0GQPjL_195xp9Vrr"],
  ["P-2252",      0, "South Coorg",                "12700 Sq Ft",              "Contact us for info",      "Furnished",                         "11Stj8KlJ2FqviokSW_BUbQGxIZM2qm1e", "1QhxFZyY8-3O0oPCF8bJhK4aF5kG-tkVL"],
  ["P-2251",      0, "Virajpet",                   "3 Acres",                  "Near Coorg Golf Club",     "Luxury Villa",                      "1LeD5cq2z_O-KyBmKMtb-E6PWwf06dcbL", "1LQ_H5jJvaBjNPGW9Ongk41ivZLTZzfV9"],
  ["P-2248",      0, "North Coorg",                "125 Acres",                "see images",               "A-Z Facilities",                    "1JCWDIr0dv4r68XcPLziUEDVvMml513kB", "1JrTSn9_3d0p6WCsvNnmSCNtWYULLlwe6"],
  ["P-2247",      0, "Near Kakkabe",               "60 Acres",                 "see images",               "A-Z Facilities",                    "1IIWkRDtpDvaV3ez_cobCXzTczS6XTcCE", "1Iv0hr8kC0K2lMCKsHqMvMhGohEBzfCZJ"],
  ["P-2244",      0, "Madikeri-Murnad",            "1.75 Acres",               "Large Building",           "Premium Homestay",                  "1GrVTlKo9HPk8ARafweBgFhVRrBDK-NO2", "1HEzS3GL56XIPFf_05NsIy-jwoNpwNvv7"],
  ["P-2243",      0, "Near Srimangala",            "63 Acres",                 "see images",               "A-Z Facilities",                    "1Ga8LEthi49STMsZMlS4j_weNjXawarLM", "1GpsMP49gYbqkUfNlgzscyq7d3nk4yUlF"],
  ["P-2242",      0, "Kanoor",                     "23 Acres",                 "see images",               "A-Z Facilities",                    "1G4ZFAHBhCuhqz3mkdVCPcl13nAkAu2rD", "1GMGjA-vrzGaRZ5Xr6kHKNL7AzSOeu72G"],
  ["P-2241",      0, "North Coorg",                "80 Acres",                 "300m from Main Bus Road",  "A-Z Facilities",                    "1FMBhWAPQZ6PqH7XXjcC9GsNZMGrsekPV", "1FWrdVkbCUzX8KuguViJGhvIjEdWhz3ju"],
  ["P-2237",      0, "Virajpet-Gonikoppa",         "40 Acres",                 "5km from NH",              "A-Z Facilities",                    "1ybwrbTQbYTfl8h_ZlAtUSejwmf-TMLFj", "1DJ41Qz_4wo1DQO0UdxIynH57p_YkfM4m"],
  ["P-2234",      0, "Near Kutta",                 "16 Acres",                 "Multiple Access Roads",    "Running Homestay",                  "14cTyV10V2yqQDd6LqAHvGEj3bQX1fBvH", "17fUIldQeNikALzHM1TgmI6WFspQxgqSI"],
    
];



////// MORE PROPERTIES (visible under 'more') //
const db_sold = [
  ["P-2262",      0, "10km from Virajpet",         "5 Acres",                  "1km from Main Bus Road",   "Non-cultivated",                    "113JM-mTH6YBF6KM-TiVKCe_73z6OWk5n", "11N9hZBGy7XsaX2hN6l61lDB_Gb9ex3ZL"],
  ["P-2256",      0, "1km fron NH",                "0.6 Cents",                "Adjacent to River",        "Non-cultivated",                    "1J_kvD9e8scgo2WX4pJITBNj2dutm3C_O", "1JggqnRyAxXezzhc14imLtEXNF-ZcdHaA"],
  ["P-2255",      1, "5km from Gonikoppa",         "17  Acres",                "A to Z facilities",        "Labour Line",                       "1le68acyNKLSvQr0apEQvh94kliCUqh7P", "1G_J5ZNIcicLWkCV6tpSNBQvbXYZSeLD0"],
  ["P-2250",      0, "Near Virajpet",              "12 + 12 Acres",            "see images",               "A-Z Facilities",                    "1KfwhC3wE_7eFXch2lrS1zZ6OmheMPQHR", "1KgTruESP8sibrQZECVjZ80I0_tlNt2wd"],
  ["P-2249",      1, "Kakkabe",                    "27 Acres",                 "Adjacent to River",        "Undeveloped Land",                  "1K-sXpIJdPaVu1fXjI0sTzfx_QYBWun5S", "1K8KjKzp_R7Ji8KJC41qYwr4pzzD7S3Yo"],
  ["P-2245",      0, "Virajpet-Gonikoppa",         "3.5 Acres",                "6km from NH",              "Farm House",                        "1HUe9O3YUO15fmj7HTr9-eIoEiEZlVCuD", "1HZwn212Opsk5-QCZGmVhsrQi6lPg2emg"],
  ["P-2240",      0, "Virajpet-Gonikoppa",         "7 Acres",                  "100m from NH",             "Undeveloped land",                  "1EubenH_o1g_fwxNicESxPx5bNMcbvCRG", "1F3zoVfNu5cNnugnefv6Y_8UoKSyn6C6G"],
  ["P-2239",      0, "Near Pollibata",             "4 Acres",                  "6km from NH",              "Homestay",                          "1DsTrfl7OfJz5uD1U4bzmqPuOgaQBPNvY", "1E_oBgZlQim7jLhlU8K_-aSJkxkN-EpGW"],
  ["P-2238",      0, "Near Kutta",                 "5 Acres",                  "Adjacent to River",        "Homestay",                          "1f5gcdZeHiLQAzhX4NidPlShP6lGBFpsP", "1Dib5kU5XUpPaC0X0YuelPhxBRTgJC6vR"],
  ["P-2235",      0, "Near Siddapur",              "27 Acres",                 "Adjacent to River",        "see image",                         "1cDMxBemNBm_XLHvYpuMpDUZlrY9Zverb", "1vdFu8sfKMl2OGteJG9zp6x4yF2zcylp0"],

];



////// UNPUBLISHED (not visible) //
const db_drafts = [
	null
];





// (do not modify)
const databaseVer = "2.0.0"
document.getElementById("db-update").innerHTML = `Published <em>${currentDate}</em>`





// Info

// Status // 0: for sale,  1: sold,  2: on hold,  3: offer received
