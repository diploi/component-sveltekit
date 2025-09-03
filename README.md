<img alt="icon" src=".diploi/icon.svg" width="32">

# SvelteKit Component for Diploi

[![launch with diploi badge](https://diploi.com/launch.svg)](https://diploi.com/component/sveltekit)
[![component on diploi badge](https://diploi.com/component.svg)](https://diploi.com/component/sveltekit)
[![latest tag badge](https://badgen.net/github/tag/diploi/component-sveltekit)](https://diploi.com/component/sveltekit)

Launch a demo for free
https://diploi.com/component/sveltekit

Uses the official [node](https://hub.docker.com/_/node) Docker image.

Has the [@sveltejs/adapter-node](https://svelte.dev/docs/kit/adapter-node) adapter preconfigured.

## Operation

### Getting started

- Create an account on Diploi, it's free https://console.diploi.com/
- Once you are in the Dashboard, click on "Create Project +"
- Now you need to select the stack for your app. In the "Pick Components" section, select **SvelteKit**. You can add other frameworks to work along with your SvelteKit app. This also applies to the "Pick Add-ons" section, where you can choose the database for your app.
- Next, you need to choose "Create Repository" so your new app will start with a fresh repository.
- Finally, click "Launch Stack".

Check the full guide
https://diploi.com/blog/hosting_svelte_apps

### Development

Will run `npm install` when component is first initialized, and `npm run dev` when deployment is started.

### Production

Will build a production ready image. Image runs `npm install` & `npm build` when being created. Once the image runs, `npm start` is called.
