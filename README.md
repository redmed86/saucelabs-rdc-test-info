# saucelabs-rdc-test-info
This project interacts with the Sauce Labs real device cloud API to gather test results, post execution.



# Issues
1) Add error handling in case of null, required env variables.
2) capture video file
3) capture capture screenshots
4) aggregate results for each test execution and name directory `<build_name>_<build_number>_<device_name>`
5) aggregate directories and name `<build_name>_<build_number>_TEST_RESULTS.zip`
6) add functionality to take RDC_USER, RDC_API_KEY, PATH_TO_RDC_RUNNER, $APP_PATH, $TEST_PATH that will launch the test with the Sauce Labs RDC-runner,then drop a zip with the results in the base directory.