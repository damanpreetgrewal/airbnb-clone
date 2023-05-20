'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  subtitle = 'Try adjusting your search or filter to find what you are looking for',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className='
        flex
        flex-col
        items-center
        justify-center
        gap-2
        h-[60vh]
        '
    >
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all Filters'
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};
export default EmptyState;
