type CalorieDisplayProps = {
  calories: number;
  text: string;
};

export default function CalorieDisplay({
  calories,
  text,
}: CalorieDisplayProps) {
  return (
    <>
      <p className="text-gray-800 dark:text-white font-bold capitalize rounded-full grid grid-cols-1 gap-3 text-center">
        <span className="font-black text-6xl text-orange-500">{calories}</span>
        {text}
      </p>
    </>
  );
}
