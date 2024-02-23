import { useRef } from "react";

const CouponInput = ({ text, setMessage }) => {
  const couponInput = useRef(null);
  let message = "";

  const whenClick = (e) => {
    e.preventDefault();
    const input = couponInput.current.value;
    console.log(input.length);

    if (input.length <= 0) {
      message = "Coupon Input is empty string";
    } else {
      message = "Incorrect coupon code";
    }

    setMessage({ flag: true, message });
  };
  return (
    <div className="flex items-center">
      <input
        ref={couponInput}
        type="text"
        placeholder="Coupon code"
        className="border-2 px-2 py-1 me-2"
      />
      <button
        className="uppercase bg-global-color-1 hover:bg-global-color-0 px-5 py-1 rounded-md text-white transition-all"
        onClick={whenClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CouponInput;
