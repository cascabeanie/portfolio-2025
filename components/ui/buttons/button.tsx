type ButtonProps = {
  children: React.ReactNode;
  buttonVariant: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonWidth?: string;
  disabledStatus?: boolean;
};

export default function Button({
  children,
  buttonVariant,
  buttonType,
  buttonWidth,
  disabledStatus,
}: ButtonProps) {
  let bgColor: string | undefined;
  let textColor: string | undefined;
  let hoverBgColor: string | undefined;

  if (buttonVariant === "primary") {
    bgColor = "bg-gray-200";
    textColor = "text-black";
    hoverBgColor = "hover:bg-white";
  } else if (buttonVariant === "secondary") {
    bgColor = "bg-transparent";
    textColor = "text-gray-200";
    hoverBgColor = "hover:bg-gray-800";
  }

  return (
    <>
      <button
        type={buttonType}
        className={`inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gray-200 ${bgColor} px-8 py-2 text-sm font-medium ${textColor} transition-all duration-300 ${hoverBgColor} ${buttonWidth} cursor-pointer hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]`}
        disabled={disabledStatus}
      >
        {children}
      </button>
    </>
  );
}
