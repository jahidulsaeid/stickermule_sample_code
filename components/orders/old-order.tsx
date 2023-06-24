// import { useRouter } from "next/router";
// import Spinner from "../ui/loaders/spinner/spinner";
import Divider from "../ui/divider";
import Container from "../ui/container";
import OrderView from "./order-view";
import NewOrder from "./new-order";

export default function OldOrder() {
  // const { query } = useRouter();
  // const { data, isLoading } = useOrderQuery({
  //   tracking_number: query.tracking_number as string,
  // });

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-full flex items-center justify-center">
  //       <Spinner showText={false} />
  //     </div>
  //   );
  // }

  return (
    <>
      <Divider />
      <Container>
        {/* <OrderView order={data?.order} /> */}
        {/* <Subscription /> */}
        <NewOrder />
      </Container>
    </>
  );
}
