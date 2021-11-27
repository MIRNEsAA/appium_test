Test case 01 - Test if the user can sign in
===========================================
Type: Positive

Preconditions
-------------
- The user already has a valid account with e-mail and password

Steps
-----
- Start the activity
- Enter a valid e-mail in the "E-mail" field
- Enter a valid password in the "Password" field
- Click the "Sign in or Register" button

Expected Results
----------------
- The "Sign in or Register" button is sensitive (enabled)
- The user is signed in, activity disappears
- No red exclamation mark icons are shown

Test case 02 - Test if the entered password is long enough
==========================================================
Type: Negative

Preconditions
-------------
- The user doesn't have a valid account yet

Steps
-----
- Start the activity
- Enter a valid e-mail in the "E-mail" field
- Enter a '12345' in the "Password" field, which is not long enough
- Click the exclamation mark icon next to the "Password" field

Expected Results
----------------
- The "Sign in or Register" button is not sensitive and cannot be clicked
- The user cannot sign in
- An exclamation mark icon is displayed next to the "Password" field
- A popup saying "The password must be >=5 characters" is visible on screen

Test case 03 - Test if the user cannot login with empty e-mail
==============================================================
Type: Negative

Preconditions
-------------
- The user already has a valid account with e-mail and password

Steps
-----
- Start the activity
- Enter valid password in the "Password" field
- Click the exclamation mark  next to the "E-mail" fields

Expected Results
----------------
- The "Sign in or Register" button is not sensitive and cannot be clicked
- The user cannot sign in
- An exclamation mark icon is displayed next to the "E-mail" field
- A popup saying "Not a valid username" is displayed