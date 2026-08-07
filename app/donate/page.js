import DonateHero from "@/components/sections/donate/donateHero";
import PhysicalGoodsModule from "@/components/sections/donate/physicalGoods";
import QRModule from "@/components/sections/donate/QR";
import TaxCallout from "@/components/sections/donate/tax";

export default function Donate() {
  return (
    <>
      <DonateHero />
      <QRModule />
      <PhysicalGoodsModule />
      <TaxCallout />
    </>
  );
}