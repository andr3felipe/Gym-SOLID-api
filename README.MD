## GYM SOLID API
* [DESCRIPTION](#DESCRIPTION:) -/- * [DESCRIÇÃO](#DESCRIÇÃO:)
* [GIF](#GIF:) -/- * [GIF](#GIF:)
* [MADE WITH](#MADE-WITH:) -/- * [FEITO COM](#FEITO-COM:)
* [FEATURES](#FEATURES:) -/- * [FUNCIONALIDADES](#FUNCIONALIDADES:)

# ENGLISH

## DESCRIPTION:
<p>A gym check-in REST API building under TDD (Vitest) and SOLID concepts, using JWT for authentication.</p>

## MADE WITH:
<ul>
<li>Typescript</li>
<li>NodeJS</li>
<li>Fastify</li>
<li>Prisma</li>
<li>PostgreSQL</li>
<li>Bcryptjs</li>
<li>Zod</li>
<li>Docker</li>
<li>JWT</li>
<li>Vitest</li>
</ul>

## FEATURES:
<ul>
<li>[X] - It must be possible to register;</li>
<li>[X] - It must be possible to authenticate;</li>
<li>[X] - It must be possible to obtain the profile of a logged user;</li>
<li>[X] - It must be possible to obtain the numbers of checkins performed by the logged in user;</li>
<li>[X] - It must be possible for the user to obtain his checkins history;</li>
<li>[ ] - It should be possible for the user to search for nearby gyms;</li>
<li>[X] - It should be possible for the user to search for gyms by name;</li>
<li>[X] - It must be possible for the user to check-in at a gym;</li>
<li>[ ] - It must be possible to validate a user's check-in;</li>
<li>[X] - It must be possible to register a gym;</li>
<br>
<li>[X] - The user must not be able to register with a duplicate email;</li>
<li>[X] - The user cannot make 2 check-ins on the same day;</li>
<li>[X] - The user cannot check in if he is not close to the gym (100 meters);</li>
<li>[ ] - The check in can only be validated up to 20 minutes after being created;</li>
<li>[ ] - Check in can only be validated by administrators;</li>
<li>[ ] - The academy can only be registered by administrators;</li>
<br>
<li>[X] - User password needs to be encrypted;</li>
<li>[X] - Application data must be persisted in a PostgreSQL database;</li>
<li>[X] - All data lists need to be paginated with 20 items per page;</li>
<li>[ ] - The user must be identified by a JWT (JSON WEB Token);</li>
</ul>
<br>
<br>

# PORTUGUÊS

## DESCRIÇÃO:
<p>Uma API REST de check-in de academias, construida utilizando as metodologias TDD (Vitest) e SOLID, com JWT para autenticação.</p>

## FEITO COM:
<ul>
<li>Typescript</li>
<li>NodeJS</li>
<li>Fastify</li>
<li>Prisma</li>
<li>PostgreSQL</li>
<li>Bcryptjs</li>
<li>Zod</li>
<li>Docker</li>
<li>JWT</li>
<li>Vitest</li>
</ul>

## FUNCIONALIDES:
<ul>
<li>[X] - Deve ser possível se cadastrar;</li>
<li>[X] - Deve ser possível se autenticar;</li>
<li>[X] - Deve ser possível obter o perfil de um usuário logado;</li>
<li>[X] - Deve ser possível obter o número de check-ins relizados pelo usuário logado;</li>
<li>[X] - Deve ser possível o usuário obter seu histórico de check-ins;</li>
<li>[ ] - Deve ser possível o usuário buscar academias próximas;</li>
<li>[ ] - Deve ser possível o usuário buscar academias pelo nome;</li>
<li>[X] - Deve ser possível o usuário realizar o check-in em uma academia;</li>
<li>[ ] - Deve ser possível validar o check-in de um usuário;</li>
<li>[X] - Deve ser possível cadastrar uma academia;</li>
<br>
<li>[X] - O usuário não deve poder se cadastrar com um e-mail duplicado;</li>
<li>[X] - O usuário não pode fazer 2 check-ins no mesmo dia;</li>
<li>[X] - O usuário não pode fazer check-ins se não estiver perto (100m) da academia;</li>
<li>[ ] - O check-in só pode ser validado até 20 minutos após criado;</li>
<li>[ ] - O check-in só pode ser validado por administradores;</li>
<li>[ ] - A academia só pode ser cadastrar por administradores;</li>
<br>
<li>[X] - A senha do usuário precisa estar criptografada;</li>
<li>[X] - Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;</li>
<li>[X] - Todas listas de dados precisam estar paginadas com 20 itens por página;</li>
<li>[ ] - O usuário deve ser identificado por um JWT (JSON Web Token);</li>
</ul>
<br>
<br>

##### 1. To test the project open the terminal and then run the command:
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
