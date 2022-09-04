# po8klasie
:poland: Prawdopodobnie najprostsza i najszybsza wyszukiwarka szkół średnich. <br/>
Wkrótce produkcyjnie dostępna dla wszystkich!

:uk: Probably the simplest and fastest high schools lookup service. <br />
Soon available in production for everyone!

If you want to contribute to po8klasie, please read our [contribution guide](CONTRIBUTING.md).

  
## Quick start 

> *NOTE*: This project relies on [Next.js Framework](https://nextjs.org/).

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
| `API_URL` | :heavy_check_mark: | Url where the API is hosted (do NOT include a trailing slash) |
| `APP_ENVIRONMENT` | :x: | e.g. `production`, `test`. It's used by Sentry and displayed in the footer. |
| `APP_FRONTEND_RELEASE` | :x: | e.g. docker image tag. It's used by Sentry and displayed in the footer. |
| `MAPBOX_ACCESS_TOKEN` | :x: | Mapbox access token. If it's not specified, Open Street Map tiles are load. |
| `PUBLIC_SENTRY_DSN` | :x: | Sentry DSN. If it's not specified, Sentry client is not initialized. |
| `POSTHOG_API_KEY` | :x: | Posthog API key. If it's not specified, Posthog Analytics client is not initialized. |

> *NOTE:* If you don't want to spin up local API server, for development purposes use `https://test.po8klasie.pl/api` as `API_URL`.

### Linter & formatter
Available linter/formatter commands:
```shell script
yarn lint:check
yarn format:check

yarn lint:fix
yarn format:write
```

### What about the back-end?
If you want to develop front-end only, you are good to go! Just insert URL of the API server in `.env` file.

Docs on how to develop front-end simultaneously with back-end locally coming soon!
   
   
## Production use
You can find detailed guide of how to set up po8klasie for production use in our [infra repo](https://github.com/po8klasie/infra).
    
    
## More resources  
* To learn more about Next.js Framework, go to [Next.js website](https://nextjs.org/).    
* To learn React, check out the [React documentation](https://reactjs.org/).  
  
  
## Team & our partners
This is a civic tech and open-source project crafted by volunteers. 
Core team members are listed on [po8klasie.pl website](https://po8klasie.pl).

Our partners:
* [City of Gdynia](https://www.gdynia.pl/)
* [Moje Państwo Foundation](https://mojepanstwo.pl/)
* [SurveyLab](https://www.surveylab.com/)
