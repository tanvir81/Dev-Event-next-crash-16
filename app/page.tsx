import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

// const events = [
//   {
//     image: "/images/event1.png",
//     title: "Hacktoberfest 2023",
//     slug: "hacktoberfest-2023",
//     location: "Online",
//     date: "October 1-31, 2023",
//     time: "Time-1",
//   },
// ];

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br />
        Event You Can not Miss!
      </h1>
      <p className="text-center mt-5">
        Hackathon, MeetUps, and Conferences - All in One Place!
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
