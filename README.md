# Citier

## Overview

This is a single-page Next.js application that allows users to request short pitches or texts about cities from a Nest.js backend. Users can enter a city name into a free text input field and click a button to request a pitch. The backend then delivers the pitch text, which is automatically updated in the frontend.

## Features

- Users can enter a city name and request a pitch text.
- Loading indicators are shown while waiting for pitch data to be delivered from the backend.
- Pitch items are dynamically updated with pitch text once it is received from the backend.

## Project Structure

The project uses a monorepo structure with the following workspaces:

- `frontend`: Contains the Next.js application for the frontend.
- `backend`: Contains the Nest.js application for the backend.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. In the root directory, install the dependencies both projects with:

   ```bash
   pnpm -r install
   ```

4. Set up environment variables:

   Copy the .env file in the backend directory and rename it to `.env.local`, and add the values for the following variables:

   ```env
    MONGO_URI =
    OPENAI_KEY =
   ```

## Running the Application

To run both the frontend and backend simultaneously, use the following command in the root directory:

```bash
pnpm run dev
```

This command starts both the Nest.js and Next.js apps in parallel.

## Technologies Used

- Next.js
- Nest.js
- MongoDB
- OpenAI API