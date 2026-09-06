# Portfolio

Daniel Hrynusiw's personal homepage: a single-page portfolio that presents projects, experience and contact details, plus long-form pages for selected projects.

## Language

### Projects

**Project**:
A piece of work Daniel built and chose to show on the homepage. Every Project has a title, a screenshot, a source repository and a tech list; some also have a live URL and a Case Study.
_Avoid_: Work, item, portfolio entry

**Project Card**:
The tile for one Project in the Projects section of the homepage. Opens the Project Dialog.
_Avoid_: Tile, thumbnail, project box

**Project Dialog**:
The overlay opened from a Project Card. Holds a short description of the Project and, when one exists, the call to action into its Case Study.
_Avoid_: Modal, popup, project details

**Case Study**:
The long-form page for a single Project, describing what it is, what it does, how it is built, and what was learned. Only some Projects have one.
_Avoid_: Detail page, project detail, project page

**Lightbox**:
The overlay that shows one Case Study screenshot enlarged, opened by clicking the screenshot.
_Avoid_: Modal, zoom view, image viewer

**Related Repository**:
One of possibly several source repositories that belong to a Project, each with a short role label such as web app, backend, emails or workspace.
_Avoid_: Extra repo, secondary repo, code link

**Live URL**:
The public address where a Project can be used, when it is deployed.
_Avoid_: Demo link, project link, preview

**Tech List**:
The technologies shown for a Project, joined into one line on the Project Card and grouped by Related Repository in a Case Study.
_Avoid_: Stack tags, badges, skills

### Languages

**Language**:
One of the languages the site is published in. English is published today, and is the one whose URLs carry no prefix; every other Language lives under its own prefix at otherwise identical paths.
_Avoid_: Locale, translation, i18n

**Language segment**:
The part of a URL that names the Language, and the route segment every page sits beneath. English URLs carry no Language segment; a rewrite supplies it.
_Avoid_: Locale segment, lang param

**Project Copy**:
The half of a Project's content that is written anew in each Language: its description, its Project Dialog content, and the title, pitch and description of its Case Study. Everything else about a Project — its screenshot, its repositories, its Live URL and its Tech List — is the same in every Language.
_Avoid_: Translation, project strings, localised content

### Products

**flexiday**:
The vacation and day-off management product Daniel runs. Written lowercase in visitor-facing copy, matching its wordmark; its repositories and domain use the spelling flexi-day.
_Avoid_: Flexi Day, FlexiDay, Flexi-Day
