import Checkbox from './Checkbox';

interface Quest {
  id: string;
  label: string;
  completed: boolean;
}

const dummyQuests: Quest[] = [
  { id: 'writeDiary', label: '일기 쓰기', completed: true },
  { id: 'playWithPet', label: '펫과 놀기', completed: false },
  { id: 'giveSnack', label: '간식 주기', completed: true },
  { id: 'visitFriendHouse', label: '친구 집 놀러가기', completed: false },
];

export default function QuestList() {
  return (
    <div className="flex flex-col gap-2">
      {dummyQuests.map((quest) => (
        <Checkbox
          key={quest.id}
          label={quest.label}
          checked={quest.completed}
        />
      ))}
    </div>
  );
}
