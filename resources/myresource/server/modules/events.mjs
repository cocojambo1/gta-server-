import * as alt from 'alt'
import chat from 'chat'

console.log( '===> My Resource has successfully loaded.' )

alt.on( 'playerConnect', player => {
	chat.broadcast( `${ player.name } has joined the server!` )
} )