# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed because Github action can test the code automatically and it is improtant to make sure everything works when push a new change.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, because write and send a message involved many different parts of the application and unit test can only test one part.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, because set the max message length only involved in one part so we can use unit test.

Files

- package.json
- __tests__/lab8.test.js

