# My Life in Colour

A static, single-page personal journey website ready for GitHub Pages. No build step or installation is needed: open `index.html` locally, or upload these files to a GitHub repository and enable **Settings → Pages → Deploy from a branch**.

## Adding your photos

1. Put photo files inside `assets/photos/` (you can create this folder when you add your first photo).
2. In `index.html`, replace any `src="assets/placeholders/add-photo.svg"` with your photo path, such as `src="assets/photos/childhood-01.jpg"`.
3. Change the nearby `alt` text to describe the image. The preview window will use the new photo automatically.

### Polaroid photos

Polaroid cards have the `<figure class="polaroid ...">` structure. Edit the text inside `<figcaption>` to write the caption visible beneath the photo. You can also change that card’s `data-caption` text, which appears when someone clicks it to open the large preview.

### Simple photos

Simple cards have the `<figure class="simple-photo ...">` structure. Replace the image source only; they deliberately have no caption strip. Change `data-caption` if you want a description in the large preview.

## Adding videos

1. Put your clips in `assets/videos/` using `.mp4` or `.webm` format. For the best GitHub Pages experience, use compressed MP4 files.
2. In the `VIDEO MOMENTS` section of `index.html`, replace `assets/videos/badminton-rally.mp4` or `assets/videos/keyboard-session.mp4` with your filename.
3. Change the text below the video if you want to describe the clip. Native controls provide play, pause, volume, full-screen, and a progress bar automatically.

The HTML has clear all-caps comment dividers for the hero, journey chapters, passions, videos, today, and contact sections. Search for `VIDEO MOMENTS` or `PHOTOS` to jump to the area you want to update.

## Personalising the words

Kawin Hari’s name, 2004 birth year, and sporting and music interests are already included. Search for `hello@example.com` if you want to add your own contact address. You can duplicate any Polaroid or simple photo `<figure>` if you want to add more memories.
