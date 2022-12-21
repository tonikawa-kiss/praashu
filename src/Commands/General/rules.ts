
import { BaseCommand, Command, Message } from '../../Structures'

@Command('rules', {
    description: 'Says hello to the bot',
    category: 'general',
    usage: 'rules',
    aliases: ['hello'],
    exp: 25,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async ({ sender, reply }: Message): Promise<void> =>
        void (await reply(`🧛‍♀️BOT RULES

🏆 Do not call bot, if you do then you'll get automatically blocked by bot.
    
🏆 Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end.
    
🏆 Do not abuse/disrespect bot and its owner.
    
🏆 _If you see any bug/error in bot then report it to owner with the command /owner message to owner
    
🏆 If you want this bot in your group then contact owner by typing /owner or /creator.
    
🏆 Enjoy the bot and have fun *${sender.username}*`))
}
