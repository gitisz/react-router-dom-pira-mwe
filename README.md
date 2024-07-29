# react-router-dom-pira-mwe
A MWE for demonstrating an issue with using react-router-dom v6 and Piral with a library package.

## Setup
Change into directory `packages/app` and perform `npm i; npx piral build`.

Change into directory `packages/lib` and perform `npm i; npm run build; npm pack`.

Change into directory `packages/module` and perform `npm i; npx pilet debug`.

## Reproducing

**Success Test**: After running the pilet in debug mode, access the browser and click on the "Go Home" button in the top menu. The button click will alert "Going Home" and navigate you to the root page.

**Fail Test**: After running the pilet in debug mode, update the `src/index.ts` file so the `<GotHomeMenuItem />` registration is commented out, and the `<MenuItem />` from the imported `lib` is active.

Your code should look like this:
```
export function setup(app: PiletApi) {
  app.registerPage('/page', Page);
  pp.registerMenu(() => <MenuItem piral={app} />) // <- this one fails when useNavigate is imported
  // app.registerMenu(() => <GoHomeMenuItem piral={app} />) // <- this one works
}
```

Access the browser, and observe the following error:


```
Error
    at nt (http://localhost:1234/$pilet-api/0/index.js?updated=1722270747484:112:14044)
    at http://localhost:1234/$pilet-api/0/index.js?updated=1722270747484:112:16031
    at gt (http://localhost:1234/$pilet-api/0/index.js?updated=1722270747484:112:17766)
    at xt (http://localhost:1234/$pilet-api/0/index.js?updated=1722270747484:112:18344)
    at renderWithHooks (http://localhost:1234/index.4a4d70.js:383567:18)
    at mountIndeterminateComponent (http://localhost:1234/index.4a4d70.js:388179:13)
    at beginWork (http://localhost:1234/index.4a4d70.js:389702:16)
    at beginWork$1 (http://localhost:1234/index.4a4d70.js:395541:14)
    at performUnitOfWork (http://localhost:1234/index.4a4d70.js:394675:12)
    at workLoopSync (http://localhost:1234/index.4a4d70.js:394581:5
```