# Editing website content (no coding required)

This guide is for updating what's already on the site — words, numbers,
links, images. If you want to change how a page *looks* or add a whole new
page, that's development work; see the main `README.md` instead.

Every file mentioned below is plain text. You can open and edit any of
them in a basic text editor (even Notepad or TextEdit), as long as you're
careful to keep the punctuation intact. If you're not sure, ask a
developer to review your change before it goes live — that's normal, not
a failure.

## Adding a new news article

1. Go to the `content/news/` folder.
2. Duplicate any existing `.md` file as a starting template.
3. Rename the copy — the filename becomes part of the article's web
   address, so use lowercase words separated by dashes, e.g.
   `new-mobile-clinic-stop-in-yigo.md`.
4. Open it. At the top, between the `---` lines, fill in:

   ```
   ---
   title: "Your headline here"
   date: "2026-08-01"
   image: "/images/news/your-image.jpg"
   excerpt: "One sentence describing the story, shown on the card."
   ---
   ```

5. Below the second `---`, write the article body as plain text.
6. Save the file. That's it — the homepage automatically picks up the 6
   most recent articles by date, newest first. No other file needs to
   change.

**Adding the image:** drop your image file into `public/images/news/` and
use its path (starting with `/images/news/`) as the `image:` value above.
Keep filenames simple — lowercase, no spaces (use dashes instead).

**A note on quotes:** if your title or excerpt itself contains a `"`
character, put a `\` right before it, e.g. `title: "TGF says \"thank
you\" to volunteers"`. If in doubt, avoid quotation marks inside these
fields.

## Updating the impact numbers

Open `content/site-data/stats.json`. Each entry looks like:

```
{ "id": "residents-served", "value": 29815, "label": "Guam residents received services from the Todu Guam Foundation" }
```

Change the `"value"` number for the quarter's new figure. Don't rename
`"id"` — that's just an internal label the code uses, not something
visitors see. Leave the commas between entries in place.

## Updating a program's description

Open `content/site-data/programs.json` and find the program by its
`"title"`. Edit the `"description"` text. Several of these are currently
placeholder copy written to get the layout working — check with the team
about which ones still need real program descriptions.

## Updating footer contact info, links, or social links

Open `content/site-data/footer.json`. It's organized the same way: find
the field by its plain-English key (`"address"`, `"phones"`, `"social"`,
etc.) and edit the value.

## Updating the main navigation menu

Open `content/site-data/nav.json`. Each of the three menus (About Us, Our
Work, Our Community) has a `"links"` list — edit the `"label"` (what
visitors see) or `"href"` (where it goes) for any entry.

## If something breaks

JSON files are picky about punctuation — every `{` needs a matching `}`,
every entry (except the last one in a list) needs a comma after it. If the
site stops working after an edit, the most common cause is a missing or
extra comma near where you were editing. Undo your change, save, and try
again more carefully, or ask a developer to take a look.
