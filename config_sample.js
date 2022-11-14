const config = {};

config.project = {
  name: "ml-triples"
};

config.path = "/PATH/TO/ml-triples/"; // include trailing "/"

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.host = "localhost";

config.databases = {
  content: {
    name: config.project.name + "-content"
  },
  modules: {
    name: config.project.name + "-modules"
  },
};

config.rest = {
  "rest-api": {
    name: config.project.name + "-rest",
    database: config.databases.content.name,
    "modules-database": config.databases.modules.name,
    port: 8093,
    "error-format": "json"
  }
};

config.xdbc = {
  "server-name": config.project.name + "-xdbc",
  "server-type": "xdbc",
  "group-name": "Default",
  "content-database": config.databases.content.name,
  root: "/",
  port: 8006
};

config.role = {
  "role-name": config.project.name + "-role", 
  "privilege": [
    {
      "privilege-name": "xdmp:eval",
      "action": "http://marklogic.com/xdmp/privileges/xdmp-eval",
      "kind": "execute"
    },
    {
      "privilege-name": "xdmp:eval-in",
      "action": "http://marklogic.com/xdmp/privileges/xdmp-eval-in",
      "kind": "execute"
    },
    {
      "privilege-name": "unprotected-collections",
      "action": "http://marklogic.com/xdmp/privileges/unprotected-collections",
      "kind": "execute"
    },
    {
      "privilege-name": "unprotected-uri",
      "action": "http://marklogic.com/xdmp/privileges/unprotected-uri",
      "kind": "execute"
    }
  ]
}

config.user = {
  "user-name": config.project.name + "-user", 
  "password": "password",
  "role": [ "minimal-search-role", "rest-admin", "hadoop-user-all" ] 
}

// Collections to apply to loaded documents
config.collections = [ config.project.name ];

config.queryOptions = {
    name: "query-options.xml"
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
