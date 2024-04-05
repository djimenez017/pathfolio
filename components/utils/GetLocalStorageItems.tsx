import Card from "../UI/Card";

interface LinkData {
  name: string;
  url: string;
}

interface Props {
  data: LinkData[];
}

export default function GetLocalStorageItems({ data }: Props) {
  const linkCards = data.map((linkCard, index) => (
    <Card key={index} title={linkCard.name} url={linkCard.url}></Card>
  ));

  return <div>{linkCards}</div>;
}
