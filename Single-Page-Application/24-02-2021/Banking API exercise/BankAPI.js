/* ------- Create a simple online banking application with the help of Bootstrap, JavaScript, and JSON with the following features:


1- There is an authentication function that takes [IBAN & pincode] and returns a JSON string "IBAN and the token number" (the token must be a random number).


    For instance:   "IBAN=DE000000000  picode=1234"

2- Create a function that takes the generated JSON string (which includes token and IBAN) and a given amount (a number)
 and allows you to transfer some money to your bank account (increase your current balance, which can be a global variable)

    For instance:   "token=1234  amount=1000"


3- Create a function that takes the generate token and a given amount to allow you to withdraw this amount from your current balance:

   For instance:  token=generatedToken amount=1000


4- Create a function that takes the generate token and export your current balance in a JSON string (by taking the token alone with the help of Stringify):

      For instance:  token={generatedToken}


Note:  Write the code all in JavaScript, but if you like you can implement it in a bootstrap web form


*/
