# This is the README for team s2-t1-care

# Team s2-t1-care Final Report, CS48, S20

* Team Members: Misha Obukhov, Leron Reznikov, Julian Wong, Lina Zeng, Cindy Zhao
* Tech Stack: Node.js

## Sections
* [Part 1: Users Guide](./users_guide.md)
* [Part 2: Programmers Guide](./programmers_guide.md)
* [Part 3: Roles](./roles.md)

## Links
* Source Code: https://github.com/ucsb-cs48-s20/project-s2-t1-care
* React Storybook: https://github.com/ucsb-cs48-s20/project-s2-t1-care-storybook
* Production Link: https://cs48-s20-s2-t1-prod.herokuapp.com/


- [Deployment] https://cs48-s20-s2-t1-prod.herokuapp.com/
- [Deployment Instructions](./docs/DEPLOY.md)

## Users can input how they're feeling / sleeping / eating and see a plant grow with them! the background matches your feelings, the plant grows while you're sleeping/eating well, etc. (just a representation of how you take care of yourself)

# Team Members

- Leron Reznikov - reznikovl
- Lina Zeng - xitsleena
- Cindy Zhao - cindy126
- Julian Wong - wongjulan4213
- Misha Obukhov - mishaobu

Tech stack: next.js

# Details

- A interactive journal app that has only one kind of user: journalist
- The user starts off with little seedling. The user can select from a number of things to track - such as exercise, sleep, water intake, productive time, custom option (after MVP). Every day, the user should enter their stats from their day. Depending on how successful their day was, the plant would experience different effects (growing, more leaves, generally looking prettier/changing color). As time goes on, goals could automatically increase to ensure different levels. Eventually, a bad day will also affect the plant negatively.

- MVP:

  - Google Oauth/some account system
  - Data entry for users to put in stats
    - yes/no options
    - good/bad day -> change to rating system
  - Some visual that changes with input
  - Need a database to store journal entries / current state

- After MVP:
  - Having automatic goals set based on initial user input
  - email /text? reminders to update your plant
  - custom option to track - select from amount, time, etc. and let the program set goals for you
  - custom plant / room / visuals

| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `npm install`             | Install Dependencies                                  |
| `npm run dev`             | Runs locally in development mode                      |
| `npm run start`           | Runs in production mode (requires `PORT` env var)     |
| `npm run test`            | Runs entire test suite                                |
| `npm run test:cypress`    | Runs Cypress integration tests                        |
| `npm run test:cypress`    | Runs `prettier` format tests                          |
| `npm run fix:format`      | Reformats all project files using `prettier`          |
| `npm run storybook`       | Run React Storybook (made available at localhost:6006 |
| `npm run build-storybook` | Create static react storybook for GitHub Pages        |
