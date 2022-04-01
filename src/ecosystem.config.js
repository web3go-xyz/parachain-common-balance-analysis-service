module.exports = {
    apps: [{
        name: "20008-parachain-common-balance-analysis-service",
        script: "./dist/main.js",
        max_memory_restart: '1024M',
        node_args: '--max-old-space-size=1024',
        args: '',
        env: {
            PORT: 20008,
            DB_HOST: '',
            DB_PASSWD: '',
            DB_NAME: 'prod-litmus-balance',
            DB_USER: 'postgres',
            DB_PORT: '5432',
            PARACHAIN_ENDPOINT: '',
            PARACHAIN_NAME: ''
        }
    }]

}
