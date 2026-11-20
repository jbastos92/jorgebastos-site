---
title: How I’d Design a URL Shortener
date: 2026-11-20
summary: My current study notes on the core flows, storage, collision handling, and scaling a URL shortener.
tags: system design, interview preparation, backend
---

This is my current approach to a URL shortener design exercise. I’d start by clarifying the two core flows: a user submits a long URL and receives a short link, and a visitor who opens that link is redirected to the original URL.

## API and storage

I’d expose `POST /links` to create a link and `GET /{code}` to redirect a visitor. The service would store a mapping from each short code to its original URL in a database.

For each new link, I’d generate a random Base62 code and save it with the URL. A unique constraint on the code protects against collisions, including when requests arrive at the same time. If an insert fails because the code already exists, I’d generate another code and retry, up to three attempts.

## Redirects and failures

For `GET /{code}`, I’d look up the original URL and return a `302` redirect. I’d return `404` if the code does not exist. A `301` could also be considered, depending on whether the redirect should be treated as permanent; I’d clarify that requirement first.

If all three code-generation attempts fail, I’d return a server error and log or alert on the failure. A `409 Conflict` is more appropriate when the client requests a custom code that is already taken, because the client can choose another one. For an unexpected internal failure, I’d use `500`, or possibly `503` if the service is temporarily unavailable.

## Scaling and open questions

I’d begin with a relational database and add caching if redirect lookups make database reads a bottleneck. Before choosing a larger-scale design, I’d ask about expected link creation and redirect volume; redirect traffic may be heavier. I’d also clarify code length, expiration and editing behavior, URL validation and abuse prevention, backups, monitoring, and what the service should do if storage is unavailable.

This is a starting design. I’d refine it as the requirements and traffic estimates become clear.
