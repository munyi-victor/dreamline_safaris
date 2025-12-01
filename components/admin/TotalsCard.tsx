interface TotalsProps {
  title: string;
  value: number;
  type?: string;
}

const TotalsCard = ({ title, value, type }: TotalsProps) => {
  return (
    <div className="bg-slate-500 shadow-lg rounded-lg p-5 flex flex-col justify-center items-center w-58">
      <p className="">{title}</p>
      <h1 className="text-3xl font-semibold">
        {type === "currency" && "$"}
        {value}+
      </h1>
    </div>
  );
};

export default TotalsCard;
