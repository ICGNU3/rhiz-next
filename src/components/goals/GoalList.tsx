import { Goal } from '../../lib/types';
import { GoalCard } from './GoalCard';

interface GoalListProps {
  goals: Goal[];
  loading?: boolean;
  onSelect?: (goal: Goal) => void;
}

export function GoalList({ goals, loading, onSelect }: GoalListProps) {
  if (loading) return <div className="text-center py-8">Loading goals...</div>;
  if (!goals.length) return <div className="text-center py-8 text-rhiz-gray-500">No goals found.</div>;
  return (
    <div className="grid gap-4">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onClick={() => onSelect?.(goal)} />
      ))}
    </div>
  );
} 