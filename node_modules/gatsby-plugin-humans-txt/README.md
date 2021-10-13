# gatsby-plugin-humans-txt

> Create `humans.txt` for your Gatsby site.

![[Humans.txt](http://humanstxt.org/)](https://raw.githubusercontent.com/DylanTackoor/gatsby-plugin-humans-txt/master/humans.png)

## Overview

Gatsby plugin to generate a `humans.txt` file on `gatsby build`.

`humans.txt` is an initiative for knowing the people behind a website. It's a TXT file that contains information about the different people who have contributed to building the website.

## Install

```shell
npm i gatsby-plugin-humans-txt
```

or

```shell
yarn add gatsby-plugin-humans-txt
```

## Usage

Add the plugin to your `gatsby-config.js` and pass the `options` property an object representation of what you want the `humans.txt` file to look like. The example below can be used to follow the [humanstxt.org standard](http://humanstxt.org/Standard.html):

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-humans-txt`,
    options: {
      team: [
        {
          Developer: `Dylan Tackoor`,
          GitHub: `dylantackoor`,
          Twitter: `@dylantackoor`
        }
      ],
      thanks: [`Gatsby`, `Node`],
      site: {
        'Last update': `2019/4/16`,
        Standards: `JavaScript`,
        Components: `humans-generator`,
        Softwares: `Visual Studio Code`
      },
      note: `Made in Miami.`
    }
  }
]
```

### Options

Options are passed directly to [humans-generator](https://www.npmjs.com/package/humans-generator) which maps top level properties in the `options` object from this:

```javascript
{
  teams: [
    { Role: `Name`, Twitter: `@username`}
    { Role2: `Name2`, Twitter: `@username2` },
  ]
}
```

To a text file like this:

```
/* TEAM */
Role: Name
Twitter: @username

Role2: Name2
Twitter: @username2
```

To follow the standard, use the below options:

|   Name    |            Type            |   Default    |                         Description                          |
| :-------: | :------------------------: | :----------: | :----------------------------------------------------------: |
| `metaTag` |         `boolean`          |    `true`    | Flag to include `<link rel="author" href="/humans.txt" />` in the `head` tag |
| `header`  |          `String`          | `humans.txt` |           Text to be converted to header ASCII art           |
|  `team`   |         `Object[]`         | `undefined`  |  Information about every **human** involved in the project   |
| `thanks`  | `Object[]` \|\| `String[]` | `undefined`  |                 Path to external config file                 |
|  `site`   |         `Object[]`         | `undefined`  |            Additional information about the site             |
|  `note`   |          `String`          | `undefined`  |            Path where to create the `robots.txt`             |

Or don't! :man_shrugging:

## TODOs

- [ ] Write [humans-generator](https://www.npmjs.com/package/humans-generator) zero dependency alternative
  - [ ] Add `filePath` option to override default
  - [ ] change `header` option to print the value without automatically converting to ASCII (see awesome [Netflix example](https://www.netflix.com/humans.txt))
- [ ] Determine feasibility of automatically pulling the `teams` data from the git repository commits

## Support

[@dylantackoor](https://twitter.com/DylanTackoor)
