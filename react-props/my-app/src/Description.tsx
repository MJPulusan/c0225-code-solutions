type DescriptionProps = {
  text: string;
};

export function Description({ text }: DescriptionProps) {
  return <p>{text}</p>;
}
