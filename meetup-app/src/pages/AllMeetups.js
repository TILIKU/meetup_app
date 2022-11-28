import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup bigmanting',
      image:
        'https://pbs.twimg.com/media/EHhueLxXYAALdNZ.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/71/Racingmiku2016.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first more like worst lmfao, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage(){
    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA}/>
        
    </section>
}

export default AllMeetupsPage;