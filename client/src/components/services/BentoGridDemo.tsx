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

import _1 from "@/assets/1.jpg";
import _2 from "@/assets/2.png";
import _3 from "@/assets/3.webp";
import _4 from "@/assets/4.png";
import _5 from "@/assets/5.jpg";
import _6 from "@/assets/6.png";
import _7 from "@/assets/7.jpg";
import _8 from "@/assets/8.png";
import _9 from "@/assets/99.jpg";
import _10 from "@/assets/100.jpg";
import _11 from "@/assets/11.webp";

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
  <div className="flex flex-1 w-full h-full min-h-[6rem] opacity-50 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={img} alt="skeleton" className="w-full h-full" />
  </div>
);
const items = [
  {
    title: "Loan Management",
    description:
      "Access flexible loans tailored to your needs with low interest rates and easy repayment options.",
    header: <Skeleton img={_1} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />,
    link: "/loans",
  },
  {
    title: "Curated courses on Finance",
    description:
      "Carefully designed courses for financial literacy, entrepreneurship, and skill development tailored for women.",
    header: <Skeleton img={_2} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />,
    link: "/loans",
  },
  {
    title: "Government Schemes",
    description:
      "Explore and apply for government schemes and grants with ease and transparency.",
    header: <Skeleton img={_4} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-900" />,
    link: "/government",
  },
  {
    title: "Smart Chatbot services",
    description:
      "AI-powered chatbot offering 24/7 assistance on financial advice, investments, loans, and savings.",
    header: <Skeleton img={_3} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />,
    link: "/loans",
  },
  {
    title: "Crowd Funding",
    description:
      "User-friendly platform enabling women to raise funds for projects, emergencies, or community causes.",
    header: <Skeleton img={_5} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />,
    link: "/loans",
  },
  {
    title: "Map for NGOs",
    description:
      "Interactive map connecting women to nearby NGOs offering education, skill training, and financial support.",
    header: <Skeleton img={_6} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />,
    link: "/loans",
  },
  {
    title: "Digital Payments",
    description:
      "Make quick and secure payments using phone numbers without the need for a smartphone.",
    header: <Skeleton img={_7} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-900" />,
    link: "/payments",
  },
  {
    title: "Deposit Management",
    description:
      "Effortlessly deposit and manage funds with transparent processes and real-time updates.",
    header: <Skeleton img={_8} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-900" />,
    link: "/deposit",
  },
  {
    title: "Withdrawal Options",
    description:
      "Access your funds anytime, anywhere with convenient withdrawal options and instant processing.",
    header: <Skeleton img={_9} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-900" />,
    link: "/withdraw",
  },
  {
    title: "Future Investments",
    description:
      "Explore investment opportunities and grow your wealth with expert guidance and personalized strategies.",
    header: <Skeleton img={_10} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-900" />,
    link: "/investments",
  },
  {
    title: "Fund Management",
    description:
      "Efficiently manage community funds with transparency, accountability, and fair distribution practices.",
    header: <Skeleton img={_11} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-900" />,
    link: "/funds",
  },
];
