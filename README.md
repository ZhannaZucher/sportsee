# SPORTSEE App : analytics dashboard

![REACT](https://img.shields.io/badge/React-303540?style=for-the-badge&logo=react&logoColor=61DAFB)
![Recharts](https://img.shields.io/badge/<Recharts%20/>-22b5bf?style=for-the-badge&logo=recharts&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Presentation

![SNAPSHOT](/src/assets/screenshot.png)

New version of the profile page for SportSee app presenting an analytics dashboard for daily progress tracking.

## Project setup

1. Install the source code to run the micro API forking and cloning it from [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

2. Clone the UI source code [here](https://github.com/ZhannaZucher/sportsee.git)

## Launch the project

### 1. Backend :

Follow instructions to launch the micro API disponible in Backend repo [README](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#readme).

Install the dependencies with <code>yarn</code> or <code>npm install</code> command in the terminal.

Then run the app in dev mode with <code>yarn start</code> or <code>npm run start</code> command in the terminal which opens the default port [http://localhost:3000](http://localhost:3000).

### 2. Frontend :

Install the dependencies with <code>yarn</code> or <code>npm install</code> command in the terminal.

The run the app in dev mode with <code>yarn start</code> or <code>npm start</code> command in the terminal which opens the disponible port [http://localhost:3001](http://localhost:3001).

**Notes :**

- SportSee API only contains data for users with id 12 and 18.
  You can see dashboards of these users respectively at [http://localhost:3001/12](http://localhost:3001/12) and [http://localhost:3001/18](http://localhost:3001/18)

- Currently the project gets users' data from the mocked data. If you want to switch to the API data, you should change _const mock_ to _false_ in _src/utils/hooks/useFetch.jsx_ of this cloned repositary.

## Prerequisites

- [NodeJS < v.18](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/) or [Npm](https://docs.npmjs.com/cli/v9/commands/npm-install)
- Code editor like [VS Code](https://nodejs.org/en/https://code.visualstudio.com/), [PyCharm](https://www.jetbrains.com/fr-fr/pycharm/), [Sublim Text](https://www.sublimetext.com/) ...
- [Git](https://git-scm.com/)

## Project Dependencies

![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/ZhannaZucher/sportsee/react?label=React)

![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/ZhannaZucher/sportsee/recharts?label=Recharts)

![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/ZhannaZucher/sportsee/react-dom?label=React-DOM)

![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/ZhannaZucher/sportsee/react-router-dom?label=React-router-DOM)

![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/ZhannaZucher/sportsee/prop-types)
