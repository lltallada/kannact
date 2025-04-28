## Start Kananct Frontend Challenge

React JS project using Next.js + TypeScript + React Query + Tailwind CSS.

For data fetching, I preferred to do it server-side to avoid the delay of fetching data from the client. From there, the data is modified using React Query.

This was my first time using React Query, and I approached it assuming the data would persist at the session level. That’s why I created a custom hook to reuse the functions for editing, deleting, and adding patients, thinking the data would remain in localStorage.

Since React Query does not have persistence by default, this part of the code should be improved, either by implementing API calls to the necessary endpoints or by storing the data locally with Zustand, or by persisting React Query’s state in some other way.

For styling, I used Tailwind CSS.
I created a Button component as an example of how an approach focused solely on Tailwind could work, including extending Tailwind's theme as well as using custom configs and parameters in the components.

## Check the project

just run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing Approach

I have little experience with integration testing, but the most obvious approach would be to create integration tests for the core functionalities of the product: listing, editing, deleting, and adding patients and comments.

I would use React Testing Library to create the component tests.

Additionally, I would develop end-to-end (E2E) tests using Playwright to cover a complete user journey through all the functionalities of the product.

Tests should be executed on the branches defined in the GitHub workflow, both before and after code implementation.
