module.exports = {
  test: {
    client: 'pg',
    // connection: 'postgres://localhost/mocha_chai_tv_shows_test',
    connection: {
      database: 'mocha_chai_tv_shows_test',
      user: 'postgres',
      password: 'password',
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`,
    },
  },
  development: {
    client: 'pg',
    connection: {
      database: 'mocha_chai_tv_shows',
      user: 'postgres',
      password: 'password',
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/production`,
    },
  },
};
