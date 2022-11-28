import Card from "../UI/Card"
import classes from "./NewMeetupForm.module.css"
import { useRef } from "react"

function NewMeetupForm(props){
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title:enteredTitle,
            image:enteredImage,
            adress:enteredAddress,
            description:enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">meetup title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">description</label>
                    <textarea rows="5" required id="description" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm