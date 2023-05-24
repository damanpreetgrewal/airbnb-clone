'use client';

import { SafeUser } from '@/app/types';
import { IconType } from 'react-icons';

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
  category: {
    ion: IconType;
  };
}

const ListingInfo = () => {
  return <div>ListingInfo</div>;
};
export default ListingInfo;
