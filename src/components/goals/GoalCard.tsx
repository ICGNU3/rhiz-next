import { Card } from '../ui/Card';
import { Goal } from '../../lib/types';

interface GoalCardProps {
  goal: Goal;
  onClick?: () => void;
}

export function GoalCard({ goal, onClick }: GoalCardProps) {
  return (
    <Card className="flex flex-col gap-2 cursor-pointer hover:shadow-lg transition" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="font-mont-semibold text-lg text-rhiz-teal">{goal.title}</div>
        <span className="text-xs px-2 py-1 rounded bg-rhiz-gold text-rhiz-dark font-mont-medium">{goal.status}</span>
      </div>
      <div className="text-sm text-rhiz-gray-600">{goal.description}</div>
      <div className="text-xs text-rhiz-purple">Category: {goal.category}</div>
      <div className="w-full bg-rhiz-gray-200 rounded-full h-2 mt-2">
        <div className="bg-rhiz-teal h-2 rounded-full" style={{ width: `${goal.progress}%` }} />
      </div>
      <div className="text-xs text-rhiz-gray-500 mt-1">Progress: {goal.progress}%</div>
    </Card>
  );
} 