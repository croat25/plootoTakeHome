README

1. for first time user, we need to install the dependencies
    `npm i`
2. then lets run
    `.\\node_modules\\.bin\\tsc -p .`
3. if we want to run all the tests we run 
    `npm run test:withConfigFile`
4. if we want to debug a specific file we run
    add the name of the test to the filter "test" key in .testcaferc.json then run
    `npm run test:withConfigFile`