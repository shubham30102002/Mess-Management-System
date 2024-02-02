import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="bg-yellow-300">Payment</div>

      {/* payment summary */}
      <div>
        <div>
          <div>Category</div>
          <div>Selected Plan</div>
          <div>Total Payment = </div>
        </div>

        {/* QR  */}
        <div></div>
      </div>
    </div>
  );
};

export default Payment;