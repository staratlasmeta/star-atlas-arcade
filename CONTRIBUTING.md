## Getting Started

First, run the development server:

```bash
npm run dev

# or

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding your on-chain program

Adding your on-chain program as a page is easy. Every unique `.js / .jsx` file under `pages/` will be rendered as a route within the application. With your page created, we'll create a link to it from our application homepage found under `index.js`.

For example:

```JSX
// pages/myCoolApp.js
// This will be accessible at a route which matches the filename, e.g. http://localhost:3000/myCoolApp

import ApplicationCode from './myCoolApp/Index.js';

export default function MyCoolApp() {
  return (
    // There will likely be a global wrapper component here to provide navigation styles, etc.
    <main>
      <ApplicationCode />
    </main>
  )
}
```

It's not required to use React to participate, except for this top-level component. There are solutions to interface with the rendering method or library of choice whether it's React, Vue, plain HTML, or otherwise.

> It's impossible for Star Atlas to anticipate what UI framework participants will use to render their projects. As a result, we'll add support for these on a case-by-case basis as the need arises. Let us know early what your requirements are and it can be built in sooner rather than later.

### File structure

It's recommended to keep your application wrapper in the root level of `pages`, and then create a dir containing the rest of your source code.

For example:

```plaintext
pages
├── _app.js
├── index.js
├── myCoolApp                   <--- Your application source code
│   ├── constants.js
│   ├── index.html
│   ├── serum.js
│   └── solana.js
└── myCoolApp.js                <--- Your React page wrapper 
```

### Environmental variables

We recommend keeping your variables in a localized `constants.js` file to keep things tidy and simple.

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
