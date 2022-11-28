import Card from "../UI/Card"
import classes from "./NewMeetupForm.module.css"

function NewMeetupForm(){
    function submitHandler(event){
        event.preventDefault();

        
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">meetup title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">address</label>
                    <input type="text" required id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">description</label>
                    <textarea rows="5" required id="description" />
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm