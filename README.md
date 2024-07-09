# Astro Starter Template with Keystatic CMS, Tailwind CSS, and DaisyUI

Welcome to your new project! This starter template is built using Astro, Keystatic CMS, Tailwind CSS, and DaisyUI, offering a powerful yet simple foundation for creating fast and beautiful static sites.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Astro**: Build fast, modern websites with Astro's powerful static site generator.
- **Keystatic CMS**: Manage your site's content with an easy-to-use CMS.
- **Tailwind CSS**: Rapidly build and style your site with Tailwind CSS.
- **DaisyUI**: Use beautiful, pre-designed components with DaisyUI.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [yarn](https://yarnpkg.com/) (v1.x or later)


### Install Dependencies

Using npm:

```sh
npm install
```

Or using yarn:

```sh
yarn install
```

## Usage

### Development

To start the development server, run:

```sh
npm run dev
```

Or with yarn:

```sh
yarn dev
```

Admin UI: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)

Homepage: [http://localhost:4321](http://localhost:4321)

### Build

```sh
npm run build
```

Or with yarn:

```sh
yarn build
```

### Preview

To preview the production build locally, run:

```sh
npm run preview
```

Or with yarn:

```sh
yarn preview
```

## Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and styles etc
│   ├── cms/                # Schema for Keystatic content
│   ├── components/         # Astro components
│   ├── content/            # Astro content managed by Keystatic
│   ├── layouts/            # Astro layouts
│   ├── pages/              # Astro pages
├── keystatic.config.ts     # Keystatic CMS configuration
├── keystatic.page.ts       # Keystatic CMS configuration for Singleton pages
├── tailwind.config.js      # Tailwind CSS configuration
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

