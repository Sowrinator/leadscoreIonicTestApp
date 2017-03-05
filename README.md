# leadscoreIonicTestApp
# Disclaimer -> First ever Ionic Application was learning whilst completing the application.

This application requires Ionic2 and Cordova which can easily be gotten from NPM.

You must also acquire an account under leadscore-staging to login and test functionality.

For testing inside the web browser you must use the chrome extension to get past CORS.
Moesif Origin & CORS Changer: under options add "authToken, content-type" to Access-Control-Allow-Headers.
Toggle CORS Changer after the ionic lab has loaded (as it can sometimes prohibit it from loading) also dont forget to disable once finished testing.

# The Application
The application is fairly trivial, it only reads the first 100 contacts.
It also will only use the first phone number and email address supplied by the data requested - This should really use the primary email and phone number.
# Error Catching
The application also has minor error catching for empty emails and phone numbers but assumes that there is always at least a display name for every contact.
# Server Codes
Handling server response codes: Most of the error handling is for the initial password login, being unable to receive the contacts just causes an immediate logout with information printed to the console.
