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
The long-form page for a single Project, describing what it is, what it does, how it is built, and what was learned. Only some Projects have one, and one exists per Language.
_Avoid_: Detail page, project detail, project page

**Case Study content module**:
The long-form body of one Case Study in one Language: a component that renders the whole page below the hero, and the section navigation that labels its own sections. One exists per Language, whole rather than assembled from fragments; only the section identifiers are shared between them.
_Avoid_: Case study body, content file, template

**Section navigation**:
The sticky list of a Case Study's sections, which tracks the section being read and links to its anchor. Its identifiers are the same in every Language and its labels are written anew in each.
_Avoid_: Table of contents, in-page nav, section list

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
One of the languages the site is published in. English and Czech are published; English is the one whose URLs carry no prefix, and every other Language lives under its own prefix at otherwise identical paths.
_Avoid_: Locale, translation, i18n

**Language segment**:
The part of a URL that names the Language, and the route segment every page sits beneath. English URLs carry no Language segment; a rewrite supplies it.
_Avoid_: Locale segment, lang param

**Language Picker**:
The control in the header that switches the Language being read. It shows which Language that is, and leads to the same page in the other one, or to that Language's home page when the current page has no counterpart.
_Avoid_: Language switcher, locale toggle, language selector

**Dictionary**:
The interface text of one Language: navigation, section headings, button labels, the homepage's own prose, and the accessible names that are never shown. A Project's own words are Project Copy, and a Case Study's are its content module, so neither is here.
_Avoid_: Translations, strings, messages, i18n file

**Project Copy**:
The half of a Project's content that is written anew in each Language: its description, its Project Dialog content, and the title, pitch and description of its Case Study. Everything else about a Project — its screenshot, its repositories, its Live URL and its Tech List — is the same in every Language.
_Avoid_: Translation, project strings, localised content

### Products

**flexiday**:
The vacation and day-off management product Daniel runs. Written lowercase in visitor-facing copy, matching its wordmark; its repositories and domain use the spelling flexi-day.
_Avoid_: Flexi Day, FlexiDay, Flexi-Day
