type Props = {
  descriptions: string;
};

export function Description({ descriptions }: Props) {
  return <p>{descriptions}</p>;
}
