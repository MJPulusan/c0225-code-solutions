type Props = {
  captions: string;
};

export function Caption({ captions }: Props) {
  return <h3>{captions}</h3>;
}
