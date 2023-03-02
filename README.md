## Intro
This is a code along practice, see [youtube link](https://youtu.be/CcBHZ0t2Qwc)

## What I Learned
- Use Sanity for content management as the backend, config the schema, I used my github account to link to Sanity
- To run sanity on local, go to the folder and `npm run dev`
- Sanity query language GROQ, similar to graphQL
- Sanity API connection setup: add `.env.development` file to store the sanity backend api token, add `http://localhost:3000` in CORS origins

- Use tailwind for style, [install tailwind with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- Have all the lists of constants in one file
- Next project fetch data by using `getServerSideProps`, Next.js will pre-render this page on each request using the data returned by this functions
- In next js you need to config your image hosting in `next.config.js`

### Use Google Identity Services
- Install `@react-oauth/google` and `jsw-decode`, since the new Google Identity Services does not allow you to get the profile username or image, need to decode the json webtoken 
- Setting up oath
    - Create Client ID go to `https://console.cloud.google.com`, create a project `TikTik`, -> API & Services -> Credentials -> Configure OAuth consent screen -> Externel
    - Credentials -> Create Credentials -> OAuth client ID -> Web application -> Name: TikTik, add urls of `http://localhost` and `http://localhost:3000` to `Authorized JS origins`, also add them to `Authorized Redirect URIs`
    - Copy the client ID into env variables
    - Reload the server
    - Use a global state to store the currently logged in user 

### Use Zustand
- A lightweight redux alternative

### Use snippets
- `Path Intellisense` help with imports, ctrl + space
- `ES7+ React/Redux/React-Native snippet` extension, use `rafce` to create react arrow functional component

### Run the next.js project
First, run the development server:

### Install the Same Project Dependencies
`npm install --legacy-peer-deps`
I removed `react-google-login` to be able to install other packages correctly, installed `npmjs.com/package/@react-oauth/google` instead


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run the sanity 
- created a project `sanity-backend` using sanity cli 
- under the folder sanity-backend, use `npm run dev` to start the local sanity studio, the schemas defined can be viewed on `http://localhost:3333`