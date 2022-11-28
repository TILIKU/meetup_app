import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom"

function NewMeetupsPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            "https://meetup-app-react-3cd86-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST", 
                body:JSON.stringify(meetupData),
                headers:{
                    "Content-Type":"application/ json"
                }
            }
        ).then(() => {
            navigate('/')
        });
    
    }

    return <section>
        <h1>add new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupsPage;