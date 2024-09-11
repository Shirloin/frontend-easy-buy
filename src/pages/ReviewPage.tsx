import MyReviewSection from "../components/review-page/MyReviewSection";
import WaitingToReviewSection from "../components/review-page/WaitingToReviewSection";
import Tabs from "../components/Tabs";

export default function ReviewPage() {
  const tabList = ["Waiting To Review", "My Review"];

  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-start justify-center px-10 py-4">
        <div className="flex items-center gap-4 font-semibold">
          <p className="text-xl">Review</p>
        </div>
        <Tabs tabList={tabList}>
          <WaitingToReviewSection />
          <MyReviewSection />
        </Tabs>
      </div>
    </>
  );
}
