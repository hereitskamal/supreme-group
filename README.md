📖 Documentation
🔧 Project Setup Instructions
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-username/supreme-group.git
cd supreme-group
Install Dependencies:

bash
Copy
Edit
npm install
Run Development Server:

bash
Copy
Edit
npm run dev
Build for Production:

bash
Copy
Edit
npm run build
Start Production Server:

bash
Copy
Edit
npm run start
🧩 Component & Directory Structure Overview
graphql
Copy
Edit
├───app
│   ├───favicon.ico           # Site favicon
│   ├───globals.css           # Global styles
│   ├───layout.tsx            # Root layout (applies to all pages)
│   └───page.tsx              # Homepage (main entry point)
│
├───components
│   ├───layout
│   │   ├───Header.tsx        # Sticky top navigation
│   │   └───Footer.tsx        # Site footer
│   │
│   ├───sections
│   │   ├───HeroSection.tsx       # Landing hero banner
│   │   ├───ProductSection.tsx    # Product features
│   │   ├───ContactSection.tsx    # Contact + form section
│   │   └───_components
│   │       ├───CircularProgressBarButton.tsx
│   │       ├───ContactForm.tsx
│   │       ├───SolutionCard.tsx
│   │       └───Tab.tsx
│   │
│   └───ui
│       ├───Button.tsx        # Reusable button component
│       └───Input.tsx         # Reusable input component
│
├───hooks
│   └───useScrollDirection.ts  # Detect scroll direction
│
├───lib
│   └───utils.ts              # Utility functions
│
└───types
    └───index.ts              # Shared TypeScript types
📱 Responsive Design Strategy
Mobile-first layout using Tailwind CSS breakpoints (sm, md, lg, etc.)

Sections split modularly for scalable design and reusability.

Custom UI elements (Button, Input, etc.) adapt fluidly to screen size.

⚡ Performance Optimization Techniques
Turbopack enabled for faster HMR during development.

Dynamic imports and lazy loading of sections/components.

Schema validation with zod ensures no unnecessary re-renders on invalid forms.

Tailwind's JIT compiler ensures only used CSS is bundled.

Animations via motion leverage native browser GPU acceleration.

♿ Accessibility Considerations
Semantic HTML and ARIA tags where required.

Keyboard navigability and :focus styles.

Labels and error messages tied to inputs in forms.

Toasts (react-toastify) are screen reader compatible with aria-live.

📦 Third-Party Libraries Used
Library	Purpose
@emailjs/browser	Send emails from frontend (no backend needed)
react-hook-form	Efficient form state management
zod	Schema-based validation (used with RHF)
motion	Smooth animations and transitions
react-toastify	Toast-style alerts and notifications
tailwindcss	Utility-first CSS framework
typescript	Strongly-typed JavaScript development

🧠 Assumptions & Key Decisions
Zod + React Hook Form combo gives typed, robust form validation.

Component folders were structured by role (layout, sections, UI).

Motion was chosen for advanced, smooth animation performance.

Hooks are isolated to keep reusable logic composable and clean.

🧗 Challenges & Solutions
Challenge	Solution
Deep nested layout components	Broke UI into clean, sectioned and _components hierarchy
Scroll animation conflict on mobile	Used custom hook useScrollDirection with throttling
Toasts overlapping content	Customized react-toastify position and mobile styling