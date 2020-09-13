//thing{last word} thingwords
const { Plugin } = require('powercord/entities')
const unicode = ' ‫'

module.exports = class edited extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'edited',
      description: 'Replaces "edited" with the actual edited text that shows up on edited messages. (Note: you must edit out the zero width character automatically appended to the end of the message for it to actually show anything)',
      usage: '{c} <before edited> edited <after edited>', 
      executor: (args) => ({
        send: true, 
        result: args.join(' ').split('edited').reverse().map(str => {
            return unicode + str }).join('') + '​'
      })
    })
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('edited')
  }
}