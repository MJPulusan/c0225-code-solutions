import { useState } from 'react';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export default function TopicCard({ topics }: Props) {
  const [activeTopic, setActiveTopic] = useState<number | null>();

  const handleToggle = (index: number) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className="accordion">
      {topics.map((topic, index) => (
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
