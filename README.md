# SETUP

1. Download the Project 2. Ensure node.js is installed (https://nodejs.org/en/)

3. Open a terminal in the root folder of the project

4. Type the following commands:

a. Cd shared

b. Npm i

c. Npm link

d. Cd ..

e. Cd client

f. Add file called .env in the client folder, and add the code below to it:

NODE_ENV=development

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51IDatjDjZpVcmWL1lt5sCGGR7bhovYooY080IFcBGjpAWQanpltyXeP1HvH2Akec9wL4lXrQ60UUyFmsiPRT8h7t00IEffLQSQ

g. Npm i

h. Npm link @local/shared

i. Cd ..

j. Cd server

k. Add file called .env in the server folder, and add the code below to it:

NODE_ENV=development

PORT=5000

STRIPE_SECRET_KEY=sk_test_51IDatjDjZpVcmWL1p7HNsMjGHWn3tTSxOm9HFAMT5vxzWBxP5XqrjMIh1BlaNP6Xnqg2U824ZPF9NyAFumaBMB1R00gLA2GBmo

BASE_URL="http://localhost:5000/api"

ACCESS_TOKEN_SECRET=adrfigaehrpijh3249568t7weru5tghjblkxfbnv

ACCESS_TOKEN_LIFE=1800 # seconds

# ACCESS_TOKEN_LIFE=1 # testing

ACCESS_TOKEN_NAME=accessToken

REFRESH_TOKEN_SECRET=sdfiohgsyrtp90j8we456-0u9y8eitdyjondgkhlndfghj

REFRESH_TOKEN_LIFE=86400 # seconds

REFRESH_TOKEN_NAME=refreshToken

MAILTRAP_USER=97d1d0db961717

MAILTRAP_PASS=c178b6aa985413

l. Npm i

m. Npm link @local/shared

n. Npm run sync

o. Cd ..

p. Npm i

q. Npm start

5. Go to localhost:3000