import ItemList from './item/item-list';

export type Props = {
  isLoading: boolean;
};

export default function RightSideView({ isLoading }: Props) {
  return <ItemList className="border border-gray-300 rounded-md" isSubmit={isLoading} />;
}
