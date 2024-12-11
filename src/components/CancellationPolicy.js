import React from "react";

const CancellationPolicy = () => {
  return (
    <div className=" border border-gray-400 mx-4 my-10 p-4">
      <ol className="text-lg font-semibold">Cancellation Policy</ol>
      <li>
        If the cancellation is done within 48 hours prior to the Arrival date,
        100% shall be refunded. Guest Should be notify to resort Via E-Mail.{" "}
      </li>
      <li>
        If the cancellation is done within 24 hours prior to the Arrival date
        50% of the total amount shall be deducted. Guest Should be notify to
        resort Via E-Mail
      </li>
      <li>
        If the cancellation is done less than 24hours prior to the Arrival date,
        the advance amount shall not be refunded.
      </li>
      <li>Cancellation charges will be deducted from the total amount.</li>
      <li>
        No refund is allowed for not utilizing or not cancelling the booking. In
        case of Postponment of event the Above points will apply.
      </li>
      <li>
        In case of postponed there shall be no refund. Refunds for canceled
        booking will be automatically credited to the guest account within 4
        working days from the Arrival date of cancelation.
      </li>
      <li>
        Postponement is done subject to the availability and can be processed
        only once.
      </li>
      <li>Preponement/postponement please contact our customer care</li>
    </div>
  );
};

export default CancellationPolicy;
