import * as alt from 'alt'
import chat from 'chat'

chat.registerCmd( 'pos', ( player, args ) => {
	return chat.send( player, `X: ${ player.pos.x } Y: ${ player.pos.y } Z: ${ player.pos.z }` )
} )