import Image from 'next/image';
import Salad1 from '../../assets/salad1.png';
import Salad2 from '../../assets/salad2.png';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left- right-0 w-full justify-start">
        <div className="absolute left-6 -top-[70px] text-left -z-10">
          <Image src={Salad1} width={109} height={189} alt="salad1" />
        </div>

        <div className="absolute -top-[100px] right-6 -z-10">
          <Image src={Salad2} width={107} height={195} alt="salad2" />
        </div>
      </div>
      <div className="text-center ">
        <SectionHeaders subHeader="Check Out" mainHeader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
