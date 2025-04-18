import {React} from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const VideeoRoom = () => {
      const {roomId} = useParams();
      const myMeeting = async (element) => {   
         
      const appID = 808910663 ;
      const serverSecret = "c3708c01bddf4caa01240fb101c15dd1";    
      const KitToken  = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId,Date.now().toString(),"divya goyal")
      
       // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(KitToken);
       // start the call
     zp.joinRoom({
     container: element,
     sharedLinks: [
    {
      name: 'Personal link',
      url: `https://localhost:5173/room/${roomId}`,
    },
  ],
  scenario: {
   mode: ZegoUIKitPrebuilt.OneONoneCall,
  },
});


     }
  return (
    <div>
     <div ref={myMeeting}/>
    </div>
  )
}

export default VideeoRoom
