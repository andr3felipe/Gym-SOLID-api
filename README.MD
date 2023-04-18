# ENGLISH
## GYM SOLID API
* [GIF](#GIF)
* [MADE WITH](#MADE-WITH)
* [FEATURES](#FEATURES)
* [LINK TO TEST THE PROJECT](#LINK-PARA-TESTE-DO-PROJETO-/-LINK-TO-TEST-THE-PROJECT)

## FEATURES:
<ul>
<li>[X] - It must be possible to register.</li>
<li>[X] - It must be possible to authenticate.</li>
<li>[X] - It must be possible to obtain the profile of a logged user.</li>
<li>[X] - It must be possible to obtain the numbers of checkins performed by the logged in user.</li>
<li>[X] - It must be possible for the user to obtain his checkins history.</li>
<li>[ ] - It should be possible for the user to search for nearby gyms.</li>
<li>[ ] - It should be possible for the user to search for gyms by name.</li>
<li>[X] - It must be possible for the user to check-in at a gym.</li>
<li>[ ] - It must be possible to validate a user's check-in.</li>
<li>[X] - It must be possible to register a gym.</li>
<br>
<li>[X] - The user must not be able to register with a duplicate email.</li>
<li>[X] - The user cannot make 2 check-ins on the same day.</li>
<li>[X] - The user cannot check in if he is not close to the gym (100 meters).</li>
<li>[ ] - The check in can only be validated up to 20 minutes after being created.</li>
<li>[ ] - Check in can only be validated by administrators.</li>
<li>[ ] - The academy can only be registered by administrators.</li>
<br>
<li>[X] - User password needs to be encrypted.</li>
<li>[X] - Application data must be persisted in a PostgreSQL database.</li>
<li>[X] - All data lists need to be paginated with 20 items per page.</li>
<li>[ ] - The user must be identified by a JWT (JSON WEB Token).</li>
</ul>
<br>
<br>

##### 1. To test the project open the terminal and:
```
git clone https://github.com/andr3felipe/Gym-SOLID-api.git
```
##### 2. Navigate to the cloned project folder (Gym-SOLID-api) and then run the command:
```
npm i
npm run test
```

#### - If you want to run the project and you have docker installed.
##### 1. Navigate to the project folder (Gym-SOLID-api) and then run the command:
```
npm i
docker compose up -d
npm run dev
```
