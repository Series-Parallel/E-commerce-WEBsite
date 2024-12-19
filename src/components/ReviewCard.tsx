import Stars from "../assets/StarRating.png";

type ReviewCardProps = {
  name: string;
  review: string;
};

export default function ReviewCard({ name, review }: ReviewCardProps) {
  return (
    <div className="flex flex-col p-[20px] border border-gray rounded-[20px] bg-white h-[186px] md:h-[200px] w-[358px] md:w-[400px] space-y-3 justify-between">
      <div>
        <img src={Stars} />
      </div>
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-600 mt-2">{review}</p>
    </div>
  );
}
