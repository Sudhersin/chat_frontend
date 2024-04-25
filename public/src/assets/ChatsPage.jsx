import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage =(props) => {
    // const chatProps = useMultiChatLogic(
    //     '0ca55d5d-c412-40eb-881b-2b98c5f84025',
    //     props.user.username,
    //     props.user.secret
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
               projectId='0ca55d5d-c412-40eb-881b-2b98c5f84025'
               username={props.user.username}
               secret={props.user.secret}
               style={{height:'100%'}}
               />
        </div>
    )
}

export default ChatsPage;