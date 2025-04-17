# FLOAT Concept Explorer

A visual knowledge exploration tool for the FLOAT (Fractal Linked Ontological Analysis Tool) system.

![FLOAT Concept Explorer Screenshot](/public/images/float-concept-explorer-screenshot.png)

## Overview

FLOAT Concept Explorer is a web application that allows users to visualize and explore conceptual relationships using different expansion patterns. It provides an interactive interface for mapping knowledge ecosystems, exploring semantic connections, and discovering emergent patterns within your knowledge base.

## Features

- **Five Expansion Patterns**: Choose from different methods to explore your knowledge:
  - **Concept-Led Expansion**: Start with a single concept and expand semantically
  - **Note-Led Expansion**: Parse metadata, tags, and themes from existing notes
  - **Chat-Led Echo Bloom**: Distill symbolic seed phrases from chat history
  - **Sigil Seeding**: Use sigil filters to highlight latent themes
  - **Meta-Path Traversal**: Identify connections between floatlogs, sigils, and tags

- **Interactive Visualization**: Explore concept maps with an interactive graph visualization
- **Detailed Node Information**: View comprehensive details about each node, including metadata, tags, and connections
- **Sigil System Integration**: Filter and organize concepts using the FLOAT sigil system

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/float-concept-explorer.git
   cd float-concept-explorer
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Select an Expansion Pattern**: Choose one of the five expansion patterns based on your exploration needs.

2. **Provide a Seed**: Depending on the selected pattern, enter a concept, note reference, chat fragment, or floatlog ID. For Sigil Seeding, select a sigil filter.

3. **Explore**: Click the "Explore" button to generate and visualize the concept map.

4. **Interact with the Map**: Click on nodes to view detailed information about each concept, note, floatlog, doctrine, or ritual.

5. **Reset**: Click the "Reset" button to start a new exploration.

## Project Structure

\`\`\`
float-concept-explorer/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── concept-details.tsx # Node details display
│   ├── concept-explorer.tsx # Main explorer component
│   ├── concept-input.tsx   # Input for seed concepts
│   ├── concept-map.tsx     # Graph visualization
│   ├── expansion-pattern-selector.tsx # Pattern selection
│   ├── float-header.tsx    # Application header
│   ├── sigil-selector.tsx  # Sigil filter selection
│   └── ui/                 # UI components (shadcn/ui)
├── lib/                    # Utility functions
│   ├── concept-generator.ts # Mock data generation
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   └── images/             # Images and icons
├── types/                  # TypeScript type definitions
│   ├── concept-node.ts     # Node and connection types
│   └── expansion-patterns.ts # Pattern type definitions
├── README.md               # Project documentation
└── package.json            # Project dependencies
\`\`\`

## Customization

### Adding Real Data

To connect the FLOAT Concept Explorer to your actual knowledge base:

1. Modify the `lib/concept-generator.ts` file to fetch data from your API or database
2. Update the node and connection types in `types/concept-node.ts` if needed
3. Customize the visualization in `components/concept-map.tsx` to match your data structure

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the theme in `tailwind.config.ts`
2. Updating global styles in `app/globals.css`
3. Adjusting component-specific styles in their respective files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by knowledge management systems and concept mapping tools
- Built with Next.js, React, and Tailwind CSS
