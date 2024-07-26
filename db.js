////// DATE OF LAST UPDATE //
const currentDate = "August, 2024"




////// PROPERTIES //
const db_forSale = [

// STATUS:  0 = For Sale,  1 = Sold,  2 = On Hold,  3 = Offer Received

//["P-0000",      0, "LOCATION",                "AREA",                     "INFO",                     "BUILDINGS",        "FOLDER_ID________________________", "PREVIEW_IMG_ID___________________"],
  
  
  ["P-2256",      0, "1km fron NH",             "0.6 Cents",                "Adjacent to River",        "Undeveloped Land", "1J_kvD9e8scgo2WX4pJITBNj2dutm3C_O", "1JggqnRyAxXezzhc14imLtEXNF-ZcdHaA"],
  ["P-2255",      0, "5km from Gonikoppa",      "17  Acres",                "A to Z facilities",        "Labour Line",      "1le68acyNKLSvQr0apEQvh94kliCUqh7P", "1G_J5ZNIcicLWkCV6tpSNBQvbXYZSeLD0"],
  ["P-2254",      0, "Virajpet-Gonikoppa Road", "12 Acres",                 "Coffee Plantation",        "see image",        "1KX4O3i3slAj1DSLRu-SYj7Aa_DLiSBCo", "1FlKu2M2F7VpioivJzh3RnyjiB9WxNbht"],
  ["P-2252",      0, "South Coorg",             "12700 Sq Ft",              "Contact us for info",      "Furnished",        "11Stj8KlJ2FqviokSW_BUbQGxIZM2qm1e", "1QhxFZyY8-3O0oPCF8bJhK4aF5kG-tkVL"],
  ["P-2251",      0, "Virajpet",                "3 Acres",                  "Near Coorg Golf Club",     "Luxury Villa",     "1LeD5cq2z_O-KyBmKMtb-E6PWwf06dcbL", "1LQ_H5jJvaBjNPGW9Ongk41ivZLTZzfV9"],
  ["P-2250",      0, "Near Virajpet",           "12 + 12 Acres",            "see images",               "A-Z Facilities",   "1KfwhC3wE_7eFXch2lrS1zZ6OmheMPQHR", "1KgTruESP8sibrQZECVjZ80I0_tlNt2wd"],
  ["P-2249",      0, "Kakkabe",                 "27 Acres",                 "Adjacent to River",        "Undeveloped Land", "1K-sXpIJdPaVu1fXjI0sTzfx_QYBWun5S", "1K8KjKzp_R7Ji8KJC41qYwr4pzzD7S3Yo"],
  ["P-2248",      0, "North Coorg",             "125 Acres",                "see images",               "A-Z Facilities",   "1JCWDIr0dv4r68XcPLziUEDVvMml513kB", "1JrTSn9_3d0p6WCsvNnmSCNtWYULLlwe6"],
  ["P-2247",      0, "Near Kakkabe",            "60 Acres",                 "see images",               "A-Z Facilities",   "1IIWkRDtpDvaV3ez_cobCXzTczS6XTcCE", "1Iv0hr8kC0K2lMCKsHqMvMhGohEBzfCZJ"],
  ["P-2245",      0, "Virajpet-Gonikoppa",      "3.5 Acres",                "6km from NH",              "Farm House",       "1HUe9O3YUO15fmj7HTr9-eIoEiEZlVCuD", "1HUgp_gCSLbGFDcvHP_ZYOUUQ-wBcujcA"],
  ["P-2244",      0, "Madikeri-Murnad",         "1.75 Acres",               "Large Building",           "Premium Homestay", "1GrVTlKo9HPk8ARafweBgFhVRrBDK-NO2", "1HEzS3GL56XIPFf_05NsIy-jwoNpwNvv7"],
  ["P-2243",      0, "Near Srimangala",         "63 Acres",                 "see images",               "A-Z Facilities",   "1Ga8LEthi49STMsZMlS4j_weNjXawarLM", "1GpsMP49gYbqkUfNlgzscyq7d3nk4yUlF"],
  ["P-2242",      0, "Kanoor",                  "23 Acres",                 "see images",               "A-Z Facilities",   "1G4ZFAHBhCuhqz3mkdVCPcl13nAkAu2rD", "1GMGjA-vrzGaRZ5Xr6kHKNL7AzSOeu72G"],
  ["P-2241",      0, "North Coorg",             "80 Acres",                 "300m from Main Bus Road",  "A-Z Facilities",   "1FMBhWAPQZ6PqH7XXjcC9GsNZMGrsekPV", "1FWrdVkbCUzX8KuguViJGhvIjEdWhz3ju"],
  ["P-2240",      0, "Virajpet-Gonikoppa",      "7 Acres",                  "100m from NH",             "Undeveloped Land", "1EubenH_o1g_fwxNicESxPx5bNMcbvCRG", "1F3zoVfNu5cNnugnefv6Y_8UoKSyn6C6G"],
  ["P-2239",      0, "Near Pollibata",          "4 Acres",                  "6km from NH",              "Homestay",         "1DsTrfl7OfJz5uD1U4bzmqPuOgaQBPNvY", "1E_oBgZlQim7jLhlU8K_-aSJkxkN-EpGW"],
  ["P-2238",      0, "Near Kutta",              "5 Acres",                  "Adjacent to River",        "Homestay",         "1f5gcdZeHiLQAzhX4NidPlShP6lGBFpsP", "1Dib5kU5XUpPaC0X0YuelPhxBRTgJC6vR"],
  ["P-2237",      0, "Virajpet-Gonikoppa",      "47 Acres",                 "5km from NH",              "A-Z Facilities",   "1ybwrbTQbYTfl8h_ZlAtUSejwmf-TMLFj", "1DJ41Qz_4wo1DQO0UdxIynH57p_YkfM4m"],
  ["P-2236",      0, "Virajpet-Murnad",         "14 Acres",                 "Adjacent to River, Gated", "Undeveloped Land", "1InAOSXRqRxTMdUO_y9CvjpmR1mo_SbxJ", "1WXR1RmGtr8DoFnBFvze63z4qstQUOSJr"],
  ["P-2235",      0, "Near Siddapur",           "27 Acres",                 "Adjacent to River",        "see image",        "1cDMxBemNBm_XLHvYpuMpDUZlrY9Zverb", "1vdFu8sfKMl2OGteJG9zp6x4yF2zcylp0"],
  ["P-2234",      0, "Near Kutta",              "16 Acres",                 "Multiple Access Roads",    "Running Homestay", "14cTyV10V2yqQDd6LqAHvGEj3bQX1fBvH", "17fUIldQeNikALzHM1TgmI6WFspQxgqSI"],
  ["P-2233",      0, "Virajpet-Gonikoppa",      "14 Acres",                 "Small Lake",               "Undeveloped Land", "1XfTFf-uzSrLDB9q6CFj5eeIX-PlfiSZi", "1bTvcI_HlVkfSUNIo0U6tRclx3SWoWZwp"],
  ["P-2232",      0, "Virajpet-Gonikoppa",      "12 Acres",                 "2 Public Access Roads",    "Undeveloped Land", "10CsNs_1LiaKob_XDShyXROHpQisXFH18", "1ZQakFWQjrKofeojt9DGuw9hPBxU5D2WK"],
  ["P-2231",      0, "Virajpet-Madikeri",       "18.5 Acres",               "Suitable for a resort",    "Undeveloped Land", "1_utUHljVTMMiRP18O0du-VZ9hhIFywmx", "1WeeHifFYgrToDQ1Cn-HUXOuwVg4zAzLn"],
    
];


////// MORE PROPERTIES (visible under 'more') //
const db_sold = [
  null
];




// (do not modify)
const databaseVer = "2.0.0"
document.getElementById("db-update").innerHTML = `Published <em>${currentDate}</em>`
