import { useState } from 'react';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  list: Topic[];
};

export default function TopicCard({ list }: Props) {
  const [activeTopic, setActiveTopic] = useState<number | undefined>();

  const handleToggle = (index: number) => {
    setActiveTopic(activeTopic === index ? undefined : index);
  };

  return (
    <div className="accordion">
      {list.map((topic, index) => (
        <div key={topic.id} className="accordion-item">
          <div className="header" onClick={() => handleToggle(index)}>
            {topic.title}
          </div>
          {activeTopic === index && (
            <div className="content">{topic.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
