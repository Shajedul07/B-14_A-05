# Development Stack Builder

A responsive React + TypeScript project that lets users explore different development technologies and build their own technology stack.

## 🚀 Live Features

- Responsive navigation bar
- Hero section
- Technology cards loaded from JSON data
- 12 technology options
- Add technologies to "Your Stack"
- Remove individual technologies
- Remove all selected technologies
- Responsive 75% / 25% technology-selection layout
- TypeScript type definitions
- React `use()` and `Suspense` for loading external JSON data
- Tailwind CSS styling
- React Icons

## 🛠️ Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- DaisyUI
- React Hot Toast

## 📁 Project Structure

```text
src/
├── App.tsx
├── App.css
├── index.css
├── main.tsx
│
├── assets/
│   ├── banner-stack.png
│   └── logo-text.png
│
├── Components/
│   ├── Display_card/
│   │   └── displayCard.tsx
│   ├── Hero.tsx
│   ├── List.tsx
│   ├── Nav.tsx
│   └── explore_the_technologies.tsx
│
└── Types/
    └── data_promise_types.tsx

public/
└── data.json
```

## 📊 Data

Technology information is stored in:


```text
public/data.json
```

Each technology contains:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
  "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

The project currently contains 12 technology records.

## 🧩 Main Components

### `App.tsx`

The root component.

It:

- Fetches technology data from `/data.json`
- Uses React `Suspense`
- Renders the navigation
- Renders the hero section
- Renders the technology explorer

### `Nav.tsx`

Contains the responsive navigation.

On larger screens it displays:

- Home
- Technologies
- Projects
- About
- Contact
- Sign in
- Sign up


### `Hero.tsx`

Displays the main landing-page hero section with:

- Main heading
- Description
- Hero image
- Explore Technologies button
- Learn More button

### `explore_the_technologies.tsx`

Displays the technology-selection area.

The left side contains technology cards, while the right side contains the user's selected stack.

This component is also responsible for:

- Selected-card state
- Add functionality
- Remove functionality
- Remove-all functionality

### `displayCard.tsx`

Displays an individual technology card.

Each card contains:

- Technology icon
- Name
- Description
- Category
- Rating
- Difficulty
- Badge
- Add to Stack button

### `data_promise_types.tsx`

Contains the TypeScript interface for technology data.

```ts
export interface cardType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
```

## 🧠 React Concepts Practiced

This project is designed to practice important React concepts:

- Components
- Props
- TypeScript interfaces
- `use()`
- `useState()`
- `map()`
- `filter()`
- Event handling
- Conditional rendering
- Array state management
- `Suspense`
- JSON data fetching
- Responsive Tailwind CSS

## 📱 Responsive Layout

The project uses Tailwind CSS responsive utilities.

### Desktop

```text
┌───────────────────────────────────────────┐
│                 Navbar                    │
├──────────────────────────────┬────────────┤
│                              │            │
│       Technology Cards       │ Your Stack │
│                              │            │
│            75%               │    25%     │
└──────────────────────────────┴────────────┘
```

### Mobile

```text
┌────────────────────────────┐
│ Logo              ☰        │
├────────────────────────────┤
│                            │
│      Mobile Menu           │
│                            │
└────────────────────────────┘
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shajedulhaquekhan07/B-14_A-05.git
```

Go into the project:

```bash
cd B-14_A-05
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in the terminal.

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔮 Possible Future Improvements

- Prevent duplicate technologies from being added
- Show selected technology count
- Show total selected items
- Add search functionality
- Add category filtering
- Add technology details modal
- Add toast notifications
- Improve mobile card layout
- Add dark mode
- Add authentication
- Connect the project to a backend API

## 👨‍💻 Author

**Shajedul Haque Khan**

Built as a React + TypeScript learning project.
