export type EventItem = {
  image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}
export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    image: "/images/event1.png",
    location: "San Francisco, CA",
    date: "2026-10-26",
    time: "09:00 AM",
  },
  {
    title: "React Summit",
    slug: "react-summit",
    image: "/images/event2.png",
    location: "Amsterdam, Netherlands",
    date: "2026-06-12",
    time: "10:00 AM",
  },
  {
    title: "Vercel Ship",
    slug: "vercel-ship",
    image: "/images/event3.png",
    location: "New York, NY",
    date: "2026-05-20",
    time: "09:30 AM",
  },
  {
    title: "Tailwind Connect",
    slug: "tailwind-connect",
    image: "/images/event4.png",
    location: "Miami, FL",
    date: "2026-08-15",
    time: "11:00 AM",
  },
  {
    title: "AI Developers Conference",
    slug: "ai-developers-conference",
    image: "/images/event5.png",
    location: "London, UK",
    date: "2026-11-05",
    time: "08:30 AM",
  },
  {
    title: "Web Summit",
    slug: "web-summit",
    image: "/images/event6.png",
    location: "Lisbon, Portugal",
    date: "2026-11-10",
    time: "10:00 AM",
  },
];
