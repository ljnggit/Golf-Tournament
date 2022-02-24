Download the Project
Ensure node.js is installed (https://nodejs.org/en/)
Open a terminal in the root folder of the project
Type the following commands:
Cd shared
Npm i
Npm link
Cd ..
Cd client
Add file called .env in the client folder, and add the code below to it:

NODE_ENV=development
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51IDatjDjZpVcmWL1lt5sCGGR7bhovYooY080IFcBGjpAWQanpltyXeP1HvH2Akec9wL4lXrQ60UUyFmsiPRT8h7t00IEffLQSQ

Npm i
Npm link @local/shared
Cd ..
Cd server
Add file called .env in the server folder, and add the code below to it:

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

Npm i
Npm link @local/shared
Npm run sync
Cd ..
Npm i
Npm start 
Go to localhost:3000
