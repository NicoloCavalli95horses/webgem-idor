# High-entropy UUIDs in exposed objects in SPAs (Single-Page Application)

The goal of this project is to test the ability of web vulnerability scanners to detect Insecure Direct Object Reference (IDOR) vulnerabilities in SPA applications built with JS frameworks (eg., Vue, React, Angular, etc). In these applications, routing is handled by the front-end and the web server usually responds to HTTP requests to deliver content.

## Why this test?

- Classic IDOR vulnerabilities occur when a web server mistakenly provides resources to unauthorized users who discover simple patterns in the URLs (for example, from `/user/123` the adversary tries `/user/124`),
- In real web applications, these patterns are often not so simple. High-entropy UUIDs may be used, and the final endpoint may present a complicated structure,
- Web back-end developers may neglect to test the access to these resources,
- In SPA applications, these UUIDs may be stored within the component tree, as a component's state
- By tampering with a front-end an adversary can access this information and craft URLs to protected resources,
- We have empirically found that this phenomenon is not uncommon. Hence the need to develop a benchmark application to improve IDOR detection techniques.

## Setup

- `git clone`,
- `npm install` (both in the root folder and within `client/` folder),
- build from the client `npm run build` (static content will be served by nest.js),
- run with `npm run start`,
- test `http://localhost:3000/` with web scanners of your choice (OWASP ZAP, libraries, etc),
- A resource requiring elevated privileges can be accessed by extracting its `id` from previous HTTP messages and its `label` from the component tree, using Vue Dev Tool (eg., `http://localhost:3000/green/c7f4134d-b747-487f-872b-e0d20abac35c`).
