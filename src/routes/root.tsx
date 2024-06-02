import Card from "../components/Card";

function Root() {
  const users = ["kanskje"]
  const user = users[Math.floor(Math.random() * users.length)]
  type CardVariation = {
    description: string
    imageUrl: string
  }
  type VariableCard = {
    title: string
    tracksCount: number
    primaryColor: string
    variations: {
      [key: string]: CardVariation[]
    }
  }
  const spotifyCards: VariableCard[] = [
    {
      title: "Daily Mix 1",
      tracksCount: 50,
      primaryColor: "#5DC6F6",
      variations: {
        'kanskje': [
          {
            description: "はるまきごはん, ぬゆり, VocaloKAT and more",
            imageUrl: "/src/assets/artworks/daily1-kanskje-01.png"
          },
          {
            description: "原口沙輔, 柊マグネタイト, 柊キライ and more",
            imageUrl: "/src/assets/artworks/daily1-kanskje-02.png"
          },
          {
            description: "ハチ, Neru, Giga and more",
            imageUrl: "/src/assets/artworks/daily1-kanskje-03.png"
          },
          {
            description: "てにをは, バルーン, 和田たけあき, and more",
            imageUrl: "/src/assets/artworks/daily1-kanskje-04.png"
          },
          {
            description: "sasakure.UK, Toa, 40mP and more",
            imageUrl: "/src/assets/artworks/daily1-kanskje-05.png"
          }
        ]
      }
    },
    {
      title: "Discover Weekly",
      tracksCount: 30,
      primaryColor: "#F090B8",
      variations: {
        'kanskje': [
          {
            description: "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
            imageUrl: "/src/assets/artworks/discover-weekly-kanskje.png"
          }
        ]
      }
    }
  ]



  return (
    <div className="px-8">
      <h1 className="text-6xl py-10 dark:text-fg-primary-dark text-fg-primary">
        Juxtify
      </h1>
      <div className="pt-20 gap-[15px] flex flex-col">
        <h2 className="text-fg-primary font-semibold font-satoshi tracking-[0.03rem] sm:text-xl dark:text-fg-primary-dark">
          Made For You
        </h2>
        <div className="flex gap-[11px] overflow-x-scroll">
        {spotifyCards.map((card, index) => {
            const variationsSelection = card.variations[user];
            const randomVariation = variationsSelection[Math.floor(Math.random() * variationsSelection.length)];
            return <Card key={index} {...card} {...randomVariation} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Root;
