interface TitleProps {
  title: string;
  subTitle: string;
  align?: "left" | "center";
}

const Title = ({ title, subTitle, align = "center" }: TitleProps) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center ${
        align === "left" ? "items-start" : "items-center"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
      <p className="text-sm text-gray-500">{subTitle}</p>
    </div>
  );
};

export default Title;
