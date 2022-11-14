# ml-triples-2

Load triples-enriched XML documents into MarkLogic and query those documents.

## Set up

Download (or clone) the project and change into the project root directory.

`cd ml-triples-2`

Copy `config_sample.js` and save as `config.js`. Edit settings as needed for your MarkLogic environment.

Install dependencies:

`npm install`

Set up databases, servers, etc., and load records and query options. Uses the settings in `config.js`:

`node setup`

## Run REST queries in Postman

In your Postman app, import the collection in the `/postman` directory. Run example queries on the data using the imported commands.
