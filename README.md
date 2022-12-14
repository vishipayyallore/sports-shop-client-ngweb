# Sports Shop Client Web Application

A Simple Angular 14+ Client Application for Sports Store

## Getting Started

### Prerequisites

- Node.js
- Angular CLI

## Commands Executed

```angularcli
npm -v
node -v
ng v

ng new sports-shop-client-ngweb

ng generate m products --dry-run
ng generate m products

ng generate m product --dry-run
ng generate m product

ng g c product

ng g c products 

ng g s products/products --dry-run
```

## Docker Build

```docker
docker build --pull --rm -f "Dockerfile" -t sports-shop-client-ngweb:latest "." 
```

## Run Docker Container for Sports Shop Microservice

```bash
docker run -p 8081:4200 -it -d sports-shop-client-ngweb:latest
```
