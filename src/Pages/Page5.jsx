import React from "react";
import PageContainer from "../components/PageContainer";
import thank from "../../assets/images/icon-thank-you.svg";

const Page5 = () => {
  return (
    <PageContainer>
      <div className="py-12 md:max-w-[500px] flex-grow-0">
        <div className="w-16 mx-auto pb-8">
          <img src={thank} alt="Thank You" className="w-full" />
        </div>
        <h1 className="header-text block text-center">Thank you!</h1>
        <p className="block text-center text-[18px] text-coolGray leading-snug md:text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </PageContainer>
  );
};

export default Page5;
