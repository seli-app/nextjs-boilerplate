# NextJS Boilerplate
This project is a easy-to-start all-in-one code to fork and make any app you want.

## What's included
* NextJS
* React 16
* Redux-Saga
* Bootstrap 4 (themed with SB Admin 2)
* Font-Awesome
* React-Table
* I18next
* Sass Support
* ChartJS
* Axios
* Enzyme

## How to use it
1. Clone this repo using `git clone git@github.com:seli-app/nextjs-boilerplate.git`.
2. Run `npm install`.
3. Create your own API under `lib/store/apis` and add it to `lib/store/apis/index.js`.
4. Create your own Reducers under `lib/store/reducers` and add it to `lib/store/reducers/index.js`.
5. Create your own Actions under `lib/store/actions`  and add it to `lib/store/actions/index.js`.
6. Add your logic to the magic Saga Middleware `lib/store/sagas.js`.
7. Create your Containers and Components to show your previous work.
8. Add a new page under `pages` folder and call the layout you want.
8. Translate every string under the `lib/i18n/locales` folders.
9. Run your tests with `npm test`, watch them live with `npm run test:watch`, check your coverage with `npm run test:coverage` or check if linter has something to say with `npm run test:linter`.

## What's missing
* Google Maps component.
* Local-Storage or something to save data.

## Copyright
This project is under MIT License and it was made with love & tendonitis by the Seli Team for public usage.

## Contributing
Just fork this repo, do your magic and create your amazing pull-request.
