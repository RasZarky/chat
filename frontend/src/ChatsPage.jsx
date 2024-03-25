import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic('e7b78aff-742e-4772-8776-589b8882f67b',
     props.user.username, 
     props.user.secret)

    return <div style={{ height: '100vh' }}>
            <MultiChatSocket {...ChatProps}/>
            <MultiChatWindow {...ChatProps} style={{ height: '100%' }}/>
         </div>
}

export default ChatsPage