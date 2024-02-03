import Image from 'next/image';
import Pizza from '../../assets/pizza.png';
const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="text-center ">
        <Image
          className="max-h-auto max-h-24 max-w-24 mx-auto block"
          src={Pizza}
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold my-2 text-xl text-black">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt a.
      </p>
      <button className="bg-primary text-white px-4 py-2 rounded-full">
        Add to cart €12
      </button>
    </div>
  );
};

export default MenuItem;
