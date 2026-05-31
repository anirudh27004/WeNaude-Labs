# WeNaude Labs

A full-stack text-to-speech web application inspired by ElevenLabs, featuring voice generation, voice library management, and usage-based billing.

**Live:** [wenaude-labs-production.up.railway.app](https://wenaude-labs-production.up.railway.app/)

## Features

- **Text-to-Speech** — Generate audio from text using the ElevenLabs API with configurable voice settings
- **Voice Library** — Browse, preview, and manage voices
- **Generation History** — Review and replay past TTS generations with waveform playback
- **Billing** — Usage-based subscription plans via Polar
- **Auth** — Clerk-powered authentication with org/team support

## Tech Stack

**Frontend:** Next.js 16, React 19, Tailwind CSS, shadcn/ui, WaveSurfer.js

**Backend:** tRPC, Prisma ORM, PostgreSQL (via Railway), AWS S3 (audio storage)

**Auth & Billing:** Clerk, Polar

**Language:** TypeScript

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `ELEVENLABS_API_KEY` | ElevenLabs API key |
| `AWS_ACCESS_KEY_ID` | AWS S3 access key |
| `AWS_SECRET_ACCESS_KEY` | AWS S3 secret key |
| `AWS_S3_BUCKET_NAME` | S3 bucket for audio storage |
| `POLAR_ACCESS_TOKEN` | Polar billing access token |
