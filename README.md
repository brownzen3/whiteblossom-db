# Property Database for [whiteblossom.info](https://whiteblossom.info)
⚠ _Information within this repository is public - upload data with caution._
<br><br>

## Upload A New Property

0) Before opening the database, upload all of the property's photos into a new folder in [Google Drive](drive.google.com). Name the folder `P`, followed by the next available 4-digit number (i.e. `P2260`).

Then, follow these ten steps:

1) Open `db.js` (above).

2) Select the pencil icon (top-right corner) to edit the file.

3) Copy the _Example Property Entry_:<br>`["P-0000",      0, "LOCATION",                "AREA",                     "INFO",                     "BUILDINGS",        "FOLDER_ID________________________", "PREVIEW_IMG_ID___________________"],`.

4) Paste this at the top of the array (directly above the most recent property).

5) Fill in all of the fields, making sure that the text is inside of the `""` (i.e. `"P-2260"`)
   * `P_NUMBER`: The property number (i.e. P-2260)
   * `0`: The current state of the property, use `0` to display as _For Sale_
   * `LOCATION`, `AREA`, `INFO`, and `BUILDINGS` appear in the property listing
   * `FOLDER_ID` and `PREVIEW_IMG_ID` will be explained below:

6) The `FOLDER_ID` allows clients to see all of the property images in the Google Drive folder. Go to the property folder in [Google Drive](drive.google.com) (i.e. 📁 P2260). Once inside the folder, look at the URL bar at the top of the screen (`drive.google.com/drive/folders/[FOLDER_ID]`). Copy the folder ID (shown at the end of the URL), and paste it into the `FOLDER_ID` field, in the file.

7) The `PREVIEW_IMG_ID` is the image that clients see next to the property listing. First, go back to the open Google Drive folder (i.e. 📁 P2260). Then locate the image that you want for the property listing. Click on the three dots in the corner of the image and select `Open in new window`. Locate the image ID from the URL bar (`https://drive.google.com/file/d/[PREVIEW_IMG_ID]/view`).

8) Scroll to the top of the file, and change the `DATE OF LAST UPDATE` to the current month (i.e. `August, 2024`).

9) Double check all of the property information, then click on `Commit Changes...` in the top-right corner.

10) Include the current month in the commit message, then click `Commit changes`.

_Changes will take **upto 10 mins** to be reflected on the website._
<br><br>
