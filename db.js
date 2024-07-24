// DATE OF LAST UPDATE
const currentDate = "July 2024"


const db_forSale = [
// Example Property Entry (copy and paste below - do NOT copy the //):
//["P_NUMBER", 0 , "LOCATION", "AREA", "INFO", "BUILDINGS", "FOLDER_ID", "PREVIEW_URL"],
  
// PUT NEW PROPERTIES HERE:
["P-2257", 0 , "5km from NH", "0.60 cents", "River Side", "Non Cultivated", "1JtkjpD9uMTKNsFobHkTGX2Txn9gwCzEk", "https://drive.google.com/file/d/1Jvl5fNEilgPiojkFjtHFlRhI1khZFM-q/view?usp=sharing"],
["P-2254", 0 , "Virajpet-Gonikoppa Road", "12 Acres", "Plantation with a nice view", "coffee plantation", "1KX4O3i3slAj1DSLRu-SYj7Aa_DLiSBCo", "https://lh3.googleusercontent.com/drive-viewer/AITFw-zVJDLYM-R4MMhQLL7HQUXZE10t-p5zR0bH1xaMnb-4O-dYkQ6lUafvHUgZBDUuaC7d6Mk8Ec5NK5nrprjV8h9SFEGtBQ=s1600"],
["P-2255", 0 , "5KM from gonikoppa", "17  Acers", "Ato Z facilities", "labour line", "1le68acyNKLSvQr0apEQvh94kliCUqh7P", "https://lh3.googleusercontent.com/drive-viewer/AITFw-zMTkA-c_TsYhWtB3i4R8fqpQLbzAQuoA5E7YSUIaqIqFY6VPmOTINnqJMxAclh-RzaTMZwSGpcdpAM9HpPLWafVWbzhw=s1600"],
["P-2256", 0 , "1KM fron NH", "0.60 Cents", "River side", "Under developed", "1J_kvD9e8scgo2WX4pJITBNj2dutm3C_O", "https://lh3.googleusercontent.com/drive-viewer/AITFw-xvTKhWq4NaasuuZP-8CUQlsNpxtdU5weYQ1cJt4YugEfqxkS_jZnWrFJqFl49FrCJCwezcG1abYPPY45PclkSaNlYigQ=s1600 "],                                  

  

// Old properties (still visible online):
["P-2231", 0 , "Virajpet-Madikeri", "18.5 Acres", "Suitable for a resort/homestay", "Undeveloped Land", "1_utUHljVTMMiRP18O0du-VZ9hhIFywmx", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yThk4HbpkZX77I6kDcPD9KPL6dpkP7bbVzk9MnA8SWfGKmZxfISK7r1jAUuxLzyYRysF3KfDpGsUOdDgMxNIbRLQlgXQ=s1600"],
["P-2232", 0 , "Virajpet-Gonikoppa", "12 Acres", "2 Public Access Roads", "Undeveloped Land", "10CsNs_1LiaKob_XDShyXROHpQisXFH18", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wnWmRgP02jcvOJ5MDIS-MLIbdwuhSrUqEN05gqU5pBc75Eb7-yHvu8nPrhDjVKFltq6axLjmI-8VxT4AVMYuyJ4uUyqQ=s1600"],
["P-2233", 0 , "Virajpet-Gonikoppa", "14 Acres", "Small Lake", "Undeveloped Land", "1XfTFf-uzSrLDB9q6CFj5eeIX-PlfiSZi", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wKcS4IlYGbOlgY7cF1X_TgYqlpT_70ej-0ULwlCyyN9WEv9DfUsy8MFqjKQp65Z_OO08zUlwHeo0mBzcOZXFhrwL_0Rw=s1600"],
["P-2234", 0 , "Near Kutta", "16 Acres", "Multiple Access Roads", "Running Homestay", "14cTyV10V2yqQDd6LqAHvGEj3bQX1fBvH", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yS4rwgRCFO614elY3k2_aV3dJbc69MwPqLrzSjMpgVdWr9C6pXli9goF3HX3EOClMP8xiQ-OGAP1-8Wrc1-Hvn26pZAA=s1600"],
["P-2235", 0 , "Near Siddapur", "27 Acres", "Adjacent to River", "See Picture", "1cDMxBemNBm_XLHvYpuMpDUZlrY9Zverb", "https://lh3.googleusercontent.com/drive-viewer/AITFw-zLXloFFNclV6avsFPBC1OzlbWRsHPwF8ra5ctz8nBQfX4wf2Dk3cVP_I6MFXtgQW3JtsAhoh95CTRzWv_RkYEzGzvE1w=s1600"],
["P-2236", 0 , "Virajpet-Murnad", "14 Acres", "Adjacent to River, Gated", "Undeveloped Land", "1InAOSXRqRxTMdUO_y9CvjpmR1mo_SbxJ", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wBVy_xWR83IX-9sGgEotDKCDFLGeSMnvueHV5n-YxqpZ0w3XfNDruU8wENx8WsxSIpLf7GvPJ3A2pqiiVRkyBfIiMBGg=s1600"],
["P-2237", 0 , "Virajpet-Gonikoppa", "47 Acres", "5km from NH", "A-Z Facilities", "1ybwrbTQbYTfl8h_ZlAtUSejwmf-TMLFj", "https://lh3.googleusercontent.com/drive-viewer/AITFw-zbGRzaLVu-M-PcL5tNJDl1RbVxRoAWcqeoFKdpzJfuCCjfVh1Nhu3_12J8Ta8zu8Zb2Cr7Z3kzVx_FhIx-HRb8P7D9UQ=s1600"],
["P-2238", 0 , "Near Kutta", "5 Acres", "Adjacent to River", "Homestay", "1f5gcdZeHiLQAzhX4NidPlShP6lGBFpsP", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wKEu3qja0Az91l0gnvAgMmYX0fWO-0Sb_XK6QGihhQGHG0LTsdC1r9WmfQYpXo1ahiU7bbIZo8bI_bXjw9cFc9dl8Alw=s1600"],
["P-2239", 0 , "Near Pollibata", "4 Acres", "6km from NH", "Homestay", "1DsTrfl7OfJz5uD1U4bzmqPuOgaQBPNvY", "https://lh3.googleusercontent.com/drive-viewer/AITFw-ws5PVt1005GALJDCCpVNhLpjc-oS12lZiiPjlNyx3gZHuNVOVype17G59BaUmrFmp12kpYAVCpRlq-DOCYNqliXVKcpA=s1600"],
["P-2240", 0 , "Virajpet-Gonikoppa", "7 Acres", "100m from NH", "Undeveloped Land", "1EubenH_o1g_fwxNicESxPx5bNMcbvCRG", "https://lh3.googleusercontent.com/drive-viewer/AITFw-xvRJEOfT5iZsV72fK0SklqmPw24u3p4_z1jDmyzndvYwJo6x6gWPqZrSLxkzyb6Vkd0TBMMOMHXBImsMZSIDe_kQMO=s1600"],
["P-2241", 0 , "North Coorg", "80 Acres", "300m from Main Bus Road", "A-Z Facilities", "1FMBhWAPQZ6PqH7XXjcC9GsNZMGrsekPV", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yeeqzaatUDlxycwlrfei82o5lZuSORU4q2N5gFxT0Sn3HtRYgdDEgtQevy-LOZocCYGIdaZ-ZZ5DF9OEBj9xsnust9FA=s1600"],
["P-2242", 0 , "Kanoor", "23 Acres", "See Images", "A-Z Facilities", "1G4ZFAHBhCuhqz3mkdVCPcl13nAkAu2rD", "https://lh3.googleusercontent.com/drive-viewer/AITFw-xJJOKg6KZ3ok_iGiO-40Kg3frXP67WMhamkWJJhMMCkCNeaWPIonTJVqHF27WTFAv4v_nbO6c920KCvzxE1a3_9XHc=s1600"],
["P-2243", 0 , "Near Srimangala", "63 Acres", "See Images", "A-Z Facilities", "1Ga8LEthi49STMsZMlS4j_weNjXawarLM", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yGFT5C1CIjLRkkmbO2uhQ4fRdwlgtV-0xF78GqgbXHeb5m-Y3xSryFfoR_vOuglpmRIzbwGzEchcudK440LccScAqVFw=s1600"],
["P-2244", 0 , "Madikeri-Murnad", "1.75 Acres", "Large Building", "Premium Homestay", "1GrVTlKo9HPk8ARafweBgFhVRrBDK-NO2", "https://lh3.googleusercontent.com/drive-viewer/AITFw-w1P275ByZYiF0vWLWD3FG-CiSZiG_SXlQKVmp3CC6pLJ9Abh91YRbkY5jNBAym1w8KUEITsOsBnARVVpctY73TcFep=s1600"],
["P-2245", 0 , "Virajpet-Gonikoppa", "3.5 Acres", "6km from NH", "Farm House", "1HUe9O3YUO15fmj7HTr9-eIoEiEZlVCuD", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wLQzbWk9hHGTQfWPrD25szxwcoGaJrxeJBSrRWr0igpDycRtWfNycceSoFYsH5n37yuS3lRo7DIJcOSmRZ6fpO_IPZ=s1600"],
["P-2247", 0 , "Near Kakkabe, North Coorg", "60 Acres", "See images", "A-Z Facilities", "1IIWkRDtpDvaV3ez_cobCXzTczS6XTcCE", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yYY9bhnJxC11uTeatynbieWy0k_PEvhzTfIhl09sMrwxfIzCZ1uHXMqRiRg9jSHiZ1YtLNN7LVH_ocJMQ9dhiOJ42iMg=s1600"],
["P-2248", 0 , "North Coorg", "125 Acres", "See images", "A-Z Facilities", "1JCWDIr0dv4r68XcPLziUEDVvMml513kB", "https://lh3.googleusercontent.com/drive-viewer/AITFw-yhh3YIWEJRGc5gWBBGI5t0cDFpzox5yoCxxAuUjlBiuY-GLfuWowk99eIlJ8ZjfRLnXA4ES8QYjyaX3I-K_sX3nqzpaw=s1600"],
["P-2249", 0 , "Kakkabe", "27 Acres", "Adjacent to River", "Undeveloped Land", "1K-sXpIJdPaVu1fXjI0sTzfx_QYBWun5S", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wvA6kaJyMosfGM0nWoV3WcbjfY6JWc_vZD5kxkkp-GuPycbHgT500WHK2rf-0gRS_l0VS9c-8NHdk5cWGgGdSfIWFp=s2560"],
["P-2250", 0 , "Near Virajpet", "12 + 12 Acres", "See Images", "A-Z Facilities", "1KfwhC3wE_7eFXch2lrS1zZ6OmheMPQHR", "https://lh3.googleusercontent.com/drive-viewer/AITFw-wggkMMoe2jDR51znDv9Bs13Oza8mhA1Vv9ltN3Qf2mpGNoxtgsI8mm-SuPB22AdgOlBWXY9NnxEE9EJl4HLG0W7yiK5w=s1600"],
["P-2251", 0 , "Virajpet", "3 Acres", "Near Coorg Golf Club", "Luxury Villa", "1LeD5cq2z_O-KyBmKMtb-E6PWwf06dcbL", "https://lh3.googleusercontent.com/drive-viewer/AITFw-zxg4PcrRX7j_jTuhXE4rjauy1PlQrF-AxKroHuvvbZmHLu4dY4cxnzanOQHu3fNevm3rSo9IV2NaHoMRdifj5iFRg2hg=s1600"],
["P-2252", 0 , "South Coorg", "12700 Sq Ft", "Contact us for more info", "Furnished", "11Stj8KlJ2FqviokSW_BUbQGxIZM2qm1e", "https://lh3.googleusercontent.com/drive-viewer/AITFw-xymVQVHSTQO7nJknFVma63HRyj-8yH_FSZ2DnEQeH9JiRzbZCgbQZawgiP-SbK-QlJtiHTCrxlEirpH6k_GSHXJeonDQ=s2560"],
];



// DB VERSION
const databaseVer = "1.3 (s)"

const db_sold = [
null
];

document.getElementById("db-update").innerHTML = "Published <b>" + currentDate + "</b>"
