# Incognito Search
![incognito](https://github.com/TupiNymQuim/search/assets/95882160/cd11d0c9-4594-4989-b518-7f25ef1a663b)

## The Anonymous Search Tool

Using the Brave API for searching, we combine this with the security provided by the decentralized network, specifically the Nym Technologies SA mixnet. The result? 100% anonymous and secure online consultations! 🥷🏼

Our search tool preserves the confidentiality of metadata by ensuring that each application fetch occurs across a distributed network, further reinforcing user privacy.

### Application Topology
![image](https://github.com/TupiNymQuim/search/assets/95882160/4af7a596-fb6e-4ae1-a0d1-abc1d9f789bb)

## How to test the application
If you would like to host the backend yourself you will need to:
* Host it in a machine that can be reached by the chosen network requester.
* Have an API key for brave search

If you can't do that, you can test the application with our self hosted backend that's shown on the `.env.local` file and running only the frontend locally on your machine.

### How to install the Backend

1) Install Rust following their [guide](https://www.rust-lang.org/tools/install)
2) Set Environment Variables in a `backend/.env` file, see the [example](https://github.com/TupiNymQuim/search/blob/main/backend/.env-example)
3) Navigate to the backend directory and run the program with `cd backend && cargo run`


### How to install the Frontend

1) Install node js with `apt install npm`
2) Go into the front directory and install the dependencies with `cd front && npm install`
3) Set Environment Variables in a `front/.env.local` file, see the [example](https://github.com/TupiNymQuim/search/blob/main/front/.env-example.local)
4) Run the node with `npm run dev`

## Team Members (Discord) :

- @itsmevitinn - Developer
- @izacabral - Developer and Design
- @pedroarnaldo - Developer
- @psydenst - Developer, Philosophy Graduate and Spokesman
- @supermeia - Developer and Spokesman
- @ukinaa - Developer
- @vitorsantanna  - Developer and Cybersecurity Analyst
