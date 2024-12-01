# 介绍

本项目原作者：[SuneBear](https://github.com/SuneBear/Piano-Flow)

原作者的仓库fork而来，原作者的仓库已经很久没有维护了，所以自己动手重构了项目,同时原作者的仓库也有值得参考的fork.

从[Touch Pianist](http://touchpianist.com) 获得灵感，最近开发obsidian接触前端语言，想着能不能自己写一个，一路从appstore，google play，reddit，然后是github，到本项目。

在发现这些开源项目之前，自己花了1-2天写了个从0开始的很粗糙的[demo](https://github.com/LIUBINfighter/Everyone-pianist)被js动画劝退，~~可以参考~~ 纯属~~玩具~~了哈哈。效果在：[Everyone-pianist](https://everyone-pianist.vercel.app/).

我希望能实现上传midi文件然后能够分享/社区活动等，所以要加入一些后端框架和服务器/数据库服务。不过我还没想好用什么后端框架，以及数据库用什么。我希望至少能优先保证全前端页面的免费无广告，流畅体验和新功能实现，因为数据库等后端服务不可避免涉及到鉴权以及付费。

[otomata-js](https://github.com/archiloque/otomata-js?tab=readme-ov-file) 这个库的作者是原项目作者致谢的仓库之一，感谢（虽然我还没搞懂怎么做的）。

在进行这个项目的继续开发过程中，我会陆续把原作者在项目中提及的各类插件，库，框架，库的版本，以及我使用的一些参考链接，都列在下面。感谢开源社区！

感谢[earslap](https://earslap.com/)开发[Touch Pianist](http://touchpianist.com)的创意，以及[SuneBear](https://github.com/SuneBear/Piano-Flow)的开源实现！

---

# Piano Flow

A music game follows the piano flows. Its rhythm mode inspired by Touch Pianist, thanks to Batuhan Bozkurt. The main purpose I made it was to achieve a dream of my youth and to help me practice the fundamentals of MUG.

I need to be honest with you, the game has a bad playability which can't make you feel completely immersed with simple interaction. Maybe it will improve your gameplay through a virtual reality headset, but I think the best experience is on a real piano nowadays.

## Run on Local
``` bash
$ git clone git@github.com:SuneBear/Piano-Flow.git
$ cd Piano-Flow
$ npm install
$ npm start
```

## Source File Structure
``` base
├── assets        # Common Static Resources
├── game          # Game Core
├── services      # Common Data and Context Status
├── styles        # GLobal Styles
├── uis           # App UI Components
├── utils         # App Helpers
├── views         # App BLL Components

├── app.vue       # App Main
├── index.html    # Template for HTML Webpack Plugin
├── lib.js        # Dependencies Entry Point
├── loading.js    # Loading Entry Point
├── main.js       # Client Entry Point
├── router.js     # Route Map and Router Instance
```
The structure is a experimental combination of SPA based on Vue 2 and MUG based on Pixi.js, MIDI.js, etc. They are basically independent, but using the shared assets and services.

## Browser Compatibility
The game was developed in Chrome 54 (Mac OS X) without cross-browser testing. I am sure it works on webkit-based browsers such as Chrome, Safari. Hold on, there are so many weird questions that I have not met yet if you play it in other browser/device. Feel free to raise an issue, let's make it work first.

## Further Improvements
- Brand Redesign & UI Redesign & Animation Tuning
- Gameplay: Add some different modes
- Music: Optimize timbre & rhythm
- Refactor game, make code more abstract :(

## Dependencies & References

#### Frameworks & Libraries
- [Vue](https://github.com/vuejs/vue) - Simple yet powerful library for building modern web interfaces.
- [Pixi.js](https://github.com/pixijs/pixi.js) - Super fast HTML 5 2D rendering engine that uses webGL with canvas fallback.
- [Midi.js](https://github.com/SuneBear/midi.js) - A modern JavaScript port of MIDI.js.
- [RxJS](https://github.com/Reactive-Extensions/RxJS) - The Reactive Extensions for JavaScript.

#### Video & Games
- [From Paper to Screen](https://vimeo.com/69375692) - Animation which shows typography evolution from paper to screen.
- [Touch Pianist](http://touchpianist.com) - Tap in Rhythm and Perform Your Favourite Music.
- [Euphony](https://github.com/qiao/euphony) - A web-based MIDI player and visualizer.
- [NeoTrap](https://github.com/omarhuseynov011/NeoTrap) - A Music based fast-paced action game.

#### Font
- [EB Garamond](http://www.georgduffner.at/ebgaramond) - A revival of Claude Garamont’s famous humanist typeface from the mid-16th century.

## License
This game is licensed under the MIT license.
