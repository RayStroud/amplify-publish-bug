# amplify-publish-bug
A small repro repo to show how amplify publish does not exit correctly if there's an error in the react build.

## Steps to demo bug after cloning this repo
1. Run `amplify init` and enter all information needed.
2. Run `node scripts/bad-deploy.js`.
3. Notice that some commands run after the `amplify publish -y` command fails.
4. Run `node scripts/good-deploy.js`.
5. Notice that no commands run after the `yarn build` command fails.

## Steps to replicate this repo
1. Initialize the app with CRA and amplify.
```bash
npx create-react-app amplify-publish-bug
cd amplify-publish-bug
amplify init
amplify hosting add
```
2. Break the React build, e.g. import something that doesn't exist.
3. Create and run a node script that uses `child_process.execSync` to run some commands after running `amplify publish`.
4. Run that script, and notice how commands will run after the `amplify publish` command fails.
