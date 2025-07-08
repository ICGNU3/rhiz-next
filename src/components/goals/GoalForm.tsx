import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Goal, CreateGoalData } from '../../lib/types';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional().or(z.literal('')),
  category: z.string().min(1, 'Category is required'),
  progress: z.number().min(0).max(100).default(0),
});

type FormData = z.infer<typeof schema>;

interface GoalFormProps {
  initialValues?: Partial<CreateGoalData>;
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export function GoalForm({ initialValues = {}, onSubmit, loading }: GoalFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: initialValues.title || '',
      description: initialValues.description || '',
      category: initialValues.category || '',
      progress: initialValues.progress || 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Title" {...register('title')} error={errors.title?.message} />
      <Input label="Description" {...register('description')} error={errors.description?.message} />
      <Input label="Category" {...register('category')} error={errors.category?.message} />
      <Input label="Progress" type="number" min={0} max={100} {...register('progress', { valueAsNumber: true })} error={errors.progress?.message} />
      <Button type="submit" loading={loading} className="w-full">Save Goal</Button>
    </form>
  );
} 