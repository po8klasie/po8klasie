<img alt="WarsawLO" src="https://warsawlo.pl/logo/full.png" width="200px" />

# WarsawLO 2.0
:poland: Najprostsza i najszybsza wyszukiwarka warszawskich liceów. Teraz w wersji 2.0. <br/>
Wkrótce produkcyjnie dostępna dla wszystkich!

:uk: The simplest and fastest search engine for Warsaw high schools. Now in version 2.0. <br />
Soon available in production for everyone!

If you want to contribute to WarsawLO, please read our [contribution guide](CONTRIBUTING.md).

> *NOTE*: App available at warsawlo.pl is just a prototype and is currently sourced from [warsawlo repo](https://github.com/WarsawLO/warsawlo).
  
  
## Quick start 

> *NOTE*: This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) (typescript template).

1. Clone this repo :arrow_down:
```shell script  
git clone https://github.com/WarsawLO/WarsawLO-2.0
```

2. In root directory of the project, create `.env` file with following content (replacing `<SERVER_URL>` with server where API is hosted) :page_facing_up:
```
REACT_APP_API_URL=<SERVER_URL>
```

3. Install dependencies using [yarn](https://yarnpkg.com/) :package:
```shell script  
yarn
```

4. Run the project :rocket:
```shell script  
yarn start
```

5. Make some changes and submit pull request :tada: <br />

> *NOTE:* Before submitting a pull request, please read our [contribution guidelines](CONTRIBUTING.md).

### Linter & formatter
Currently, we are in process of setting up [eslint](https://eslint.org) and [prettier](https://prettier.io).
 
Available linter/formatter commands:
```shell script
yarn lint:check
yarn format:check
 
# please don't use commands below for now
# they modify files across the project
yarn format:write
yarn lint:fix
```
 
> *NOTE*: Please make sure there are no linted/formatted files out of scope of your work before submitting PR

### What about the back-end?
If you want to develop front-end only, you are good to go! Just insert URL of the API server in `.env` file.

Docs on how to develop front-end simultaneously with back-end locally coming soon!
   
   
## Production use
You can find detailed guide of how to set up WarsawLO for production use in our [infra repo](https://github.com/WarsawLO/infra).
    
    
## More resources  
* To learn more about CRA, go to [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).    
* To learn React, check out the [React documentation](https://reactjs.org/).  
  
  
## Our supporters  
This is a civic tech and open-source project crafted by volunteers in cooperation with Code For Poland program of ePaństwo Foundation.    
        
<a href="https://codeforpoland.org">    
  <img alt="Code For Poland logo" src="https://kodujdlapolski.pl/wp-content/themes/web-kodujdlapolski.pl/images/logo.png" height="70px"/>  
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://epf.org.pl">  
  <img alt="ePaństwo Foundation" src="https://epf.org.pl/en/wp-content/themes/epf/images/logo-epanstwo.svgz" height="60px" />    
</a>
