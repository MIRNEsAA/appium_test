Test case 01 - Test if the user can sign in
===========================================
Type: Positive

Preconditions
-------------
- The user already has a valid account with e-mail and password
- Minimum length of the password is 6 characters

Steps
-----
1. Start the activity.
1. Enter a valid e-mail in the "E-mail" field. 
1. Enter a valid password in the "Password" field. 
1. Click the "Sign in or Register" button. 

Expected Results
----------------
1. The sign-in screen appears
1. The entered value is displayed in the field. No red exclamation mark is shown.
1. Masking characters are displayed in the field. No red exclamation mark is shown. The "Sign in or Register" button is enabled.
1. The sign-in screen disappears and the user is logged in.

Test case 02 - Test if the entered password is long enough
==========================================================
Type: Negative

Preconditions
-------------
- The user doesn't have a valid account yet

Steps
-----
1. Start the activity
1. Enter a valid e-mail in the "E-mail" field
1. Enter a '12345' in the "Password" field, which is not long enough
1. Click the exclamation mark icon next to the "Password" field

Expected Results
----------------
1. The sign-in screen appears
1. The entered value is displayed in the field. No red exclamation mark is shown.
1. An exclamation mark icon is displayed next to the "Password" field. The "Sign in or Register" button is not enabled.
1. A popup saying "The password must be >=5 characters" is displayed on screen. The "Sign in or Register" button is not enabled.

Test case 03 - Test if the user cannot sign in with an empty e-mail
===================================================================
Type: Negative

Preconditions
-------------
- The user already has a valid account with e-mail and password
- Entering e-mail is required to sign in

Steps
-----
1. Start the activity
1. Enter a valid password in the "Password" field
1. Click the exclamation mark  next to the "E-mail" fields

Expected Results
----------------
1. The sign-in screen appears
1. Masking characters are displayed in the field. No red exclamation mark is shown. The "Sign in or Register" button is not enabled.
An exclamation mark icon is displayed next to the "E-mail" field.
1. A popup saying "Not a valid username" is displayed. The "Sign in or Register" button is not enabled.