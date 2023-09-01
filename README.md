# Databases for [whiteblossom.info](https://whiteblossom.info)
_Public JavaScript Databases & Website Control_
<br>

All information available in this repo is also publicly visible online.
<br><br>

**How To Upload A New Property** _(with db v1.3+)_:<br><br>
0) Before opening the database, make sure that you have uploaded all of the property's photos into a new folder in [Google Drive](drive.google.com). The folder name should be something like `P2260` (the next available number).<br>Once done, follow these steps:

1) Click on `db.js` to open the database.

2) Select the pencil icon (✏️) to edit the db.

3) Scroll to the `Example Property Entry` and copy the template, which looks like `["P_NUMBER", 0 ... "PREVIEW_URL"],`.
_(NOTE: Do not copy the // at the start of the line)_

4) Paste the template at the bottom of the db (in between `PUT NEW PROPERTIES HERE:` and `DO NOT EDIT BELOW THIS LINE`).

5) Fill in all of the fields, making sure that the text is inside of the `"` (i.e. `"Virajpet"`)
   * `P_NUMBER`: The property number (i.e. P-2260)
   * `0`: The state of the property (0 indicates 'For Sale')
   * `LOCATION`, `AREA`, `INFO`, and `BUILDINGS` appear in the property listing
   * `FOLDER_ID` and `PREVIEW_URL` will be explained below:

6) The `FOLDER_ID` allows clients to view ALL property images. To find it, go to the property folder in [Google Drive](drive.google.com) (i.e. 📁 P-2260). Once inside the folder, look at the URL bar at the top (`drive.google.com/drive/folders/[FOLDER_ID]`). Copy the folder ID (shown at the end of the URL), and paste it into the `FOLDER_ID` field, in the db.

7) The `PREVIEW_URL` is the image that clients see next to the property listing. First, go back to the open Google Drive folder (i.e. 📁 P-2260). Then locate the image that you want for the property listing. Click on the three dots in the corner of the image and select `Share`, then `Share`. Under `General Access`, change `Restricted` to `Anyone with the link`. Then click `Copy link`.

8) Now go to the [Github Image](labnol.org/embed/google/drive) bookmark, and paste the copied image URL into the field (make sure to delete the placeholder URL first). Click `I'm not a robot`, then `Generate Embed Code`. Copy the first URL (`Direct Image Link`), and paste it into the `PREVIEW_URL` field, in the db.

9) Scroll to the very top of the file, and change the `DATE OF LAST UPDATE` to the current date.

10) Now, double check all of the property info, then click on `Commit Changes...` in the top-right corner.

11) Add any notes under the description (this will NOT be shown on the website) and then select `Commit changes`.

12) Done! Changes will take **upto 10 mins** to be reflected on the website. If it takes longer, clear your browser's cache.
<br>