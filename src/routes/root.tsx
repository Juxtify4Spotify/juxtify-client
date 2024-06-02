import Card from "../components/Card";

function Root() {
  const primaryCardColor = "#F6C8C9";
  const spotifyCards = [
    {
      id: 1,
      title: "1989",
      tracksCount: 13,
      description:
        "Taylor Swift's fifth studio album, featuring hits like 'Shake It Off' and 'Blank Space'.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      id: 2,
      title: "Scorpion",
      tracksCount: 25,
      description:
        "Drake's fifth studio album, a double album with one side dedicated to rap and the other to R&B.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      id: 3,
      title: "Divide",
      tracksCount: 16,
      description:
        "Ed Sheeran's third studio album, featuring hits like 'Shape of You' and 'Castle on the Hill'.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      id: 4,
      title: "Future Nostalgia",
      tracksCount: 11,
      description:
        "Dua Lipa's second studio album, a pop record with influences of disco and funk.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      id: 5,
      title: "When We All Fall Asleep, Where Do We Go?",
      tracksCount: 14,
      description:
        "Billie Eilish's debut studio album, featuring 'bad guy' and 'bury a friend'.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
  ];

  return (
    <div className="px-8">
      <h1 className="py-10 text-6xl dark:text-fg-primary-dark text-fg-primary">
        Juxtify
      </h1>
      <div className="pt-20 gap-[15px] flex flex-col">
        <h2 className="text-fg-primary font-semibold font-satoshi tracking-[0.03rem] sm:text-xl dark:text-fg-primary-dark">
          Made For You
        </h2>
        <div className="flex gap-[11px] overflow-x-scroll">
          {spotifyCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;
