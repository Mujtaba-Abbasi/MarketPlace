/** @format */
import { Hero, Breadcrumbs } from "@/components/Common";
import { WalletBar, EthRates } from "@/components/Web3";
import CourseCard from "@/components/Course/List";
import OrderCard from "@/components/Order";
import { BaseLayout } from "@/components/Layout";
export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <CourseCard />
    </BaseLayout>
  );
}
