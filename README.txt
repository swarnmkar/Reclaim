RECLAIM — SETUP GUIDE (Phone install via GitHub Pages)
=======================================================

This takes about 5 minutes. You only do it once.
After that: tap the icon on your home screen, done.


WHAT YOU NEED
--------------
- A free GitHub account (github.com)
- Your phone (Android or iPhone)


STEP 1 — Create a GitHub account
----------------------------------
Go to github.com and sign up for a free account if you
don't have one already.


STEP 2 — Create a new repository
----------------------------------
1. Click the green "New" button (or go to github.com/new)
2. Repository name: reclaim  (or any name you like)
3. Set it to Public
4. Leave everything else as default
5. Click "Create repository"


STEP 3 — Upload the app files
-------------------------------
1. On the repository page, click "uploading an existing file"
   (or drag files into the page)
2. Upload ALL files from this folder:
     index.html
     manifest.json
     sw.js
     icon-192.png
     icon-512.png
   (You don't need README.txt or the start scripts)
3. Scroll down, click "Commit changes"


STEP 4 — Enable GitHub Pages
------------------------------
1. Go to your repository's Settings tab
2. Click "Pages" in the left sidebar
3. Under "Source", select: Deploy from a branch
4. Branch: main  |  Folder: / (root)
5. Click Save
6. Wait 1-2 minutes

Your app will be live at:
  https://YOUR-USERNAME.github.io/reclaim


STEP 5 — Install on your phone
--------------------------------
Open that URL on your phone's browser, then:

Android (Chrome):
  Tap the three-dot menu (⋮) → "Add to Home Screen"
  OR Chrome may show a banner at the bottom automatically.

iPhone (Safari):
  Tap the Share button (□↑) → "Add to Home Screen"
  Note: use Safari, not Chrome, for the best iOS experience.

The app icon will appear on your home screen.
Tap it — it opens fullscreen with no browser toolbar,
just like a real app. It also works fully offline.


YOUR DATA
----------
All training data is stored in your phone's browser storage.
It never leaves your device — GitHub only hosts the app code.

Use Export (You tab) to back up your data as a JSON file.
If you ever clear your browser data, use Import to restore it.


UPDATING THE APP IN FUTURE
----------------------------
If you get a new version of the app:
1. Go to your GitHub repository
2. Click on index.html → Edit (pencil icon) → paste new code → Commit
   OR drag-drop the new index.html to replace it
3. Open the app on your phone, pull down to refresh once
