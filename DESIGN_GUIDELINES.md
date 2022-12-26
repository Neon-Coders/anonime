# Design Guidelines

This document aims to specify and define the rules and patterns to follow when implementing and developing new features and components for Anonime.

>This is a summary. For a more extensive version, components and UI Design, visit the publically available **[Figma file](https://www.figma.com/file/cJD8FOgmXezFVvfPAWiB3B/Anonime?node-id=803%3A60&t=K3UZkSjqW1S9jhnZ-0/)**.

## Table of contents

- [Design Guidelines](#design-guidelines)
  - [Table of contents](#table-of-contents)
  - [Color scheme](#color-scheme)
    - [Gray shades](#gray-shades)
  - [Typography](#typography)
    - [Web Embed](#web-embed)
  - [Spacing](#spacing)

## Color scheme

- **Accent**: `#192026`
- **Pure White**: `#FFFFFF`

### Gray shades

- **Gray 300**: `#868686`

### Grayish blue

- **Very dark grayish blue.**: `#374151`

## Typography

The font chosen for this project is `Poppins`.

Poppins is a free font available on Google Fonts. Clean and bold headings, readable paragraph text and an overall versatile font.

We'll be using two of its styles:

- Poppins Light (`300`)
- Poppins Medium (`500`)
- Poppins SemiBold (`600`)

### Web Embed

HTML's `link` method

```html
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet">
```

CSS/SCSS `@import`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

```

CSS Rules

```scss
font-family: "poppins", sans-serif;

// Regular
font-weight: 500;

// Bold
font-weight: 700;
```

## Spacing

This is an approximation. On some circumstances other values will be used to ensure readability, consistency and visual balance, so make sure to also check the UI Design and the spacing used there.
