# Game Hub

Game Hub is a React application for browsing video games with data from the RAWG API. It includes a responsive layout, genre browsing on large screens, loading states, critic scores, platform icons, and a dark mode toggle.

## Features

- Browse games from the RAWG API
- View game cards with artwork, platform icons, and critic scores
- Browse genres from a sidebar on large screens
- Responsive layout built with Chakra UI
- Loading skeletons and genre loading feedback
- Dark mode toggle in the navigation bar

## Tech Stack

- React 19
- TypeScript
- Vite
- Chakra UI
- Axios
- React Icons

## Project Structure

```text
src/
  components/
    game-components/
    ui/
  hooks/
  services/
  assets/
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ErnestoSiemba/Game-Hub.git
```

2. Move into the project directory:

```bash
cd Game-Hub
```

3. Install dependencies:

```bash
npm install
```

4. Create a local environment file:

```bash
cp .env.example .env
```

5. Open `.env` and add your RAWG API key:

```bash
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

6. Start the development server:

```bash
npm run dev
```

7. Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Data Source

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs).

The app expects a `VITE_RAWG_API_KEY` environment variable in a local `.env` file.

## Deployment Notes

Before publishing or sharing broadly, consider:

- moving the API key into a `.env` file and loading it with Vite environment variables
- adding filtering, sorting, or search support
- adding error handling for failed API requests

## License

This project is for educational and portfolio use unless you add a different license.
