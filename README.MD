FEATURES:
[X] - It must be possible to register.
[X] - It must be possible to authenticate.
[X] - It must be possible to obtain the profile of a logged user.
[X] - It must be possible to obtain the numbers of checkins performed by the logged in user.
[X] - It must be possible for the user to obtain his checkins history.
[ ] - It should be possible for the user to search for nearby gyms.
[ ] - It should be possible for the user to search for gyms by name.
[X] - It must be possible for the user to check-in at a gym.
[ ] - It must be possible to validate a user's check-in.
[X] - It must be possible to register a gym.

[X] - The user must not be able to register with a duplicate email.
[X] - The user cannot make 2 check-ins on the same day.\
[X] - The user cannot check in if he is not close to the gym (100 meters).
[ ] - The check in can only be validated up to 20 minutes after being created.
[ ] - Check in can only be validated by administrators.
[ ] - The academy can only be registered by administrators.

[X] - User password needs to be encrypted.
[X] - Application data must be persisted in a PostgreSQL database.
[X] - All data lists need to be paginated with 20 items per page.
[ ] - The user must be identified by a JWT (JSON WEB Token).

To test the project open the terminal and:
git clone https://github.com/andr3felipe/Gym-SOLID-api.git
navigate to the cloned project folder (Gym-SOLID-api) and then run the command:
npm i
npm run test

If you want to run the project and you have docker installed.
navigate to the project folder (Gym-SOLID-api) and then run the command:
npm i
docker compose up -d
npm run dev
