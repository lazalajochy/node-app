import express from "express";
import { db } from "./config/config.js";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";
import bodyParser from "body-parser";

dotenv.config()

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let  connMessage = ""
try {
    db.authenticate();
    db.sync({alter: true});
    connMessage = "connection done"
    console.log("The connection to potgres has been stablished...")
} catch (error) {
    connMessage = error
    console.log(error)

    
}

app.use(userRoute)





console.log(process.env.HOST, " hello hello")
console.log(process.env.POSTGRES_DB, " hello hello again")
app.listen(3000, () => {
    console.log(`App is listening on port 3000`);
});


/*
steps:
  - name: gcr.io/cloud-builders/docker
    env:
      - 'HOST=${_HOST}'
    args:
      - build
      - '--no-cache'
      - '-t'
      - >-
        $_AR_HOSTNAME/$PROJECT_ID/cloud-run-source-deploy/$REPO_NAME/$_SERVICE_NAME:$COMMIT_SHA
      - .
      - '-f'
      - Dockerfile
      - '--build-arg=POSTGRES_DB=${_POSTGRES_DB}'
      - '--build-arg=POSTGRES_USER=${_POSTGRES_USER}'
      - '--build-arg=POSTGRES_PASSWORD=${_POSTGRES_PASSWORD}'
    id: Build
  - name: gcr.io/cloud-builders/docker
    args:
      - push
      - >-
        $_AR_HOSTNAME/$PROJECT_ID/cloud-run-source-deploy/$REPO_NAME/$_SERVICE_NAME:$COMMIT_SHA
    id: Push
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk:slim'
    args:
      - run
      - services
      - update
      - $_SERVICE_NAME
      - '--platform=managed'
      - >-
        --image=$_AR_HOSTNAME/$PROJECT_ID/cloud-run-source-deploy/$REPO_NAME/$_SERVICE_NAME:$COMMIT_SHA
      - >-
        --labels=managed-by=gcp-cloud-build-deploy-cloud-run,commit-sha=$COMMIT_SHA,gcb-build-id=$BUILD_ID,gcb-trigger-id=$_TRIGGER_ID
      - '--region=$_DEPLOY_REGION'
      - '--quiet'
      - '--set-env-vars'
      - 'HOST=${_HOST}'
      -
    id: Deploy
    entrypoint: gcloud
images:
  - >-
    $_AR_HOSTNAME/$PROJECT_ID/cloud-run-source-deploy/$REPO_NAME/$_SERVICE_NAME:$COMMIT_SHA
options:
  substitutionOption: ALLOW_LOOSE
  logging: CLOUD_LOGGING_ONLY
substitutions:
  _SERVICE_NAME: node-app
  _DEPLOY_REGION: us-central1
  _AR_HOSTNAME: us-central1-docker.pkg.dev
  _TRIGGER_ID: 9d5518ed-3878-4cd3-9ed0-e0cb8a9b5676
  _HOST: 34.46.137.174
  _PLATFORM: managed
tags:
  - gcp-cloud-build-deploy-cloud-run
  - gcp-cloud-build-deploy-cloud-run-managed
  - node-app


*/