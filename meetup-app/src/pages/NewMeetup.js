import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupsPage(){
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
        );
    
    }

    return <section>
        <h1>add new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupsPage;