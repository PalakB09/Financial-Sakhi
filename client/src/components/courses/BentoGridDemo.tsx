import { BentoGrid, BentoGridItem } from "@/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import _8 from "@/assets/3.jpg";
import _9 from "@/assets/9.jpg";
import _10 from "@/assets/10.jpg";
import _11 from "@/assets/11.jpg";
import _12 from "@/assets/12.jpg";
import _13 from "@/assets/13.jpg";
import _14 from "@/assets/14.jpg";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          itemNumber={i}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          link={item.link || "/"}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
interface SkeletonProps {
  img: any;
}
const Skeleton:React.FunctionComponent<SkeletonProps> = ({img}) => (
  <div className="flex flex-1 w-full h-full min-h-[8.4rem] opacity-100 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={img} alt="skeleton" className="w-full h-full" />
  </div>
);
const items = [
  {
    title: "Smart Money Basics: Managing Your Finances",
    description:
      "Learn to budget, save, and manage daily expenses effectively.",
    header: <Skeleton img={_8} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "/smart-money-basics",
  },
  {
    title: "Investing Made Simple: Building a Secure Future",
    description:
      "Discover easy and practical ways to invest money for a better tomorrow.",
    header: <Skeleton img={_9} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/investing-fundamentals",
  },
  {
    title: "Banking 101: Opening Doors to Financial Freedom",
    description:
      "Understand how to open and use bank accounts for personal and business needs.",
    header: <Skeleton img={_10} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/payments",
  },
  {
    title: "Digital Payments and Online Banking Made Easy",
    description:
      "Master the use of UPI apps, digital wallets, and secure online transactions.",
    header: <Skeleton img={_11} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "/deposit",
  },
  {
    title: "Government Schemes Every Woman Should Know",
    description:
      "Get informed about financial support programs and subsidies designed for women.",
    header: <Skeleton img={_12} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "/withdraw",
  },
  {
    title: "Microfinance and Small Business Loans for Women",
    description:
      "Learn how to access microloans and manage funds to grow a small business.",
    header: <Skeleton img={_13} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "/investments",
  },
  {
    title: "Starting Your Own Business: Financial Planning for Success",
    description:
      "Gain insights into financial planning for launching and sustaining a small business.",
    header: <Skeleton img={_14} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "/funds",
  },
];
