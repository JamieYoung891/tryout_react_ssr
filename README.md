THIS PROJECT IS TO FOLLOW A PRACTICE YOUTUBE CLIP WHICH IS BELOW:
https://youtu.be/IkOVe40Sy0U

procedural actions are listed below:
1. on terminal, cmd "npm init -y" // to create package.json
2. on terminal, cmd "npm install next react react-dom" // to install necessary libraries for React App with SSR
3. on package.json, reset and add "scripts" // scripts to use NextJs
   "dev" : "next"
   "build" : "next build"
   "start" : "next start"

4. on root directory, create "pages" folder // to be used as route when SSR occurs *further study needed
5. on "pages" directory, create "index.js" // to be used default route
6. on terminal, cmd "npm run dev" // to start dev server for testing
7. on components, use "import Link from 'next/link'" // to implement hypertext link
   ex) <Link href="/about"><a>About</a></Link>
8. on components, use "import Head from 'next/head'" // to implement head tag
   ex) <Head><title>...</title><link rel="stylesheet" href="style.css" /></Head>

9. on teriminal, cmd "npm install isomorphic-unfetch" // to use fetch on SSR? *further study needed