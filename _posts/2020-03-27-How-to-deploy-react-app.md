---
title:  "How to Deploy your React App on GitHub Pages in 2 minutes."
excerpt: "Just follow these 6 steps!"
header:
  image: /assets/images/blogs/deployreact/cover.png
  og_image: /assets/images/blogs/deployreact/cover.png
categories:
  - tech
tags:
  - react
  - tech
  - javascript
  - code
  - deploy
toc: true
---


## How to Deploy your React App on GitHub Pages in 2 minutes

### Just follow these 6 steps!

![](https://cdn-images-1.medium.com/max/2800/1*NSkQmWiR1QzXiS4YBTZaSQ.png)

I know it’s been a while since I have written a tech blog, seeing the situation the world is in right now, I started writing self-help and motivational blogs. Now I am back, I will try to write at least two tech blogs per month (let’s hope I am able to pull it off). Btw, in case you are looking for some actually implementable, no bullshit self-help stuff, check out my medium profile. Alright, let’s start now. ( ͡ ͜ ʖ ͡ )

 <iframe src="https://medium.com/media/cbea2c5877b3a01f51e7cf128d592c91" frameborder=0></iframe>

I really love it when you guys reach out to me with some doubts. I know that sometimes I might reply very late since my inbox is usually flooded, but I try to reply to everyone.

Yesterday a person reached out to me for asking how to deploy react apps on GitHub pages. It’s pretty damn easy, it can be done in some very simple steps, but then I thought, let’s write a blog on this, maybe it can help some other people facing the same issue. So yeah, keep asking me questions, so that I can get new blog ideas (ง ͡ʘ ͜ʖ ͡ʘ)ง

Follow these 6 simple steps to deploy your react app to gh-pages —

## Step #1: Set up your react app | The coding phase

Of course, if you are looking for steps to deploy your app you must be having an app completely set up in your system. So yeah, you can skip this step.

 <iframe src="https://medium.com/media/d5ed0e43fb3aa8fafc3156e0f75faeff" frameborder=0></iframe>

I will be using create-react-app for this, you can initialize your project using this command -

    npx create-react-app sample-app

if you are using an older version of node, you can install it globally and then use it like this —

    npm install -g create-react-app
    create-react-app sample-app

After this, make the required changes and once you are ready to deploy, come over to the second step.

## Step #2: Creating the repository

We are using the GitHub pages to deploy our application. Let’s create a new GitHub repository where we can push our code and that repository will be deployed.

Although it is very basic and you must be knowing how to create a new repository and add the remote, anyway, I’ll still show you ヽ(͡◕ ͜ʖ ͡◕)ﾉ

![](https://cdn-images-1.medium.com/max/2692/1*NROI_vI2xTylQKRsJyUoog.gif)

In case you want to check out the repository, here’s your link —
[**MadhavBahlMD/sample-react-app**
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/MadhavBahlMD/sample-react-app)

Now let’s add this as the remote to our local machine.

    git init

    git remote add origin [https://github.com/MadhavBahlMD/sample-react-ap](https://github.com/MadhavBahlMD/sample-react-app)p

Please note that the address would be different in your case.

## Step #3: Add gh-pages package

Another simple step, just run this command to add this package as a dev dependency.

    npm install gh-pages --save-dev

Yeah, that’s it, this step was the easiest.

## Step 4: Update package.json file

We need to add three properties in this,

    1. homepage
    2. predeploy
    3. deploy

Add homepage as a top level property in the file, with the value as the URL at which your app will get deployed to.

Generally, it will be —

    http://**username**.github.io/**appname**

Let’s sat the username is testuser and the app name/repository name is testapp then the URL will look something like this —

    http://testuser.github.io/testapp

But, if you have set up a custom domain, it will be different. So, in my case, it will be —

    http://madhavbahl.tech/sample-react-app

So I will add this —

    "homepage": "http://madhavbahl.tech/sample-react-app"

Next two properties we will add in the scripts.

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

In case you are using yarn, your predeploy script can be —

    "predeploy": "yarn build"

So, a sample package.json will look like —

    {
      "name": "sample-app",
      "version": "0.1.0",
      "private": true,
      "homepage": "http://madhavbahl.tech/sample-react-app",
      "dependencies": {
        ...
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      },
      ...
      ...
      "devDependencies": {
        "gh-pages": "^2.2.0"
      }
    }

Alright, now we are almost done!

## Step 5: Commit and push the code

This one’s simple

 <iframe src="https://medium.com/media/52fb948f3e14cbce3c34e2bbf2c69b8d" frameborder=0></iframe>

To commit and push your code, run this command —

    git add .

    git commit -m "Your commit message"

    git push -u origin master 

alright, here we are, the last step!

## Step 6: Run the deploy script

This one is again a very simple step, just run this command —

    npm run deploy

That’s it, now you can see your website live to the URL we discussed above. In my case the URL is — [http://madhavbahl.tech/sample-react-app/](http://madhavbahl.tech/sample-react-app/)

![](https://cdn-images-1.medium.com/max/2000/1*Igo9o17M4_gE7cWJZyHJbA.png)

Here is the GitHub repo, (although it’s just a barebones sample app, but still, I am mentioning the link to the repo):
[**MadhavBahlMD/sample-react-app**
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/MadhavBahlMD/sample-react-app/)

***

That’s it, hope you found the post useful!

I publish weekly newsletters on self-help, productivity, and personal growth, do subscribe to it to hear from me every week.

[![[https://tinyletter.com/TheLeanProgrammer](https://tinyletter.com/TheLeanProgrammer)](https://cdn-images-1.medium.com/max/2000/1*zVzkU6dpMCHNviaY9TtmTA.png)](https://tinyletter.com/TheLeanProgrammer)

Feel free to reach out to me anytime if you want to discuss something :D