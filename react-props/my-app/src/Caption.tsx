type CaptionProps = {
  text: string;
};

export function Caption({ text }: CaptionProps) {
  return <h3>{text}</h3>;
}
