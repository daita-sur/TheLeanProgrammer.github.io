---
title:  "How to create and write to a CSV file in Node.js"
excerpt: "How I made my Pokemon dataset in 2 minutes"
header:
  image: /assets/images/blogs/csv/cover.png
  og_image: /assets/images/blogs/csv/cover.png
categories:
  - tech
tags:
  - webdev
  - nodejs
  - pokemon
  - data
  - filesystem
toc: true
---


## How to create and write to a CSV file in Node.js

### How I made my Pokemon dataset in 2 minutes

![](https://cdn-images-1.medium.com/max/2800/1*iCPGDxueHVx_8lgPJxntEA.png)

We don’t always get what we are searching for, do we?

The same thing happened to me! I wanted a proper dataset of information about each pokemon, so I started looking for different APIs or npm packages.

I couldn’t find everything I was looking for in a single source, but I was able to find it distributed in 2 different packages. So I decided to extract the required information from each into a CSV.

And, (I am not boasting), I was able to do it in less than 2 minutes! How? Using the objects-to-csv library. In this blog you will learn about how can you convert your array of objects into a CSV file in no time. Let’s get started.

In case you are only interested in the code, you can find it in this GitHub repo:

[**MadhavBahlMD/pokeData**
*Learning to write CSV file with NodeJS by making our own Pokemon Dataset. How I made my pokemon dataset in 2 minutes ᕦ(…*github.com](https://github.com/MadhavBahlMD/pokeData)

## About the packages

For the pokemon data, I came across these three packages with given problems —

 1. [pokedex](https://www.npmjs.com/package/pokedex) — Can’t search for all pokemons at the same time.

 2. [pokemon](https://www.npmjs.com/package/pokemon) — Just a list of all pokemons, but solves the problem of getting all pokemons.

 3. [objects-to-csv](https://www.npmjs.com/package/objects-to-csv) — Converts an array of JavaScript objects into the CSV format. The Life Saver.

So I decided to combine these :)

## Installing the packages

I guess I don’t need to tell you these steps if you are familiar with NodeJS, but then again, if you are coming from a different language, I will show you how to install these.

Just a single command!

```ja
    npm install --save objects-to-csv pokemon pokedex
```

## Writing the script

Awesome, now comes the main part. Before we proceed further, let’s see the response we get from the above two packages.

### The Pokemon Package

This package can be used to get the name/id of a particular pokemon. It can also be used to fetch a list of all pokemons.

```js
    const pokemon **=** require('pokemon');

    pokemon.all();
    *//=> ['Bulbasaur', …]*
```

### The Pokedex Package

This package can be used to fetch information about the pokemon including their sprite.

```js
    var Pokedex **=** require('pokedex'),
    pokedex **=** **new** Pokedex();

    console.log( pokedex.pokemon('garbodor') );
```

The result would be —

```js
    {
      id**:** 569,
      species_id**:** 569,
      height**:** 19,
      weight**:** 1073,
      base_experience**:** 166,
      order**:** 617,
      is_default**:** 1,
      name**:** 'garbodor',
      sprites**:** {
        normal**:** 'http://img.pokemondb.net/sprites/black-white/normal/garbodor.png',
        animated**:** 'http://img.pokemondb.net/sprites/black-white/anim/normal/garbodor.gif'
      }
    }
```

So you might have guessed, I want a csv of these details for all the pokemons. Let’s make the script.

Just like in any other node project, the first step would be to import the Libraries.

```js
    const ObjectsToCsv = require('objects-to-csv')
    const Pokedex = require('pokedex');
    const pokemon = require('pokemon');
```

Now let’s create an instance of the Pokedex and get all pokemons

```js
    const pokedex = new Pokedex();
    let pokemons = pokemon.all();
```

Now let’s make an array of objects where each object has the information about the pokemon. Don’t forget to stringify the nested objects (Otherwise they will create a problem while writing to CSV).

```js
    let pokemonData = pokemons.map (pokemon => {
      let pokemonDetails = pokedex.pokemon(pokemon.toLowerCase());
      *// Stringify the nested object
      *pokemonDetails = {
        ...pokemonDetails,
        sprites: JSON.stringify(pokemonDetails.sprites)
      }
      return pokemonDetails;
    })
```

Alright, so here’s our final step, writing to CSV.

I am using the [objects-to-csv](https://www.npmjs.com/package/objects-to-csv) library which makes the job really simple. See the following code, it’s self-explanatory!

```js
    *// Write to CSV File
    *const writeToCsv = async (data) => {
      const csv = new ObjectsToCsv(data);

    *// Save to file:
      *await csv.toDisk('./pokedex.csv');
    }
```

Now that we have made it this far, let’s run it!

```js
    node fileName.js
```

And that’s it! Magic. Our CSV is ready!

![](https://cdn-images-1.medium.com/max/2692/1*CMQmyVza0t91h5k-itjA9w.gif)

Here’s the complete code —

 <iframe src="https://medium.com/media/f225cbae54ba4a6e0b00bec87fef6099" frameborder=0></iframe>

That’s it, hope you found the post useful!

![](https://cdn-images-1.medium.com/max/2000/0*6GmDGGhAdDYvnCpO.png)

***

That’s it, I hope you enjoyed this article and got to know some tips which will help you in your life.

I publish weekly newsletters on self-help, productivity, and personal growth, do subscribe to it to hear from me every week.

[![[https://tinyletter.com/TheLeanProgrammer](https://tinyletter.com/TheLeanProgrammer)](https://cdn-images-1.medium.com/max/2000/1*zVzkU6dpMCHNviaY9TtmTA.png)](https://tinyletter.com/TheLeanProgrammer)

Thanks for reading till the end, I hope you liked the article. Do let me know how you implemented these techniques and if they helped you achieve your goals, would love to hear your experiences.

Feel free to reach out to me anytime if you want to discuss something :D