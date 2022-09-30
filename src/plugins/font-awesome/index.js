import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const iconsRegister = [
	faArrowLeft
]

export const registerFontAwesome = () => {
	iconsRegister.forEach(icon => library.add(icon))
}