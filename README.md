[![npm version](https://badge.fury.io/js/react-something-nice.svg)](https://badge.fury.io/js/react-something-nice)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)

# react-something-nice

A very simple component to display nice messages for your team.

## Motivation

Creating useful, elegant software is easier than ever. Probably the next step is software that's nice and
makes you feel good or, at least, makes things more bearable.

But maybe you don't have time. Or you don't know what to write. Or you're afraid that it will have less
impact if the same message is repeated over and over. Enter the `SomethingNice` component!

The idea is to provide you with a set of standard, short, friendly multi-purpose messages to make your users
feel good and happy.

## Installing

`npm i react-something-nice`

## Using It

`<SomethingNice />` . For a list of the current messages, see [here](src/messages.js)

### Languages

`<SomethingNice lang='es' />`

Starting with version 0.3.0, we now support multiple languages. Use a `lang` prop to set it (`'en'` is the
default):

| Code | Language | From Version |
| ---- | -------- | ------------ |
| `en` | English  | NA (default) |
| `es` | Spanish  | `0.3.0`      |

### Styling

Starting with version 0.4.0, you can now pass a `style` or `className` prop to set the, eh, style or CSS class
of your component:

`<SomethingNice style={nicestyle}>`

`<SomethingNice className="niceClass">`

## Ideas? Suggestions?

Please [Create an Issue](https://github.com/xnt/react-something-nice/issues)

## Contibuting

Feel free to send a Pull Request. Also check out our 
[Guidelines](CONTRIBUTING.md) (WIP)
