<img alt="po8klasie" src="https://warsawlo.pl/logo/full.png" width="200px" />

# po8klasie
:poland: Prawdopodobnie najprostsza i najszybsza wyszukiwarka warszawskich szkół średnich. <br/>
Wkrótce produkcyjnie dostępna dla wszystkich!

:uk: Probably the simplest and fastest search engine for Warsaw high schools. <br />
Soon available in production for everyone!

If you want to contribute to po8klasie, please read our [contribution guide](CONTRIBUTING.md).

  
## Quick start 

> *NOTE*: This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) (typescript template).

1. Clone this repo :arrow_down:
```shell script  
git clone https://github.com/po8klasie/po8klasie
```

2. In root directory of the project, create `.env` file with specified environmental variables ([see below](#env-vars)) :page_facing_up:

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

<a name="env-vars"></a>
### Environmental variables

| Name | Required | Description |
| - | :-: | - |
| `GRAPHQL_ENDPOINT` | :heavy_check_mark: | Url where GraphQL API is hosted (include a trailing slash) |
| `PUBLIC_SENTRY_DSN` | :x: | Sentry DSN. If it's not specified, Sentry Client is not initialized. |
| `MATOMO_BASE_URL` | :x: | Matomo base url (include a trailing slash). If it's not specified, Matomo Client is not initialized. |
| `MATOMO_SITE_ID` | :x: | Matomo site ID. If it's not specified, Matomo Client is not initialized. |

> *NOTE:* In development environment prefix each env var name with `REACT_APP_` (eg. `REACT_APP_API_URL`)

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
You can find detailed guide of how to set up po8klasie for production use in our [infra repo](https://github.com/po8klasie/infra).
    
    
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
