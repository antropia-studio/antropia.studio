---
title: 'The 20-hour app'
description: "How we rewrote our first React Native app in 20 hours"
summary: "A rewrite of our first React Native app and a personal take on tooling for prototypes"
heroImage: "/20-hour-app/four days.png"
keywords: [ "App development", "Prototyping", "React Native", "App design" ]
pubDate: 'Oct 21 2024'
---

# The context

Back in 2018, when Antropia didn't even exist, I (that'd be me, Sergio) was working at [Karumi](https://www.karumi.com/), a small studio specialized in developing mobile apps. As part of the team, I juggled between platforms, writing Java/Kotlin for Android and Obj-C/Swift for iOS. You can imagine the mental gymnastics and the many hours I spent switching gears, fighting to understand the differences between interfaces and protocols, the most idiomatic way to implement dependency injection in each platform, and the irks of different rendering systems. React Native promised an escape from this complexity: one ecosystem for both platforms (and hopefully, a farewell to XCode, which still gives me nightmares).

During that time, my then-girlfriend (now wife) was dealing with food intolerances. Her doctor recommended a rotation diet that implied avoiding repeated ingredients in consecutive meals. To help her manage this challenge, I decided to create an app that would track ingredients and suggest alternatives she hadn't eaten recently. This became my perfect opportunity to dive into React Native, and within a month, the app was live in both stores.

![The original designs](/20-hour-app/mockup.png)

# Homage

For years, we left the app there, paying itself for the Apple Developer Program. In that time, and despite our growing expertise in React Native, TypeScript, and modern development practices, we couldn't seem to update Four Days. Our Git history was littered with abandoned branches `fourdays-ts`, `fourdays-ts2`, `fourdays-rn70`, none of them saw the light of production.

Late in 2023, both app stores **understandably** requested an update to support newer OS versions and devices. Unfortunately, I missed the notifications and the app was eventually removed from both platforms. With the creation of Antropia, we felt we owned something to the project that brought us into this career path. So, after finishing Trufario, we decided to apply everything we learned to rewrite Four Days.

# The rewrite

Before getting our hands dirty we decided to define a clear scope of the project, including the following rules:

- **No new designs** - We decided to not re-visit any of the usability and design choices we made in the past. After all, and to our surprise, there was still a small group of people using it and we didn't want to ruin their experience.
- **Feature parity** - The rewrite would not add nor remove any feature of the original implementation. It would be an updated copy.
- **Backward compatibility** - We would make sure the data stored in previous versions of the app would work with the rewritten version.

In total, the rewrite took just us 20 hours (discounting for store approval and testing times) from creating the repository to having the app published in the stores. Here is a video of the new Four Days:

![The new Four Days app](/20-hour-app/four%20days.webp)

This feat was only possible because:

- **No switching hats** - Even though we lost the original Sketch designs, we were able to compile the original app and have it running in our hands. That meant there was no context switching to design/product roles, didn't have to rethink how any of the features worked or what color palette and iconography we wanted to use.
- **Trufario experience** - We were able to dodge many of the rabbit holes we had in Trufario. Why running another lengthy investigation on the most ergonomic global state library? (that'd be [jotai](https://jotai.org/) BTW). Why spending time on fixing safe area disparities between platforms? Trufario gave us the tools and the solution to many of the day-to-day problems of creating a new app.
- **The tooling** - We started (and continue) building a set of tools that'd help us build quick prototypes. This one deserves its own section so keep reading.

# The tooling

After Trufario, we realized how much we enjoyed working on one very specific problem and wondered why it had to be a one-shot. We started envisioning a way to focus on the problem at stake and less on the surroundings (processes,
languages, frameworks, libraries, etc).

Following the essence of [playful programming](https://news.ycombinator.com/item?id=38828766) we created a list of tools, each focused
on solving a specific process or problem. Some are being used in all our current and future apps and are evolving quickly, others are still an empty GitHub repository with some issues. They all have silly/temporal names, if only, because we didn't want to spend hours in *the surroundings of the surroundings*. Here is a quick tour on the tools we're actively developing:

- **Gardenia**, the UI library - React Native doesn't offer a complete set of components for your app. There isn't even a `Button` component (I get why, though). There are plenty of options out there but we wanted something we could break and extend for our own apps. Gardenia uses [Tailwind CSS](https://tailwindcss.com/) + [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames) under the hood and provides a set of reusable themed components that is growing each day.

![Video of Gardenia](/20-hour-app/telar.webp)

- **Substrate**, the utils library - we find ourselves rewriting the same snippets of code for the most trivial things. From object and array utility functions (`groupBy`, `repeat`, `zip`, `chunkify`, etc) to generating random ids, mathematical usual suspects (e.g. `clamp`, `inRange`) and more.
- **Lutier**, our project assistant - Creating new React Native projects involve all the usual scaffolding: linting, git hooks, npm scripts, Expo integration, code architecture and more. This is all solvable with a project template but we needed something else, something that could be augmented. What if I later realize I need deep links in the app? Or if I want to include in-app purchases, translations or camera permissions? The assistant fills these gaps, it's a CLI tool that helps us progressively add features to our React Native projects.

![Lutier CLI](/20-hour-app/lutier.jpg)

# The future of prototypes

If you have reached this far you probably see where this is heading: we've found our place in the world of prototyping. We love creating apps out of thin air and the imagination of the people we collaborate with.

If you need building something like this, drop us a message.
