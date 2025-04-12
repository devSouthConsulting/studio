This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

# SANFORDEV Studio

This is a Sanity Studio project for the SANFORDEV blog built with Next.js 14 and deployed on Netlify.

## Development

First, set up your environment variables:

```bash
cp .env.local.example .env.local
```

Then install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to access the Sanity Studio.

## Environment Variables Required

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Your Sanity dataset (usually "production")
- `NEXT_PUBLIC_SANITY_API_TOKEN`: Public token for client-side queries
- `SANITY_STUDIO_API_TOKEN`: Private token for Studio authentication

## Deployment

This project is configured for Netlify deployment. The `netlify.toml` file contains all necessary configuration.

To deploy:

1. Connect your repository to Netlify
2. Set up the required environment variables in Netlify's dashboard
3. Deploy using the main branch

The studio will be available at: `https://your-site.netlify.app/studio`
