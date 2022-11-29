import classes from "./MeetupList.module.css" 
import MeetupItem from "./MeetupItem";

function MeetupList(props){
    console.log(props.meetups[0])

    return( 
    <ul className={classes.list}>
        {props.meetups.map((meetup) => 
        (<MeetupItem 
        key={meetup.id} 
        id={meetup.id} 
        title={meetup.title} 
        image={meetup.image} 
        address={meetup.address} 
        description={meetup.description} 
        />)
        )}
    </ul>
    )
}
export default MeetupList;