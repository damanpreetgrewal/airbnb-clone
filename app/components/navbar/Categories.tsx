'use client';

import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBoatFishing,
  GiIsland,
  GiWindmill,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { IoDiamond } from 'react-icons/io5';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This Property is close to the beach!',
  },
  {
    label: 'WindMills',
    icon: GiWindmill,
    description: 'This Property has windmills nearby!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This Property is modern!',
  },
  {
    label: 'CountrySide',
    icon: TbMountain,
    description: 'This Property is in the country side!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This Property has a pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This Property is on an Island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This Property is close to a Lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This Property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This Property is in a Castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This Property has camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This Property has skiing activities!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This Property is in a cave!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This Property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This Property is in the Barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This Property is Luxurious!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isMainPage = pathName === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};
export default Categories;
