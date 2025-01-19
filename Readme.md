# Unit Testing in Node.js Using Jest: A Comprehensive Guide

Unit testing is a crucial aspect of modern software development.
It helps ensure that individual parts of an application work as expected, making code more reliable and easier to maintain.

In Jest test case can be defined by "test" and "it"

1. - "test" : Specify the purpose of test
2. - "it" : BDD (Behavior Driven Development) style, specify like natural language using “it should”

# What is Jest?

Jest is a delightful JavaScript testing framework with a focus on simplicity.
It provides an out-of-the-box experience, offering features like zero-config setup, powerful mocking capabilities,
and a rich set of matchers to test your code effectively.

# Topics:

## - Simple test

1. - ![1](/0.png)

## - Testing Asynchronous Code

2. - ![1](/1.png)

## - Mocking Functions

## - Testing Error Handling

## - Running Tests with Coverage

3. - ![2](/2.png)

# Jest Coverage

    Coverage is a metric that measures how much code has been executed in a test.
    Jest coverage reports can be generated as follows
    jest --coverage

It stores Jest coverage reports in HTML format in coveragefolder.
Coverage setting can be fixed in jest.config.js

3. - ![3](/3.png)

1. collectCoverage : If this is true, collect and output coverage information.
1. coverageThreshold: Defines a number for each item, in this code above must be above 90% to pass the test

# Conclusion

Unit testing is an essential practice for building reliable and maintainable Node.js applications.
Jest makes it easy to write and run tests, providing powerful features like mocking, snapshot testing, and coverage reporting.

Remember, testing is not just about finding bugs; it’s about ensuring your code behaves as expected and can handle various scenarios gracefully.

😊😊Happy testing!
