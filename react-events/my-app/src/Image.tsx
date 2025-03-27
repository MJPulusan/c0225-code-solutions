type Props = {
  srcs: string;
  alt: string;
};

export function Image({ srcs, alt }: Props) {
  return <img src={srcs} alt={alt} />;
}
