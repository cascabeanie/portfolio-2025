type StylistProps = {
  size: number;
  className?: string;
};

export default function Stylist({ size, className }: StylistProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216.2 290.8"
      aria-label="StylistS"
      height={size}
      width={size}
      /* className="logo--narrow" */
      className={className}
    >
      <path
        d="M8.4 208.2c.1 33.6 28.5 68.8 90.8 68.9 67.9-.1 99.1-43 99.2-82.5.1-37.4-29.7-63-54.1-84.9-23.6-21-36.6-33.5-36.6-57.5 0-8.6 2.6-16.6 8.2-22.4s14-9.4 25-9.3c11.8 0 21.9 3.5 31.4 12.4 9.4 8.7 18.4 22.4 29 43.1l4-.7-4.2-61.8h-4.6l-10.3 15.6-1.8-1.6c-10.5-9.1-20.9-16.5-42.5-16.6-33.6.1-57.1 22.5-57.2 53 0 32.1 22.9 51.3 44.8 72 27.5 25.8 41.1 40.3 41 70.2 0 16.2-6 31.2-17.2 42.1-11.2 11-27.5 17.8-47.6 17.8-24.7 0-43.1-6.8-55.2-18.5-12.3-11.6-18.1-27.8-18-45.9 0-13.2 3.6-24.1 9.9-31.8 6.2-7.7 15.1-12 25.2-12 6.4 0 9.8.4 16 2.3l1.4.4v3.9l-1.8.2c-11.2 1.5-14.7 8.6-14.9 15.1 0 8 7.1 14.4 14.9 14.4 8.5 0 16.5-7 16.5-16.6 0-15.7-13.6-26-33.8-26.1-32 .1-57.5 22.1-57.5 56.8z"
        fill="black"
        stroke="black"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
}
