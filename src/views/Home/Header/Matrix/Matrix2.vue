<template>
  <div id="lost-like-tears-in-the-rain" />
</template>

<script>
import _ from 'lodash'

/* eslint-disable */
export default {
  mounted () {
    /*
      The inspiration for this visualisation comes from the example in the wikipedia article. All code is my own. @timiscoding
      https://codepen.io/timiscoding/pen/RjgxoY
      https://en.wikipedia.org/wiki/Matrix_digital_rain
    */

    const s = (p) => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      let FONT_SIZE = 20
      const charList = (charCode, n) => String.fromCharCode(..._.range(charCode, charCode + n))
      const unicodeA = 65
      const unicode0 = 48
      const unicodeKa = 65398
      const alphabet = charList(unicodeA, 26)
      const numbers = charList(unicode0, 10)
      const katakana = charList(unicodeKa, 32)

      // const emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🥾 🥿 🧦 🧤 🧣 🎩 🧢 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🥽 🥼 🌂 🧵 🧶👶🏻 👦🏻 👧🏻 👨🏻 👩🏻 👱🏻‍♀️ 👱🏻 👴🏻 👵🏻 👲🏻 👳🏻‍♀️ 👳🏻 👮🏻‍♀️ 👮🏻 👷🏻‍♀️ 👷🏻 💂🏻‍♀️ 💂🏻 🕵🏻‍♀️ 🕵🏻 👩🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 👨🏻‍💻 👩🏻‍💼 👨🏻‍💼 👩🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 👨🏻‍⚖️ 🤶🏻 🎅🏻 👸🏻 🤴🏻 👰🏻 🤵🏻 👼🏻 🤰🏻 🙇🏻‍♀️ 🙇🏻 💁🏻 💁🏻‍♂️ 🙅🏻 🙅🏻‍♂️ 🙆🏻 🙆🏻‍♂️ 🙋🏻 🙋🏻‍♂️ 🤦🏻‍♀️ 🤦🏻‍♂️ 🤷🏻‍♀️ 🤷🏻‍♂️ 🙎🏻 🙎🏻‍♂️ 🙍🏻 🙍🏻‍♂️ 💇🏻 💇🏻‍♂️ 💆🏻 💆🏻‍♂️ 🕴🏻 💃🏻 🕺🏻 🚶🏻‍♀️ 🚶🏻 🏃🏻‍♀️ 🏃🏻 🤲🏻 👐🏻 🙌🏻 👏🏻 🙏🏻 👍🏻 👎🏻 👊🏻 ✊🏻 🤛🏻 🤜🏻 🤞🏻 ✌🏻 🤟🏻 🤘🏻 👌🏻 👈🏻 👉🏻 👆🏻 👇🏻 ☝🏻 ✋🏻 🤚🏻 🖐🏻 🖖🏻 👋🏻 🤙🏻 💪🏻 🖕🏻 ✍🏻 🤳🏻 💅🏻 👂🏻 👃🏻👶🏼 👦🏼 👧🏼 👨🏼 👩🏼 👱🏼‍♀️ 👱🏼 👴🏼 👵🏼 👲🏼 👳🏼‍♀️ 👳🏼 👮🏼‍♀️ 👮🏼 👷🏼‍♀️ 👷🏼 💂🏼‍♀️ 💂🏼 🕵🏼‍♀️ 🕵🏼 👩🏼‍⚕️ 👨🏼‍⚕️ 👩🏼‍🌾 👨🏼‍🌾 👩🏼‍🍳 👨🏼‍🍳 👩🏼‍🎓 👨🏼‍🎓 👩🏼‍🎤 👨🏼‍🎤 👩🏼‍🏫 👨🏼‍🏫 👩🏼‍🏭 👨🏼‍🏭 👩🏼‍💻 👨🏼‍💻 👩🏼‍💼 👨🏼‍💼 👩🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 👨🏼‍🔬 👩🏼‍🎨 👨🏼‍🎨 👩🏼‍🚒 👨🏼‍🚒 👩🏼‍✈️ 👨🏼‍✈️ 👩🏼‍🚀 👨🏼‍🚀 👩🏼‍⚖️ 👨🏼‍⚖️ 🤶🏼 🎅🏼 👸🏼 🤴🏼 👰🏼 🤵🏼 👼🏼 🤰🏼 🙇🏼‍♀️ 🙇🏼 💁🏼 💁🏼‍♂️ 🙅🏼 🙅🏼‍♂️ 🙆🏼 🙆🏼‍♂️ 🙋🏼 🙋🏼‍♂️ 🤦🏼‍♀️ 🤦🏼‍♂️ 🤷🏼‍♀️ 🤷🏼‍♂️ 🙎🏼 🙎🏼‍♂️ 🙍🏼 🙍🏼‍♂️ 💇🏼 💇🏼‍♂️ 💆🏼 💆🏼‍♂️ 🕴🏼 💃🏼 🕺🏼 🚶🏼‍♀️ 🚶🏼 🏃🏼‍♀️ 🏃🏼 🤲🏼 👐🏼 🙌🏼 👏🏼 🙏🏼 👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼 🤜🏼 🤞🏼 ✌🏼 🤟🏼 🤘🏼 👌🏼 👈🏼 👉🏼 👆🏼 👇🏼 ☝🏼 ✋🏼 🤚🏼 🖐🏼 🖖🏼 👋🏼 🤙🏼 💪🏼 🖕🏼 ✍🏼 🤳🏼 💅🏼 👂🏼 👃🏼👶🏽 👦🏽 👧🏽 👨🏽 👩🏽 👱🏽‍♀️ 👱🏽 👴🏽 👵🏽 👲🏽 👳🏽‍♀️ 👳🏽 👮🏽‍♀️ 👮🏽 👷🏽‍♀️ 👷🏽 💂🏽‍♀️ 💂🏽 🕵🏽‍♀️ 🕵🏽 👩🏽‍⚕️ 👨🏽‍⚕️ 👩🏽‍🌾 👨🏽‍🌾 👩🏽‍🍳 👨🏽‍🍳 👩🏽‍🎓 👨🏽‍🎓 👩🏽‍🎤 👨🏽‍🎤 👩🏽‍🏫 👨🏽‍🏫 👩🏽‍🏭 👨🏽‍🏭 👩🏽‍💻 👨🏽‍💻 👩🏽‍💼 👨🏽‍💼 👩🏽‍🔧 👨🏽‍🔧 👩🏽‍🔬 👨🏽‍🔬 👩🏽‍🎨 👨🏽‍🎨 👩🏽‍🚒 👨🏽‍🚒 👩🏽‍✈️ 👨🏽‍✈️ 👩🏽‍🚀 👨🏽‍🚀 👩🏽‍⚖️ 👨🏽‍⚖️ 🤶🏽 🎅🏽 👸🏽 🤴🏽 👰🏽 🤵🏽 👼🏽 🤰🏽 🙇🏽‍♀️ 🙇🏽 💁🏽 💁🏽‍♂️ 🙅🏽 🙅🏽‍♂️ 🙆🏽 🙆🏽‍♂️ 🙋🏽 🙋🏽‍♂️ 🤦🏽‍♀️ 🤦🏽‍♂️ 🤷🏽‍♀️ 🤷🏽‍♂️ 🙎🏽 🙎🏽‍♂️ 🙍🏽 🙍🏽‍♂️ 💇🏽 💇🏽‍♂️ 💆🏽 💆🏽‍♂️ 🕴🏼 💃🏽 🕺🏽 🚶🏽‍♀️ 🚶🏽 🏃🏽‍♀️ 🏃🏽 🤲🏽 👐🏽 🙌🏽 👏🏽 🙏🏽 👍🏽 👎🏽 👊🏽 ✊🏽 🤛🏽 🤜🏽 🤞🏽 ✌🏽 🤟🏽 🤘🏽 👌🏽 👈🏽 👉🏽 👆🏽 👇🏽 ☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽 👋🏽 🤙🏽 💪🏽 🖕🏽 ✍🏽 🤳🏽 💅🏽 👂🏽 👃🏽👶🏾 👦🏾 👧🏾 👨🏾 👩🏾 👱🏾‍♀️ 👱🏾 👴🏾 👵🏾 👲🏾 👳🏾‍♀️ 👳🏾 👮🏾‍♀️ 👮🏾 👷🏾‍♀️ 👷🏾 💂🏾‍♀️ 💂🏾 🕵🏾‍♀️ 🕵🏾 👩🏾‍⚕️ 👨🏾‍⚕️ 👩🏾‍🌾 👨🏾‍🌾 👩🏾‍🍳 👨🏾‍🍳 👩🏾‍🎓 👨🏾‍🎓 👩🏾‍🎤 👨🏾‍🎤 👩🏾‍🏫 👨🏾‍🏫 👩🏾‍🏭 👨🏾‍🏭 👩🏾‍💻 👨🏾‍💻 👩🏾‍💼 👨🏾‍💼 👩🏾‍🔧 👨🏾‍🔧 👩🏾‍🔬 👨🏾‍🔬 👩🏾‍🎨 👨🏾‍🎨 👩🏾‍🚒 👨🏾‍🚒 👩🏾‍✈️ 👨🏾‍✈️ 👩🏾‍🚀 👨🏾‍🚀 👩🏾‍⚖️ 👨🏾‍⚖️ 🤶🏾 🎅🏾 👸🏾 🤴🏾 👰🏾 🤵🏾 👼🏾 🤰🏾 🙇🏾‍♀️ 🙇🏾 💁🏾 💁🏾‍♂️ 🙅🏾 🙅🏾‍♂️ 🙆🏾 🙆🏾‍♂️ 🙋🏾 🙋🏾‍♂️ 🤦🏾‍♀️ 🤦🏾‍♂️ 🤷🏾‍♀️ 🤷🏾‍♂️ 🙎🏾 🙎🏾‍♂️ 🙍🏾 🙍🏾‍♂️ 💇🏾 💇🏾‍♂️ 💆🏾 💆🏾‍♂️ 🕴🏾 💃🏾 🕺🏾 🚶🏾‍♀️ 🚶🏾 🏃🏾‍♀️ 🏃🏾 🤲🏾 👐🏾 🙌🏾 👏🏾 🙏🏾 👍🏾 👎🏾 👊🏾 ✊🏾 🤛🏾 🤜🏾 🤞🏾 ✌🏾 🤟🏾 🤘🏾 👌🏾 👈🏾 👉🏾 👆🏾 👇🏾 ☝🏾 ✋🏾 🤚🏾 🖐🏾 🖖🏾 👋🏾 🤙🏾 💪🏾 🖕🏾 ✍🏾 🤳🏾 💅🏾 👂🏾 👃🏾👶🏿 👦🏿 👧🏿 👨🏿 👩🏿 👱🏿‍♀️ 👱🏿 👴🏿 👵🏿 👲🏿 👳🏿‍♀️ 👳🏿 👮🏿‍♀️ 👮🏿 👷🏿‍♀️ 👷🏿 💂🏿‍♀️ 💂🏿 🕵🏿‍♀️ 🕵🏿 👩🏿‍⚕️ 👨🏿‍⚕️ 👩🏿‍🌾 👨🏿‍🌾 👩🏿‍🍳 👨🏿‍🍳 👩🏿‍🎓 👨🏿‍🎓 👩🏿‍🎤 👨🏿‍🎤 👩🏿‍🏫 👨🏿‍🏫 👩🏿‍🏭 👨🏿‍🏭 👩🏿‍💻 👨🏿‍💻 👩🏿‍💼 👨🏿‍💼 👩🏿‍🔧 👨🏿‍🔧 👩🏿‍🔬 👨🏿‍🔬 👩🏿‍🎨 👨🏿‍🎨 👩🏿‍🚒 👨🏿‍🚒 👩🏿‍✈️ 👨🏿‍✈️ 👩🏿‍🚀 👨🏿‍🚀 👩🏿‍⚖️ 👨🏿‍⚖️ 🤶🏿 🎅🏿 👸🏿 🤴🏿 👰🏿 🤵🏿 👼🏿 🤰🏿 🙇🏿‍♀️ 🙇🏿 💁🏿 💁🏿‍♂️ 🙅🏿 🙅🏿‍♂️ 🙆🏿 🙆🏿‍♂️ 🙋🏿 🙋🏿‍♂️ 🤦🏿‍♀️ 🤦🏿‍♂️ 🤷🏿‍♀️ 🤷🏿‍♂️ 🙎🏿 🙎🏿‍♂️ 🙍🏿 🙍🏿‍♂️ 💇🏿 💇🏿‍♂️ 💆🏿 💆🏿‍♂️ 🕴🏿 💃🏿 🕺🏿 🚶🏿‍♀️ 🚶🏿 🏃🏿‍♀️ 🏃🏿 🤲🏿 👐🏿 🙌🏿 👏🏿 🙏🏿 👍🏿 👎🏿 👊🏿 ✊🏿 🤛🏿 🤜🏿 🤞🏿 ✌🏿 🤟🏿 🤘🏿 👌🏿 👈🏿 👉🏿 👆🏿 👇🏿 ☝🏿 ✋🏿 🤚🏿 🖐🏿 🖖🏿 👋🏿 🤙🏿 💪🏿 🖕🏿 ✍🏿 🤳🏿 💅🏿 👂🏿 👃🏿🐶 🐱 🐭 🐹 🐰 🦊 🦝 🐻 🐼 🦘 🦡 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦅 🦉 🦚 🦜 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🕷 🕸 🦂 🦟 🦠 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🦛 🐪 🐫 🦙 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢⚽️ 🏀 🏈 ⚾️ 🥎 🏐 🏉 🎾 🥏 🎱 🏓 🏸 🥅 🏒 🏑 🥍 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🛹 🎿 ⛷ 🏂 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ 🤺 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏾‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🧩 ♟ 🎯 🎳 🎮 🎰🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 🧾 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷 🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏴‍☠️'.split(' ')

      const SYMBOLS = ['*', '+', '<', '>', ...alphabet, ...numbers, ...katakana]
      // const SYMBOLS = [...emojis, '*', '+', '<', '>', ...alphabet, ...numbers, ...katakana]
      let m, control

      p.setup = () => {
        p.frameRate(60)
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.id('mycanvas')
        p.colorMode(p.HSB, 360, 100, 100, 100)
        p.textFont('monospace', FONT_SIZE)
        p.textAlign(p.LEFT, p.TOP)

        m = new Matrix()
        p.resizeCanvas(p.displayWidth, 160)

        // control = new Control()
        m.run()
      }

      p.windowResized = () => {
        FONT_SIZE = isMobile ? 15 : 20
        p.textFont('monospace', FONT_SIZE)

        let width, height
        if (m.isFullscreen) {
          if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
            width = p.displayHeight
            height = p.displayWidth
          } else {
            width = p.displayWidth
            height = p.displayHeight
          }
        } else {
          width = p.windowWidth
          height = 150
        }
        p.resizeCanvas(width, height)

        m = new Matrix({ isFullscreen: m.isFullscreen })
        m.run()
      }

      class Control {
        constructor () {
          this.menuContainer = p.createDiv('')
          this.menuContainer.id('menuContainer')

          this.menu = p.createDiv('')
          this.menu.id('menu')
          this.menu.parent(this.menuContainer)

          this.rain = this.createButton('Rain', Control.RAIN)
          this.screensaver = this.createButton('Words', Control.WORDS)
          this.movie = this.createButton('Movie', Control.MOVIE)
          this.benchmark = this.createButton('Benchmark', Control.BENCHMARK)

          this.menuToggle = this.createCheckbox('Control', false, 'menuToggle', Control.MENU_TOGGLE)
          this.playToggle = this.createCheckbox('Play', m.isAnimating, 'playToggle', Control.PLAY_TOGGLE)
          this.infoToggle = this.createCheckbox('Info', m.db.isEnabled, 'infoToggle', Control.INFO_TOGGLE, 'link')
          this.fullscreenToggle = this.createCheckbox('Full screen', false, 'fullscreenToggle', Control.FULLSCREEN_TOGGLE, 'link')
          this.infoToggle.parent(this.menu)
          this.fullscreenToggle.parent(this.menu)

          this.createLabelUpdater(this.playToggle, () => m.isAnimating ? '❚❚' : '►', 'isAnimating')
          this.createLabelUpdater(this.infoToggle, () => m.db.isEnabled ? 'Hide info' : 'Show info', 'showInfo')
          this.createLabelUpdater(this.fullscreenToggle, () => p.fullscreen() ? 'Exit fullscreen' : 'Enter fullscreen', 'fullscreen')

          this.handleControl(Control.MENU_TOGGLE)
        }

        createLabelUpdater (toggle, label, event) {
          const labelUpdate = (toggle, label) => {
            return () => {
              const checkboxLabel = toggle.elt.querySelector('label')
              checkboxLabel.textContent = label()
            }
          }

          const labeler = labelUpdate(toggle, label)
          document.addEventListener(event, labeler)
          labeler()
        }

        createButton (label, trigger) {
          const btn = p.createButton(label)
          btn.mouseClicked(this.handleControl.bind(this, trigger))
          btn.class('controls')
          btn.parent(this.menu)
          return btn
        }

        createCheckbox (label, defaultVal, id, trigger, className) {
          const checkbox = p.createCheckbox(label, defaultVal)
          checkbox.id(id)
          checkbox.class(`toggle ${className}`)
          checkbox.changed(this.handleControl.bind(this, trigger))
          checkbox.parent(this.menuContainer)
          return checkbox
        }

        handleControl (trigger) {
          if (trigger === Control.RAIN) {
            m = new Matrix()
            m.scenes = [new Rain({ cloud: m.cloud })]
            m.run()
          } else if (trigger === Control.WORDS) {
            m = new Matrix()
            m.scenes = [new Words({ cloud: m.cloud })]
            m.run()
          } else if (trigger === Control.MOVIE) {
            m = new Matrix()
            m.scenes = [new Rain({ cloud: m.cloud, time: 300 }), new Title({ cloud: m.cloud })]
            m.run()
          } else if (trigger === Control.MENU_TOGGLE) {
            if (this.menuToggle.checked()) {
              this.menu.show()
            } else {
              this.menu.hide()
            }
          } else if (trigger === Control.PLAY_TOGGLE) {
            m.isAnimating = !m.isAnimating
          } else if (trigger === Control.BENCHMARK) {
            m.bench.reset()
          } else if (trigger === Control.INFO_TOGGLE) {
            m.db.isEnabled = !m.db.isEnabled
          } else if (trigger === Control.FULLSCREEN_TOGGLE) {
            m.isFullscreen = !m.isFullscreen
          }
        }
      }

      Control.RAIN = 'rain'
      Control.WORDS = 'words'
      Control.MOVIE = 'movie'
      Control.MENU_TOGGLE = 'menu toggle'
      Control.BENCHMARK = 'benchmark'
      Control.INFO_TOGGLE = 'info toggle'
      Control.FULLSCREEN_TOGGLE = 'fullscreen toggle'

      class Symbol {
        constructor ({ x, y, symbol, died }) {
          this.pos = p.createVector(x, y)
          this.color = p.color(360, 100, 100)
          this.life = 100
          this.symbol = symbol || _.sample(SYMBOLS)
          this.died = died || (() => {})
        }

        update (newColor) {
          if (newColor) {
            this.color = newColor
          } else {
            if (this.life <= 0) {
              this.died(this)
              return
            } else if (this.life > 50) {
              this.life -= 0.5
            } else {
              this.life -= 1
            }

            if (this.life % 20 === 0 && _.random(true) > 0.9) {
              this.symbol = _.sample(SYMBOLS)
            }
            this.color = p.color(105, 100, this.life)
          }
        }

        display () {
          p.fill(this.color)
          p.text(this.symbol, this.pos.x, this.pos.y)
        }
      }

      class Raindrop {
        constructor ({ x, y, died, stopped, color, middleLetter }) {
          this.pos = p.createVector(x, y)
          this.symbols = new Map()
          this.addSymbol({ x, y })
          this.died = died || (() => {})
          this.middleLetter = middleLetter
          this.stopped = stopped || (() => {})
          this.color = color
          this.symbolCount = 0
        }

        addSymbol ({ x, y, symbol }) {
          const s = new Symbol({ x, y, symbol, died: this.removeSymbol.bind(this) })
          this.lowestSymbol = s
          this.symbols.set(s, s)
          this.symbolCount += 1
        }

        update () {
          this.pos.add(p.createVector(0, 4))

          const nextSymbolY = this.symbolCount * FONT_SIZE
          const middle = p.height / 2
          const { x, y } = this.pos
          if (this.middleLetter) {
            if (y < middle && y > nextSymbolY) {
              this.addSymbol({ x, y: nextSymbolY })
            } else if (nextSymbolY >= middle && nextSymbolY < middle + FONT_SIZE) {
              this.addSymbol({ x, y: nextSymbolY, symbol: this.middleLetter })
              this.stopped()
            } else if (y > middle) {
              this.pos.y = middle
            }
          } else if (y < p.height + FONT_SIZE && y > nextSymbolY) {
            this.addSymbol({ x, y: nextSymbolY })
          } else if (y > p.height && this.symbols.size === 1) {
            this.died()
          }
        }

        display () {
          this.symbols.forEach((symbol, i) => {
            const lowestSymbol = symbol === this.lowestSymbol
            const lowestSymbolColor = this.color || p.color(0, 0, 100)

            symbol.update(lowestSymbol && lowestSymbolColor)
            symbol.display()
          })
        }

        removeSymbol (key) {
          this.symbols.delete(key)
        }
      }

      class Cloud {
        constructor (color) {
          this.raindrops = new Map()
          this.newRaindropTime = 0
          this.curText = []
          this.textColor = color
          this.curTextOrder = [] // text falling from middle
          this.textOrder = [] // text falling into middle
        }

        static get size () {
          return p.floor(p.width / FONT_SIZE)
        }

        setText (text, time, done) {
          this.text = text
          this.textTime = time
          this.textTimeDone = done || _.noop
          this.textOrder = this.order(text)
          this.getMiddleLetter = _.zipObject(this.textOrder, this.text.split(''))

          let range
          if (this.textOrder.length > this.curTextOrder.length) {
            range = this.getTextCols(this.textOrder.length)
          } else {
            range = this.getTextCols(this.curTextOrder.length)
          }
          const beforeText = _.range(0, range.start)
          const afterText = _.range(range.end, Cloud.size)
          this.outsideTextCols = beforeText.concat(afterText)
        };

        order (text) {
          const range = this.getTextCols(text.length)
          return _.range(range.start, range.start + text.length)
        };

        getTextCols (textLength) {
          if (!textLength) { return }
          const start = p.floor((Cloud.size - textLength) / 2)
          return {
            start: start,
            end: start + textLength
          }
        }

        addRaindrop (col) {
          if (!this.raindrops.get(col)) {
            this.raindrops.set(col, new Raindrop({
              x: FONT_SIZE * col,
              y: 0,
              died: this.removeRaindrop.bind(this, col),
              stopped: this.stoppedRaindrop.bind(this, col),
              color: this.textColor,
              middleLetter: _.get(this, ['getMiddleLetter', col])
            }))
            return true
          }
        }

        textTimer () {
          const curText = this.curText.join('')
          if (this.text && this.text === curText && this.textTime >= 0) {
            if (this.textTime === 0) {
              this.curTextOrder = this.order(this.text)
              this.textTimeDone()
            }
            this.textTime--
          }
        }

        update () {
          this.textTimer()

          if (p.millis() > this.newRaindropTime) {
            if (this.raindrops.size < Cloud.size) {
              const prob = { textOut: 0.4, textIn: 0.7 }
              const rand = _.random(true)

              if (this.curTextOrder.length === 0 && this.textOrder.length > 0) {
                prob.textOut = 0
                prob.textIn = 0.5
              } else if (this.curTextOrder.length === 0 && this.textOrder.length === 0) {
                prob.textOut = 0
                prob.textIn = 0
              }

              if (rand < prob.textOut) {
                if (this.curTextOrder.length > 0) {
                  const index = _.random(this.curTextOrder.length - 1)
                  const col = this.curTextOrder.splice(index, 1)[0]
                  if (!this.textOrder.includes(col)) {
                    this.outsideTextCols.push(col)
                  }

                  this.raindrops.get(col).middleLetter = ''
                  this.curText[col] = null
                }
              } else if (rand < prob.textIn) {
                if (this.textOrder.length > 0) {
                  // add new text only if raindrop doesn't exist
                  const index = _.random(this.textOrder.length - 1)
                  const col = this.textOrder[index]
                  if (this.addRaindrop(col)) {
                    this.textOrder.splice(index, 1)
                  }
                }
              } else {
                let col = this.outsideTextCols
                  ? _.sample(this.outsideTextCols)
                  : _.random(Cloud.size - 1)
                this.addRaindrop(col)
              }
            }
            this.newRaindropTime = p.millis() + _.random(0, 10)
          }
        }

        display () {
          this.raindrops.forEach(raindrop => {
            raindrop.update()
            raindrop.display()
          })
        }

        removeRaindrop (col) {
          this.raindrops.delete(col)
        }

        stoppedRaindrop (col) {
          var middleLetter = this.getMiddleLetter[col]
          this.curText[col] = middleLetter
        }
      }

      class Scene {
        constructor ({ cloud, time }) {
          this.cloud = cloud
          this.time = time
          this.done = false
          this.name = ''
        }

        get isDone () {
          return this.done
        }

        set isDone (val) {
          this.done = val
        }

        run () {
          this.cloud.update()
          this.cloud.display()

          if (Number.isInteger(this.time)) {
            if (this.time > 0) {
              this.time--
            } else {
              this.isDone = true
            }
          }
        }
      }

      class Words extends Scene {
        constructor ({ cloud, time }) {
          super({ cloud, time })
          this.newWord = true
          this.name = 'Words'
          this.firstRun = true
          // this.wordIndex = -1
        }

        static get quotes () {
          return [
            'BitByteBit', 

            // EYEDEA
            'you never fall if you never fight', 

            // MATRIX
            'knock knock', 
            'what is real?', 
            // 'free your mind', 
            'wake up', 
            // 'déjà vu', 

            // ISAAC ASIMOV
            'in life, unlike chess, the game continues after checkmate', 
            'self-education is, I firmly believe, the only kind of education there is', 
            'the only function of a school is to make self-education easier; failing that, it does nothing', 
            'people think of education as something that they can finish', 
            'to succeed, planning alone is insufficient, one must improvise as well',

            // GEORGE ORWELL

            // PHILIP K. DICK
            'mors certa, vita incerta', 
            'do androids dream of electric sheep?', 

            // Iain M. Banks
            'of course I still love you', 

            // HITCHIKERS
            'forty two', 
            'heart of gold', 
          ]
          // return ['BitByteBit', 'it happens faster than you could ever think',  'from always and forever to never again', 'in less than a blink', 'this too shall pass', 'you never fall if you never fight', 'Knock knock', 'Déjà vu', 'What is real?']
        }

        draw () {
          p.background(0, 0, 0)
          let quote
          if (this.newWord) {
            if (this.firstRun) {
              quote = 'Tristan Bemert'
              this.firstRun = false
            } else {
              quote = _.sample(Words.quotes)
              // this.wordIndex = (this.wordIndex < Words.quotes.length - 1 ? this.wordIndex + 1 : 0)
              // quote = Words.quotes[this.wordIndex]
            }
            const maxChars = p.width / FONT_SIZE
            if (quote.length < maxChars) {
              this.cloud.setText(quote, 300, () => {
                this.cloud.text = ''
                this.newWord = true
              })
              this.newWord = false
            }
          }
          this.run()
        }
      }

      class Rain extends Scene {
        constructor (config) {
          super(config)
          this.name = 'Rain'
        }

        draw () {
          p.background(0, 0, 0)
          this.run()
        }
      };

      class Title extends Scene {
        constructor (cloud) {
          super(cloud)
          this.scale = 1
          this.translate = 0
          this.move = 0
          this.name = 'Title'
          this.setupOnce = _.once(this.setup)
        }

        setup () {
          this.cloud.setText('THE MATRIX', 300, () => this.isDone = true)
        }

        draw () {
          this.setupOnce()
          p.background(0, 0, 0)
          p.push()
          p.translate(-this.translate, -this.translate)
          p.scale(this.scale)
          this.run()

          // d.drawRects();

          this.translate = p.lerp(0, 200, this.move) // width - title.length * fontSize
          this.scale = (p.width + 2 * this.translate) / p.width
          p.pop()

          if (this.move <= 1) {
            this.move += 0.0015
          }
        }
      }

      class Benchmark {
        constructor ({ cloud }) {
          this.frames = 1000
          this.sampleRate = 30
          this.stats = this.clearStats()
          this.state = 'IDLE'
          this.cloud = cloud
        }

        clearStats () {
          return {
            fps: { data: [] },
            raindrops: { data: [] },
            symbols: { data: [] }
          }
        }

        reset () {
          this.frames = 1000
          this.stats = this.clearStats()
          this.state = 'IDLE'
        }

        run () {
          const minMax = (val, stat) => {
            const { min, max } = stat

            if (min === undefined || val < min) {
              stat.min = val
            }

            if (max === undefined || val > max) {
              stat.max = val
            }
          }

          const average = (data) => {
            const sum = data.reduce((sum, val) => sum += val)
            return (sum / data.length).toFixed(2)
          }

          this.frames--

          if (this.frames > 0) {
            this.state = 'RUNNING'
            if (this.frames % this.sampleRate !== 0) return

            const fps = parseInt(p.frameRate())
            this.stats.fps.data.push(fps)
            minMax(fps, this.stats.fps)

            const raindropCount = this.cloud.raindrops.size
            this.stats.raindrops.data.push(raindropCount)
            minMax(raindropCount, this.stats.raindrops)

            let symbolCount = 0
            this.cloud.raindrops.forEach(raindrop => symbolCount += raindrop.symbols.size)
            this.stats.symbols.data.push(symbolCount)
            minMax(symbolCount, this.stats.symbols)
          } else if (this.frames === 0) {
            this.state = 'DONE'
            this.stats.fps.avg = average(this.stats.fps.data)
            this.stats.raindrops.avg = average(this.stats.raindrops.data)
            this.stats.symbols.avg = average(this.stats.symbols.data)
          }
        }
      }

      class DebugMatrix {
        constructor ({ isEnabled, matrix }) {
          this.enabled
          this.isEnabled = isEnabled
          this.infoMsg = ''
          this.textMargin = 5
          this.fontSize = 15
          this.font = 'sans-serif'
          this.matrix = matrix
        }

        get isEnabled () {
          return this.enabled
        }

        set isEnabled (val) {
          this.enabled = val
          document.dispatchEvent(new Event('showInfo'))
        }

        drawRects () {
          if (!this.isEnabled) return

          p.push()
          p.rectMode(p.CENTER)
          p.stroke(0, 100, 100)
          p.fill(0, 0, 0, 0)

          for (var i = 0; i < 7; i++) {
            p.rect(p.width / 2, p.height / 2, 50 + i * 50, 50 + i * 50)
          }
          p.pop()
        }

        info () {
          const scene = _.get(this, ['matrix', 'scenes', this.matrix.sceneNum])
          const sceneName = _.get(scene, 'name')
          const raindropCount = this.matrix.cloud.raindrops.size
          let str = `${parseInt(p.frameRate())} fps 
          Frame ${p.frameCount} 
          Scene ${sceneName} 
          Raindrops ${raindropCount}`
          const bench = _.get(this, 'matrix.bench.state')
          if (bench === 'DONE') {
            const { fps, raindrops, symbols } = this.matrix.bench.stats
            str = str.concat(`\nBenchmark FPS - Avg ${fps.avg} Max ${fps.max} Min ${fps.min}
            Raindrops - Avg ${raindrops.avg} Max ${raindrops.max} Min ${raindrops.min}
            Symbols - Avg ${symbols.avg}  Max ${symbols.max} Min ${symbols.min}`)
          } else if (bench === 'RUNNING') {
            str = str.concat(`\nBenchmark stats avail in ${m.bench.frames}`)
          }

          const lines = str.split('\n')
          const lineHeight = this.fontSize + this.textMargin
          p.push()
          p.textFont(this.font, this.fontSize)
          p.translate(0, p.height - lines.length * lineHeight)
          lines.forEach((label, i) => {
            p.text(label.trim(), 0, i * lineHeight)
          })
          p.pop()
        }
      }

      class Matrix {
        constructor ({ isFullscreen } = {}) {
          this.isAnimating = false
          this.isFullscreen = isFullscreen
          this.cloud = new Cloud()
          this.scenes = []
          this.sceneNum = 0
          this.scenes.push(new Words({ cloud: this.cloud }))
          // scenes.push(new Rain({ cloud, time: 300 }));
          // scenes.push(new Title({ cloud }));
          this.bench = new Benchmark({ cloud: this.cloud })
          this.db = new DebugMatrix({ isEnabled: true, matrix: this })
        }

        get isAnimating () {
          return this.animating
        }

        set isAnimating (val) {
          this.animating = val
          this.animating ? p.loop() : p.noLoop()

          const event = new Event('isAnimating')
          document.dispatchEvent(event)
        }

        get isFullscreen () {
          return this.fullscreen
        }

        set isFullscreen (val) {
          this.fullscreen = val
          p.fullscreen(this.fullscreen)
          document.dispatchEvent(new Event('fullscreen'))
        }

        run () {
          this.isAnimating = true
        }
      }

      p.draw = () => {
        const scene = m.scenes[m.sceneNum]
        if (scene) {
          scene.draw()
          if (scene.isDone) {
            m.sceneNum++
          }
        } else {
          p.background(0)
        }

        // if (m.db.isEnabled) {
        //   m.bench.run()
        //   m.db.info()
        // }
      }
    }

    const myp5 = new p5(s)
  }
}
</script>

<style>
#lost-like-tears-in-the-rain {
  position: relative;
  height: 150px;
  background-color: black;
}
#mycanvas {
  position: absolute;
  left: 0px;
  top: 0px;
}

</style>
