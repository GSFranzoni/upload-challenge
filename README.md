# Image Uploader

### Challenge
Simple image uploader made with **Laravel**, **Amazon S3**, **React** and **Inertia JS**.

### Requirements
- I can drag and drop an image to upload it
- I can choose to select an image from my folder
- I can see a loader when uploading
- When the image is uploaded, I can see the image and copy it
- I can choose to copy to the clipboard

Read more on the [challenge page](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx).

### Project setup
First of all, you need to install **docker** and **docker-compose**. The instructions can be found [here](https://docs.docker.com/compose/install/).

Then, you need to install **Make**. The instructions can be found [here](https://www.gnu.org/software/make/).

You need to create a `.env` file in the root of the project. You can use the `.env.example` file as a template.
```
cp .env.example .env
```

Make sure you fill the `AWS_*` variables with your AWS credentials.

After that, you can run the following command to start the project:
```
make init
```
It will install all dependencies and start the project. You can access the project on [http://localhost](http://localhost).

### Demo
You can see a demo of the project [here](https://gsfranzoni-image-uploader.herokuapp.com/upload).
