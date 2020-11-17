# Weather App

In this project you will be building a functional weather app. You will use an API to get real weather data to display.

You will use this [Youtube tutorial](https://youtu.be/wPElVpR1rwA) as a guide.

This project consists of both frontend and backend work. For the frontend you will need to make the layout and design of the weather app in HTML and CSS. To start, you can write HTML a single state of the weather app. For example you can type 55 for the temperature. Later, when you get to the backend portion you can replace this static text with the value you get from the API.

## Notes

- Backend task starts at [10:17](https://youtu.be/wPElVpR1rwA?t=617) in the video
- You can see the design file [here in Figma App](https://www.figma.com/file/8J0CQDU5CbzQjJSTtN3PGe/Design?node-id=0%3A1).
- Instead of the Darksky API you will use weatherapi.com. You can use the API URL listed below to get weather data.
- You will use the designs provided in this project instead of the ones in the Youtube video.

## URLs

- API URL: `http://api.weatherapi.com/v1/forecast.json?key=5863755acb594078956213139202910&q=42.3601,-71.0589&days=1`
- Raleway Stylesheet: `<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&display=swap" rel="stylesheet">`
- Raleway Style: `font-family: 'Raleway', sans-serif;`
- [Download Icons](https://cdn.weatherapi.com/weather.zip)

# Setup

1. Clone the github repository onto your computer. You can use the [Github Desktop](https://desktop.github.com/) application to do this.
1. Make sure you have [Node.js](https://nodejs.org/en/download/) installed.
1. Navigate to the folder of the project in Command Prompt (on Windows) or Terminal (on Mac).
1. Run `npm install` to install the required plugins.

## Linting

"Linting" is a process that we can run on our code that formats it in a consistent manner. Formatting our code (indenting, adding semi-colons, etc) can be very tedious. To save us time and effort we can use tools to do this formatting for us.

### Automatic Linting

We can install an extension in our text editor in order to do linting for us.

1. Open Atom.
1. Navigate to Settings -> Install
1. Search for prettier-atom and install it.
1. Once installed navigate to Settings -> Packages -> prettier-atom
1. Enable these options:

- Format Files on Save
- Ignore Files in .eslintignore
- Only format if Prettier is found in your project's dependencies
- Only format if a Prettier config is found
- Ignore files in `node_modules`

### Linting everything

1. In Command Prompt/Terminal run `npm run lint`.
1. You will get a list of things that need to be fixed.

# Design

## Body

```
width: 375px;
height: 667px;
font-family: 'Raleway', sans-serif;
background: linear-gradient(#62C6FF, #A3DDFE);
```

## City Text

```
font-size: 36px;
font-weight: 300;
```

## Day and Time Text

```
font-size: 14px;
font-weight: 400;
```

## Condition Text

```
font-size: 48px;
font-weight: 300;
```

## Tempurature Text

```
font-size: 144px;
font-weight: 200;
```

## Low/High Temp Text

```
font-size: 30px;
font-weight: 300;
```
