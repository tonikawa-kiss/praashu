
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
        void (await reply(`ð§ââï¸BOT RULES

ð Do not call bot, if you do then you'll get automatically blocked by bot.
    
ð Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end.
    
ð Do not abuse/disrespect bot and its owner.
    
ð _If you see any bug/error in bot then report it to owner with the command /owner message to owner
    
ð If you want this bot in your group then contact owner by typing /owner or /creator.
    
ð Enjoy the bot and have fun *${sender.username}*`))
}
